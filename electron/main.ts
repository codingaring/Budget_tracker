import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { app, BrowserWindow, ipcMain } from 'electron';

const __dirname = dirname(fileURLToPath(import.meta.url));

const APP_ROOT = join(__dirname, '..');

export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
export const MAIN_DIST = join(APP_ROOT, 'dist-electron');
export const RENDERER_DIST = join(APP_ROOT, 'dist');

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? join(APP_ROOT, 'public') : RENDERER_DIST;

// electron window
let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 832,
    frame: false,
    autoHideMenuBar: true,
    icon: join(APP_ROOT, 'coin.png'),
    webPreferences: {
      preload: join(__dirname, 'preload.mjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // 창이 닫힐 때 win를 null로 설정
  win.on('closed', () => {
    win = null;
  });

  // 이후 GeneralModule로 분리 예정
  const windowActions = {
    minimize: () => win?.minimize(),
    maximize: () => {
      if (win?.isMaximized()) {
        win.unmaximize();
      } else {
        win?.maximize();
      }
    },
    close: () => win?.close(),
    devtools: () => win?.webContents.toggleDevTools(),
  };

  type WindowActionType = keyof typeof windowActions;

  // 단일 IPC 채널에서 액션을 받아서 처리
  ipcMain.on('appControl', (_, action: WindowActionType) => {
    if (win && !win.isDestroyed() && windowActions[action]) {
      windowActions[action]();
    }
  });

  /** DEV 환경에서는 Vite 서버로 띄우고, PRODUCT 환경에서는 빌드된 파일 실행 */
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(join(RENDERER_DIST, 'index.html'));
  }
  // 작업할 때는 켜두기
  win.webContents.openDevTools();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    win = null;
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(() => {
  createWindow();
});

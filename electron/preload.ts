import { ipcRenderer, contextBridge } from 'electron';
import { type AppControlArgsType } from './types/appControlType';

const electronContext = {
  appControl: (action: AppControlArgsType) => ipcRenderer.send('appControl', action),
  getCategories: () => ipcRenderer.invoke('get-categories'),
};

contextBridge.exposeInMainWorld('ipcRenderer', electronContext);

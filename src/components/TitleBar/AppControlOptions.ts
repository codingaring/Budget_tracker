import { AppControlArgsType } from '#electron/types/appControlType';
import closeIcon from '#assets/icons/close.svg';
import maximizeIcon from '#assets/icons/double-solid-square.svg';
import minimizeIcon from '#assets/icons/one-line.svg';
import devToolsIcon from '#assets/icons/code.svg';

interface AppControlOptionsType {
  action: AppControlArgsType;
  icon: string;
  description: string;
}

export const AppControlOptions: AppControlOptionsType[] = [
  { action: 'devtools', icon: devToolsIcon, description: '개발 도구 켜기/끄기' },
  { action: 'minimize', icon: minimizeIcon, description: '창 최소화하기' },
  { action: 'maximize', icon: maximizeIcon, description: '창 최대화하기' },
  { action: 'close', icon: closeIcon, description: '창 닫기' },
];

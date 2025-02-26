import { AppControlOptions } from './AppControlOptions';
import * as S from './Titlebar.style';
import { type AppControlArgsType } from '#electron/types/appControlType';

function TitleBar() {
  const handleAppControl = (action: AppControlArgsType) => {
    window.ipcRenderer.appControl(action);
  };
  return (
    <S.TitleBarLayout>
      {AppControlOptions.map(option => (
        <S.AppControlButton
          type="button"
          onClick={() => handleAppControl(option.action)}
          key={option.action}>
          <img src={option.icon} alt={option.description} />
        </S.AppControlButton>
      ))}
    </S.TitleBarLayout>
  );
}

export default TitleBar;

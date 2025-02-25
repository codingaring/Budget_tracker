import { type AppControlArgsType } from '../../electron/types/appControlType';

function Home() {
  const appControl = (action: AppControlArgsType) => {
    console.log('action', action);
    window.ipcRenderer.appControl(action);
  };

  return (
    <div>
      Home
      <div>호</div>
      <button
        type="button"
        onClick={() => {
          appControl('maximize');
        }}>
        최대
      </button>
      <button
        type="button"
        onClick={() => {
          appControl('minimize');
        }}>
        최소
      </button>
      <button
        type="button"
        onClick={() => {
          appControl('close');
        }}>
        닫기
      </button>
    </div>
  );
}

export default Home;

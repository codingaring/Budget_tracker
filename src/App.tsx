import TitleBar from './components/TitleBar/TitleBar';
import Router from './Router';
import Fonts from './styles/fonts';
import ResetStyles from './styles/resetCSS';

function App() {
  return (
    <>
      <ResetStyles />
      <Fonts />
      <TitleBar />
      <Router />
    </>
  );
}

export default App;

import TitleBar from './components/TitleBar/TitleBar';
import Router from './Router';
import Colors from './styles/colors';
import Fonts from './styles/fonts';
import ResetStyles from './styles/resetCSS';

function App() {
  return (
    <>
      <ResetStyles />
      <Fonts />
      <Colors />
      <TitleBar />
      <Router />
    </>
  );
}

export default App;

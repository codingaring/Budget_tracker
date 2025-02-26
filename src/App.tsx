import TitleBar from '#components/TitleBar/TitleBar';
import Router from './Router';
import Colors from '#styles/colors';
import Fonts from '#styles/fonts';
import ResetStyles from '#styles/resetCSS';
import styled from 'styled-components';

function App() {
  return (
    <>
      <ResetStyles />
      <Fonts />
      <Colors />
      <Layout>
        <TitleBar />
        <Router />
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.main`
  height: 100%;
  display: grid;
  grid-template-rows: 32px auto;
`;

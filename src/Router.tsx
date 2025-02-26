import { HashRouter, Route, Routes } from 'react-router-dom';
import * as Page from './pages';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/main" element={<Page.Main />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

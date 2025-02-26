import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, Main } from './pages';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;

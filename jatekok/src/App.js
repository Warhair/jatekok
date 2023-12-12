import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Jatekok from './Pages/Jatekok';
import TicTacToeApp from './Pages/TictacToeApp';
import LightOut from './Pages/LightOutApp';
import NoPage from './Pages/NoPage';
import Layout from './Layout';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="tictactoe" element={<TicTacToeApp />} />
          <Route path="ligton" element={<LightOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

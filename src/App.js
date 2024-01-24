import './App.css';
import { useEffect } from 'react';

import {Link, Route, Routes} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import BoostPage from './components/BoostPage/BoostPage';
import Counter from './components/UI/Counter/Counter';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={onClose} className='closeBtn'><h1>&#10006;</h1></button>

        <Routes>
          <Route index element={<MainPage/>} />
          <Route path={'/boostpage'} element={<BoostPage/>} />
        </Routes>

        <Link to='/boostpage'>Усиления</Link>
      </header>
    </div>
  );
}

export default App;

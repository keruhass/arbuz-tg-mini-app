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

  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route index element={<MainPage/>} />
          <Route path={'/boostpage'} element={<BoostPage/>} />
        </Routes>

        <div className='nav'>
          <Link className='link' to='/boostpage'><h2>Boosts &#128640;</h2></Link>
        </div>

      </header>
    </div>
  );
}

export default App;

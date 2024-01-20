import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

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
        <h1>It's working</h1>
        <button onClick={onClose}>Закрыть</button>
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import getNewId from './Common/id';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import './crud.scss';

function App() {

  const [kolt, setKolt] = useState([]);

  useEffect (() => {
    let data = localStorage.getItem('kolt')
    if (null === data) {
      localStorage.setItem('kolt', JSON.stringify([]));
      setKolt([]);
    } else {
      setKolt(JSON.parse(data));
    }
  }, []);

  const create = (data) => {
    const scooter = {
      id: getNewId(),
      regNumb: data.regNumb,
      isBusy: data.isBusy,
      date: data.date,
      distance: data.distance,
    }
    const newData = [...kolt, scooter];
    localStorage.setItem('kolt', JSON.stringify(newData));
    setKolt(kolt => [...kolt, scooter]);
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Kolt</h1>
      </header>

      <div className='app-container'>
        <div className='content'>
          <Create create={create}></Create>
          <div className='create'>sort</div>
          <Read kolt={kolt}></Read>
          <div className='create'>statistic</div>
        </div>
        <div className='img'></div>
      </div>

      <footer className='app-footer'>
        FB INST TW
      </footer>
    </div>
  );
}

export default App;
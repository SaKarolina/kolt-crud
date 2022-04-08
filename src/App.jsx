// import { useEffect, useState } from 'react';
// import getNewId from './Common/id'
import './App.css';
import './crud.scss';

function App() {

  // const [kolt, setKolt] = useState([]);

  // useEffect (() => {
  //   let data = localStorage.getItem('kolt')
  //   if (null === data) {
  //     localStorage.setItem('kolt', JSON.stringify([]));
  //     setKolt([]);
  //   } else {
  //     setKolt(JSON.parse(data));
  //   }
  // }, []);

  // const create = (data) => {
  //   const scooter = {
  //     id: getNewId(),
  //     registrationCode: data.registrationCode,
  //     isBusy: data.isBusy,
  //     lastUseTime: data.lastUseTime,
  //     totalRideKilometres: data.totalRideKilometres,
  //   }
  //   const newData = [...kolt, scooter];
  //   localStorage.setItem('kolt', JSON.stringify(newData));
  //   setKolt(kolt => [...kolt, scooter]);
  // }

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Kolt</h1>
      </header>

      <div className='app-container'>
        <div className='create'>nnn</div>
        <div className='img'></div>
      </div>

      <footer className='app-footer'></footer>
    </div>
  );
}

export default App;

//  id: getNewId(),
//registrationCode: rand(10000000, 99999999),
//isBusy: 1,
//lastUseTime: '',
//totalRideKilometres: '',
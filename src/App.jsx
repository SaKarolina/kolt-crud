import { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import './crud.scss';
import Edit from './Components/Edit';
import getNewId from './Common/id';

function App() {

  const [kolt, setKolt] = useState([]);
  const [modal, setModal] = useState(0); // 0 nera

  useEffect (() => {
    let data = localStorage.getItem('kolt')
    if (null === data) {
      localStorage.setItem('kolt', JSON.stringify([]));
      setKolt([]);
    } else {
      setKolt(JSON.parse(data));
    }
  }, []);

  const cancel = () => {
    setModal(0);
  }

  const show = id => {
    setModal(id);
  }

  const getScooterById = () => {
    return kolt.filter(sc => sc.id === modal)[0];
  }

  const create = data => {
    const scooter = {
      id: getNewId(),
      regNumb: data.regNumb,
      isBusy: data.isBusy,
      date: data.date,
      distance: data.distance
    }
    const newData = [...kolt, scooter];
    localStorage.setItem('kolt', JSON.stringify(newData));
    setKolt(kolt => [...kolt, scooter]);
  }

  const edit = data => {
    const koltCopy = [...kolt];
    koltCopy.forEach((el, i) => {
      if(el.id === modal) {
        koltCopy[i].isBusy = data.isBusy;
        koltCopy[i].date = data.date;
        koltCopy[i].distance = data.distance;
      }
    });
    localStorage.setItem('kolt', JSON.stringify(koltCopy));

    setKolt(e => {
      e.forEach((el, i) => {
        if(el.id === modal) {
          e[i].isBusy = data.isBusy;
          e[i].date = data.date;
          e[i].distance = data.distance;
        }
      });
      return e;
    });
    cancel();
  }

  const deleteScooter = id => {
    const newData = kolt.filter(sc => sc.id !== id);
        localStorage.setItem('kolt', JSON.stringify(newData));

        setKolt(kolt => kolt.filter(sc => sc.id !== id));
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
          <Read kolt={kolt} deleteScooter={deleteScooter} show={show}></Read>
          <div className='create'>statistic</div>
        </div>
        <div className='img'></div>
      </div>

      <footer className='app-footer'>
        FB INST TW
      </footer>

      {
        modal ? <Edit edit={edit} scooter={getScooterById()} cancel={cancel}></Edit> : null
      }
    </div>
  );
}

export default App;
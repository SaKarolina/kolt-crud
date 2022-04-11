import { useEffect, useState } from 'react';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import './crud.scss';
import Edit from './Components/Edit';
import getNewId from './Common/id';
import Statistics from './Components/Statistics';
import Sort from './Components/Sort';

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

  const handleDateSort = (d) => {
    switch(d.detail) {
      case 1:
        const sortByDate = [...kolt].sort((a, b) => b.date.localeCompare(a.date))
        setKolt(sortByDate);
        break;
      case 2:  //2 suveikia tik su double clicku
        const sortByDate2 = [...kolt].sort((a, b) => a.date.localeCompare(b.date))
        setKolt(sortByDate2);
        break;
      default:
    }
  }

  const handleDistSort = (d) => {
    switch(d.detail) {
      case 1:
        const sortByDist = [...kolt].sort((a, b) => b.distance - a.distance)
        setKolt(sortByDist);
        break;
      case 2:  //2 suveikia tik su double clicku
        const sortByDist2 = [...kolt].sort((a, b) => a.distance - b.distance)
        setKolt(sortByDist2);
        break;
      default:
    }
  }

  // const handleDateSort = () => {
  //   const sortByDate = [...kolt].sort((a, b) => b.date.localeCompare(a.date))
  //   setKolt(sortByDate); //!!!!!!!!!TOGGLE
  // }

  // const handleDistSort = () => {
  //   const sortByDist = [...kolt].sort((a, b) => b.distance -a.distance)
  //   setKolt(sortByDist); //!!!!!!!!!TOGGLE
  // }

  const create = data => {
    const scooter = {
      id: getNewId(),
      regNumb: data.regNumb,
      isBusy: data.isBusy,
      date: data.date,
      newDate: data.newDate, //!!!!!!!!!
      distance: data.distance,
      newDistance: data.newDistance //!!!!!!!!!
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
        koltCopy[i].newDate = data.newDate;  //!!!!!!!!!
        koltCopy[i].newDistance = data.newDistance;  //!!!!!!!!!
      }
    });
    localStorage.setItem('kolt', JSON.stringify(koltCopy));

    setKolt(e => {
      e.forEach((el, i) => {
        if(el.id === modal) {
          e[i].isBusy = data.isBusy;
          e[i].date = data.date;
          e[i].distance = data.distance;
          e[i].newDate = data.newDate;  //!!!!!!!!!
          e[i].newDistance = data.newDistance;  //!!!!!!!!!
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
          <Sort handleDateSort={handleDateSort} handleDistSort={handleDistSort}></Sort>
          <Read kolt={kolt} deleteScooter={deleteScooter} show={show}></Read>
          <Statistics kolt={kolt}></Statistics>
        </div>
        <div className='img'></div>
      </div>

      <footer className='app-footer'>
        
      </footer>

      {
        modal ? <Edit edit={edit} scooter={getScooterById()} cancel={cancel}></Edit> : null
      }
    </div>
  );
}

export default App;
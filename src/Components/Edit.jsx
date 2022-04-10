import { useEffect, useState } from "react";
import rand from '../Common/rand';

function Edit ({edit, scooter, cancel}) {

    const [regNumb, setRegnumb] = useState(rand(10000000, 99999999));
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState(0);
    const [isBusy, setIsBusy] = useState(1); //1 laisvas 0 busy
    const [newDate, setNewDate] = useState(''); //!!!!!!!!!
    const [newDistance, setNewDistance] = useState(0); //!!!!!!!!!

    useEffect(() => {
        setRegnumb(scooter.regNumb);
        setDate(scooter.date);
        setDistance(scooter.distance);
        setIsBusy(scooter.isBusy);
        setNewDate(scooter.newDate); //!!!!!!!!!
        setNewDistance(scooter.newDistance); //!!!!!!!!!
    }, [scooter]);
    
    const handleCancel = () => {
        cancel();
    }

    const handleEdit = () => {
        const data = {
            regNumb: regNumb,
            date: date,
            newDate: newDate,  //!!!!!!!!!
            distance: distance,
            newDistance: newDistance, //!!!!!!!
            isBusy: isBusy
        }
        edit(data);
    }


    const handleInput = (e, d) => {
        switch(d) {
            case 'regNumb':
                setRegnumb (e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'newDate':  
                setNewDate(e.target.value);  //!!!!!!!!!
                break;
            case 'distance':
                setDistance(e.target.value);
                break;
                case 'newDistance':
                setNewDistance(e.target.value); //!!!!!!!!!
                break;
            case 'isBusy':
                setIsBusy(i => i === 0 ? 1 : 0);
                break;
            default:
        }
    }

    return (
        <div className="modal">
            <div className="edit">
                <div className="top">
                    <h3>Edit</h3>
                </div>
                <div className="form">
                    <div className="input">
                        <label htmlFor="isBusy">Is busy: </label>
                        <input className="isBusy" type="checkbox" name="isBusy" id="form-checkbox" checked={!isBusy} onChange={(e) => handleInput(e, 'isBusy')}></input>

                        <label htmlFor="registration">Reg. numb.:</label>
                        <input type="text" name="registration" value={regNumb} onChange={(e) => handleInput(e, 'regNumb')} disabled></input>
                    </div>

                    <div className="input">
                        <label htmlFor="date">Last use date:</label>
                        <input type="date" name="date" value={date} onChange={(e) => handleInput(e, 'date')} disabled></input>

                        <label htmlFor="newDate">New date:</label>
                        <input type="date" name="newDate" value={newDate} onChange={(e) => handleInput(e, 'newDate')}></input>
                    </div>

                    <div className="input">
                        <label htmlFor="distance">Total distance (km):</label>
                        <input type="number" name="distance" value={distance} onChange={(e) => handleInput(e, 'distance')} disabled></input>

                        <label htmlFor="newDistance">New distance (km):</label>
                        <input type="number" name="newDistance" value={newDistance} onChange={(e) => handleInput(e, 'newDistance')}></input>
                    </div>

                    <div className="buttons">
                        <button className="btnScooter" onClick={handleEdit}>Save</button>
                        <button className="btnScooter" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;
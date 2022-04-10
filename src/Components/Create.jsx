import { useState } from "react";
import rand from '../Common/rand';

function Create ({create}) {

    const [regNumb, setRegnumb] = useState(rand(10000000, 99999999));
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
    const [isBusy, setIsBusy] = useState(1); //1 laisvas 0 busy
    
    const handleCreate = () => {
        const data = {
            regNumb: regNumb,
            date: date,
            distance: distance,
            isBusy: isBusy
        }
        create(data);  //i create metoda paduodam data
    }

    const handleInput = (e, d) => {
        switch(d) {
            case 'regNumb':
                setRegnumb (e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'distance':
                setDistance(e.target.value);
                break;
            case 'isBusy':
                setIsBusy(i => i === 0 ? 1 : 0);
                break;
            default:
        }
    }

    return (
        <div className="create">
            <div className="top">
                <h3>New scooter</h3>
            </div>
            <div className="form">
                <div className="input">
                    <label htmlFor="registration">Reg. numb.:</label>
                    <input type="text" name="registration" value={regNumb} onChange={(e) => handleInput(e, 'regNumb')} disabled></input>
                </div>

                <div className="input">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" value={date} onChange={(e) => handleInput(e, 'date')}></input>
                </div>

                <div className="input">
                    <label htmlFor="distance">Distance (km):</label>
                    <input type="number" name="distance" value={distance} onChange={(e) => handleInput(e, 'distance')}></input>
                </div>

                <div className="input">
                    <input type="checkbox" name="" id="form-checkbox" checked={isBusy} onChange={(e) => handleInput(e, 'isBusy')}></input>
                    <button className="button" onClick={handleCreate}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Create;
import { useState } from "react";
import rand from '../Common/rand';

function Create ({create}) {

    const [regNumb, setRegnumb] = useState(rand(10000000, 99999999));
    const [date, setDate] = useState();
    const [distance, setDistance] = useState();
    const [isBusy, setIsBusy] = useState(0); //0 laisvas 1 busy
    
    const handleCreate = () => {
        const data = {
            date: date,
            distance: distance,
            isBusy: isBusy
        }
        create(data);
    }

    const handleInput = (e, d) => {
        switch(d) {
            case 'date':
                setDate(e.target.value);
                break;
            case 'distance':
                setDistance(e.target.value);
                break;
            case 'isBusy':
                setIsBusy(i => !i);
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
                    <input type="text" name="registration"></input>
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
                    <input type="checkbox" name="" id="form-checkbox" onChange={(e) => handleInput(e, 'isBusy')}></input>
                    <button className="button" onClick={handleCreate}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Create;
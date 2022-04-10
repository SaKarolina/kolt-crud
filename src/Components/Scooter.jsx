function Scooter ({scooter, deleteScooter}) {

    const handleDelete = id => {
        deleteScooter(parseInt(id));
    }

    return (
        <li className="row">
            <div className="item">
                <div className="item-row">Reg. numb.: <span style={{color: `#7d908adb`}}>{scooter.regNumb}</span></div>

                <div className="item-row">Last use time: <span style={{color: `#7d908adb`}}>{scooter.date}</span></div>

                <div className="item-row">Total ride kilometres: <span style={{color: `#7d908adb`}}>{scooter.distance} km</span></div>
            </div>
        
            <div className="buttons">
                <div className="item-row">
                {
                    scooter.isBusy ? <div className="isBusy" style={{background: `green`}}></div> : <div className="isBusy" style={{background: `red`}}></div>
                }
                </div>
                <button className="btnScooter">Edit</button>
                <button className="btnScooter" onClick={() => handleDelete(scooter.id)}>Delete</button>
            </div>
        </li>
    )
}
export default Scooter;
function Scooter ({scooter}) {

    return (
        <li>
            <div>
                <div>{scooter.regNumb}</div>
                <div>{scooter.date}</div>
                <div>{scooter.distance}</div>
                <div>{scooter.isBusy}</div>
            </div>
            <button className="button">Edit</button>
            <button className="button">Delete</button>
        </li>
    )
}
export default Scooter;
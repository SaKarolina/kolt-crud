function Create () {

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
                    <input type="date" name="date"></input>
                </div>

                <div className="input">
                    <label htmlFor="distance">Distance (km):</label>
                    <input type="number" name="distance"></input>
                </div>

                <div className="input">
                    <button className="button">Add</button>
                </div>
            </div>
        </div>
    )
}
export default Create;
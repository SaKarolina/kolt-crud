function Sort ({handleDateSort, handleDistSort}) {

    return (
        <div className="btns-sort">
            <button className="btnSort" onClick={handleDateSort}>Sort by date</button>
            <button className="btnSort" onClick={handleDistSort}>Sort by distance</button>
        </div>
    )
}

export default Sort;
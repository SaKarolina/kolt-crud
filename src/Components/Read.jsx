import Scooter from "./Scooter";

function Read ({kolt, deleteScooter}) {

    return (
        <div className="read">
            <div className="top">
                <h3>List</h3>
            </div>
            <div className="list">
                <ul>
                    {
                        kolt.map(k => <Scooter key={k.id} scooter={k} deleteScooter={deleteScooter}></Scooter>)
                    }
                </ul>
            </div>
            
        </div>
    )
}
export default Read;
import Scooter from "./Scooter";

function Read ({kolt}) {

    return (
        <div className="read">
            <div className="top">
                <h3>List</h3>
            </div>
            <div className="list">
                <ul>
                    {
                        kolt.map(k => <Scooter key={k.id} scooter={k}></Scooter>)
                    }
                </ul>
            </div>
            
        </div>
    )
}
export default Read;
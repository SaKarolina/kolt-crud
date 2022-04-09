function Read ({kolt}) {

    return (
        <div className="read">
            <div className="top">
                <h3>List</h3>
            </div>
            <div className="list">
                <ul>
                    {
                        kolt.map(k => <li key={k.id}></li>)
                    }
                </ul>
            </div>
            
        </div>
    )
}
export default Read;
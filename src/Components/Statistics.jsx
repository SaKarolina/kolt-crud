import { useEffect, useState } from "react";

function Statistics ({kolt}) {

    const [sum, setSum] = useState(0);

    useEffect(() => {
        let totalKolts = 0;
        if(kolt.length !== 0) {
            kolt.forEach( k => {
                totalKolts += parseFloat(k.distance);
                setSum(totalKolts);
            })
        } else {
            setSum(0);
        }
    }, [kolt]);

    return (
        <div className="statistics">
            <div className="top">
                <h3>Statistics</h3>
            </div>

            <div className="stat-row">
                <div className="item-row">Total quantity of scooter: <span style={{color: `#7d908adb`}}>{kolt.length}</span></div>

                <div className="item-row">Total ride kilometres: <span style={{color: `#7d908adb`}}>{sum.toFixed(2)} km</span></div>
            </div>
        </div>
    )
}

export default Statistics;
import './calcHistory.css';
import { useState, useEffect } from 'react';

const CalcHistory = (props) => {

    const [calcActive, setCalcActive] = useState(false);

    let storageHistory = JSON.parse(localStorage.getItem('calcHistory'))
    console.log(storageHistory);

    useEffect(() => {
        setCalcActive(props.calcActive)
    }, [props.calcActive])

    return (
        <div className={`calc-history__body ${calcActive ? 'calc-history_active' : ''} `}>

        </div>
    )
}

export default CalcHistory;
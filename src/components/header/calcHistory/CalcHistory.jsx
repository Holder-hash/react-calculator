import './calcHistory.css';
import { useState, useEffect, createContext } from 'react';

const CalcHistory = (props) => {

    const [calcActive, setCalcActive] = useState(false);
    const [calcStorage, setCalcStorage] = useState({
        calcStr: [],
        calcEval: []
    })

    let storageHistory = JSON.parse(localStorage.getItem('calcHistory')) || { calcStr: [], calcEval: [] }

    useEffect(() => {
        setCalcStorage(prev => {
            return {
                ...prev,
                calcStr: [...storageHistory.calcStr],
                calcEval: [...storageHistory.calcEval]
            }
        })
    }, [props.calcHistory])

    useEffect(() => {
        setCalcActive(props.calcActive)
    }, [props.calcActive])

    let calcArr = []
    for (let i = 0; i < calcStorage.calcStr.length; i++) {
        const str = calcStorage.calcStr[i];
        const result = calcStorage.calcEval[i];

        calcArr.push(`${str} = ${result}`);
    }

    const clearStorageHandler = () => {
        localStorage.setItem('calcHistory', JSON.stringify({
            calcStr: [],
            calcEval: []
        }));
        setCalcStorage({
            calcStr: [],
            calcEval: []
        });
        calcArr = [];
    }

    return (
        <div className={`calc-history__body ${calcActive ? 'calc-history_active' : ''} `}>
            <span class="material-symbols-outlined" onClick={() => clearStorageHandler()}>
                delete_forever
            </span>
            <div className="calc-history__inner">
                {calcArr.map(el => { return <p>{el}</p> })}
            </div>
        </div>
    )
}

export default CalcHistory;
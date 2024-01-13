import  styles  from './Calculator.module.css';
import CalcInput from './CalcInput/CalcInput';
import CalcButtons from './CalcButtons/CalcButtons';
import {useState } from "react";

const Calculator = (props) => {

    const [calculationStr, setCalculation] = useState('');

    const updateStrValueHandler = (calcStr) => {
        setCalculation(calcStr);
    }
    const calcHistoryHandler = (getCalcHistory) => {
        props.calcHistoryHandler(getCalcHistory);
    }

    return (
        <div className={styles.calculatorBody}>
            <CalcInput calculationStr={calculationStr}/>
            <CalcButtons updateStrValueHandler={updateStrValueHandler} calcHistoryHandler={calcHistoryHandler}/>
        </div>
    )
}

export default Calculator;
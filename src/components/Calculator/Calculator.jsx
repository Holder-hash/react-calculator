import  styles  from './Calculator.module.css';
import CalcInput from './CalcInput/CalcInput';
import CalcButtons from './CalcButtons/CalcButtons';
import { useState } from "react";

const Calculator = () => {

    const [calculationStr, setCalculation] = useState('');

    const updateStrValueHandler = (calcStr) => {
        setCalculation(calcStr);
    }

    return (
        <div className={styles.calculatorBody}>
            <CalcInput calculationStr={calculationStr}/>
            <CalcButtons updateStrValueHandler={updateStrValueHandler}/>
        </div>
    )
}

export default Calculator;
import  styles  from './Calculator.module.css';
import CalcInput from './CalcInput/CalcInput';
import CalcButtons from './CalcButtons/CalcButtons';

const Calculator = () => {
    return (
        <div className={styles.calculatorBody}>
            <CalcInput />
            <CalcButtons />
        </div>
    )
}

export default Calculator;
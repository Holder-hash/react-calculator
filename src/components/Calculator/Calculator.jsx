import  styles  from './Calculator.module.css';
import CalcInput from './CalcInput/CalcInput';

const Calculator = () => {
    return (
        <div className={styles.calculatorBody}>
            <CalcInput />
        </div>
    )
}

export default Calculator;
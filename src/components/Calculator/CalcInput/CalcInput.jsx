import  styles  from '../Calculator.module.css';

const CalcInput = () => {
    return (
        <div className={styles.calculatorInp}>
            <input
                type="text"
                onKeyPress={(event) => {
                    const regex = /[0-9+\-*/.() ]/g;
                    const key = event.key;
                    if (!key.match(regex) && key !== "Enter") {
                        event.preventDefault();
                    }
                }} />
        </div>
    )
}

export default CalcInput;
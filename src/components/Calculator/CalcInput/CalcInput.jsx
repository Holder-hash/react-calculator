import  styles  from '../Calculator.module.css';

const CalcInput = (props) => {

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
                }} 
                value={props.calculationStr}
            />
        </div>
    )
}

export default CalcInput;
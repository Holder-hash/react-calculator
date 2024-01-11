import  styles  from '../Calculator.module.css';
import { useState } from "react";

const CalcButtons = (props) => {

    const [calculationStr, setCalculation] = useState('');
    const [bracketCheck, setBracketCheck] = useState(false);

    let btn = () => {
        let btnArr = []
        for (let i = 1; i < 10; i++) {
            btnArr.push(<input type="button" value={i} key={i}  elementType='num' onClick={(event) => setCalculation(calculationStr + event.target.value)}/>)
        }
        return btnArr
    }

    const sliceCaclStr = (calcStr) => {
        setCalculation(calcStr.slice(0, -1));
    }

    const cleanCaclStr = () => {
        setCalculation('');
        setBracketCheck(false);
    }

    const calc = (calcStr) => {
        setCalculation(eval(calcStr))
    }

    const brackets = () => {
        if (!bracketCheck) {
            setCalculation(calculationStr + '(');
            setBracketCheck(true);
        } else {
            setCalculation(calculationStr + ')');
            setBracketCheck(false);
        }
    }

    props.updateStrValueHandler(calculationStr);

    return (
        <div className={styles.calcButtons}>
            <div>
                <input type="button" value={'()'} onClick={() => brackets()}/>
                <input type="button" value={'%'} onClick={(event) => setCalculation(calculationStr + event.target.value)}/>
                <input type="button" value={'C'} onClick={() => cleanCaclStr()}/>
                <input type="button" value={'<'} onClick={() => sliceCaclStr(calculationStr)}/>
            </div>

            <div>
                <div>
                    {btn()}
                    <input type="button" value={'0'} onClick={(event) => setCalculation(calculationStr + event.target.value)}/>
                    <input type="button" value={'='} onClick={() => calc(calculationStr)}/>
                </div>

                <div>
                    <input type="button" value={'/'} onClick={(event) => setCalculation(calculationStr + event.target.value)}/>
                    <input type="button" value={'*'} onClick={(event) => setCalculation(calculationStr + event.target.value)}/>
                    <input type="button" value={'-'} onClick={(event) => setCalculation(calculationStr + event.target.value)}/>
                    <input type="button" value={'+'} onClick={(event) => setCalculation(calculationStr + event.target.value)}/>
                </div>
            </div>
            
            
        </div>
    )
}

export default CalcButtons;
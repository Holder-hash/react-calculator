import  styles  from '../Calculator.module.css';

const CalcButtons = () => {

    let btn = () => {
        let btnArr = []
        for (let i = 1; i < 10; i++) {
            btnArr.push(<input type="button" value={i} key={i}  elementType='num'/>)
        }
        return btnArr
    }

    return (
        <div className={styles.calcButtons}>
            <div>
                <input type="button" value={'()'}/>
                <input type="button" value={'%'}/>
                <input type="button" value={'C'}/>
                <input type="button" value={'<'}/>
            </div>

            <div>
                <div>
                    {btn()}
                    <input type="button" value={'0'} />
                    <input type="button" value={'='} />
                </div>

                <div>
                    <input type="button" value={'/'}/>
                    <input type="button" value={'*'}/>
                    <input type="button" value={'-'}/>
                    <input type="button" value={'+'}/>
                </div>
            </div>
            
            
        </div>
    )
}

export default CalcButtons;
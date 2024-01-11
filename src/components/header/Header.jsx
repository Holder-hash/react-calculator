import './Header.css';
import { useState } from 'react';

const Header = (props) => {

    const [calcActive, setCalcActive] = useState(false);

    props.historyBtnHandler(calcActive);

    return (
        <header>
            <div className="header__inner">
                <div className="logo__contain"></div>
                <div className="tool-box__contain">
                    <span class="material-symbols-outlined" onClick={() => setCalcActive(!calcActive)}>
                        history
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;
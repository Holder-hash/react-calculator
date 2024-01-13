import './App.css';
import Header from './components/header/Header';
import Calculator from './components/Calculator/Calculator';
import CalcHistory from './components/header/calcHistory/CalcHistory';
import { useState } from 'react';

function App() {

  const [calcActive, setCalcActive] = useState(false);
  const [calcHistory, setcalcHistory] = useState({
    calcStr: [],
    calcEval: []
  });

  const historyBtnHandler = (historyBtnState) => {
    setCalcActive(historyBtnState);
  }

  return (
    <div className="App">

      <Header historyBtnHandler={historyBtnHandler} />
      <CalcHistory calcActive={calcActive} calcHistory={calcHistory} setcalcHistory={setcalcHistory} />
      <Calculator calcHistoryHandler={setcalcHistory} />

    </div>
  );
}

export default App;

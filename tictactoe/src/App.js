import './App.css';
import React, {useState} from 'react';
import JatekTer from './componens/Jatekter';
import TicTacToeModel from './model/TicTacToeModel.js';
import './componens/JatekTer.css';

const model = new TicTacToeModel ();
function App () {
  const [lista, setlista] = useState (model.lista);
  function katt (index) {
    model.setAllapot (index);
    setlista (model.lista);
    console.log (lista);
  }
  return (
    <div className="App">
      <header className="App-header">Tic-Tac-Toe</header>
      <aside />
      <article>
        {<JatekTer lista={lista} katt={katt} />}
      </article>
    </div>
  );
}

export default App;

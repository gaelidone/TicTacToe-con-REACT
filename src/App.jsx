import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import PlayerTurn from './components/PlayerTurn'
import BtnReset from './components/ResetGame'
import { resultadoDelJuego } from './logicaDelJuego'


let turnos = 0;
const tirosPorEquipo = {
  'river': [],
  'boca': []
}

function App() {

  const [turn, setTurn] = useState("river");

  const actualizarTurnos = () =>{
    setTurn(turn === "river" ? "boca" : "river");
  }

  const [board, setBoard] = useState(Array(9).fill('sinEquipo'))
  const updateBoard = (index) =>{
    if (board[index] !== "sinEquipo") {
      return;
    }
    const newBoard = [...board];
    let equipo = turnos % 2 === 0 ? "river" : "boca";
    newBoard[index] = equipo;
    tirosPorEquipo[equipo].push(index)
    setBoard(newBoard)
    turnos += 1;
    actualizarTurnos();
    resultadoDelJuego(tirosPorEquipo, equipo, resetBoard, turnos)
  }

  const resetBoard = () => {
    setBoard(Array(9).fill('sinEquipo'));
    setTurn('river')
    turnos = 0;
    tirosPorEquipo.river = [];
    tirosPorEquipo.boca = [];
  };
  
  
  return (
    <>
      <div className="container">
        <h1>TicTacToe</h1>
        <BtnReset funcionBtn={resetBoard}/>
        <div className="wrap-squares">
          {board.map((_, index) => {
            return(
              <Square 
                key={index}
                index={index}
                team={board[index]}
                click={updateBoard}/>
            )
          })}
        </div>
        <div className="wrap-PlayerTurn">
          <PlayerTurn team="river" turnoParaJugar={turn}/>
          <PlayerTurn team="boca" turnoParaJugar={turn}/>
        </div>
      </div>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import PlayerTurn from './components/PlayerTurn'
import BtnReset from './components/ResetGame'
let turnos = 0;
function App() {

  const [board, setBoard] = useState(Array(9).fill('sinEquipo'))
  const updateBoard = (index) =>{
    if (board[index] !== "sinEquipo") {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turnos % 2 === 0 ? "river" : "boca";
    setBoard(newBoard)
    turnos += 1
  }
  const resetBoard = () => {
    setBoard(Array(9).fill('sinEquipo'));
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
          <PlayerTurn team="river"/>
          <PlayerTurn team="boca"/>
        </div>
      </div>

    </>
  )
}

export default App

function PlayerTurn({ team, turnoParaJugar }) {
  const claseTurno = turnoParaJugar === team ? turnoParaJugar : ""
  return (
    <div className={`square-PlayerTurn ${claseTurno}`}>
      <img
        src={`../images/${team}-escudo.webp`}
        alt={`${team}'s Logo`}
        className="PlayerTurn-img" />
    </div>
  )
}

export default PlayerTurn;
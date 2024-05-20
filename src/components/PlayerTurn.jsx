function PlayerTurn({ team }) {
  return (
    <div className="square-PlayerTurn">
      <img
        src={`../images/${team}-escudo.webp`}
        alt={`${team}'s Logo`}
        className="PlayerTurn-img" />
    </div>
  )
}

export default PlayerTurn;
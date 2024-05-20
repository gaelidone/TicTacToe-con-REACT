function Square({ team, index, click }) {
  const handleClick = () => {
    click(index)
  }
  return (
    <div className="square" onClick={handleClick}>
      <img
        src={`../images/${team}-escudo.webp`}
        alt={`${team}'s Logo`}
        className="square-img" />
    </div>
  )
}

export default Square;
export const resultadoDelJuego = ( tirosPorEquipo, equipo, resetBoard, turnos ) => {
  const arrayIndex = tirosPorEquipo[equipo];
  posiblesVictorias.forEach(victoria =>{
    let resultado = victoria.every(num => arrayIndex.includes(num));
    if (resultado) {
      console.log("GANO " + equipo)
      tirosPorEquipo.river = [];
      tirosPorEquipo.boca = [];
      resetBoard();
      alertaEquipoGanador(equipo)
    }else if (turnos === 9 && !resultado) {
      console.log("HUBO UN EMPATE")
      Swal.fire({
        title: "EMPATE",
        text: "Ha habido un empate, sigue jugando!",
      });
      resetBoard()
    }
  })
} 


const alertaEquipoGanador = (equipo) =>{
  Swal.fire({
    title: `GANÓ ${equipo.toUpperCase()}`,
    imageUrl: `./images/${equipo}-escudo.webp`,
    imageHeight: 200,
    imageAlt: `Escudo del club ${equipo}`
  });

  /* confettis */
  const colores = equipo === "river" ? ['#FF0000', '#FFFFFF'] : ['#0000FF', '#FFFF00'];
  confetti({
    particleCount: 100,
    spread: 150,
    origin: { y: 0.6 },
    colors: colores
  });
}

const posiblesVictorias = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


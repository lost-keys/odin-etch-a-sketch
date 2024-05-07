function drawGrid(gridSize = 16) {
  const canvas = document.querySelector("#canvas");
  let cell = document.createElement("div");
  cell.classList.add("cell")

  for (x = 0; x < gridSize; x++) {
    for (y = 0; y < gridSize; y++) {
      canvas.appendChild(cell.cloneNode());
    }
  }
}

drawGrid();
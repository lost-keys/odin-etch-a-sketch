const canvas = document.querySelector("#canvas");

function drawGrid(cellsPerSide = 16, canvasSize = 512) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style["flex-basis"] = calculateCellSize(canvasSize, cellsPerSide);

  for (x = 0; x < cellsPerSide; x++) {
    for (y = 0; y < cellsPerSide; y++) {
      canvas.appendChild(cell.cloneNode());
    }
  }
}

function calculateCellSize(canvasSize, cellsPerSide) {
  return (canvasSize / cellsPerSide) + "px";
}

function clearGrid() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
}

// Create hover "sketch" effect so that the divs change color when
// the mouse passes over them
canvas.addEventListener("mouseover", (e) => {
  let target = e.target;
  // prevents the canvas itself fom being colored due to DOM bubbling
  if (target.className === "cell") {
    target.style.backgroundColor = "grey";
  }
});

function getGridSize() {
  let size = 0;
  while (size < 1 || size > 100) {
    size = prompt("Enter a new grid size (maximum 100).");
  }
  return size;
}

// Allows the user to change the size of the grid, removes the
// old grid and generates a new one based on a user inputed size
const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", (e) => {
  size = getGridSize();
  clearGrid();
  drawGrid(size);
})

// Draw the initial grid on page load
drawGrid();
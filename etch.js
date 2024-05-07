const canvas = document.querySelector("#canvas");

function drawGrid(gridSize = 16) {
  let cell = document.createElement("div");
  cell.classList.add("cell")

  for (x = 0; x < gridSize; x++) {
    for (y = 0; y < gridSize; y++) {
      canvas.appendChild(cell.cloneNode());
    }
  }
}

// Create hover "sketch" effect so that the divs change color when
// the mouse passes over them
canvas.addEventListener("mouseover", (e) => {
  let target = e.target;
  target.setAttribute("style", "background-color: grey");
});

drawGrid();
console.log("hello world");
function createGrid() {
  // create a 5x5 grid of tiles
  const div = document.getElementById("grid");
  for (let i = 0; i < 5; i++) {
    const row = generateRow(i);
    div.append(row);
  }
}

function generateRow(idx) {
  const rowId = `row_${idx}`;
  const row = document.createElement("div");
  row.id = rowId;
  row.className = "row";
  for (let i = 0; i < 5; i++) {
    const tile = generateTile(i, idx);
    row.appendChild(tile);
  }
  return row;
}

function generateTile(idx, rowIdx) {
  const tileId = `tile_${rowIdx}_${idx}`;
  const tile = document.createElement("div");
  tile.id = tileId;
  tile.className = "tile";
  return tile;
}

function setupResetButton() {
  const btn = document.getElementById("reset");
  btn.addEventListener("click", () => {
    window.location.reload();
  });
}
function main() {
  createGrid();
  setupResetButton();
}

main();

const body = document.querySelector("body");
const container = document.createElement("div");
const pad = document.createElement("div");

pad.setAttribute("id", "pad");
container.setAttribute("class", "container");

container.appendChild(pad);
body.appendChild(container);

// const rowPad = document.createElement("div");
// const columnPad = document.createElement("div");
// rowPad.setAttribute("id", "row");
// columnPad.setAttribute("id", "column");

// change row-squares and column-squares to squares afterwards
function createNumberOfSquares (number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.classList.add("row-squares")
        rowPad.appendChild(row);
        pad.appendChild(rowPad);
    }
    for (let i = 0; i < number; i++) {
        const column = document.createElement("div");
        column.classList.add("column-squares");
        columnPad.appendChild(column);
        pad.appendChild(columnPad);
    }
}
// createNumberOfSquares(16);
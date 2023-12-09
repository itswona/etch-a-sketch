const body = document.querySelector("body");
const container = document.createElement("div");
const pad = document.createElement("div");

pad.setAttribute("id", "pad");
container.setAttribute("class", "container");

container.appendChild(pad);
body.appendChild(container);

function createNumberOfSquares (number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "rows")
        pad.appendChild(row);
        for (let j = 0; j < number; j++) {
            const column = document.createElement("div");
            column.setAttribute("class", "squares");
            row.appendChild(column);
        }
    }
}
createNumberOfSquares(16);
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
function createNumberOfDivs (number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row-squares")
        pad.appendChild(row);
        for (let j = 0; j < number; j++) {
            const column = document.createElement("div");
            column.setAttribute("class", "column-squares");
            row.appendChild(column);
        }
    }
}
createNumberOfDivs(16);
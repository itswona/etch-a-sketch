const body = document.querySelector("body");
const container = document.createElement("div");
const pad = document.createElement("div");

pad.setAttribute("id", "pad");
container.setAttribute("class", "container");

container.appendChild(pad);
body.appendChild(container);

function createNumberOfSquares (number) {
    for (let i = 0; i < number; i++) {
        const rows = document.createElement("div");
        rows.setAttribute("class", "rows")
        pad.appendChild(rows);
        for (let j = 0; j < number; j++) {
            const squares = document.createElement("div");
            squares.setAttribute("class", "squares");
            rows.appendChild(squares);
            trail(squares);
        }
    }
}

function trail (querySelector) {
    querySelector.addEventListener("mouseover", () => {
        querySelector.setAttribute("style", "background-color: black;");
    });
}

const buttons = document.createElement("div");
const btnPrompt = document.createElement("button");
const btnReload = document.createElement("button");
const btnPen = document.createElement("button");

btnPrompt.setAttribute("class", "buttons");
btnReload.setAttribute("class", "buttons");
btnPen.setAttribute("class", "buttons");
buttons.setAttribute("class", "selection");
buttons.append(btnPrompt, btnReload);
body.appendChild(buttons);

btnPrompt.textContent = "Start";
btnReload.textContent = "Reload";
btnPen.textContent = "Kaleidoscope";

btnReload.addEventListener("click", () => {
    window.location.reload();
});

btnPrompt.addEventListener("click", () => {
    let dimension = prompt("Set dimensions (1-100):");
    if (dimension >= 1 && dimension <= 100) {
        createNumberOfSquares(dimension);
    } else {
        alert("Try again with numbers from 1 to 100.");
    }
});
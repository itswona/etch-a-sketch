const body = document.querySelector("body");
const container = document.createElement("div");
const pad = document.createElement("div");

pad.setAttribute("id", "pad");
container.setAttribute("class", "container");

container.appendChild(pad);
body.appendChild(container);

const buttons = document.createElement("div");
const btnPrompt = document.createElement("button");
const btnReload = document.createElement("button");
const btnPenNormal = document.createElement("button");
const btnPenKaleidoscope = document.createElement("button");

btnPrompt.setAttribute("class", "buttons");
btnReload.setAttribute("class", "buttons");
btnPenNormal.setAttribute("class", "buttons");
btnPenKaleidoscope.setAttribute("class", "buttons");
buttons.setAttribute("class", "selection");
buttons.append(btnPrompt, btnReload, btnPenNormal, btnPenKaleidoscope);
body.appendChild(buttons);

btnPrompt.textContent = "Start";
btnReload.textContent = "Reload";
btnPenNormal.textContent = "Dark";
btnPenKaleidoscope.textContent = "Kaleidoscope";

btnReload.addEventListener("click", () => {
    window.location.reload();
});

btnPrompt.addEventListener("click", () => {
    let dimension = prompt("Set dimensions (1-100):");
    if (dimension >= 1 && dimension <= 100) {
        createNumberOfSquares(dimension);
        btnPrompt.disabled = true;
        btnPenNormal.disabled = false;
        btnPenKaleidoscope.disabled = false;
    } else {
        alert("Try again with numbers from 1 to 100.");
    }
});

btnPenNormal.disabled = true;
btnPenKaleidoscope.disabled = true;

function createNumberOfSquares (number) {
    for (let i = 0; i < number; i++) {
        const rows = document.createElement("div");
        rows.setAttribute("class", "rows")
        pad.appendChild(rows);
        for (let j = 0; j < number; j++) {
            const squares = document.createElement("div");
            squares.setAttribute("class", "squares");
            rows.appendChild(squares);
            btnPenNormal.addEventListener("click", () => {
                blackTrail(squares);
                btnPenNormal.setAttribute("style", "background-color: rgba(255, 166, 0, 0.682)");
                btnPenKaleidoscope.setAttribute("style", "background-color: orange");
            });
            btnPenKaleidoscope.addEventListener("click", () => {
                kaleidoscopeTrail(squares);
                btnPenKaleidoscope.setAttribute("style", "background-color: rgba(255, 166, 0, 0.682)");
                btnPenNormal.setAttribute("style", "background-color: orange");
            });
        }
    }
}

function blackTrail (querySelector) {
    querySelector.addEventListener("mouseover", () => {
        querySelector.setAttribute("style", "background-color: rgb(40, 40, 40);");
    });
}

function kaleidoscopeTrail (querySelector) {
    const colors = ["rgb(41,52,107)", "rgb(255,158,38)", "rgb(186,193,229)", "rgb(171,11,59)", "rgb(0,150,116)"];
    const randomizeColors = colors[Math.floor(Math.random() * colors.length)];
    querySelector.addEventListener("mouseover", () => {
        querySelector.setAttribute("style", `background-color: ${randomizeColors};`);
    });
}
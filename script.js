const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

const resetButton = document.getElementById("reset");
const colorSwitch = document.getElementById("color");
const sizeCounter = document.getElementById("size");

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;


/*Changes the drawing size counter displayed*/
function updateSizeCounter() {
    sizeCounter.innerText = size;
}
/*Reset Button*/
resetButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


/*Adding functions for how the user can manipulate the canvas*/ 
canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
/*decreases the size of the drawing line*/
decreaseButton.addEventListener("click", () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    Counter();
});
/*increases the size of the drawing line*/
increaseButton.addEventListener("click", () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    Counter();
});

/*changes color of drawing line*/
colorSwitch.addEventListener("change", (e) => {
    color = e.target.value;
});


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
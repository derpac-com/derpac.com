const canvas = document.getElementById("drawingboard");
const brush = document.getElementById("brush");
const eraser = document.getElementById("eraser");
const ctx = canvas.getContext("2d");

// vertical and horizontal offsets:
// these should be 0
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// obtain the canvas width and height (these should be maximum)

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 48;
let startX;
let startY;

const draw = (e) => {
    if(!isPainting){
        return;
    }
    else{
    
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
        ctx.stroke();
    }
    }

// canvas.addEventListener("mousedown", (e) => {
//     isPainting = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });
brush.addEventListener("mouseup", e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});
eraser.addEventListener("mouseup", e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

 canvas.addEventListener("mousemove", draw);

brush.addEventListener("mousedown", (e) => {
    isPainting = true;
    ctx.strokeStyle = "#d45500";
    startX = e.clientX;
    startY = e.clientY;
    brush = true;
    
   
    
});
eraser.addEventListener("mousedown", (e) => {
    isPainting = true;
    ctx.strokeStyle = "#fefefe";
    startX = e.clientX;
    startY = e.clientY;
    eraser = true;
    

    
});

brush.addEventListener("mousemove", draw);
eraser.addEventListener("mousemove", draw);
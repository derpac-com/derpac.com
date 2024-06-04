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
ctx.strokeStyle = "#d45500";

const draw = (e) => {
    if(!isPainting){
        return;
    }
    else{
        //console.log("drawing", ctx.strokeStyle, lineWidth);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.lineTo(e.touches[0].clientX,e.touches[0].clientY);
        ctx.stroke();
    }
    }

canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

brush.addEventListener("mouseup", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});
eraser.addEventListener("mouseup", (e) => {
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
    
    
   
    
});
eraser.addEventListener("mousedown", (e) => {
    isPainting = true;
    ctx.strokeStyle = "#fefefe";
    startX = e.clientX;
    startY = e.clientY;
    console.log("mousedown")
   
    

    
});

// brush.addEventListener("mousemove", draw);
// eraser.addEventListener("mousemove", draw);


// mobile friendly mode: 
//  - dont use draggable just use finger on canvas
//  - select mode by tapping the orange or eraser
//  - normal event listner for canvas

canvas.addEventListener("touchmove", draw);

// canvas.addEventListener("touchmove", e => {
//     console.log("Move");
// });

brush.addEventListener("touchstart", (e) => {
    ctx.strokeStyle = "#d45500";
    lineWidth = 20;

});
eraser.addEventListener("touchstart", (e) => {
    ctx.strokeStyle = "#fefefe";
    lineWidth = 20;
});

canvas.addEventListener("touchstart", (e) => {
    isPainting = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

canvas.addEventListener("touchend", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

const canvas = document.getElementById("drawingboard");
const brush = document.getElementById("brush");
// const eraser = document.getElementById("eraser");
const ctx = canvas.getContext("2d");

// vertical and horizontal offsets:
// these should be 0
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

// obtain the canvas width and height (these should be maximum)

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPaintingM = false;
let isPaintingT = false;
let lineWidth = 48;
let startX;
let startY;
ctx.strokeStyle = "#d45500";


const saveImage = event => {
    console.log("save");
    let link = document.createElement("a");
    let image = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const draw = (e) => {
    if(!isPaintingM && !isPaintingT){
        return;
    }
    else if(isPaintingM){
        console.log("drawing", ctx.strokeStyle, lineWidth);
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
    }
    else if(isPaintingT){
        console.log("touchmove");
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineTo(e.touches[0].clientX,e.touches[0].clientY);
     //   ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
    
    }
    }                             // add whole new one for touch and one for mouse painting..

// canvas.addEventListener("mousedown", (e) => {
//     isPaintingM = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });

// canvas.addEventListener("mouseup", (e) => {
//     isPaintingM= false;
//     ctx.stroke();
//     ctx.beginPath();
// });
// eraser.addEventListener("mouseup", (e) => {
//     isPaintingM = false;
//     ctx.stroke();
//     ctx.beginPath();
// });

canvas.addEventListener("mousemove", draw);

// brush.addEventListener("click", e => {

//     if(e.currentTarget.id === "orange"){
//         ctx.strokeStyle = "#d45500";
//         console.log(ctx.strokeStyle);
//     }
//     else if(e.currentTarget.id === "eraser"){
//         ctx.strokeStyle = "#fefefe";
//         console.log(ctx.strokeStyle);
//     }
//     else if(e.target.id === "bloodorange"){
//         ctx.strokeStyle = "#ff3e31";
//     }
//     else if(e.target.id === "lime"){
//         ctx.strokeStyle = "#44aa00";
//     }
//     else if(e.target.id === "lemon"){
//         ctx.strokeStyle = "#ffcc00";
//     }
 
    
// });

canvas.addEventListener("mousedown", (e) => {
    isPaintingM = true;
    startX = e.clientX;
    startY = e.clientY;
    //console.log("touch");
});

canvas.addEventListener("mouseup", (e) => {
    isPaintingM = false;
    ctx.stroke();
    ctx.beginPath();
});

// brush.addEventListener("mousedown", (e) => {
//     ctx.strokeStyle = e.target.value;
//     isPaintingM = true;
//     startX = e.clientX;
//     startY = e.clientY; 
// });
// eraser.addEventListener("mousedown", (e) => {
//     isPaintingM = true;
//     ctx.strokeStyle = "#fefefe";
//     startX = e.clientX;
//     startY = e.clientY;
//     console.log("mousedown");
// });




//brush.addEventListener("mousemove", draw);
//eraser.addEventListener("mousemove", draw);


// mobile friendly mode: 
//  - dont use draggable just use finger on canvas
//  - select mode by tapping the orange or eraser
//  - normal event listner for canvas

//canvas.addEventListener("touchmove", draw);

// canvas.addEventListener("touchmove", e => {
//     console.log("Move");
// });

// brush.addEventListener("touchstart", (e) => {
//     ctx.strokeStyle = "#d45500";
//     lineWidth = 48;

// });

canvas.addEventListener("touchmove", draw);

brush.addEventListener("touchstart", (e) => {
   
    
});

canvas.addEventListener("touchstart", (e) => {
    isPaintingT = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    //console.log("touch");
});

canvas.addEventListener("touchend", (e) => {
    isPaintingT = false;
    ctx.stroke();
    ctx.beginPath();
});



function orange(){
ctx.strokeStyle = "#d45500";
}

function eraser(){
    ctx.strokeStyle =  "#fefefe";
}

function bloodorange(){
    ctx.strokeStyle =  "#ff3e31";
}
function lime(){
    ctx.strokeStyle = "#44aa00";
}

function lemon(){
    ctx.strokeStyle = "#ffcc00";
}
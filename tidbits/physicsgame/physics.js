

let board;
let context;
let boardheight = 650;
let boardwidth = 1900;

let power = 0;
let angle = 0;
let velx = 0;
let vely = 0;
const g = document.getElementById("Gravity").value;
let accelx;
let accely; 
const ar = document.getElementById("Air Resistance").value;
let ballwidth = 25;
let ballheight = 25;



let ball = {
    x : boardwidth/2,
    y : boardheight/2,
    height : ballheight,
    width : ballwidth,
    velocityx : velx,
    velocityy : vely
}

window.onload = function (){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d"); //used for drawing on the board
    requestAnimationFrame(update);


    
     document.addEventListener("mousedown", e => {
        initx = e.clientX/2;
        inity = ((e.clientY/-2)-135);
        console.log(initx,inity);
     });
     document.addEventListener("mouseup", e =>{
        finx = e.clientX/2 ;
        finy = ((e.clientY/-2)-135);
        console.log(finx, finy);
        shoot();
     });



     let BR = false;
     let BL = false;
     let TL = false;
     let TR = false;
     let powerfactor = 20;



     function shoot(){
        let BR = false;
        let BL = false;
        let TL = false;
        let TR = false;
        let ballcenterx = (ball.x + ballwidth)/2;
        let ballcentery = (ball.y + ballheight)/-2;
        let balloffsetx = ballcenterx - finx;
        let balloffsety = ballcentery - finy;
        console.log(ballcenterx,ballcentery);
        console.log(balloffsetx,balloffsety);
        if((Math.sign(balloffsetx) == 1) && (Math.sign(balloffsety) == 1)){         //    Positive Positive
            BL = true;

            TL = false;
            TR = false;
            BR = false;
            console.log("BL");
        }
        else if((Math.sign(balloffsetx) == 1) && (Math.sign(balloffsety) == -1)){    // Positive Negative
            let BR = false;
            let BL = false;
            let TR = false;
            
            TL = true;

        
            console.log("TL");
        }
        else if((Math.sign(balloffsetx) == -1) && (Math.sign(balloffsety) == -1)){  // Negative Negative
            let BR = false;
            let BL = false;
            let TL = false;
            
            TR = true;
            console.log("TR");
          
        } 
        else if((Math.sign(balloffsetx) == -1) && (Math.sign(balloffsety) == 1)){      // Negative Positive
            let BL = false;
            let TL = false;
            let TR = false;
            
            BR = true;
            console.log("BR");
        }

        let delx = initx - finx;
        let dely = inity - finy;
        if((delx <= 0) && (dely <= 0)){
            delx = dely = 1;
        }
        powerfactor = Math.sqrt(Math.pow(delx,2) + Math.pow(dely,2));
        if(powerfactor > 100){
            powerfactor = 100;
        }
        else if(powerfactor < 20){
            powerfactor = 20;
        }
        console.log(powerfactor);
        power = powerfactor/2;
        console.log(power);
        angle = Math.atan(dely/delx);

        let xvel = Math.cos(angle)*power;
        let yvel = Math.sin(angle)*power;

        if(BL){
            ball.velocityx +=  xvel;
            ball.velocityy -= yvel;
        }
        else if(TL){
            ball.velocityx +=  xvel;
            ball.velocityy -= yvel;

        }
        else if(TR){
            ball.velocityx -= xvel;
            ball.velocityy += yvel;

        }
        else if(BR){
            ball.velocityx -=  xvel;
            ball.velocityy += yvel;

        }
}

function ing(val){
    g = val;
}
function inar(val){
    ar = val;
}

}

function update(){
    requestAnimationFrame(update);
    
    context.clearRect(0, 0, board.width, board.height);
    ball.velocityy += g/10;
    ball.velocityy -= ar*ball.velocityy;
    ball.velocityx -= ar*ball.velocityx;
    //draw and update ball
    context.fillStyle = "#d45500";
    ball.x += ball.velocityx;
    ball.y += ball.velocityy;
    context.fillRect(ball.x, ball.y, ball.width, ball.height);

    //bounce ball off walls

    if (ball.y <= 0) {
        //if ball touch top
        ball.velocityy *= -1/1.05;
        ball.y = 0;
    }
    else if (ball.x <= 0 || (ball.x +ball.width) >= boardwidth){
        ball.velocityx *= -1/1.05;
       (ball.x <=0) ? (ball.x = boardwidth/80) : (ball.x = boardwidth-boardwidth/80);
    }
    else if (ball.y + ball.height >= boardheight){
        //if the ball touches the bottom
        ball.velocityy *= -1/1.05;
        ball.y = 625;
}
    if (Math.abs(ball.velocityx) < 0.2){
        ball.velocityx = 0;
    }
    else if(Math.abs(ball.velocityy) < 0.2){
        ball.velocityy = 0;
    }
    //  else if(Math.abs(ball.velocityy) > 20){
    //      ball.velocityy = 19;
    //  }

}



// listeners so i can move the ball

// cursor velocity calculation

// function vely(){

// }

// function velx(){


// 
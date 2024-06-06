

let board;
let context;
let boardheight = 650;
let boardwidth = 1900;

let power = 0;
let angle = 0;
let velx = 0;
let vely = 0;
let g = document.getElementById("Gravity").value;        
let accelx;
let accely; 
let ar = document.getElementById("Air Resistance").value;             //initalise nonsense
let ballwidth = 25;
let ballheight = 25;

const ing = event =>{                                     //changes the gravity and air resistance live
    //console.log("grav cha");      
    g = document.getElementById("Gravity").value;
    console.log(g);
}
const inar = event =>{                          
    ar = document.getElementById("Air Resistance").value;
}


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


    
     document.addEventListener("mousedown", e => {          //listen for mousedown and log the inital x and y coordinates
        initx = e.clientX/2;
        inity = ((e.clientY/-2)-135);
        console.log(initx,inity);
     });
     document.addEventListener("mouseup", e =>{         // listen for a mouseup and log the final x and y
        finx = e.clientX/2 ;
        finy = ((e.clientY/-2)-135);
        console.log(finx, finy);
        shoot();               //call the shoot function to do the rest of the maths and assign the correct power and angle
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
        let ballcenterx = (ball.x + ballwidth)/2;             //calculate the ball center
        let ballcentery = (ball.y + ballheight)/-2;
        let balloffsetx = ballcenterx - finx;                // calculate the offset from the cursor and the ball
        let balloffsety = ballcentery - finy;
        console.log(ballcenterx,ballcentery);
        console.log(balloffsetx,balloffsety);                                       // the following statement checks the sign of the number of the offset and confirms its quadrant
        if((Math.sign(balloffsetx) == 1) && (Math.sign(balloffsety) == 1)){         //    Positive Positive represents a Back left (BL) quadrant 
            BL = true;

            TL = false;
            TR = false;
            BR = false;
            console.log("BL");
        }
        else if((Math.sign(balloffsetx) == 1) && (Math.sign(balloffsety) == -1)){    // Positive Negative (Top Left)
            let BR = false;
            let BL = false;
            let TR = false;
            
            TL = true;

        
            console.log("TL");
        }
        else if((Math.sign(balloffsetx) == -1) && (Math.sign(balloffsety) == -1)){  // Negative Negative   (Top Right)
            let BR = false;
            let BL = false;
            let TL = false;
            
            TR = true;
            console.log("TR");
          
        } 
        else if((Math.sign(balloffsetx) == -1) && (Math.sign(balloffsety) == 1)){      // Negative Positive     (Back right)
            let BL = false;
            let TL = false;
            let TR = false;
            
            BR = true;
            console.log("BR");
        }

        let delx = initx - finx;             //find the change in x and y coordinates 
        let dely = inity - finy;
        if((delx <= 0) && (dely <= 0)){       //set dely and delx to 1 if they are 0 to avoid a glitch when clicking on the screen
            delx = dely = 1;
        }
        powerfactor = Math.sqrt(Math.pow(delx,2) + Math.pow(dely,2));      //use pythag to find the power
        if(powerfactor > 250){
            powerfactor = 250; 
        }
        else if(powerfactor < 25){
            powerfactor = 25;
        }
        console.log(powerfactor);
        power = powerfactor/5;
        console.log(power);
        angle = Math.atan(dely/delx);            //obtain the angle of departure with trig

        let xvel = Math.cos(angle)*power;       // obtain the x and y power with trig
        let yvel = Math.sin(angle)*power;

        if(BL){
            ball.velocityx +=  xvel;         // assign the power with the correct directions based off the quadrant
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



}

function update(){
    requestAnimationFrame(update);
    
    context.clearRect(0, 0, board.width, board.height);
    ball.velocityy += g/10;                                     //apply gravity and air resitance to the velocity every tick
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
       (ball.x <=0) ? (ball.x = 0) : (ball.x = boardwidth-ballwidth);      //if ball touches the sides
    }
    else if (ball.y + ball.height >= boardheight){
        //if the ball touches the bottom
        ball.velocityy *= -1/1.05;
        ball.y = boardheight-ballheight;
    }
    if (Math.abs(ball.velocityx) < 0.02){           //at a certain velocity set it to 0 so it stops
        ball.velocityx = 0;
    }
    else if(Math.abs(ball.velocityy) < 0.02){
        ball.velocityy = 0;
    }
    else{
        return;
    }

}



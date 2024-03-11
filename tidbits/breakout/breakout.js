//consts

//const youwon = document.getElementById("end_screen_image")


//board
let board;
let boardwidth = 500;
let boardheight = 500;
let context;

//players
let playerwidth = 80;
let playerheight = 10;
let playervelocityx = 20;

let player1= {
    x :boardwidth/2 -playerwidth/2,
    y : boardheight - playerheight - 5,
    width : playerwidth,
    height : playerheight,
    velocityx : playervelocityx


}

//ball
let ballsizecount = 0;
let ballwidth = 15;
let ballheight = 15;
let ballvelocityx = 3;
let ballvelocityy= 2;

let ball= {
    x : boardwidth/2,
    y : boardheight/2,
    height : ballheight,
    width : ballwidth,
    velocityx : ballvelocityx,
    velocityy : ballvelocityy
}

//blocks
let blackpixels = [{"x":1,"y":20},{"x":1,"y":21},{"x":1,"y":22},{"x":2,"y":20},{"x":2,"y":21},{"x":2,"y":22},{"x":3,"y":1},{"x":3,"y":2},{"x":3,"y":3},{"x":3,"y":4},{"x":3,"y":5},{"x":3,"y":6},{"x":3,"y":7},{"x":3,"y":8},{"x":3,"y":9},{"x":3,"y":10},{"x":3,"y":11},{"x":3,"y":12},{"x":3,"y":13},{"x":3,"y":14},{"x":3,"y":15},{"x":3,"y":16},{"x":3,"y":17},{"x":3,"y":18},{"x":3,"y":19},{"x":3,"y":20},{"x":3,"y":21},{"x":3,"y":22},{"x":3,"y":23},{"x":3,"y":24},{"x":4,"y":1},{"x":4,"y":2},{"x":4,"y":3},{"x":4,"y":4},{"x":4,"y":5},{"x":4,"y":6},{"x":4,"y":7},{"x":4,"y":8},{"x":4,"y":9},{"x":4,"y":10},{"x":4,"y":11},{"x":4,"y":12},{"x":4,"y":13},{"x":4,"y":14},{"x":4,"y":15},{"x":4,"y":16},{"x":4,"y":17},{"x":4,"y":18},{"x":4,"y":19},{"x":4,"y":20},{"x":4,"y":21},{"x":4,"y":22},{"x":4,"y":23},{"x":4,"y":24},{"x":5,"y":1},{"x":5,"y":2},{"x":5,"y":3},{"x":5,"y":4},{"x":5,"y":5},{"x":5,"y":6},{"x":5,"y":7},{"x":5,"y":8},{"x":5,"y":9},{"x":5,"y":10},{"x":5,"y":11},{"x":5,"y":12},{"x":5,"y":13},{"x":5,"y":14},{"x":5,"y":15},{"x":5,"y":16},{"x":5,"y":17},{"x":5,"y":18},{"x":5,"y":19},{"x":5,"y":20},{"x":5,"y":21},{"x":5,"y":22},{"x":5,"y":23},{"x":5,"y":24},{"x":6,"y":2},{"x":6,"y":3},{"x":6,"y":4},{"x":6,"y":17},{"x":6,"y":18},{"x":6,"y":19},{"x":6,"y":20},{"x":7,"y":2},{"x":7,"y":3},{"x":7,"y":4},{"x":7,"y":16},{"x":7,"y":17},{"x":7,"y":18},{"x":7,"y":19},{"x":7,"y":20},{"x":8,"y":2},{"x":8,"y":3},{"x":8,"y":4},{"x":8,"y":16},{"x":8,"y":17},{"x":8,"y":18},{"x":8,"y":19},{"x":9,"y":2},{"x":9,"y":3},{"x":9,"y":4},{"x":9,"y":5},{"x":9,"y":15},{"x":9,"y":16},{"x":9,"y":17},{"x":9,"y":18},{"x":10,"y":2},{"x":10,"y":3},{"x":10,"y":4},{"x":10,"y":5},{"x":10,"y":14},{"x":10,"y":15},{"x":10,"y":16},{"x":10,"y":17},{"x":10,"y":18},{"x":11,"y":3},{"x":11,"y":4},{"x":11,"y":5},{"x":11,"y":6},{"x":11,"y":13},{"x":11,"y":14},{"x":11,"y":15},{"x":11,"y":16},{"x":11,"y":17},{"x":12,"y":3},{"x":12,"y":4},{"x":12,"y":5},{"x":12,"y":6},{"x":12,"y":12},{"x":12,"y":13},{"x":12,"y":14},{"x":12,"y":15},{"x":12,"y":16},{"x":13,"y":4},{"x":13,"y":5},{"x":13,"y":6},{"x":13,"y":7},{"x":13,"y":10},{"x":13,"y":11},{"x":13,"y":12},{"x":13,"y":13},{"x":13,"y":14},{"x":13,"y":15},{"x":14,"y":4},{"x":14,"y":5},{"x":14,"y":6},{"x":14,"y":7},{"x":14,"y":8},{"x":14,"y":9},{"x":14,"y":10},{"x":14,"y":11},{"x":14,"y":12},{"x":14,"y":13},{"x":14,"y":14},{"x":15,"y":5},{"x":15,"y":6},{"x":15,"y":7},{"x":15,"y":8},{"x":15,"y":9},{"x":15,"y":10},{"x":15,"y":11},{"x":15,"y":12},{"x":15,"y":13},{"x":16,"y":6},{"x":16,"y":7},{"x":16,"y":8},{"x":16,"y":9},{"x":16,"y":10},{"x":16,"y":11},{"x":18,"y":12},{"x":18,"y":13},{"x":18,"y":14},{"x":19,"y":9},{"x":19,"y":10},{"x":19,"y":11},{"x":19,"y":12},{"x":19,"y":13},{"x":19,"y":14},{"x":19,"y":15},{"x":19,"y":16},{"x":19,"y":17},{"x":20,"y":8},{"x":20,"y":9},{"x":20,"y":10},{"x":20,"y":11},{"x":20,"y":12},{"x":20,"y":13},{"x":20,"y":14},{"x":20,"y":15},{"x":20,"y":16},{"x":20,"y":17},{"x":20,"y":18},{"x":21,"y":7},{"x":21,"y":8},{"x":21,"y":9},{"x":21,"y":10},{"x":21,"y":11},{"x":21,"y":12},{"x":21,"y":13},{"x":21,"y":14},{"x":21,"y":15},{"x":21,"y":16},{"x":21,"y":17},{"x":21,"y":18},{"x":21,"y":19},{"x":21,"y":20},{"x":22,"y":6},{"x":22,"y":7},{"x":22,"y":8},{"x":22,"y":9},{"x":22,"y":10},{"x":22,"y":15},{"x":22,"y":16},{"x":22,"y":17},{"x":22,"y":18},{"x":22,"y":19},{"x":22,"y":20},{"x":22,"y":21},{"x":23,"y":6},{"x":23,"y":7},{"x":23,"y":8},{"x":23,"y":9},{"x":23,"y":14},{"x":23,"y":15},{"x":23,"y":16},{"x":23,"y":17},{"x":23,"y":18},{"x":23,"y":19},{"x":23,"y":20},{"x":23,"y":21},{"x":24,"y":6},{"x":24,"y":7},{"x":24,"y":8},{"x":24,"y":14},{"x":24,"y":15},{"x":24,"y":16},{"x":24,"y":17},{"x":24,"y":19},{"x":24,"y":20},{"x":24,"y":21},{"x":24,"y":22},{"x":25,"y":6},{"x":25,"y":7},{"x":25,"y":8},{"x":25,"y":9},{"x":25,"y":13},{"x":25,"y":14},{"x":25,"y":15},{"x":25,"y":16},{"x":25,"y":19},{"x":25,"y":20},{"x":25,"y":21},{"x":25,"y":22},{"x":26,"y":6},{"x":26,"y":7},{"x":26,"y":8},{"x":26,"y":9},{"x":26,"y":11},{"x":26,"y":12},{"x":26,"y":13},{"x":26,"y":14},{"x":26,"y":15},{"x":26,"y":16},{"x":26,"y":20},{"x":26,"y":21},{"x":26,"y":22},{"x":27,"y":7},{"x":27,"y":8},{"x":27,"y":9},{"x":27,"y":10},{"x":27,"y":11},{"x":27,"y":12},{"x":27,"y":13},{"x":27,"y":14},{"x":27,"y":15},{"x":27,"y":20},{"x":27,"y":21},{"x":27,"y":22},{"x":28,"y":7},{"x":28,"y":8},{"x":28,"y":9},{"x":28,"y":10},{"x":28,"y":11},{"x":28,"y":12},{"x":28,"y":13},{"x":28,"y":14},{"x":28,"y":20},{"x":28,"y":21},{"x":28,"y":22},{"x":29,"y":8},{"x":29,"y":9},{"x":29,"y":10},{"x":29,"y":11},{"x":29,"y":12},{"x":29,"y":20},{"x":29,"y":21},{"x":29,"y":22},{"x":30,"y":20},{"x":30,"y":21},{"x":30,"y":22},{"x":32,"y":5},{"x":32,"y":6},{"x":32,"y":7},{"x":32,"y":8},{"x":33,"y":5},{"x":33,"y":6},{"x":33,"y":7},{"x":33,"y":8},{"x":33,"y":9},{"x":33,"y":10},{"x":33,"y":11},{"x":33,"y":12},{"x":33,"y":13},{"x":34,"y":5},{"x":34,"y":6},{"x":34,"y":7},{"x":34,"y":8},{"x":34,"y":9},{"x":34,"y":10},{"x":34,"y":11},{"x":34,"y":12},{"x":34,"y":13},{"x":34,"y":14},{"x":34,"y":15},{"x":34,"y":16},{"x":34,"y":17},{"x":34,"y":18},{"x":34,"y":19},{"x":34,"y":20},{"x":34,"y":21},{"x":35,"y":6},{"x":35,"y":7},{"x":35,"y":8},{"x":35,"y":9},{"x":35,"y":10},{"x":35,"y":11},{"x":35,"y":12},{"x":35,"y":13},{"x":35,"y":14},{"x":35,"y":15},{"x":35,"y":16},{"x":35,"y":17},{"x":35,"y":18},{"x":35,"y":19},{"x":35,"y":20},{"x":35,"y":21},{"x":35,"y":22},{"x":36,"y":5},{"x":36,"y":6},{"x":36,"y":7},{"x":36,"y":8},{"x":36,"y":9},{"x":36,"y":10},{"x":36,"y":11},{"x":36,"y":12},{"x":36,"y":13},{"x":36,"y":14},{"x":36,"y":15},{"x":36,"y":16},{"x":36,"y":17},{"x":36,"y":18},{"x":36,"y":19},{"x":36,"y":20},{"x":36,"y":21},{"x":36,"y":22},{"x":37,"y":4},{"x":37,"y":5},{"x":37,"y":6},{"x":37,"y":7},{"x":37,"y":8},{"x":37,"y":9},{"x":37,"y":10},{"x":37,"y":20},{"x":37,"y":21},{"x":37,"y":22},{"x":38,"y":4},{"x":38,"y":5},{"x":38,"y":6},{"x":38,"y":7},{"x":39,"y":4},{"x":39,"y":5},{"x":39,"y":6},{"x":40,"y":4},{"x":40,"y":5},{"x":40,"y":6},{"x":41,"y":4},{"x":41,"y":5},{"x":41,"y":6},{"x":42,"y":4},{"x":42,"y":5},{"x":42,"y":6},{"x":42,"y":12},{"x":42,"y":13},{"x":42,"y":14},{"x":42,"y":15},{"x":42,"y":16},{"x":42,"y":17},{"x":42,"y":18},{"x":42,"y":19},{"x":43,"y":10},{"x":43,"y":11},{"x":43,"y":12},{"x":43,"y":13},{"x":43,"y":14},{"x":43,"y":15},{"x":43,"y":16},{"x":43,"y":17},{"x":43,"y":18},{"x":43,"y":19},{"x":43,"y":20},{"x":43,"y":21},{"x":43,"y":22},{"x":43,"y":23},{"x":43,"y":24},{"x":43,"y":25},{"x":43,"y":26},{"x":43,"y":27},{"x":44,"y":9},{"x":44,"y":10},{"x":44,"y":11},{"x":44,"y":12},{"x":44,"y":13},{"x":44,"y":14},{"x":44,"y":15},{"x":44,"y":16},{"x":44,"y":17},{"x":44,"y":18},{"x":44,"y":19},{"x":44,"y":20},{"x":44,"y":21},{"x":44,"y":22},{"x":44,"y":23},{"x":44,"y":24},{"x":44,"y":25},{"x":44,"y":26},{"x":44,"y":27},{"x":45,"y":8},{"x":45,"y":9},{"x":45,"y":10},{"x":45,"y":11},{"x":45,"y":12},{"x":45,"y":13},{"x":45,"y":17},{"x":45,"y":18},{"x":45,"y":19},{"x":45,"y":20},{"x":45,"y":21},{"x":45,"y":22},{"x":45,"y":23},{"x":45,"y":24},{"x":45,"y":25},{"x":45,"y":26},{"x":45,"y":27},{"x":46,"y":8},{"x":46,"y":9},{"x":46,"y":10},{"x":46,"y":11},{"x":46,"y":17},{"x":46,"y":18},{"x":46,"y":19},{"x":47,"y":8},{"x":47,"y":9},{"x":47,"y":10},{"x":47,"y":16},{"x":47,"y":17},{"x":47,"y":18},{"x":47,"y":19},{"x":48,"y":8},{"x":48,"y":9},{"x":48,"y":10},{"x":48,"y":16},{"x":48,"y":17},{"x":48,"y":18},{"x":48,"y":19},{"x":49,"y":8},{"x":49,"y":9},{"x":49,"y":10},{"x":49,"y":11},{"x":49,"y":16},{"x":49,"y":17},{"x":49,"y":18},{"x":50,"y":8},{"x":50,"y":9},{"x":50,"y":10},{"x":50,"y":11},{"x":50,"y":15},{"x":50,"y":16},{"x":50,"y":17},{"x":50,"y":18},{"x":51,"y":9},{"x":51,"y":10},{"x":51,"y":11},{"x":51,"y":12},{"x":51,"y":13},{"x":51,"y":15},{"x":51,"y":16},{"x":51,"y":17},{"x":51,"y":18},{"x":52,"y":9},{"x":52,"y":10},{"x":52,"y":11},{"x":52,"y":12},{"x":52,"y":13},{"x":52,"y":14},{"x":52,"y":15},{"x":52,"y":16},{"x":52,"y":17},{"x":53,"y":10},{"x":53,"y":11},{"x":53,"y":12},{"x":53,"y":13},{"x":53,"y":14},{"x":53,"y":15},{"x":53,"y":16},{"x":53,"y":17},{"x":54,"y":12},{"x":54,"y":13},{"x":54,"y":14},{"x":54,"y":15},{"x":54,"y":16},{"x":57,"y":8},{"x":57,"y":9},{"x":57,"y":10},{"x":57,"y":11},{"x":57,"y":12},{"x":57,"y":13},{"x":57,"y":14},{"x":58,"y":7},{"x":58,"y":8},{"x":58,"y":9},{"x":58,"y":10},{"x":58,"y":11},{"x":58,"y":12},{"x":58,"y":13},{"x":58,"y":14},{"x":58,"y":15},{"x":58,"y":16},{"x":59,"y":7},{"x":59,"y":8},{"x":59,"y":9},{"x":59,"y":10},{"x":59,"y":11},{"x":59,"y":12},{"x":59,"y":13},{"x":59,"y":14},{"x":59,"y":15},{"x":59,"y":16},{"x":59,"y":17},{"x":60,"y":6},{"x":60,"y":7},{"x":60,"y":8},{"x":60,"y":9},{"x":60,"y":13},{"x":60,"y":14},{"x":60,"y":15},{"x":60,"y":16},{"x":60,"y":17},{"x":60,"y":18},{"x":61,"y":6},{"x":61,"y":7},{"x":61,"y":8},{"x":61,"y":9},{"x":61,"y":15},{"x":61,"y":16},{"x":61,"y":17},{"x":61,"y":18},{"x":62,"y":6},{"x":62,"y":7},{"x":62,"y":8},{"x":62,"y":16},{"x":62,"y":17},{"x":62,"y":18},{"x":62,"y":19},{"x":63,"y":6},{"x":63,"y":7},{"x":63,"y":8},{"x":63,"y":16},{"x":63,"y":17},{"x":63,"y":18},{"x":63,"y":19},{"x":64,"y":6},{"x":64,"y":7},{"x":64,"y":8},{"x":64,"y":14},{"x":64,"y":15},{"x":64,"y":16},{"x":64,"y":17},{"x":64,"y":18},{"x":64,"y":19},{"x":65,"y":7},{"x":65,"y":8},{"x":65,"y":9},{"x":65,"y":10},{"x":65,"y":11},{"x":65,"y":12},{"x":65,"y":13},{"x":65,"y":14},{"x":65,"y":15},{"x":65,"y":16},{"x":65,"y":17},{"x":65,"y":18},{"x":65,"y":19},{"x":66,"y":7},{"x":66,"y":8},{"x":66,"y":9},{"x":66,"y":10},{"x":66,"y":11},{"x":66,"y":12},{"x":66,"y":13},{"x":66,"y":14},{"x":66,"y":15},{"x":66,"y":16},{"x":66,"y":17},{"x":66,"y":18},{"x":67,"y":7},{"x":67,"y":8},{"x":67,"y":9},{"x":67,"y":10},{"x":67,"y":11},{"x":67,"y":12},{"x":67,"y":13},{"x":67,"y":14},{"x":67,"y":15},{"x":67,"y":16},{"x":67,"y":17},{"x":67,"y":18},{"x":67,"y":19},{"x":68,"y":12},{"x":68,"y":13},{"x":68,"y":14},{"x":68,"y":15},{"x":68,"y":16},{"x":68,"y":17},{"x":68,"y":18},{"x":68,"y":19},{"x":69,"y":17},{"x":69,"y":18},{"x":69,"y":19},{"x":69,"y":20},{"x":69,"y":21},{"x":70,"y":17},{"x":70,"y":18},{"x":70,"y":19},{"x":70,"y":20},{"x":70,"y":21},{"x":71,"y":18},{"x":71,"y":19},{"x":71,"y":20},{"x":71,"y":21},{"x":72,"y":18},{"x":72,"y":19},{"x":72,"y":20},{"x":72,"y":21},{"x":73,"y":18},{"x":73,"y":19},{"x":73,"y":20},{"x":73,"y":21},{"x":74,"y":11},{"x":74,"y":12},{"x":74,"y":13},{"x":74,"y":14},{"x":74,"y":15},{"x":74,"y":16},{"x":74,"y":17},{"x":74,"y":18},{"x":74,"y":19},{"x":74,"y":20},{"x":75,"y":10},{"x":75,"y":11},{"x":75,"y":12},{"x":75,"y":13},{"x":75,"y":14},{"x":75,"y":15},{"x":75,"y":16},{"x":75,"y":17},{"x":75,"y":18},{"x":75,"y":19},{"x":76,"y":9},{"x":76,"y":10},{"x":76,"y":11},{"x":76,"y":12},{"x":76,"y":13},{"x":76,"y":14},{"x":76,"y":15},{"x":76,"y":16},{"x":76,"y":17},{"x":76,"y":18},{"x":76,"y":19},{"x":76,"y":20},{"x":76,"y":21},{"x":77,"y":8},{"x":77,"y":9},{"x":77,"y":10},{"x":77,"y":11},{"x":77,"y":12},{"x":77,"y":16},{"x":77,"y":17},{"x":77,"y":18},{"x":77,"y":19},{"x":77,"y":20},{"x":77,"y":21},{"x":78,"y":8},{"x":78,"y":9},{"x":78,"y":10},{"x":78,"y":11},{"x":78,"y":12},{"x":78,"y":18},{"x":78,"y":19},{"x":78,"y":20},{"x":78,"y":21},{"x":79,"y":8},{"x":79,"y":9},{"x":79,"y":10},{"x":79,"y":19},{"x":79,"y":20},{"x":79,"y":21},{"x":79,"y":22},{"x":80,"y":8},{"x":80,"y":9},{"x":80,"y":10},{"x":80,"y":19},{"x":80,"y":20},{"x":80,"y":21},{"x":80,"y":22},{"x":81,"y":8},{"x":81,"y":9},{"x":81,"y":10},{"x":81,"y":19},{"x":81,"y":20},{"x":81,"y":21},{"x":81,"y":22},{"x":82,"y":8},{"x":82,"y":9},{"x":82,"y":10},{"x":82,"y":19},{"x":82,"y":20},{"x":82,"y":21},{"x":83,"y":8},{"x":83,"y":9},{"x":83,"y":10},{"x":83,"y":19},{"x":83,"y":20},{"x":83,"y":21},{"x":84,"y":19},{"x":84,"y":20},{"x":84,"y":21}];
let blockarray = [];
let blockwidth = 5;
let blockheight = 5;
let blockcolumns = 83;
let blockrows = 27;
let blockcount = 0;

//block start

let blockx = 42;
let blocky = 45;

let score =0;
let gameover = false;
let gamewin = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d"); //used for drawing on the board


    //draw initial player1
    context.fillStyle = "#ab4642";
    context.fillRect(player1.x, player1.y, player1.width, player1.height)

    requestAnimationFrame(update);
    document.addEventListener("keydown", movePlayer);

    //create blocks
    createblocks();
}

function update() {
    requestAnimationFrame(update);
    if (gamewin){
        return;
    }
    if (gameover){
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //player 1
    context.fillStyle = "#ab4642";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    context.fillStyle = "#b8b8b8";
    ball.x += ball.velocityx;
    ball.y += ball.velocityy;
    context.fillRect(ball.x, ball.y, ball.width, ball.height);

    //bounce ball off walls
    if (ball.y <= 0) {
        //if ball touch top
        ball.velocityy *= -1;
    }
    else if (ball.x <= 0 || (ball.x +ball.width) >= boardwidth){
        ball.velocityx *= -1;
    }
    else if (ball.y + ball.height >= boardheight){
        //if the ball touches the bottom
        ///ball.velocityy *= -1;
        //gameover?!
        context.fillStyle = "#ab4642";
        context.font = "40px Roboto";
        context.fillText("game over!", 100, 400);
        context.font = "20px Roboto";
        context.fillText("press 'space' to restart",145,450);
        gameover = true;
    }
    //bounce off the player
    if (topcollision(ball, player1) || bottomcollision(ball, player1)){
        ball.velocityy *= -1; //flip y up or down
    }
    else if (leftcollision(ball, player1) || rightcollision(ball, player1)){
        ball.velocityx *= -1;
    }
    
    
    //blocks
    //context.fillStyle = "#ab4642";
    for (let i = 0; i < blockarray.length; i++) {
        let block = blockarray[i];
        if(!block.break) {
            if (topcollision(ball, block) || bottomcollision(ball,block)) {
                block.break = true;
                //breakblock(i);
                ball.velocityy *= -1;
                
                blockcount -= 1;
                //ballsizecount += 1;
                score += 1;
            }
            else if (leftcollision(ball, block) || rightcollision(ball,block)){
                block.break = true;
                //breakblock(i);
                ball.velocityx *= -1;
                blockcount -= 1;
                
                score += 1;
                //ballsizecount += 1;

            }
            context.fillStyle = block.colour;
            context.fillRect(block.x, block.y, block.height, block.width);
        }
    }

    //score
    context.font = "20px Roboto";
    context.fillText(score, 10, 25);

    //gamewin
    if (blockcount <= 10){
        context.font = "40px Roboto";
        context.fillText("you win!", 100, 400);
        context.font = "20px Roboto";
        context.fillText("press 'space' to play again",145,450)
        gamewin = true;
        //youwon.src = "starp.png";
        //endScreen.style.display = "";
    }
    //ball size
    //if (ballsizecount == 100) {
        //ball.width += 1;
        //ball.height += 1;
        //ball.velocityx +=3;
        //ball.velocityy +=1;
}


function outofbounds(xpos) {
    return (xpos < 0 || xpos + playerwidth > boardwidth );
}

function movePlayer(e) {
    if(gameover || gamewin){
        if (e.code == "Space"){
            resetgame();
        }
    }

    if(e.code == "ArrowLeft") {
        //player1.x -= player1.velocityx;
        let nextplayerx = player1.x - player1.velocityx;
        if(!outofbounds(nextplayerx)) {
            player1.x = nextplayerx;
        }
    }
    
    else if (e.code == "ArrowRight"){
        //player1.x += player1.velocityx;
        let nextplayerx = player1.x + player1.velocityx;
        if(!outofbounds(nextplayerx)) {
            player1.x = nextplayerx;
        }
    }
}

function detectcollision(a, b) {
    return a.x < b.x +b.width && 
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

function topcollision(ball, block) { 
    return detectcollision(ball,block) && (ball.y + ball.height) >= block.y;
}

function bottomcollision(ball, block) {
    return detectcollision(ball,block) && (block.y + block.height) >= block.y;
}

function leftcollision(ball, block){
    return detectcollision(ball, block) && (ball.x + ball.width) >= block.x;
}

function rightcollision(ball, block){
    return detectcollision(ball, block) && (block.x + block.width) >= ball.x;
}

function createblocks() {
    blockarray = []; 
    for (let c = 0; c < blockcolumns; c++) {
        for (let r = 0; r < blockrows; r++) {
            let block = {
                x : blockx + c*blockwidth,
                y : blocky + r*blockheight,
                width : blockwidth,
                height : blockheight,
                break : false,
                colour : "#ab4642"
            }
            blockarray.push(block);
        }
    }
    blockcount = blockarray.length;

    for (let i = 0; i < blackpixels.length; i++) {
        blockarray[blackpixels[i].x *blockrows + blackpixels[i].y].break = true;
    }
}

function resetgame(){
    gameover = false;
    gamewin = false;
    player1= {
        x :boardwidth/2 -playerwidth/2,
        y : boardheight - playerheight - 5,
        width : playerwidth,
        height : playerheight,
        velocityx : playervelocityx
    
    
    } 
    ball= {
        x : boardwidth/2,
        y : boardheight/2,
        height : ballheight,
        width : ballwidth,
        velocityx : ballvelocityx,
        velocityy : ballvelocityy
    }
    blockarray = [];
    score = 0;
    createblocks();
   
}
function breakblock(i){
    blockarray[i].break = true;
    y = i % blockrows;
    x = i / blockrows;
    if (y > 0){
        blockarray[i-1].break = true;
    }
    if (x > 0){
        blockarray[i - blockrows].break = true;
    }
}



picturearray = [""]
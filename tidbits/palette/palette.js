

let deci = "0xff0000";
console.log(deci);
let hexi = parseInt(deci,16);
console.log(deci);


function whatcol(){
    deci = document.getElementById("colourin").value;
    
    console.log(deci);

    // # lower and upper bounds:
    const redHex =  deci.substring(1, 3);
    const greenHex = deci.substring(3, 5);
    const blueHex = deci.substring(5, 7);
    console.log(redHex, greenHex, blueHex);

    const intRedHex = parseInt(redHex,16);
    const intGreenHex = parseInt(greenHex,16);
    const intBlueHex = parseInt(blueHex, 16);

    let lowerBound = Math.min(intRedHex, intGreenHex, intBlueHex);
    let upperBound = Math.max(intRedHex, intGreenHex, intBlueHex);
    let midBound = lowerBound + ((upperBound-lowerBound)/2);


    let hexLB = lowerBound;
    let hexUB = upperBound;
    let hexMB = midBound;

    console.log(hexLB, hexUB, hexMB);

    // # now assign the palette values:

    let pRed = (hexUB << 16) | (hexLB << 8) | hexLB;
    let pBlue = (hexLB << 16) | (hexLB << 8) | hexUB;
    let pGreen = (hexLB << 16) | (hexUB << 8) | hexLB;
    let pCyan = (hexLB << 16) | (hexUB << 8) | hexUB;
    let pMagenta = (hexUB << 16) | (hexLB << 8) | hexUB;
    let pYellow = (hexUB << 16) | (hexUB << 8) | hexLB;
    let pOrange = (hexUB << 16) | (hexMB << 8) | hexLB;
    let pTBGreen = (hexMB << 16) | (hexUB << 8) | hexLB;
    let pFGreen = (hexLB << 16) | (hexUB << 8) | hexMB;
    let pSBlue = (hexLB << 16) | (hexMB << 8) | hexUB;
    let pDPurple = (hexMB << 16) | (hexLB << 8) | hexUB;
    let pHPink = (hexUB << 16) | (hexLB << 8) | hexMB;



    console.log(pRed, pBlue, pGreen);


    document.getElementById("red").style.backgroundColor = intoHex(pRed);
    document.getElementById("orange").style.backgroundColor = intoHex(pOrange);
    document.getElementById("yellow").style.backgroundColor = intoHex(pYellow);
    document.getElementById("green").style.backgroundColor = intoHex(pGreen);
    document.getElementById("cyan").style.backgroundColor = intoHex(pCyan);
    document.getElementById("blue").style.backgroundColor = intoHex(pBlue);
    document.getElementById("purple").style.backgroundColor = intoHex(pDPurple);
    document.getElementById("pink").style.backgroundColor = intoHex(pHPink);

    document.getElementById("redheader").textContent = "#" + intoHex(pRed);
    document.getElementById("orangeheader").textContent = "#" + intoHex(pOrange);
    document.getElementById("yellowheader").textContent = "#" + intoHex(pYellow);
    document.getElementById("greenheader").textContent = "#" + intoHex(pGreen);
    document.getElementById("cyanheader").textContent = "#" + intoHex(pCyan);
    document.getElementById("blueheader").textContent = "#" + intoHex(pBlue);
    document.getElementById("purpleheader").textContent = "#" + intoHex(pDPurple);
    document.getElementById("pinkheader").textContent = "#" + intoHex(pHPink);
}

function intoHex(hexin){
    let hexstring = hexin.toString(16).toUpperCase();
    while(hexstring.length < 6){
        hexstring = "0" + hexstring;
    }
    return hexstring;
}

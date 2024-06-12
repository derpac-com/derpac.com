

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

    document.getElementById("red").style.backgroundColor = pRed.toString(16);
    document.getElementById("orange").style.backgroundColor = pOrange.toString(16);
    document.getElementById("yellow").style.backgroundColor = pYellow.toString(16);
    document.getElementById("green").style.backgroundColor = pGreen.toString(16);
    document.getElementById("cyan").style.backgroundColor = pCyan.toString(16);
    document.getElementById("blue").style.backgroundColor = pBlue.toString(16);
    document.getElementById("purple").style.backgroundColor = pDPurple.toString(16);
    document.getElementById("pink").style.backgroundColor = pHPink.toString(16);

    document.getElementById("redheader").textContent = "#" + pRed.toString(16);
    document.getElementById("orangeheader").textContent = "#" + pOrange.toString(16);
    document.getElementById("yellowheader").textContent = "#" + pYellow.toString(16);
    document.getElementById("greenheader").textContent = "#" + pGreen.toString(16);
    document.getElementById("cyanheader").textContent = "#" + pCyan.toString(16);
    document.getElementById("blueheader").textContent = "#" + pBlue.toString(16);
    document.getElementById("purpleheader").textContent = "#" + pDPurple.toString(16);
    document.getElementById("pinkheader").textContent = "#" + pHPink.toString(16);
 

}



function intoHex(intValue){
    let hexString = intValue.toString(16);
    hexString = hexString.toUpperCase();
    return '0x' + hexString;

}
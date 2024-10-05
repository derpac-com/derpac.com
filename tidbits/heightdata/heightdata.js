const canvas = document.getElementById('heatmapCanvas');
const ctx = canvas.getContext('2d');





function valueToColor(value) {
  

    
    
    if(value > 900){
        hue = "#7e1700";
    }
    else if(value >= 800){
        hue = "#9a5215";
    }
    else if(value >= 600){
        hue = "#b0802a";
    }
    else if(value >= 500){
        hue = "#c8b455";
    }
    else if(value >= 400){
        hue = "#d0e3a4";
    }
    else if(value >= 200){
        hue = "#a5e6d3";
    }
    else if(value >= 100){
        hue = "#5dc1d3";
    }
    else if(value >= 75){
        hue = "#3291c2";
    }
    else if(value > 0){
        hue = "#2064af";
    }
    else{
        hue = "#033198";
    }

    
 
    return hue
}




// for (let y = 0; y < canvasHeight; y++) {
  
//     for (let x = 0; x < canvasWidth; x++) {
       
//         let value = array[y][x];
//         let color = valueToColor(value);
//         // Draw pixel on canvas
//         ctx.fillStyle = color;
//         ctx.fillRect(x,y, 1, 1);
//     }
// }


function decodeRLE(encoded){
    let decoded = [];
    for (let [value, count] of encoded) {
        for (let i = 0; i < count; i++) {
            decoded.push(value);
        }
    }
    return decoded;
}

function reshapeTo2DArray(arr, rows, cols) {
    let reshaped = [];
    for (let i = 0; i < rows; i++) {
        reshaped.push(arr.slice(i * cols, i * cols + cols));
    }
    return reshaped;
}



function decodeRunLength2D(encoded, rows, cols) {
    let decoded = decodeRLE(encoded);
    let reshaped2D = reshapeTo2DArray(decoded, rows, cols);
    return reshaped2D;
}


const spinner = document.getElementById('spinner');
const key = document.getElementById('key');
spinner.style.display = 'inline-block'; 

fetch('encoded.json')
            .then(response => response.json())
            .then(data => {
                console.log("gamer");
                encoded = data;
                const canvasWidth = 1320;
                const canvasHeight = 2460;
                canvas.height = canvasHeight ;
                canvas.width = canvasWidth ;
                console.log(canvasHeight, canvasWidth);

                let rows = 2460;
                let cols = 1320;

                let decoded2D = decodeRunLength2D(encoded, rows, cols);
                console.log("decoded 2d: ",decoded2D);


                for (let y = 0; y < canvasHeight; y++) {
  
                    for (let x = 0; x < canvasWidth; x++) {
                       
                        let value = decoded2D[y][x];
                        let color = valueToColor(value);
                        // Draw pixel on canvas
                        ctx.fillStyle = color;
                        ctx.fillRect(x,y, 1, 1);
                       
                    }
                    spinner.style.display = 'none'; 
                    key.style.display = 'inline-block'
             
                }

                // `data` is now an array
            })
            .catch(error => console.error('Error:', error));


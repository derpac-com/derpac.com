const target = document.getElementById("target");
const typing = document.getElementById("typing");
const results = document.getElementById("results-area");
const timer = document.getElementById("timer");

let startTime;
let timerInterval;
let timerStarted = false;
let currentIndex = 0;
// listen for input in target. Set target value to target text. put the target text into an array

//listen for input in typing. Start the timer... have call a function everytime that checks the value entered is correct
// when all correct call a function to clear the typing area and add the result to the results table

window.onload = function(){
    typing.value = "";
    target.value = "";
};

target.addEventListener("input", function(){
    let targetText = target.value;
    aim = arrayFromString(targetText);
});

typing.addEventListener("input", function(event){
    // if (event.key === 'Backspace') {
    //     checkpoints--;
    //     return;
    // }
    if (!timerStarted) {
        startTimer();
        timerStarted = true;
    }
    let typingVal = event.target.value;

    console.log(aim);
    //start timer
    //check each letter is the same as in targetArr
    if (checkPoints(typingVal)) {
        console.log('Correct so far!');
    } else {
        console.log('Incorrect input!');
    }

    if (typingVal === aim.join('')) {
        console.log('Full match!');
        stopTimer();
        checkpoints = 0;
        const timeTaken = (Date.now() - startTime) / 1000;
        addResult(typingVal, timeTaken);
        typing.value = "";
        setTimeout(() => {
            currentIndex = 0;
            document.getElementById('progress-bar').style.width = '0%';
          }, "200");
    }
});


//checkpoint / progress system:
function updateCheckpoints() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (currentIndex / aim.length) * 100;
    progressBar.style.width = `${percentage}%`;

};

document.querySelector('#typing').addEventListener('keydown', function(event) {
   
    if (event.key === aim[currentIndex]) {
        currentIndex++; 
        updateCheckpoints(); 
    }
});


function arrayFromString(string){
    let targetArr = [...string];
    return targetArr
}

let checkpoints = 0;
function checkPoints(typingVal){
    for(i =0; i < typingVal.length; i++){

        if (typingVal[i] !== aim[i]) {
            incorrect();
            return false;
        }
        
    }
    checkpoints++;
    console.log(checkpoints);
    correct()
    return true;
}


function incorrect(){
    typing.style = "color: #A55050"
    setTimeout(() => {
        typing.style = "color: default"
      }, "200");
      
}

function correct(){
    typing.style = "color: #50A550"
    setTimeout(() => {
        typing.style = "color: default"
      }, "200");
}

let time = 0;
let intervalId;

function startTimer() {
    startTime = Date.now();
    updateTimer(); 
    timerInterval = setInterval(updateTimer, 100); 
}

function updateTimer() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    timer.textContent = `${elapsedTime.toFixed(2)}`;
}

function stopTimer() {
    clearInterval(timerInterval);
    timer.textContent = '0.00'; 
    timerStarted = false;
}


function addResult(string, time) {
    const newRow = document.createElement('tr');
    const stringCell = document.createElement('td');
    const timeCell = document.createElement('td');

    stringCell.textContent = string;
    timeCell.textContent = time.toFixed(2);

    newRow.appendChild(stringCell);
    newRow.appendChild(timeCell);

    results.appendChild(newRow);
}


//wanna add checkpoints/loading bar that fills when you type
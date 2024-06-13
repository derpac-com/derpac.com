window.onload = function(){

const valuesArray = []; // Initialize an empty array
const sortedArray = []; // Initialize an empty array for sorted values
let currentIndex = 0; // Track current index for comparison
let compareIndex = 1;

document.getElementById("inputF").addEventListener("keydown", function(event) {
    console.log("enter");
    if(event.key === "Enter"){
        //event.preventDefault();
        const inputValue = this.value;
        console.log("enter");

        if (inputValue.trim() !== "") {
            rankElements.push(inputValue);
            const li = document.createElement('li');
            li.textContent = inputValue;
            document.getElementById('list').appendChild(li);
            this.value = '';
    }
}

});



document.getElementById("inputF").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const inputValue = this.value;  

        if (inputValue.trim() !== "") {
            // Add the input value to the array
            valuesArray.push(inputValue);
            console.log(valuesArray); // Print the array to the console for debugging

            // Create a new list item element and add it to the list
            const li = document.createElement('li');
            li.textContent = inputValue;
            document.getElementById('list').appendChild(li);

            // Clear the input field
            this.value = '';
        }
    }
});



function compareNext() {
    if (currentIndex >= valuesArray.length - 1) {
        displaySortedArray();
        return;
    }

    if (compareIndex >= valuesArray.length) {
        sortedArray.push(valuesArray[currentIndex]);
        currentIndex++;
        compareIndex = currentIndex + 1;
        compareNext();
        return;
    }

    document.getElementById('compare').style.display = 'block';
    document.getElementById('option1').textContent = valuesArray[currentIndex];
    document.getElementById('option2').textContent = valuesArray[compareIndex];
}

document.getElementById('option1').addEventListener('click', function() {
    compareIndex++;
    compareNext();
});

document.getElementById('option2').addEventListener('click', function() {
    [valuesArray[currentIndex], valuesArray[compareIndex]] = [valuesArray[compareIndex], valuesArray[currentIndex]];
    compareIndex++;
    compareNext();
});

function displaySortedArray() {
    document.getElementById('compare').style.display = 'none';

    // Adding the last compared element
    sortedArray.push(valuesArray[currentIndex]);


    const sortedList = document.getElementById('sortedList');
    sortedList.innerHTML = ''; // Clear the previous sorted list

    sortedArray.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        sortedList.appendChild(li);
    });
}

// Start comparison after some entries are made
document.getElementById('inputF').addEventListener('blur', function() {
    if (valuesArray.length > 1) {
        compareNext();
    }
});
}



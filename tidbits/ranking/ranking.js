window.onload = function(){

const elementArray = []; 
const sortedArray = []; 
let lowestIndex = 0; 
let compareIndex = 1;




document.getElementById("inputF").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();                
        const inputValue = this.value;  

        if (inputValue.trim() !== "") {
            // Add the input value to the array to be used for comparison in the selection sort
            elementArray.push(inputValue);
           // console.log(elementArray); //debugg

            
            const li = document.createElement('li');                     //creates new list element
            li.textContent = inputValue;
            document.getElementById('list').appendChild(li);                //adds the value of the input feild to the list :D

            // Clears the input field for the next input
            this.value = '';
        }
    }
});



function compareNext() {                                       // shows the sorted array whence it is made
    if (lowestIndex >= elementArray.length - 1) {
        displaySortedArray();
        return;
    }

    if (compareIndex >= elementArray.length) {             // checks to see if there is a new lowestIndex and plonks it into the sorted array if there is
        sortedArray.push(elementArray[lowestIndex]);
        lowestIndex++;
        compareIndex = lowestIndex + 1;            // moves the compare index along to the next
        compareNext();            //checks that it isnt done before moving on
        return;
    }

    document.getElementById('compare').style.display = 'block';                      // creates a little block to contain the two buttons for option1 and 2     
    document.getElementById('option1').textContent = elementArray[lowestIndex];         // sets the content of the buttons to the lowestindex and the compare index 
    document.getElementById('option2').textContent = elementArray[compareIndex];
} 

document.getElementById('option1').addEventListener('click', function() {          // when option1 is clicked it moves the compare index on and checks compare next to make sure it isnt done
    compareIndex++; 
    compareNext();
});

document.getElementById('option2').addEventListener('click', function() {
    [elementArray[lowestIndex], elementArray[compareIndex]] = [elementArray[compareIndex], elementArray[lowestIndex]];          // when option 2 is clicked it will swap the elements in the array 
    compareIndex++;                                                                                                            // move on the compare index and check it isnt done
    compareNext();
});

function displaySortedArray() {                                        // when the comparenext is called it will do this function
    document.getElementById('compare').style.display = 'none';

    
    sortedArray.push(elementArray[lowestIndex]);                       // it pushes the lowest index onto the sorted array ad specified by the selection sort algorithm


    const sortedList = document.getElementById('sortedList');                       // then creates the sorted list element
    sortedList.innerHTML = '';                                      // clear the previous sorted list so it looks correct

    sortedArray.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        sortedList.appendChild(li);                                            // adds on the child, thus creating the list in order
    });
}

// Start comparison after some entries are made
document.getElementById('inputF').addEventListener('blur', function() {               // this is meant to start the comparison when the length of the array is > 1 so it will start when there are 
                                                                                             //some enteries but its a bit dodge
    if (elementArray.length > 1) {
        compareNext();
    }
});
}



let container = document.querySelector(".container");


CreateDivs();


// Change the size of the grid
const change = document.querySelector("#change")

change.addEventListener("click", function() {

    let n;
    
    // Keep prompting the user until a valid input is provided
    while (true) {
        // Prompt the user for a value
        n = prompt("Enter the size of the grid. Maximum is 100.");

        // Convert the input to an integer
        n = parseInt(n, 10);

        // Check if the input is a valid integer between 1 and 100
        if (Number.isInteger(n) && n >= 1 && n <= 100) {
            break;  // Exit the loop if the input is valid
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }

    // Change the grid
    CreateDivs(n);
})


const clear = document.querySelector("#clear");
clear.addEventListener("click", function() {

    // Changes boxes background color to white
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(function(elem) {
        elem.style.backgroundColor = "white";
    })
})


// Creates n*n divs in a square
function CreateDivs (n=16) {
    container.innerHTML = "";

    // Create n columns
    for (let i = 0; i < n; i++) {

        // Create element and assign class column
        let column = document.createElement("div");
        column.classList.add("column");

        // For every column, create n boxes
        for (let j = 0; j < n; j++) {

            // Create box, assign class
            let box = document.createElement("div");
            box.classList.add("box");
            // Append to column
            column.appendChild(box);
        }
        // Append to the container
        container.appendChild(column);
    }

    // Changes randomly boxes background color when hover over them
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {

            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            elem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    })

}

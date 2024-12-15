let n = 64;
let container = document.querySelector(".container");

// Creates n*n divs in a square
function CreateDivs () {

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
}

CreateDivs();
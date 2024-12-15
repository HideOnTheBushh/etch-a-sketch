let container = document.querySelector(".container");

CreateDivs();

let boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        elem.style.backgroundColor = "blue";
    })
})

















// Creates n*n divs in a square
function CreateDivs (n=16) {

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

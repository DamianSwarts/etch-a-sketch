const body = document.getElementById('body');
const grid = document.getElementById("main");

/* Create container divs for the display of the grid*/
function createGrid(size){
    for (let i = 1; i <= size; i++){
        const moreContainers = document.createElement('div');
        moreContainers.classList = "container";
        grid.appendChild(moreContainers);
    }

    const container = document.querySelectorAll(".container");
    container.forEach(function (container){
        for (let j = 1; j <= size; j++){
            const div = document.createElement('div');
            div.classList = "grid-cell";
            container.appendChild(div);       
        }
    });

    const gridCell = document.querySelectorAll(".grid-cell")
    // Event listener to change the color of a cell when the user hovers over it
    gridCell.forEach(function (cell){
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "yellowgreen";
        });
    });
}
createGrid(16);

// Function that changes the size of the grid depending on the size the user wants it
function changeGridSize() {
    grid.innerHTML = "";
    const size = Number(prompt("How many rows do you want the grid to be? (NO MORE THAN 100)"));
    if (size <= 100 && size >= 0){
        createGrid(size);
    } 
    else {
        alert("Please ensure that you enter a number between 0 and 100.")
    }
}
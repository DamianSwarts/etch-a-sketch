/* Create 15 more container divs to go with the one already 
in my HTML file*/
for (let i = 0; i < 15; i++){
    const moreContainers = document.createElement('div');
    moreContainers.classList = "container";
    document.getElementById('body').appendChild(moreContainers);
}

// Create 16 div elements for each of the containers
const container = document.querySelectorAll(".container");
container.forEach(function (container){
    for (let j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.classList = "grid-cell";
        container.appendChild(div);       
    }
});

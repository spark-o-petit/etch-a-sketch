const container = document.getElementById('container')
const ponderColor = ["(60, 84, 134)", "(113, 139, 190)", "(182, 198, 211)", "(127, 133, 137)", "(158, 144, 130)", "(235, 186, 155)", "(241, 221, 183)"]

function buildGrid(numberRows,numberCols) {
    let totalNumBoxes = numberRows * numberCols;
    function randomPonderColor () {

    }
    for (let i = 0; i < totalNumBoxes; i++) {
        const buildingBox = document.createElement('div');
        buildingBox.style.height = `${1000/numberCols}px`;
        buildingBox.style.width = `${1000/numberCols}px`;
        buildingBox.addEventListener ('mouseover', () => {
            buildingBox.style.backgroundColor = `rgb${ponderColor[Math.floor(Math.random() * 7)]}`;
            buildingBox.style.animation = "fade-in 1s ";
        });
        container.appendChild(buildingBox);
        i = i ++;
        
    }
}

//main code

let gridRows = prompt("How many rows in your head? (WARN : It should be no more than 100)");
let gridCols = prompt("Then, how many columns in your head? (WARN : It should be no more than 100)");
if (Number.isInteger(gridRows*gridCols) && gridRows>0 && gridCols>0) {
    buildGrid (gridRows, gridCols);
} else {
    alert("You should put natural number! Please set again.")
}
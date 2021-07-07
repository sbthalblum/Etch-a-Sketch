const square = document.createElement('div');
square.setAttribute('class', 'square')

// square.style.height = w;

const container = document.querySelector('#container');

let createGrid = function (numOfRows) {
    container.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
    let gridArea = numOfRows * numOfRows;
    for (i=0; i<gridArea; i++){
        container.appendChild(square.cloneNode(true));
    }
}


let height = document.getElementsByClassName('square').offsetHeight
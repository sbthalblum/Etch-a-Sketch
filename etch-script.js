const container = document.querySelector('#container');

//creates grid, must input number of rows
let createGrid = function (numOfRows) {
    container.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
    let gridArea = numOfRows * numOfRows;
    for (i=0; i<gridArea; i++){
        const square = document.createElement('div');
        square.setAttribute('class', 'square')
        square.setAttribute('style', 'border: .2px solid lightgray;')
        let hue = 90; 
        let x = 10;
        square.addEventListener("mouseover", () => {
            hue = hue - x;
            square.setAttribute('style', `background-color: hsl(0, 0%, ${hue}%);`);
        })
        container.appendChild(square);
    }
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(e => e.remove());
})

function getInputValue () {
    let inputVal = document.querySelector("#input").value;
    return Number(inputVal);
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    let number = getInputValue();
    if (number > 100) {
        alert("Please enter a number between 1 and 100")
    }
    else {
    createGrid(getInputValue());
    }
})

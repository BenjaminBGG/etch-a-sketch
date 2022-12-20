            //  --- GLOBAL VARIABLES --- //            
var penColor = 'var(--black)';
let click = true;

            //  --- INITIALIZE GAME ---  //
createGrid(16);

            //  --- FUNCTIONS ---  //
function createGrid(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    let amount = math.square(size);
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', setCellColor);
        square.style.backgroundColor = 'var(--white)';
        board.insertAdjacentElement('beforeend', square);
    }
}

function setCellColor () {
    if(click){    
        if(penColor === 'random'){
            this.style.backgroundColor = getRandomColor();
        } else {
            this.style.backgroundColor = penColor;
        }
    }
}

function setPenColor(choice) {
    penColor = choice;
}

function getRandomColor() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
}

function setGridSize(size) {
    if (size >= 2 && size <= 100) {
        document.querySelector('.error').textContent = '';
        resetGrid(size);
    } else {
        document.querySelector('.error').textContent = 'Input Must Be Between 2 & 100';
    }
};

// Reset to starting conditions
function resetGrid(size = 16) {
    createGrid(size);
    penColor = 'var(--black)';
    click = true;
    document.querySelector('.mode').textContent = 'Mode: Coloring';
    document.querySelector('.pen-style').textContent = 'Pen Style: Black';
    document.querySelector('.set-size').value = size;
};

            //  --- EVENT LISTENERS ---  //

// (De)activate pen on click
document.querySelector('body').addEventListener('click', (e) => { 
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT'){
        click = !click;
        if(click) { 
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
        }
    } 
});

// Update pen style indicator
document.querySelector('.black-button').addEventListener('click', () => {
    document.querySelector('.pen-style').textContent = 'Pen Style: Black';
});

document.querySelector('.gray-button').addEventListener('click', () => {
    document.querySelector('.pen-style').textContent = 'Pen Style: Gray';
});

document.querySelector('.random-button').addEventListener('click', () => {
    document.querySelector('.pen-style').textContent = 'Pen Style: Random';
});

document.querySelector('.eraser-button').addEventListener('click', () => {
    document.querySelector('.pen-style').textContent = 'Pen Style: Eraser';
});

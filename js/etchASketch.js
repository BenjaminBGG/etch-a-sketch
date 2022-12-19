            
            
            //  --- GLOBAL VARIABLES --- //            
var penColor = 'var(--black)';
var color = 'var(--black)';
let click = true;
            //  --- CREATE GRID ---  //

createGrid(16);

            //  --- FUNCTIONS ---  //

        // - GET NEW COLOR - //

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

function setColor(choice) {
    penColor = choice;
    console.log(choice);
}

function getRandomColor() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16); 
  }

function setSize(size) {
    if(size >= 2 && size <= 100){
        document.querySelector('.error').textContent = '';
        createGrid(size);
    }
    else {
        document.querySelector('.error').textContent = 'Input Must Be Between 2 & 100';
    }
};

function resetGrid() {
    createGrid(16);
    penColor = 'var(--black)';
    click = true;
    document.querySelector('.mode').textContent = 'Mode: Coloring';
};

            //  --- EVENT LISTENERS ---  //

// (de)activate pen on click

document.querySelector('body').addEventListener('click', (e) => { 
    if (e.target.tagName != 'BUTTON'){
        click = !click;
        if(click) { 
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
        }
    }
});


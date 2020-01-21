// main.js

const container = document.querySelector('.grid-container');

function generateSquares (num) {

    for (let i = 0; i < num; i++) {
        const child = document.createElement('div');
        child.classList.add('grid-child');
        container.appendChild(child);
    }      
}

function addListener () {
    const children = document.querySelectorAll('.grid-child');
    children.forEach(child => {
        child.addEventListener("mouseenter", function( event ) {   
            console.log('event firing');
            // highlight the mouseenter target
            event.target.style.backgroundColor = `rgb(135, 206, 235)`;
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.backgroundColor = '';
            }, 5000);
          }, false);
    })
}

function reset () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const gridsize = prompt('How may rows and columns should the new grid have?', 16);
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    const numChildren = gridsize * gridsize;
    console.log(numChildren);
    generateSquares(numChildren);
    addListener();
}

// generates a random color but results in input lag

function randomRGB () {
    const ran1 = Math.floor(Math.random() * 255);
    const ran2 = Math.floor(Math.random() * 255);
    const ran3 = Math.floor(Math.random() * 255);
    return `rgb(${ran1}, ${ran2}, ${ran3})`;
}


const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', reset);


generateSquares(256);
addListener();
createGrid(40);

function createGrid(gridSize) {
    const container = document.querySelector('.container');
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        for (let ii = 0; ii < gridSize; ii++) {
            const gridRowCell = document.createElement('div')
            gridRowCell.addEventListener('mouseover', function(){
                this.style.backgroundColor = 'red';
            })
            gridRowCell.classList.add('grid-cell');
            gridRow.appendChild(gridRowCell);
        }
        container.appendChild(gridRow);
    }
}



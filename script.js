const container = document.querySelector('.container');

function createGrid(size) {
  // Izračunajte ukupan broj kvadratića (npr. 16 * 16 = 256)
  const totalDivs = size * size;

  for (let i = 0; i < totalDivs; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    
    // Opcionalno: dodajte event listener za interakciju (npr. bojanje na hover)
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

// Pozovite funkciju za 16x16 grid
createGrid(16);

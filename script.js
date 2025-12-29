const container = document.querySelector('.container');
const grid_Size = document.querySelector("#btn_S");
let size = 16;

// Pozovite funkciju za 16x16 grid stadardni grid
createGrid(size);

// dodavanje event listenera za grid size
grid_Size.addEventListener("click", () => {
  const value = document.querySelector("#value").value;  // Get value NOW when clicked
  
  if (value > 0 && value <= 100) {
    size = value;
    createGrid(size);
  }
});

function createGrid(size) {
  // Clear old grid first
  container.innerHTML = '';
  
  // Izračunajte ukupan broj kvadratića (npr. 16 * 16 = 256)
  const totalDivs = size * size;
  
  // Calculate width for each square to fit the container
  const squareSize = (600 / size);  // 600px container / number of squares,
  
  for (let i = 0; i < totalDivs; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    
    // Set width and height dynamically based on grid size
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
    
    // Opcionalno: dodajte event listener za interakciju (npr. bojanje na hover)
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

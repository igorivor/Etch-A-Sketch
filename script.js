const container = document.querySelector('.container');
const grid_Size = document.querySelector("#btn_S");
const blue = document.querySelector("#btn_blue");
const red = document.querySelector("#btn_red");
const yellow = document.querySelector("#btn_yellow");
const green = document.querySelector("#btn_green");
const orange = document.querySelector("#btn_orange");
const purple = document.querySelector("#btn_purple");
const pink = document.querySelector("#btn_pink");
const brown = document.querySelector("#btn_brown");
const gray = document.querySelector("#btn_gray");
const black = document.querySelector("#btn_black");

let color = setupColorButtons();;
let size = 16;

// Pozovite funkciju za 16x16 grid stadardni grid
createGrid(size);

// dodavanje event listenera za grid size
grid_Size.addEventListener("click", () => {
  const value = document.querySelector("#value").value;
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
  const squareSize = (600 / size);
  
  for (let i = 0; i < totalDivs; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    
    // Set width and height dynamically based on grid size
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
    
    // Add mouseover listener HERE (inside loop, for each square)
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = color;  // Use current color variable
    });
    
    container.appendChild(square);
  }
}

// Set up color buttons ONCE (not every time)
function setupColorButtons() {
  blue.addEventListener("click", () => {
    color = "blue";
  });
  
  red.addEventListener("click", () => {
    color = "red";
  });
  
  yellow.addEventListener("click", () => {
    color = "yellow";
  });
  
  green.addEventListener("click", () => {
    color = "green";
  });
  
  orange.addEventListener("click", () => {
    color = "orange";
  });
  
  purple.addEventListener("click", () => {
    color = "purple";
  });
  
  pink.addEventListener("click", () => {
    color = "pink";
  });
  
  brown.addEventListener("click", () => {
    color = "brown";
  });
  
  gray.addEventListener("click", () => {
    color = "gray";
  });
  
  black.addEventListener("click", () => {
    color = "black";
  });
}

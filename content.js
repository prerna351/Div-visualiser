function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
  }
  
  // Function to colorize divs
  function colorizeDivs() {
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach((div) => {
      if (!div.dataset.originalColor) {
        div.dataset.originalColor = div.style.backgroundColor; // Store original color if not already stored
      }
      div.style.backgroundColor = getRandomColor();
    });
  }
  
  // Function to remove colors from divs
  function removeColorsFromDivs() {
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach((div) => {
      div.style.backgroundColor = div.dataset.originalColor || '';
    });
  }
  
  // Check the current state and toggle colors
  function toggleDivColors() {
    const isColored = localStorage.getItem('isColored') === 'true';
  
    if (isColored) {
      removeColorsFromDivs();
    } else {
      colorizeDivs();
    }
  
    localStorage.setItem('isColored', !isColored); // Toggle the state
  }
  
  // Execute the toggle function
  toggleDivColors();
  
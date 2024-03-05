# Etch-a-Sketch Project

This project is a simple web-based implementation of the classic Etch-a-Sketch game. The game board is a grid where each cell changes color when you hover over it, simulating the line drawing of an Etch-a-Sketch.

## How to Run

1. Open the HTML file in a web browser.
2. Start sketching by moving your mouse over the grid.
3. You can change the grid size by clicking the "Change Grid Size" button and entering your desired size.

## Code Overview

### HTML

The HTML file sets up the structure of the webpage, which includes a title, a button to change the grid size, and a main div that will contain the grid.

### JavaScript

The JavaScript file contains two main functions:

- `createGrid(size)`: This function creates a grid of the specified size. It first creates container divs, then fills each container with divs that represent cells in the grid. Each cell has an event listener that changes its background color when the mouse hovers over it.
- `changeGridSize()`: This function clears the current grid and prompts the user for a new size. It then calls `createGrid(size)` with the new size.

### CSS

The CSS file styles the webpage. It includes styles for the body, title, main div, containers, cells, and the button. The grid cells are styled to change color when hovered over.
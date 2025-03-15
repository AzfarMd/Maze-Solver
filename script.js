const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
const rows = 10, cols = 10;
const cellSize = 40;
canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

let maze = [];
let start = { x: 0, y: 0 };
let end = { x: cols - 1, y: rows - 1 };

// Generate a simple maze
function generateMaze() {
    maze = Array(rows).fill().map(() => Array(cols).fill(1));

    for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
            maze[y][x] = Math.random() > 0.3 ? 0 : 1; // Random walls
        }
    }
    maze[0][0] = 0;
    maze[rows - 1][cols - 1] = 0;
    drawMaze();
}

// Draw the maze on canvas
function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            ctx.fillStyle = maze[y][x] === 1 ? "black" : "white";
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
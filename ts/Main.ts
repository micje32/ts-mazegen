export {}
var genMaze: HTMLButtonElement = document.getElementById('maze') as HTMLButtonElement
const _canvas: HTMLCanvasElement = document.getElementById('canvmaze') as HTMLCanvasElement
const _context: CanvasRenderingContext2D = _canvas.getContext('2d') as CanvasRenderingContext2D
const _mazeSize = 30
const _width = 500
const _height = 500
_canvas.width = _width
_canvas.height = _height
let nMaze: Maze

const config = {
    width: _width,
    height: _height,
    mazeLength: _mazeSize,
    context: _context
}

const mRender = () => {
    nMaze = new Maze(config)
    nMaze.render()
}
genMaze.addEventListener('click', mRender)


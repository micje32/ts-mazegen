import { Maze } from '../ts/Maze.ts'
import { Settings } from '../ts/Settings.ts'
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
let nSettings: Settings
let wall: string = (document.getElementById('wall') as HTMLInputElement).value
let route: string = (document.getElementById('path') as HTMLInputElement).value
let start: string = (document.getElementById('start') as HTMLInputElement).value
let end: string = (document.getElementById('end') as HTMLInputElement).value
let edge: string = (document.getElementById('edge') as HTMLInputElement).value
let def: string = (document.getElementById('default') as HTMLInputElement).value

const config = {
    width: _width,
    height: _height,
    mazeLength: _mazeSize,
    context: _context
}

export const webconfig = {
        WALL_COLOR: wall,
        ROUTE_COLOR: route,
        START_COLOR: start,
        END_COLOR: end,
        EDGE_COLOR: edge,
        DEF_COLOR: def
}
console.log("penis")

const mRender = () => {
    getSettings()
    nMaze = new Maze(config)
    nMaze.render()
}

function getSettings() {
    nSettings = new Settings(webconfig)
}

genMaze.addEventListener('click', mRender)


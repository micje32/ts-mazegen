import './styles/styles.scss';
import { Maze } from '../ts/Maze'

export {}

var genMaze: HTMLButtonElement = document.getElementById('maze') as HTMLButtonElement
const _canvas: HTMLCanvasElement = document.getElementById('canvmaze') as HTMLCanvasElement
const _context: CanvasRenderingContext2D = _canvas.getContext('2d') as CanvasRenderingContext2D

let nMaze: Maze
let wallColor = <HTMLInputElement> document.getElementById('wall')
let backgroundColor = <HTMLInputElement> document.getElementById('background')
let animateField = <HTMLInputElement> document.getElementById('animate')
let mazeSize = <HTMLInputElement> document.getElementById('mazesize')
let cellSize = <HTMLInputElement> document.getElementById('cellsize')
let padding = <HTMLInputElement> document.getElementById('padding')


async function mRender() {
    let mazeSizeNum: number = mazeSize.valueAsNumber
    let cellSizeNum: number = cellSize.valueAsNumber
    _canvas.width = mazeSizeNum * cellSizeNum + 10
    _canvas.height = mazeSizeNum * cellSizeNum + 10
    let animate = animateField.checked
    let bgColor = backgroundColor.value
    let wlColor = wallColor.value
    let pding = padding.valueAsNumber
    nMaze = new Maze(_context, animate, bgColor, wlColor, mazeSizeNum, cellSizeNum, pding)
    nMaze.changeCanvas(bgColor)
    console.log(animate)
    nMaze.recursiveBacktracking()
}


genMaze.addEventListener('click', mRender)


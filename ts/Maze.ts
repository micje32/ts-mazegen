/// <reference path="Cell.ts"/>

interface MazeInterface {
    readonly width: number
    readonly height: number
    readonly mazeLength: number
    context: any
}

class Maze {
    data: Cell[][]
    _width: number
    _height: number
    _mzLen: number
    _context: CanvasRenderingContext2D
    _cellLength: number
    start: Cell | null
    end: Cell | null

    constructor({
        width = 500,
        height = 500,
        mazeLength = 20,
        context
    }: MazeInterface) {
        this.data = []
        this._width = width
        this._height = height
        this._mzLen = mazeLength
        this._context = context
        this._cellLength = 0
        this.start = null
        this.end = null
    }

    setUp() {
        for (let i=0; i < this._mzLen; i++) {
            this.data[i] = []
            for(let j=0; j < this._mzLen; j++) {
                let cell: Cell

                if (
                    i===0 ||
                    i===this._mzLen - 1 ||
                    (j===0 || j===this._mzLen -1)
                ) {
                    cell = new Cell(EDGE)
                } else {
                    cell = new Cell(ROUTE)
                }

                cell.setPosition({ row: i, col: j})
                this.data[i][j] = cell
            }
        }
    }
    //render test
    render(): void {
        if(this.data.length === 0) {
            this.setUp()
        }
        this._context.clearRect(0, this._mzLen - 1, 0, this._mzLen - 1)
        this.draw(10,20,10)
    }
    //drawing walls on canvas
    draw(numRows: number, numCols: number, cellLength: number) {
        this._context.clearRect(0, 0, this._width, this._height)

        for (let row=0; row < numRows; row++) {
            for (let col=0; col < numCols; col++) {
                let rectX = col * cellLength
                let rectY = col * cellLength
                let currentCell = this.data[row][col]
                this._context.fillStyle = currentCell.getColor()
                this._context.fillRect(rectX, rectY, cellLength, cellLength)
            }
        }
    }

    
}
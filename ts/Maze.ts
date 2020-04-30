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
    _innerBisection: number
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
        this._innerBisection = 3
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

    
}
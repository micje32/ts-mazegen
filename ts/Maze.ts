import { Cell } from "../ts/Cell"
import { getOpposite } from "./Direction"
import { Grid } from "./Grid"

export class Maze {
    cells: Cell[][]
    grid?: Grid
    _mazeSize: number
    _cellSize: number
    _context: CanvasRenderingContext2D
    _animated: boolean
    _wallColor: string
    _backgroundColor: string
    _padding: number

    constructor(context: CanvasRenderingContext2D, 
                animated: boolean, 
                backgroundColor: string, 
                wallColor: string,
                mazeSize: number,
                cellSize: number,
                padding: number) {
        this._context = context
        this._animated = animated
        this._wallColor = wallColor
        this._backgroundColor = backgroundColor
        this._mazeSize = mazeSize
        this._cellSize = cellSize
        this._padding = padding
    }

    public setSize(size: number) {
        this._mazeSize = size
    }


    randomBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    public async recursiveBacktracking() {
      this.grid = new Grid(this._mazeSize)
      const stack: Cell[] = []
      const randY = Math.floor(Math.random() * this._mazeSize)
      const randX = Math.floor(Math.random() * this._mazeSize)
      const initialPosition = { x: randX, y: randY }
      const initialCell = this.grid.getCell(initialPosition)
      if (!initialCell) {
        throw new Error("invalid initial cell")
      }
      let previousCell: Cell
      let currentCell = initialCell
      while (true) {
        if (!currentCell.isVisited()) {
          currentCell.setVisited()
        }
        const neighbours = this.grid.getUnvisitedNeighbours(currentCell)
        if (neighbours.length === 0) {
          const poppedCell = stack.pop()
          if (!poppedCell) {
            if(this._animated === false) {
              this.drawCells()
            }
            return
          }
          currentCell = poppedCell
          continue
          
        }
        const { neighbourCell, dir } = Grid.getRandomElement(neighbours)
        currentCell.breakWall(dir)
        neighbourCell.breakWall(getOpposite(dir))
  
        stack.push(currentCell)
        previousCell = currentCell
        if(this._animated === true) {
          this.drawOneCell(currentCell)
          await this.delay(50)
        }
        currentCell = neighbourCell
      }
    }
    
    changeCanvas(bgColor: string) {
      let cnvsize = this._mazeSize * this._cellSize + 10
      this._context.fillStyle = bgColor
      this._context.fillRect(0, 0, cnvsize, cnvsize)
    }

    public exportGrid(): Cell[][] {
      if (!this.grid) {
          throw new Error("grid isnt initialized")
      }
      return this.grid.exportCells()
    }

    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) )
    }
    
    canvasDraw(cell: Cell,
      x: number, 
      y: number, 
      rightwall: boolean, 
      downwall: boolean,
      color: string) {
        let cellSize: number = this._cellSize
        let padding = this._padding
        let normalizedCellSize = this._cellSize + (padding / 2)
        let ctx = this._context
        ctx.lineWidth = 2
        ctx.strokeStyle = color
        let xAxis: number = cell._position.x * normalizedCellSize
        let yAxis: number = cell._position.y * normalizedCellSize
        ctx.beginPath()
        if (y === 0) {
          ctx.moveTo(xAxis, yAxis)
          ctx.lineTo(xAxis + cellSize, yAxis)
        }
        if (x === 0) {
          ctx.moveTo(xAxis, yAxis + cellSize)
          ctx.lineTo(xAxis, yAxis)
        }
        if (rightwall) {
          ctx.moveTo(xAxis + cellSize, yAxis)
          ctx.lineTo(xAxis + cellSize, yAxis + cellSize)
        }
        if (downwall) {
          ctx.moveTo(xAxis + cellSize, yAxis + cellSize)
          ctx.lineTo(xAxis, yAxis + cellSize)
        }
        ctx.stroke()
    }

    public drawOneCell(cell: Cell) {
      this.canvasDraw(cell,
        cell._position.x,
        cell._position.y,
        cell._walls.right,
        cell._walls.down,
        this._wallColor)
    }

    public async drawCells() {
        if (!this.grid) {
            throw new Error("grid isnt initialized")
        }
        const cells = this.grid.exportCells()
        let ctx = this._context
        const cellSize: number = this._cellSize
        let padding = this._padding
        ctx.lineWidth = 2
        ctx.strokeStyle = this._wallColor
        for (let y = 0; y < cells.length; y++) {
            for (let x = 0; x < cells[y].length; x++) {
                const cell = cells[y][x]
                let xAxis: number = cell._position.x * cellSize + padding / 2
                let yAxis: number = cell._position.y * cellSize + padding / 2
                ctx.beginPath()
                if (y === 0) {
                  ctx.moveTo(xAxis, yAxis)
                  ctx.lineTo(xAxis + cellSize, yAxis)
                }
                if (x === 0) {
                  ctx.moveTo(xAxis, yAxis + cellSize)
                  ctx.lineTo(xAxis, yAxis)
                }
                if (cell._walls.right) {
                  ctx.moveTo(xAxis + cellSize, yAxis)
                  ctx.lineTo(xAxis + cellSize, yAxis + cellSize)
                }
                if (cell._walls.down) {
                  ctx.moveTo(xAxis + cellSize, yAxis + cellSize)
                  ctx.lineTo(xAxis, yAxis + cellSize)
                }
                ctx.stroke()
            }
        }
    }
}

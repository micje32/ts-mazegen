import { Direction } from './Direction'

export interface CellPosition {
    x: number,
    y: number
}


export interface Walls {
    up: boolean,
    right: boolean,
    down: boolean,
    left: boolean
}

export class Cell {
    _walls: Walls
    _webconfig
    _position: CellPosition
    _bgColor: string
    _visited: boolean
    _cellSize: number

    constructor(position: CellPosition, isVisited?: boolean, walls?: Walls) {
        this._position = position,
        this._visited = isVisited,
        this._walls = walls
            ? walls
            : {
                up: true,
                right: true,
                down: true,
                left: true
            }
        this._cellSize = 10,
        this._bgColor = "trans",
        this._visited = false,
        this._position = position
    }

    public copyCell(): Cell {
        return new Cell(this._position, this._visited, this._walls)
    }

    cellPosition(): CellPosition {
        return this._position
    }

    isVisited(): boolean {
            return this._visited
    }

    walls(): Walls {
        return this._walls
    }

    setVisited(): void {
        this._visited = true
    }

    public breakWall(dir: Direction): void {
        switch (dir) {
            case "UP":
                this._walls.up = false
                break
            case "RIGHT":
                this._walls.right = false
                break
            case "DOWN":
                this._walls.down = false
                break
            case "LEFT":
                this._walls.left = false
                break
            default:
                console.log('error')                                        
        }
    }

    setPosition(position: CellPosition): void {
        position.x = position.x
        position.y = position.y
    }

    public getPosChange(dir: Direction): CellPosition {
        const { x, y } = this._position
        switch(dir) {
            case "UP":
                return { x, y: y - 1 }
            case "RIGHT":
                return { x: x + 1, y }
            case "DOWN":
                return { x, y: y + 1 }
            case "LEFT":
                return { x: x - 1, y }
            default:
                throw new Error("invalid direction")
        }
    }
}
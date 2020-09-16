import { Cell, CellPosition } from "./Cell"
import { Direction, DIRECTIONS } from "./Direction"

export class Grid {
    private readonly cells: Cell[][]
    private readonly _size: number

    constructor(size: number) {
        const cells: Cell[][] = new Array(size)
        for (let y = 0; y < cells.length; y++) {
            cells[y] = new Array(size)
            for (let x = 0; x < cells[y].length; x++) {
                cells[y][x] = new Cell({ x, y })
            }
        }
        this.cells = cells
        this._size = size
        console.log(cells)
    }

    get size(): number {
        return this._size
    }

    public getCell(pos: CellPosition): Cell | undefined {
        if (this.isValid(pos)) {
            return this.cells[pos.y][pos.x]
        }
        return undefined
    }

    public exportCells(): Cell[][] {
        return this.cells.map(row => row.map(cell => cell.copyCell()))
    }

    public getUnvisitedNeighbours(cell: Cell): Array<{ neighbourCell: Cell; dir: Direction }> {
        return DIRECTIONS.map(dir => {
            const neighbourPos = cell.getPosChange(dir)
            const neighbourCell = this.getCell(neighbourPos)
            return { neighbourCell, dir }
        }).filter(val => val.neighbourCell !== undefined && val.neighbourCell.isVisited() == false) as Array<{
            neighbourCell: Cell;
            dir: Direction;
        }>;
    }

    private isValid(pos: CellPosition): boolean {
        return pos.x >= 0 && pos.y >= 0 && pos.x < this._size && pos.y < this._size
    }

    public static getRandomElement<T>(arr: T[]): T {
        const randIndex = Math.floor(Math.random() * arr.length)
        return arr[randIndex]
    }
}
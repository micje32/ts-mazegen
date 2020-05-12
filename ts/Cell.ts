
import { Settings } from "./Settings.ts"
import { webconfig } from "./Main.ts"

interface CellPosition {
    readonly row: number
    readonly col: number
}

export enum CellType {
    UNDEFINED,
    START,
    END,
    ROUTE,
    WALL,
    EDGE
}

export class Cell {
    webconfig
    cellType: CellType
    rowPos: number
    colPos: number
    x: number
    y: number
    bgColor: string
    next: Cell | null
    visited: boolean

    constructor(type:CellType) {
        this.cellType = 0;
        this.rowPos = 0;
        this.colPos = 0;
        this.x = 0;
        this.y = 0;
        this.next = null;
        this.bgColor = "trans";
        this.visited = false;
    }

    setPosition(position: CellPosition): void {
        this.rowPos = position.row
        this.colPos = position.col
        this.x = position.col
        this.y = position.row
    }

    getEnv(): number[][] {
        return [
            [this.y -1, this.x],
            [this.y, this.x -1],
            [this.y, this.x +1],
            [this.y +1, this.x]
        ]
    }

    getColor(): string {
        let color: string
        switch (this.cellType) {
            case CellType.WALL:
                color = webconfig.WALL_COLOR
            break
            case CellType.ROUTE:
                color = webconfig.ROUTE_COLOR
            break
            case CellType.START:
                color = webconfig.START_COLOR
            break
            case CellType.END:
                color = webconfig.END_COLOR
            break
            case CellType.EDGE:
                color = webconfig.EDGE_COLOR
            default:
                color = webconfig.DEF_COLOR
            break
        }
        return color
    }
}
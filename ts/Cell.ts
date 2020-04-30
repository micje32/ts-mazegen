const STARTER = "s";
const END = "e";
const ROUTE = "r";
const BLACK = "b";
const EDGE = "edge";
const PATH = "p";
const DFS_PATH = "dfs";

const BLACK_COLOR = "#212121";
const WHITE_COLOR = "#ffffff";
const GREEN_COLOR = "#22cc5b";
const RED_COLOR = "#e52727";
const ORANGE_COLOR = "#FFA500";
const BLUE_COLOR = "#87CEEB";
const GRAY_COLOR = "#808080";
const TRANSPARENT_COLOR_NAME = "trans";
const BLUE_COLOR_NAME = "blue";
const ORANGE_COLOR_NAME = "oange";
const NONE_COLOR_NAME = "none";

interface CellPosition {
    readonly row: number
    readonly col: number
}


class Cell {
    colorValue: string
    rowPos: number
    colPos: number
    x: number
    y: number
    bgColor: string
    next: Cell | null
    visited: boolean

    constructor(type:string) {
        this.colorValue = type;
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
        switch (this.colorValue) {
            case BLACK:
            color = BLACK_COLOR
            break
            case ROUTE:
            color = WHITE_COLOR
            break
            case STARTER:
            color = GREEN_COLOR
            break
            case END:
            color = RED_COLOR
            break
            case PATH:
            color = ORANGE_COLOR
            break
            case DFS_PATH:
            color = BLUE_COLOR
            break
            default:
            color = GRAY_COLOR
            break
        }
        return color
    }
}
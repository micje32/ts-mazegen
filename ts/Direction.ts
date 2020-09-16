export type Direction = "UP" | "RIGHT" | "DOWN" | "LEFT"

export const DIRECTIONS: readonly Direction[] = ["UP", "RIGHT", "DOWN", "LEFT"]

export function getOpposite(dir: Direction): Direction {
    switch(dir) {
        case "UP": 
            return "DOWN"
        case "RIGHT":
            return "LEFT"
        case "DOWN":
            return "UP"
        case "LEFT":
            return "RIGHT"
        default:
            throw new Error("invalid location")
    }
}
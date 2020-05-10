interface Sets {
    WALL_COLOR: string
    ROUTE_COLOR: string
    START_COLOR: string
    END_COLOR: string
    EDGE_COLOR: string
    DEF_COLOR: string

}

export class Settings {
    _WALL_COLOR: string
    _ROUTE_COLOR: string
    _START_COLOR: string
    _END_COLOR: string
    _EDGE_COLOR: string
    _DEF_COLOR: string

    costructor({
        WALL_COLOR = (document.getElementById("wall") as HTMLInputElement).value,
        ROUTE_COLOR = (document.getElementById("route") as HTMLInputElement).value,
        START_COLOR = (document.getElementById("start") as HTMLInputElement).value,
        END_COLOR = (document.getElementById("end") as HTMLInputElement).value,
        EDGE_COLOR = (document.getElementById("edge") as HTMLInputElement).value,
        DEF_COLOR =  (document.getElementById("default") as HTMLInputElement).value
    }: Sets) {
        this._WALL_COLOR = WALL_COLOR
        this._ROUTE_COLOR = ROUTE_COLOR
        this._START_COLOR = START_COLOR
        this._END_COLOR = END_COLOR
        this._EDGE_COLOR = EDGE_COLOR
        this. _DEF_COLOR = DEF_COLOR
    }
}
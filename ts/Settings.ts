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
    
    constructor({
        WALL_COLOR,
        ROUTE_COLOR,
        START_COLOR,
        END_COLOR,
        EDGE_COLOR,
        DEF_COLOR
    }: Sets) {
        this._WALL_COLOR = WALL_COLOR
        this._ROUTE_COLOR = ROUTE_COLOR
        this._START_COLOR = START_COLOR
        this._END_COLOR = END_COLOR
        this._EDGE_COLOR = EDGE_COLOR
        this. _DEF_COLOR = DEF_COLOR
    }

    logColor() {
        console.log(this._DEF_COLOR + " " +
                    this._WALL_COLOR + " " +
                    this._EDGE_COLOR)
    }
}
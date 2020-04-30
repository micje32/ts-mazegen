var STARTER = "s";
var END = "e";
var ROUTE = "r";
var BLACK = "b";
var EDGE = "edge";
var PATH = "p";
var DFS_PATH = "dfs";
var BLACK_COLOR = "#212121";
var WHITE_COLOR = "#ffffff";
var GREEN_COLOR = "#22cc5b";
var RED_COLOR = "#e52727";
var ORANGE_COLOR = "#FFA500";
var BLUE_COLOR = "#87CEEB";
var GRAY_COLOR = "#808080";
var TRANSPARENT_COLOR_NAME = "trans";
var BLUE_COLOR_NAME = "blue";
var ORANGE_COLOR_NAME = "oange";
var NONE_COLOR_NAME = "none";
var Cell = /** @class */ (function () {
    function Cell(type) {
        this.colorValue = type;
        this.rowPos = 0;
        this.colPos = 0;
        this.x = 0;
        this.y = 0;
        this.next = null;
        this.bgColor = "trans";
        this.visited = false;
    }
    Cell.prototype.setPosition = function (position) {
        this.rowPos = position.row;
        this.colPos = position.col;
        this.x = position.col;
        this.y = position.row;
    };
    Cell.prototype.getEnv = function () {
        return [
            [this.y - 1, this.x],
            [this.y, this.x - 1],
            [this.y, this.x + 1],
            [this.y + 1, this.x]
        ];
    };
    Cell.prototype.getColor = function () {
        var color;
        switch (this.colorValue) {
            case BLACK:
                color = BLACK_COLOR;
                break;
            case ROUTE:
                color = WHITE_COLOR;
                break;
            case STARTER:
                color = GREEN_COLOR;
                break;
            case END:
                color = RED_COLOR;
                break;
            case PATH:
                color = ORANGE_COLOR;
                break;
            case DFS_PATH:
                color = BLUE_COLOR;
                break;
            default:
                color = GRAY_COLOR;
                break;
        }
        return color;
    };
    return Cell;
}());

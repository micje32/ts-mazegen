/// <reference path="Cell.ts"/>
var Maze = /** @class */ (function () {
    function Maze(_a) {
        var _b = _a.width, width = _b === void 0 ? 500 : _b, _c = _a.height, height = _c === void 0 ? 500 : _c, _d = _a.mazeLength, mazeLength = _d === void 0 ? 20 : _d, context = _a.context;
        this.data = [];
        this._width = width;
        this._height = height;
        this._mzLen = mazeLength;
        this._context = context;
        this._cellLength = 0;
        this.start = null;
        this.end = null;
    }
    Maze.prototype.setUp = function () {
        for (var i = 0; i < this._mzLen; i++) {
            this.data[i] = [];
            for (var j = 0; j < this._mzLen; j++) {
                var cell = void 0;
                if (i === 0 ||
                    i === this._mzLen - 1 ||
                    (j === 0 || j === this._mzLen - 1)) {
                    cell = new Cell(EDGE);
                }
                else {
                    cell = new Cell(ROUTE);
                }
                cell.setPosition({ row: i, col: j });
                this.data[i][j] = cell;
            }
        }
    };
    //render test
    Maze.prototype.render = function () {
        if (this.data.length === 0) {
            this.setUp();
        }
        this._context.clearRect(0, this._mzLen - 1, 0, this._mzLen - 1);
        this.draw(10, 10, 10);
    };
    //drawing walls on canvas
    Maze.prototype.draw = function (numRows, numCols, cellLength) {
        this._context.clearRect(0, 0, this._width, this._height);
        for (var row = 0; row < numRows; row++) {
            for (var col = 0; col < numCols; col++) {
                var rectX = col * cellLength;
                var rectY = col * cellLength;
                var currentCell = this.data[row][col];
                this._context.fillStyle = currentCell.getColor();
                this._context.fillRect(rectX, rectY, cellLength, cellLength);
            }
        }
    };
    return Maze;
}());

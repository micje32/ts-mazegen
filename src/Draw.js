/// <reference path="Cell.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Draw = /** @class */ (function (_super) {
    __extends(Draw, _super);
    function Draw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Draw.prototype.render = function () {
        if (this.data.length === 0) {
            this.setUp();
        }
        this.draw(10, 10, 10);
    };
    Draw.prototype.draw = function (numRows, numCols, cellLength) {
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
    return Draw;
}(Maze));

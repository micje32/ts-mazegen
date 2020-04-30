"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genMaze = document.getElementById('maze');
var _canvas = document.getElementById('canvmaze');
var _context = _canvas.getContext('2d');
var _mazeSize = 30;
var _width = 500;
var _height = 500;
_canvas.width = _width;
_canvas.height = _height;
var nMaze;
var config = {
    width: _width,
    height: _height,
    mazeLength: _mazeSize,
    context: _context
};
var mRender = function () {
    nMaze = new Maze(config);
    nMaze.render();
};
genMaze.addEventListener('click', mRender);

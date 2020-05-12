/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/Cell.ts":
/*!********************!*\
  !*** ./ts/Cell.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_ts_1 = __webpack_require__(/*! ./Main.ts */ \"./ts/Main.ts\");\r\nvar CellType;\r\n(function (CellType) {\r\n    CellType[CellType[\"UNDEFINED\"] = 0] = \"UNDEFINED\";\r\n    CellType[CellType[\"START\"] = 1] = \"START\";\r\n    CellType[CellType[\"END\"] = 2] = \"END\";\r\n    CellType[CellType[\"ROUTE\"] = 3] = \"ROUTE\";\r\n    CellType[CellType[\"WALL\"] = 4] = \"WALL\";\r\n    CellType[CellType[\"EDGE\"] = 5] = \"EDGE\";\r\n})(CellType = exports.CellType || (exports.CellType = {}));\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(type) {\r\n        this.cellType = 0;\r\n        this.rowPos = 0;\r\n        this.colPos = 0;\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.next = null;\r\n        this.bgColor = \"trans\";\r\n        this.visited = false;\r\n    }\r\n    Cell.prototype.setPosition = function (position) {\r\n        this.rowPos = position.row;\r\n        this.colPos = position.col;\r\n        this.x = position.col;\r\n        this.y = position.row;\r\n    };\r\n    Cell.prototype.getEnv = function () {\r\n        return [\r\n            [this.y - 1, this.x],\r\n            [this.y, this.x - 1],\r\n            [this.y, this.x + 1],\r\n            [this.y + 1, this.x]\r\n        ];\r\n    };\r\n    Cell.prototype.getColor = function () {\r\n        var color;\r\n        switch (this.cellType) {\r\n            case CellType.WALL:\r\n                color = Main_ts_1.webconfig.WALL_COLOR;\r\n                break;\r\n            case CellType.ROUTE:\r\n                color = Main_ts_1.webconfig.ROUTE_COLOR;\r\n                break;\r\n            case CellType.START:\r\n                color = Main_ts_1.webconfig.START_COLOR;\r\n                break;\r\n            case CellType.END:\r\n                color = Main_ts_1.webconfig.END_COLOR;\r\n                break;\r\n            case CellType.EDGE:\r\n                color = Main_ts_1.webconfig.EDGE_COLOR;\r\n            default:\r\n                color = Main_ts_1.webconfig.DEF_COLOR;\r\n                break;\r\n        }\r\n        return color;\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./ts/Cell.ts?");

/***/ }),

/***/ "./ts/Main.ts":
/*!********************!*\
  !*** ./ts/Main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Maze_ts_1 = __webpack_require__(/*! ../ts/Maze.ts */ \"./ts/Maze.ts\");\r\nvar Settings_ts_1 = __webpack_require__(/*! ../ts/Settings.ts */ \"./ts/Settings.ts\");\r\nvar genMaze = document.getElementById('maze');\r\nvar _canvas = document.getElementById('canvmaze');\r\nvar _context = _canvas.getContext('2d');\r\nvar _mazeSize = 30;\r\nvar _width = 500;\r\nvar _height = 500;\r\n_canvas.width = _width;\r\n_canvas.height = _height;\r\nvar nMaze;\r\nvar nSettings;\r\nvar wall = document.getElementById('wall').value;\r\nvar route = document.getElementById('path').value;\r\nvar start = document.getElementById('start').value;\r\nvar end = document.getElementById('end').value;\r\nvar edge = document.getElementById('edge').value;\r\nvar def = document.getElementById('default').value;\r\nvar config = {\r\n    width: _width,\r\n    height: _height,\r\n    mazeLength: _mazeSize,\r\n    context: _context\r\n};\r\nexports.webconfig = {\r\n    WALL_COLOR: wall,\r\n    ROUTE_COLOR: route,\r\n    START_COLOR: start,\r\n    END_COLOR: end,\r\n    EDGE_COLOR: edge,\r\n    DEF_COLOR: def\r\n};\r\nconsole.log(\"penis\");\r\nvar mRender = function () {\r\n    getSettings();\r\n    nMaze = new Maze_ts_1.Maze(config);\r\n    nMaze.render();\r\n};\r\nfunction getSettings() {\r\n    nSettings = new Settings_ts_1.Settings(exports.webconfig);\r\n}\r\ngenMaze.addEventListener('click', mRender);\r\n\n\n//# sourceURL=webpack:///./ts/Main.ts?");

/***/ }),

/***/ "./ts/Maze.ts":
/*!********************!*\
  !*** ./ts/Maze.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Cell_ts_1 = __webpack_require__(/*! ../ts/Cell.ts */ \"./ts/Cell.ts\");\r\nvar Maze = /** @class */ (function () {\r\n    function Maze(_a) {\r\n        var _b = _a.width, width = _b === void 0 ? 500 : _b, _c = _a.height, height = _c === void 0 ? 500 : _c, _d = _a.mazeLength, mazeLength = _d === void 0 ? 90 : _d, context = _a.context;\r\n        this.data = [];\r\n        this._width = width;\r\n        this._height = height;\r\n        this._mzLen = mazeLength;\r\n        this._context = context;\r\n        this._cellLength = 0;\r\n        this.start = null;\r\n        this.end = null;\r\n    }\r\n    Maze.prototype.setUp = function () {\r\n        for (var i = 0; i < this._mzLen; i++) {\r\n            this.data[i] = [];\r\n            for (var j = 0; j < this._mzLen; j++) {\r\n                var cell = void 0;\r\n                if (i === 0 ||\r\n                    i === this._mzLen - 1 ||\r\n                    (j === 0 || j === this._mzLen - 1)) {\r\n                    cell = new Cell_ts_1.Cell(Cell_ts_1.CellType.EDGE);\r\n                }\r\n                else {\r\n                    cell = new Cell_ts_1.Cell(Cell_ts_1.CellType.ROUTE);\r\n                }\r\n                cell.setPosition({ row: i, col: j });\r\n                this.data[i][j] = cell;\r\n            }\r\n        }\r\n    };\r\n    //render test\r\n    Maze.prototype.render = function () {\r\n        if (this.data.length === 0) {\r\n            this.setUp();\r\n        }\r\n        this._context.clearRect(0, this._mzLen - 1, 0, this._mzLen - 1);\r\n        this.draw(40, 40, 10);\r\n    };\r\n    //drawing walls on canvas\r\n    Maze.prototype.draw = function (numRows, numCols, cellLength) {\r\n        this._context.clearRect(0, 0, this._width, this._height);\r\n        for (var row = 0; row < numRows; row++) {\r\n            for (var col = 0; col < numCols; col++) {\r\n                var rectX = col * cellLength;\r\n                var rectY = col * cellLength;\r\n                var currentCell = this.data[row][col];\r\n                this._context.fillStyle = currentCell.getColor();\r\n                this._context.fillRect(rectX, rectY, cellLength, cellLength);\r\n            }\r\n        }\r\n    };\r\n    return Maze;\r\n}());\r\nexports.Maze = Maze;\r\n\n\n//# sourceURL=webpack:///./ts/Maze.ts?");

/***/ }),

/***/ "./ts/Settings.ts":
/*!************************!*\
  !*** ./ts/Settings.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Settings = /** @class */ (function () {\r\n    function Settings(_a) {\r\n        var WALL_COLOR = _a.WALL_COLOR, ROUTE_COLOR = _a.ROUTE_COLOR, START_COLOR = _a.START_COLOR, END_COLOR = _a.END_COLOR, EDGE_COLOR = _a.EDGE_COLOR, DEF_COLOR = _a.DEF_COLOR;\r\n        this._WALL_COLOR = WALL_COLOR;\r\n        this._ROUTE_COLOR = ROUTE_COLOR;\r\n        this._START_COLOR = START_COLOR;\r\n        this._END_COLOR = END_COLOR;\r\n        this._EDGE_COLOR = EDGE_COLOR;\r\n        this._DEF_COLOR = DEF_COLOR;\r\n    }\r\n    Settings.prototype.logColor = function () {\r\n        console.log(this._DEF_COLOR + \" \" +\r\n            this._WALL_COLOR + \" \" +\r\n            this._EDGE_COLOR);\r\n    };\r\n    return Settings;\r\n}());\r\nexports.Settings = Settings;\r\n\n\n//# sourceURL=webpack:///./ts/Settings.ts?");

/***/ })

/******/ });
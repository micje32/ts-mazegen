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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ts/styles/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ts/styles/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  color: red;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./ts/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./ts/Cell.ts":
/*!********************!*\
  !*** ./ts/Cell.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(position, isVisited, walls) {\r\n        this._position = position,\r\n            this._visited = isVisited,\r\n            this._walls = walls\r\n                ? walls\r\n                : {\r\n                    up: true,\r\n                    right: true,\r\n                    down: true,\r\n                    left: true\r\n                };\r\n        this._cellSize = 10,\r\n            this._bgColor = \"trans\",\r\n            this._visited = false,\r\n            this._position = position;\r\n    }\r\n    Cell.prototype.copyCell = function () {\r\n        return new Cell(this._position, this._visited, this._walls);\r\n    };\r\n    Cell.prototype.cellPosition = function () {\r\n        return this._position;\r\n    };\r\n    Cell.prototype.isVisited = function () {\r\n        return this._visited;\r\n    };\r\n    Cell.prototype.walls = function () {\r\n        return this._walls;\r\n    };\r\n    Cell.prototype.setVisited = function () {\r\n        this._visited = true;\r\n    };\r\n    Cell.prototype.breakWall = function (dir) {\r\n        switch (dir) {\r\n            case \"UP\":\r\n                this._walls.up = false;\r\n                break;\r\n            case \"RIGHT\":\r\n                this._walls.right = false;\r\n                break;\r\n            case \"DOWN\":\r\n                this._walls.down = false;\r\n                break;\r\n            case \"LEFT\":\r\n                this._walls.left = false;\r\n                break;\r\n            default:\r\n                console.log('error');\r\n        }\r\n    };\r\n    Cell.prototype.setPosition = function (position) {\r\n        position.x = position.x;\r\n        position.y = position.y;\r\n    };\r\n    Cell.prototype.getPosChange = function (dir) {\r\n        var _a = this._position, x = _a.x, y = _a.y;\r\n        switch (dir) {\r\n            case \"UP\":\r\n                return { x: x, y: y - 1 };\r\n            case \"RIGHT\":\r\n                return { x: x + 1, y: y };\r\n            case \"DOWN\":\r\n                return { x: x, y: y + 1 };\r\n            case \"LEFT\":\r\n                return { x: x - 1, y: y };\r\n            default:\r\n                throw new Error(\"invalid direction\");\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./ts/Cell.ts?");

/***/ }),

/***/ "./ts/Direction.ts":
/*!*************************!*\
  !*** ./ts/Direction.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getOpposite = exports.DIRECTIONS = void 0;\r\nexports.DIRECTIONS = [\"UP\", \"RIGHT\", \"DOWN\", \"LEFT\"];\r\nfunction getOpposite(dir) {\r\n    switch (dir) {\r\n        case \"UP\":\r\n            return \"DOWN\";\r\n        case \"RIGHT\":\r\n            return \"LEFT\";\r\n        case \"DOWN\":\r\n            return \"UP\";\r\n        case \"LEFT\":\r\n            return \"RIGHT\";\r\n        default:\r\n            throw new Error(\"invalid location\");\r\n    }\r\n}\r\nexports.getOpposite = getOpposite;\r\n\n\n//# sourceURL=webpack:///./ts/Direction.ts?");

/***/ }),

/***/ "./ts/Grid.ts":
/*!********************!*\
  !*** ./ts/Grid.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Grid = void 0;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./ts/Cell.ts\");\r\nvar Direction_1 = __webpack_require__(/*! ./Direction */ \"./ts/Direction.ts\");\r\nvar Grid = /** @class */ (function () {\r\n    function Grid(size) {\r\n        var cells = new Array(size);\r\n        for (var y = 0; y < cells.length; y++) {\r\n            cells[y] = new Array(size);\r\n            for (var x = 0; x < cells[y].length; x++) {\r\n                cells[y][x] = new Cell_1.Cell({ x: x, y: y });\r\n            }\r\n        }\r\n        this.cells = cells;\r\n        this._size = size;\r\n        console.log(cells);\r\n    }\r\n    Object.defineProperty(Grid.prototype, \"size\", {\r\n        get: function () {\r\n            return this._size;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Grid.prototype.getCell = function (pos) {\r\n        if (this.isValid(pos)) {\r\n            return this.cells[pos.y][pos.x];\r\n        }\r\n        return undefined;\r\n    };\r\n    Grid.prototype.exportCells = function () {\r\n        return this.cells.map(function (row) { return row.map(function (cell) { return cell.copyCell(); }); });\r\n    };\r\n    Grid.prototype.getUnvisitedNeighbours = function (cell) {\r\n        var _this = this;\r\n        return Direction_1.DIRECTIONS.map(function (dir) {\r\n            var neighbourPos = cell.getPosChange(dir);\r\n            var neighbourCell = _this.getCell(neighbourPos);\r\n            return { neighbourCell: neighbourCell, dir: dir };\r\n        }).filter(function (val) { return val.neighbourCell !== undefined && val.neighbourCell.isVisited() == false; });\r\n    };\r\n    Grid.prototype.isValid = function (pos) {\r\n        return pos.x >= 0 && pos.y >= 0 && pos.x < this._size && pos.y < this._size;\r\n    };\r\n    Grid.getRandomElement = function (arr) {\r\n        var randIndex = Math.floor(Math.random() * arr.length);\r\n        return arr[randIndex];\r\n    };\r\n    return Grid;\r\n}());\r\nexports.Grid = Grid;\r\n\n\n//# sourceURL=webpack:///./ts/Grid.ts?");

/***/ }),

/***/ "./ts/Main.ts":
/*!********************!*\
  !*** ./ts/Main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./styles/styles.scss */ \"./ts/styles/styles.scss\");\r\nvar Maze_1 = __webpack_require__(/*! ../ts/Maze */ \"./ts/Maze.ts\");\r\nvar genMaze = document.getElementById('maze');\r\nvar _canvas = document.getElementById('canvmaze');\r\nvar _context = _canvas.getContext('2d');\r\nvar nMaze;\r\nvar wallColor = document.getElementById('wall');\r\nvar backgroundColor = document.getElementById('background');\r\nvar animateField = document.getElementById('animate');\r\nvar mazeSize = document.getElementById('mazesize');\r\nvar cellSize = document.getElementById('cellsize');\r\nvar padding = document.getElementById('padding');\r\nfunction mRender() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var mazeSizeNum, cellSizeNum, animate, bgColor, wlColor, pding;\r\n        return __generator(this, function (_a) {\r\n            mazeSizeNum = mazeSize.valueAsNumber;\r\n            cellSizeNum = cellSize.valueAsNumber;\r\n            _canvas.width = mazeSizeNum * cellSizeNum + 10;\r\n            _canvas.height = mazeSizeNum * cellSizeNum + 10;\r\n            animate = animateField.checked;\r\n            bgColor = backgroundColor.value;\r\n            wlColor = wallColor.value;\r\n            pding = padding.valueAsNumber;\r\n            nMaze = new Maze_1.Maze(_context, animate, bgColor, wlColor, mazeSizeNum, cellSizeNum, pding);\r\n            nMaze.changeCanvas(bgColor);\r\n            console.log(animate);\r\n            nMaze.recursiveBacktracking();\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\ngenMaze.addEventListener('click', mRender);\r\n\n\n//# sourceURL=webpack:///./ts/Main.ts?");

/***/ }),

/***/ "./ts/Maze.ts":
/*!********************!*\
  !*** ./ts/Maze.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Maze = void 0;\r\nvar Direction_1 = __webpack_require__(/*! ./Direction */ \"./ts/Direction.ts\");\r\nvar Grid_1 = __webpack_require__(/*! ./Grid */ \"./ts/Grid.ts\");\r\nvar Maze = /** @class */ (function () {\r\n    function Maze(context, animated, backgroundColor, wallColor, mazeSize, cellSize, padding) {\r\n        this._context = context;\r\n        this._animated = animated;\r\n        this._wallColor = wallColor;\r\n        this._backgroundColor = backgroundColor;\r\n        this._mazeSize = mazeSize;\r\n        this._cellSize = cellSize;\r\n        this._padding = padding;\r\n    }\r\n    Maze.prototype.setSize = function (size) {\r\n        this._mazeSize = size;\r\n    };\r\n    Maze.prototype.randomBetween = function (min, max) {\r\n        return Math.floor(Math.random() * (max - min + 1)) + min;\r\n    };\r\n    Maze.prototype.recursiveBacktracking = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var stack, randY, randX, initialPosition, initialCell, previousCell, currentCell, neighbours, poppedCell, _a, neighbourCell, dir;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        this.grid = new Grid_1.Grid(this._mazeSize);\r\n                        stack = [];\r\n                        randY = Math.floor(Math.random() * this._mazeSize);\r\n                        randX = Math.floor(Math.random() * this._mazeSize);\r\n                        initialPosition = { x: randX, y: randY };\r\n                        initialCell = this.grid.getCell(initialPosition);\r\n                        if (!initialCell) {\r\n                            throw new Error(\"invalid initial cell\");\r\n                        }\r\n                        currentCell = initialCell;\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        if (false) {}\r\n                        if (!currentCell.isVisited()) {\r\n                            currentCell.setVisited();\r\n                        }\r\n                        neighbours = this.grid.getUnvisitedNeighbours(currentCell);\r\n                        if (neighbours.length === 0) {\r\n                            poppedCell = stack.pop();\r\n                            if (!poppedCell) {\r\n                                if (this._animated === false) {\r\n                                    this.drawCells();\r\n                                }\r\n                                return [2 /*return*/];\r\n                            }\r\n                            currentCell = poppedCell;\r\n                            return [3 /*break*/, 1];\r\n                        }\r\n                        _a = Grid_1.Grid.getRandomElement(neighbours), neighbourCell = _a.neighbourCell, dir = _a.dir;\r\n                        currentCell.breakWall(dir);\r\n                        neighbourCell.breakWall(Direction_1.getOpposite(dir));\r\n                        stack.push(currentCell);\r\n                        previousCell = currentCell;\r\n                        if (!(this._animated === true)) return [3 /*break*/, 3];\r\n                        this.drawOneCell(currentCell);\r\n                        return [4 /*yield*/, this.delay(50)];\r\n                    case 2:\r\n                        _b.sent();\r\n                        _b.label = 3;\r\n                    case 3:\r\n                        currentCell = neighbourCell;\r\n                        return [3 /*break*/, 1];\r\n                    case 4: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    Maze.prototype.changeCanvas = function (bgColor) {\r\n        var cnvsize = this._mazeSize * this._cellSize + 10;\r\n        this._context.fillStyle = bgColor;\r\n        this._context.fillRect(0, 0, cnvsize, cnvsize);\r\n    };\r\n    Maze.prototype.exportGrid = function () {\r\n        if (!this.grid) {\r\n            throw new Error(\"grid isnt initialized\");\r\n        }\r\n        return this.grid.exportCells();\r\n    };\r\n    Maze.prototype.delay = function (ms) {\r\n        return new Promise(function (resolve) { return setTimeout(resolve, ms); });\r\n    };\r\n    Maze.prototype.canvasDraw = function (cell, x, y, rightwall, downwall, color) {\r\n        var cellSize = this._cellSize;\r\n        var padding = this._padding;\r\n        var normalizedCellSize = this._cellSize + (padding / 2);\r\n        var ctx = this._context;\r\n        ctx.lineWidth = 2;\r\n        ctx.strokeStyle = color;\r\n        var xAxis = cell._position.x * normalizedCellSize;\r\n        var yAxis = cell._position.y * normalizedCellSize;\r\n        ctx.beginPath();\r\n        if (y === 0) {\r\n            ctx.moveTo(xAxis, yAxis);\r\n            ctx.lineTo(xAxis + cellSize, yAxis);\r\n        }\r\n        if (x === 0) {\r\n            ctx.moveTo(xAxis, yAxis + cellSize);\r\n            ctx.lineTo(xAxis, yAxis);\r\n        }\r\n        if (rightwall) {\r\n            ctx.moveTo(xAxis + cellSize, yAxis);\r\n            ctx.lineTo(xAxis + cellSize, yAxis + cellSize);\r\n        }\r\n        if (downwall) {\r\n            ctx.moveTo(xAxis + cellSize, yAxis + cellSize);\r\n            ctx.lineTo(xAxis, yAxis + cellSize);\r\n        }\r\n        ctx.stroke();\r\n    };\r\n    Maze.prototype.drawOneCell = function (cell) {\r\n        this.canvasDraw(cell, cell._position.x, cell._position.y, cell._walls.right, cell._walls.down, this._wallColor);\r\n    };\r\n    Maze.prototype.drawCells = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var cells, ctx, cellSize, padding, y, x, cell, xAxis, yAxis;\r\n            return __generator(this, function (_a) {\r\n                if (!this.grid) {\r\n                    throw new Error(\"grid isnt initialized\");\r\n                }\r\n                cells = this.grid.exportCells();\r\n                ctx = this._context;\r\n                cellSize = this._cellSize;\r\n                padding = this._padding;\r\n                ctx.lineWidth = 2;\r\n                ctx.strokeStyle = this._wallColor;\r\n                for (y = 0; y < cells.length; y++) {\r\n                    for (x = 0; x < cells[y].length; x++) {\r\n                        cell = cells[y][x];\r\n                        xAxis = cell._position.x * cellSize + padding / 2;\r\n                        yAxis = cell._position.y * cellSize + padding / 2;\r\n                        ctx.beginPath();\r\n                        if (y === 0) {\r\n                            ctx.moveTo(xAxis, yAxis);\r\n                            ctx.lineTo(xAxis + cellSize, yAxis);\r\n                        }\r\n                        if (x === 0) {\r\n                            ctx.moveTo(xAxis, yAxis + cellSize);\r\n                            ctx.lineTo(xAxis, yAxis);\r\n                        }\r\n                        if (cell._walls.right) {\r\n                            ctx.moveTo(xAxis + cellSize, yAxis);\r\n                            ctx.lineTo(xAxis + cellSize, yAxis + cellSize);\r\n                        }\r\n                        if (cell._walls.down) {\r\n                            ctx.moveTo(xAxis + cellSize, yAxis + cellSize);\r\n                            ctx.lineTo(xAxis, yAxis + cellSize);\r\n                        }\r\n                        ctx.stroke();\r\n                    }\r\n                }\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    };\r\n    return Maze;\r\n}());\r\nexports.Maze = Maze;\r\n\n\n//# sourceURL=webpack:///./ts/Maze.ts?");

/***/ }),

/***/ "./ts/styles/styles.scss":
/*!*******************************!*\
  !*** ./ts/styles/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ts/styles/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./ts/styles/styles.scss?");

/***/ })

/******/ });
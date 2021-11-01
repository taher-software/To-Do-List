/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgb(246, 246, 246);\\n}\\n\\n.container {\\n  width: 40%;\\n  margin-left: 30%;\\n  margin-top: 10%;\\n  display: grid;\\n  position: relative;\\n  z-index: 999;\\n}\\n\\n.fix-card {\\n  width: 100%;\\n  display: flex;\\n  background-color: white;\\n  border: 2px solid rgb(246, 246, 246);\\n  justify-content: space-between;\\n  height: 100%;\\n  align-items: center;\\n}\\n\\n.fix-card input {\\n  height: 100%;\\n  border: none;\\n  margin-left: 2.5%;\\n  font-style: italic;\\n  font-family: sans-serif;\\n  line-height: 1.4;\\n  font-weight: 500;\\n  width: 50%;\\n  color: rgb(37, 37, 37);\\n  font-size: 14px;\\n}\\n\\n.fix-card input:focus { outline: none; }\\n\\n.icon {\\n  margin-right: 2.5%;\\n  height: 60%;\\n}\\n\\n.description {\\n  margin-left: 2.5%;\\n  color: rgb(106, 106, 106);\\n}\\n\\n.fix-card input::placeholder {\\n  font-style: italic;\\n  color: rgb(220, 220, 220);\\n  font-size: 14px;\\n  line-height: 1.6;\\n  font-weight: 550;\\n}\\n\\n.task-card {\\n  width: 100%;\\n  display: flex;\\n  background-color: white;\\n  border: 2px solid rgb(246, 246, 246);\\n  height: 100%;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.task-card div {\\n  height: 100%;\\n  display: flex;\\n  width: 80%;\\n  align-items: center;\\n}\\n\\n.selection-icon { margin-left: 2.5%; }\\n\\n.task-description {\\n  margin: 0 auto 0 2.5%;\\n  height: 40%;\\n  color: rgb(67, 67, 67);\\n}\\n\\n.edit {\\n  justify-self: flex-end;\\n  margin-right: 2.5%;\\n}\\n\\n.clear-button {\\n  background-color: rgb(246, 246, 246);\\n  width: 100%;\\n  height: 50px;\\n  text-align: center;\\n  vertical-align: middle;\\n  border-bottom: 2px solid rgb(218, 218, 218);\\n  color: rgb(137, 137, 137);\\n}\\n\\n.edit-task {\\n  height: 80%;\\n  border: none;\\n  margin-left: 2.5%;\\n  width: 50%;\\n  color: rgb(67, 67, 67);\\n}\\n\\n.edit-task:focus { outline: none; }\\n\\n.del { margin-right: 2.5%; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add_remove.js":
/*!***************************!*\
  !*** ./src/add_remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"clickTask\": () => (/* binding */ clickTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\n/* harmony import */ var _assets_Images_three_points_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Images/three-points.png */ \"./src/assets/Images/three-points.png\");\n/* harmony import */ var _assets_Images_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Images/delete.png */ \"./src/assets/Images/delete.png\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n\n\n\n\nconst addTask = (toDoTasks, taskdescription, nbrGrid, eddList) => {\n  const placeholder = document.querySelector('.container');\n  const newIndex = toDoTasks.length + 1;\n  const newElt = document.createElement('div');\n  newElt.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <p class='task-description'> ${taskdescription}</p> </div><img src=${_assets_Images_three_points_png__WEBPACK_IMPORTED_MODULE_0__} class='edit'>`;\n  newElt.className = 'task-card';\n  newElt.style.gridRow = `${newIndex + 2} / span 1`;\n  document.querySelector('.clear-button').style.gridRow = `${newIndex + 3} / span 1`;\n  const nbrOfGrid = nbrGrid + 1;\n  placeholder.appendChild(newElt);\n  placeholder.style.gridTemplateRows = `repeat(${nbrOfGrid}, 1fr)`;\n  toDoTasks.push({\n    description: taskdescription,\n    completed: false,\n    index: newIndex,\n  });\n  eddList.push(newElt.querySelector('.edit'));\n  newElt.querySelector('.selection-icon').onchange = (e) => {\n    (0,_status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, toDoTasks);\n  };\n  return [nbrOfGrid, eddList, toDoTasks];\n};\nconst clickTask = (e, toDoTasks, nbrGrid, eddList) => {\n  const taskdescription = e.target.value;\n  e.target.value = '';\n  const [nbrOfGrid, edd, newList] = addTask(toDoTasks, taskdescription, nbrGrid, eddList);\n  localStorage.setItem('toDoTasks', JSON.stringify(newList));\n  return [nbrOfGrid, edd];\n};\nconst deleteTask = (e, taskList, nbrGrid) => {\n  const elt = e.target.parentNode;\n  const parent = elt.parentNode;\n  const indexElt = parseInt(getComputedStyle(elt).gridRow.split('/')[0], 10) - 2;\n  parent.removeChild(elt);\n  let ind = -1;\n  for (let i = 0; i < taskList.length; i += 1) {\n    if (taskList[i].index === indexElt) {\n      ind = i;\n      break;\n    }\n  }\n  taskList.splice(ind, 1);\n  const nbrOfGrid = nbrGrid - 1;\n  parent.style.gridTemplateRows = `repeat(${nbrOfGrid}, 1fr)`;\n  for (let i = 0; i < taskList.length; i += 1) {\n    if (taskList[i].index > indexElt) {\n      taskList[i].index -= 1;\n    }\n  }\n  localStorage.setItem('toDoTasks', JSON.stringify(taskList));\n  Array.from(parent.children).forEach((element) => {\n    if (element.className === 'task-card') {\n      const gridOrder = parseInt(getComputedStyle(element).gridRow.split('/')[0], 10);\n      if (gridOrder > indexElt + 2) {\n        element.style.gridRow = `${gridOrder - 1} / span 1`;\n      }\n    }\n  });\n  const btn = document.querySelector('.clear-button');\n  btn.style.gridRow = `${parseInt(getComputedStyle(btn).gridRow.split('/')[0], 10) - 1} / span 1`;\n\n  return nbrOfGrid;\n};\nconst editTask = (e, taskList, nbr) => {\n  const elt = e.target.parentNode;\n  const basicContent = elt.innerHTML;\n  const nbrOfGrid = nbr;\n  elt.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <input type='text' class='edit-task'> </div><img src=${_assets_Images_delete_png__WEBPACK_IMPORTED_MODULE_1__} class='del'>`;\n  elt.style.backgroundColor = 'rgba(228, 214, 151,0.8)';\n  const removeElem = [elt.querySelector('.del')];\n  const inputElem = elt.querySelector('.edit-task');\n  inputElem.onchange = () => {\n    const newText = inputElem.value;\n    const elt = inputElem.parentNode.parentNode;\n    const index = parseInt(getComputedStyle(elt).gridRow.split('/')[0], 10) - 2;\n    elt.innerHTML = basicContent;\n    elt.querySelector('.task-description').textContent = newText;\n    elt.style.backgroundColor = '#fff';\n    elt.querySelector('.selection-icon').onchange = (e) => {\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, taskList);\n    };\n    taskList[index - 1].description = newText;\n    localStorage.setItem('toDoTasks', JSON.stringify(taskList));\n  };\n  return [nbrOfGrid, removeElem];\n};\nconst clear = (storageFct) => {\n  const taskList = JSON.parse(localStorage.getItem('toDoTasks'));\n  const container = document.querySelector('.container');\n  const childrens = Array.from(container.children);\n  const firstLength = taskList.length;\n  for (let i = 0; i < childrens.length; i += 1) {\n    if (childrens[i].className === 'task-card') container.removeChild(childrens[i]);\n  }\n  const newTaskList = taskList.filter((task) => task.completed === false);\n  const removedIndex = Array.apply(0, Array(firstLength)).map((_, b) => b + 1);\n\n  newTaskList.forEach((el) => {\n    const pos = removedIndex.indexOf(el.index);\n    removedIndex.splice(pos, 1);\n  });\n  if (removedIndex.length > 0) {\n    for (let i = removedIndex.length - 1; i >= 0; i -= 1) {\n      newTaskList.forEach((el) => {\n        if (el.index > removedIndex[i]) {\n          el.index -= 1;\n        }\n      });\n    }\n  }\n  storageFct(newTaskList, container);\n  const containerNbrGrid = newTaskList.length + 3;\n  container.style.gridTemplateRows = `repeat(${containerNbrGrid},1fr)`;\n  const btn = container.querySelector('.clear-button');\n  btn.style.gridRow = `${containerNbrGrid} / span 1`;\n  localStorage.setItem('toDoTasks', JSON.stringify(newTaskList));\n  window.location.reload(true);\n\n  return containerNbrGrid;\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/add_remove.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_Images_return_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Images/return.png */ \"./src/assets/Images/return.png\");\n/* harmony import */ var _assets_Images_refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Images/refresh.png */ \"./src/assets/Images/refresh.png\");\n/* harmony import */ var _assets_Images_three_points_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Images/three-points.png */ \"./src/assets/Images/three-points.png\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add_remove.js */ \"./src/add_remove.js\");\n/* import models */\n\n\n\n\n\n\n/* declarate variables */\nlet toDoTasks = [];\nconst placeholder = document.querySelector('.container');\nlet nbrGrid = 2;\nconst clearButton = document.createElement('div');\nlet removedListListner = [];\n/* local storage */\nif (!localStorage.getItem('toDoTasks')) {\n  localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));\n} else {\n  toDoTasks = JSON.parse(localStorage.getItem('toDoTasks'));\n}\n/* utilities */\nconst populateTask = (tasks, placeholder) => {\n  nbrGrid = 2;\n  tasks.forEach((element) => {\n    const newElement = document.createElement('div');\n    if (!element.completed) {\n      newElement.innerHTML = `<div><input type='checkbox' class= 'selection-icon'> <p class='task-description'> ${element.description}</p> </div><img src=${_assets_Images_three_points_png__WEBPACK_IMPORTED_MODULE_3__} class='edit'>`;\n      const textElt = newElement.querySelector('.task-description');\n      textElt.style.textDecoration = 'none';\n      textElt.style.textDecorationColor = '#fff';\n    } else {\n      newElement.innerHTML = `<div><input type='checkbox' class= 'selection-icon' checked> <p class='task-description'> ${element.description}</p> </div><img src=${_assets_Images_three_points_png__WEBPACK_IMPORTED_MODULE_3__} class='edit'>`;\n      const textElt = newElement.querySelector('.task-description');\n      textElt.style.textDecoration = 'line-through';\n      textElt.style.textDecorationColor = 'rgb(0, 0, 255)';\n      textElt.style.textDecorationThickness = '3px';\n    }\n    newElement.style.gridRow = `${element.index + 2} / span 1`;\n    newElement.className = 'task-card';\n    nbrGrid += 1;\n    placeholder.appendChild(newElement);\n    const checkboxInput = newElement.querySelector('.selection-icon');\n    checkboxInput.addEventListener('change', (e) => {\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e, toDoTasks);\n    });\n    placeholder.style.gridTemplateRows = `repeat(${nbrGrid}, 1fr)`;\n  });\n};\n/* Load Page */\nconst titleList = document.createElement('div');\ntitleList.innerHTML = `<p class='description'>Today's To Do </p> <img src=${_assets_Images_refresh_png__WEBPACK_IMPORTED_MODULE_2__} class='icon'>`;\ntitleList.className = 'fix-card';\ntitleList.style.gridRow = '1 / span 1';\nconst addTask = document.createElement('div');\naddTask.innerHTML = `<input placeholder = 'Add to your list...'> <img src=${_assets_Images_return_png__WEBPACK_IMPORTED_MODULE_1__} class='icon'>`;\naddTask.className = 'fix-card';\naddTask.style.gridRow = '2 / span 1';\nplaceholder.appendChild(titleList);\nplaceholder.appendChild(addTask);\npopulateTask(toDoTasks, placeholder);\nclearButton.innerHTML = '<p>Clear all completed</p>';\nclearButton.className = 'clear-button';\nnbrGrid += 1;\nclearButton.style.gridRow = `${nbrGrid} / span 1`;\nplaceholder.style.gridTemplateRows = `repeat(${nbrGrid}, 1fr)`;\nplaceholder.appendChild(clearButton);\n/* track add task changes */\nlet edditList = Array.from(document.querySelectorAll('.edit'));\ndocument.querySelector('.fix-card input').addEventListener('change', (e) => {\n  [nbrGrid, edditList] = _add_remove_js__WEBPACK_IMPORTED_MODULE_5__.clickTask(e, toDoTasks, nbrGrid, edditList);\n  edditList.forEach((ev) => {\n    ev.addEventListener('click', (el) => {\n      [nbrGrid, removedListListner] = _add_remove_js__WEBPACK_IMPORTED_MODULE_5__.editTask(el, toDoTasks, nbrGrid);\n      removedListListner[0].onclick = (cl) => {\n        nbrGrid = _add_remove_js__WEBPACK_IMPORTED_MODULE_5__.deleteTask(cl, toDoTasks, nbrGrid);\n      };\n    });\n  });\n});\n/* track edit icons */\nedditList.forEach((e) => {\n  e.addEventListener('click', (el) => {\n    [nbrGrid, removedListListner] = _add_remove_js__WEBPACK_IMPORTED_MODULE_5__.editTask(el, toDoTasks, nbrGrid);\n    removedListListner[0].onclick = (cl) => {\n      nbrGrid = _add_remove_js__WEBPACK_IMPORTED_MODULE_5__.deleteTask(cl, toDoTasks, nbrGrid);\n    };\n  });\n});\n/* track clear completed Button */\nconst btn = document.querySelector('.clear-button');\nbtn.addEventListener('click', () => {\n  nbrGrid = _add_remove_js__WEBPACK_IMPORTED_MODULE_5__.clear(populateTask);\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst change = (e, toDoTasks) => {\n  const targetElement = e.target.parentNode;\n  const textElt = targetElement.querySelector('.task-description');\n\n  const descriptionElement = textElt.textContent;\n  const indexEl = toDoTasks.findIndex(\n    (task) => task.description.trim() === descriptionElement.trim(),\n  );\n\n  if (toDoTasks[indexEl].completed) {\n    toDoTasks[indexEl].completed = false;\n    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));\n    textElt.style.textDecoration = 'none';\n    textElt.style.textDecorationColor = '#fff';\n  } else {\n    toDoTasks[indexEl].completed = true;\n    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));\n    textElt.style.textDecoration = 'line-through';\n    textElt.style.textDecorationColor = 'rgb(0, 0, 255)';\n    textElt.style.textDecorationThickness = '3px';\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (change);\n\n//# sourceURL=webpack://to-do-list/./src/status.js?");

/***/ }),

/***/ "./src/assets/Images/delete.png":
/*!**************************************!*\
  !*** ./src/assets/Images/delete.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04844cfdd53819ae3006.png\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/Images/delete.png?");

/***/ }),

/***/ "./src/assets/Images/refresh.png":
/*!***************************************!*\
  !*** ./src/assets/Images/refresh.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d55d9a104b70567d9448.png\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/Images/refresh.png?");

/***/ }),

/***/ "./src/assets/Images/return.png":
/*!**************************************!*\
  !*** ./src/assets/Images/return.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9b9505d3607d3acab83.png\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/Images/return.png?");

/***/ }),

/***/ "./src/assets/Images/three-points.png":
/*!********************************************!*\
  !*** ./src/assets/Images/three-points.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc595efebc160f96513d.png\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/Images/three-points.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
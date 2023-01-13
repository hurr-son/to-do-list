/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".project-title {\n  display: flex;\n  justify-content: center;\n  margin-left: 212px;\n  margin-top: 70px;\n}\n\nli {\n  list-style: none;\n}\n\n.list-items li {\n  list-style: circle;\n}\n\n.lists-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));\n  grid-auto-rows: auto;\n  gap: 1rem;\n  margin-left: 6.5rem;\n  margin-top: 70px;\n}\n\n/* .edit-mode-card {\n  display: none;\n} */\n\n/* Modal style */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content,\n.project-modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content;\n  font-size: 1.6rem;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-content input,\n.project-modal-content input {\n  font-size: 1.5rem;\n}\n\n#create-list-form,\n#edit-list-form {\n  display: flex;\n  flex-direction: column;\n  /* gap: 1rem; */\n}\n#create-list-form textarea {\n  resize: none;\n  font-size: 1.1rem;\n}\n\n#add-item-input {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.close-modal {\n  float: right;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-modal:hover,\n.close-modal:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.vertical-nav {\n  position: fixed;\n  float: left;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  min-width: 6.5rem;\n  margin-top: 58px;\n  background-color: #333;\n  color: #fff;\n}\n\n.vertical-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.vertical-nav li {\n  width: 100%;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vertical-nav a:hover {\n  background-color: #444;\n}\n\n.horizontal-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #333;\n  color: #fff;\n}\n\n.horizontal-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.horizontal-nav li {\n  width: 100%;\n}\n\n.horizontal-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.horizontal-nav a:hover {\n  background-color: #444;\n}\n\nnav h1 {\n  font-size: 20px;\n}\n\n.list-title {\n  margin: 0;\n  padding-bottom: 1rem;\n}\n\n.list-card,\n.project-card,\n.create-button {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 7px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n  padding: 1rem;\n}\n\n.close-list {\n  align-self: flex-end;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-list:hover,\n.close-list:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.create-button {\n  text-align: center;\n  font-size: 12rem;\n}\n.create-button:hover {\n  background-color: rgb(203, 203, 203);\n}\n.create-button:active {\n  background-color: rgb(153, 153, 153);\n}\n\n/* .list-card,\n.project-card {\n  transition: all 0.2s ease-in-out;\n  transform: translateY(-5px);\n}\n\n.list-card:hover,\n.project-card:hover {\n  transform: translateY(-10px);\n \n} */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,oBAAoB;EACpB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;GAEG;;AAEH,gBAAgB;;AAEhB;EACE;IACE,WAAW;IACX,UAAU;EACZ;EACA;IACE,MAAM;IACN,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,8BAA8B;EAC9B,oCAAoC;AACtC;;AAEA;;EAEE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,OAAO;EACP,MAAM;EACN,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,oBAAoB;AACtB;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;AACtC;;AAEA;;;;;;;;;;GAUG","sourcesContent":[".project-title {\n  display: flex;\n  justify-content: center;\n  margin-left: 212px;\n  margin-top: 70px;\n}\n\nli {\n  list-style: none;\n}\n\n.list-items li {\n  list-style: circle;\n}\n\n.lists-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));\n  grid-auto-rows: auto;\n  gap: 1rem;\n  margin-left: 6.5rem;\n  margin-top: 70px;\n}\n\n/* .edit-mode-card {\n  display: none;\n} */\n\n/* Modal style */\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content,\n.project-modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content;\n  font-size: 1.6rem;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-content input,\n.project-modal-content input {\n  font-size: 1.5rem;\n}\n\n#create-list-form,\n#edit-list-form {\n  display: flex;\n  flex-direction: column;\n  /* gap: 1rem; */\n}\n#create-list-form textarea {\n  resize: none;\n  font-size: 1.1rem;\n}\n\n#add-item-input {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.close-modal {\n  float: right;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-modal:hover,\n.close-modal:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.vertical-nav {\n  position: fixed;\n  float: left;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  min-width: 6.5rem;\n  margin-top: 58px;\n  background-color: #333;\n  color: #fff;\n}\n\n.vertical-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.vertical-nav li {\n  width: 100%;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vertical-nav a:hover {\n  background-color: #444;\n}\n\n.horizontal-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #333;\n  color: #fff;\n}\n\n.horizontal-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.horizontal-nav li {\n  width: 100%;\n}\n\n.horizontal-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.horizontal-nav a:hover {\n  background-color: #444;\n}\n\nnav h1 {\n  font-size: 20px;\n}\n\n.list-title {\n  margin: 0;\n  padding-bottom: 1rem;\n}\n\n.list-card,\n.project-card,\n.create-button {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 7px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n  padding: 1rem;\n}\n\n.close-list {\n  align-self: flex-end;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-list:hover,\n.close-list:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.create-button {\n  text-align: center;\n  font-size: 12rem;\n}\n.create-button:hover {\n  background-color: rgb(203, 203, 203);\n}\n.create-button:active {\n  background-color: rgb(153, 153, 153);\n}\n\n/* .list-card,\n.project-card {\n  transition: all 0.2s ease-in-out;\n  transform: translateY(-5px);\n}\n\n.list-card:hover,\n.project-card:hover {\n  transform: translateY(-10px);\n \n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentProject": () => (/* binding */ CurrentProject),
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
class Projects {
  constructor() {
    this.projects = [];

    this.Project = function (name) {
      this.name = name;
      this.todoLists = [];

      this.addList = function (list) {
        list.id = this.todoLists.length;
        this.todoLists.push(list);
      };

      this.removeList = function (id) {
        let index = this.todoLists.findIndex((list) => list.id === id);
        if (index > -1) {
          this.todoLists.splice(index, 1);
        }
      };

      this.displayLists = function () {
        console.log("Project: " + this.name);
        this.todoLists.forEach(function (list) {
          list.displayList();
        });
      };
    };
  }

  setProject(project) {
    this.currentProject = new CurrentProject();
    this.currentProject.setCurrentProject(project);
  }

  addProject(project) {
    project.id = this.projects.length;
    this.projects.push(project);
  }

  removeProject(id) {
    let index = -1;
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }

  displayProjects() {
    console.log("Projects:");
    this.projects.forEach(function (project) {
      project.displayLists();
    });
  }
}

class CurrentProject {
  constructor() {
    this.currentProject = null;
  }

  setCurrentProject(project) {
    this.currentProject = project;
  }

  getCurrentProject() {
    return this.currentProject;
  }
}




/***/ }),

/***/ "./src/todo-dom.js":
/*!*************************!*\
  !*** ./src/todo-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAllProjects": () => (/* binding */ renderAllProjects),
/* harmony export */   "renderCreateButton": () => (/* binding */ renderCreateButton),
/* harmony export */   "renderEditModeCard": () => (/* binding */ renderEditModeCard),
/* harmony export */   "renderProject": () => (/* binding */ renderProject),
/* harmony export */   "renderProjectInput": () => (/* binding */ renderProjectInput),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function renderToDoList(list) {
  const listCard = document.createElement("div");
  listCard.className = "list-card";
  listCard.classList.add("view-card");
  listCard.id = list.id;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.className = "close-list";
  closeButton.id = list.id;

  listCard.appendChild(closeButton);
  const heading = document.createElement("h3");
  heading.className = "list-title";
  heading.innerHTML = list.name;
  listCard.appendChild(heading);

  const descSpan = document.createElement("span");
  descSpan.innerHTML = `${list.description}`;
  descSpan.className = "description";
  listCard.appendChild(descSpan);

  const dueDateSpan = document.createElement("span");
  dueDateSpan.innerHTML = `${list.dueDate}`;
  dueDateSpan.className = "due-date";
  listCard.appendChild(dueDateSpan);

  const prioritySpan = document.createElement("span");
  prioritySpan.innerHTML = `${list.priority}`;
  prioritySpan.className = "priority";
  listCard.appendChild(prioritySpan);

  const ul = document.createElement("ul");
  ul.className = "list-items";

  list.items.forEach(function (item) {
    const li = document.createElement("ul");

    const itemLi = document.createElement("li");

    itemLi.innerHTML = item;

    li.appendChild(itemLi);

    ul.appendChild(li);
  });
  listCard.appendChild(ul);
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-button";
  editButton.innerHTML = "Edit";
  listCard.appendChild(editButton);
  return listCard;
}

function renderEditModeCard(listCard) {
  const editCard = document.createElement("div");
  editCard.classList.add("list-card", "edit-card");
  editCard.style.display = "none";
  editCard.id = listCard.id;

  const title = listCard.querySelector(".list-title");
  const description = listCard.querySelector(".description");
  const dueDate = listCard.querySelector(".due-date");
  const priority = listCard.querySelector(".priority");
  const listItems = listCard.querySelectorAll(".list-items li");

  const titleInput = document.createElement("input");
  titleInput.classList.add("edit-list-title");
  titleInput.value = title.textContent;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.classList.add("edit-list-description");
  descriptionInput.value = description.innerHTML;
  console.log(description);

  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("edit-list-due-date");
  dueDateInput.type = "date";
  dueDateInput.value = dueDate.innerHTML;
  console.log(typeof dueDate.innerHTML);

  const priorityInput = document.createElement("select");
  priorityInput.classList.add("edit-list-priority");
  priorityInput.innerHTML = `
    <option value="Anytime" ${
      priority === "Anytime" ? "selected" : ""
    }>Anytime</option>
    <option value="Can wait" ${
      priority === "Can wait" ? "selected" : ""
    }>Can wait</option>
    <option value="Today" ${
      priority === "Today" ? "selected" : ""
    }>Today</option>
    <option value="Immediately" ${
      priority === "Immediately" ? "selected" : ""
    }>Immediately</option>
  `;

  priorityInput.value = priority.innerHTML;

  const listItemsInput = document.createElement("ul");
  listItemsInput.classList.add("edit-list-items");

  listItems.forEach((item) => {
    const listItemInput = document.createElement("li");
    const input = document.createElement("input");
    input.value = item.textContent;
    console.log(item);
    listItemInput.appendChild(input);
    listItemsInput.appendChild(listItemInput);
  });

  const saveButton = document.createElement("button");
  saveButton.classList.add("save-button");
  saveButton.textContent = "Save";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancel-button");
  cancelButton.textContent = "Cancel";

  editCard.appendChild(titleInput);
  editCard.appendChild(descriptionInput);
  editCard.appendChild(dueDateInput);
  editCard.appendChild(priorityInput);
  editCard.appendChild(listItemsInput);
  editCard.appendChild(saveButton);
  editCard.appendChild(cancelButton);

  return editCard;
}

function renderCreateButton() {
  const createButton = document.createElement("div");
  createButton.className = "create-button";

  createButton.innerHTML = "+";
  return createButton;
}

function renderProject(project) {
  const container = document.querySelector(".lists-container");
  const projectTitle = document.querySelector(".project-title");
  projectTitle.innerHTML = project.name;

  project.todoLists.forEach((list) => {
    container.appendChild(renderToDoList(list));
    container.appendChild(renderEditModeCard(renderToDoList(list)));
  });
}

function renderProjectInput(project) {
  const projectContainer = document.querySelector(".project-container");

  const projectsWrapper = document.createElement("div");
  projectsWrapper.className = "project-card";
  projectsWrapper.id = project.id;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.className = "close-list";

  const heading = document.createElement("h3");
  heading.innerHTML = project.name;

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.innerHTML = "Open";
  openButton.className = "open-button";
  projectsWrapper.appendChild(openButton);

  const list = document.createElement("ul");
  projectsWrapper.appendChild(closeButton);
  projectsWrapper.appendChild(heading);
  projectsWrapper.appendChild(list);

  project.todoLists.forEach(function (todoList) {
    const listItem = document.createElement("li");
    listItem.innerHTML = todoList.name;

    list.appendChild(listItem);
  });
  projectContainer.appendChild(projectsWrapper);
}

function renderAllProjects(projects) {
  const projectContainer = document.querySelector(".project-container");

  projects.forEach(function (project) {
    const projectsWrapper = document.createElement("div");
    projectsWrapper.className = "project-card";
    projectsWrapper.id = project.id;
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-list";

    const heading = document.createElement("h3");
    heading.innerHTML = project.name;

    const list = document.createElement("ul");
    projectsWrapper.appendChild(closeButton);
    projectsWrapper.appendChild(heading);
    projectsWrapper.appendChild(list);

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.innerHTML = "Open";
    openButton.className = "open-button";
    openButton.id = project.id;
    projectsWrapper.appendChild(openButton);

    project.todoLists.forEach(function (todoList) {
      const listItem = document.createElement("li");
      listItem.innerHTML = todoList.name;

      list.appendChild(listItem);
    });
    projectContainer.appendChild(projectsWrapper);
  });
}




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoList": () => (/* binding */ ToDoList)
/* harmony export */ });
function ToDoList(name, description, dueDate, priority, notes) {
  this.name = name;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completed = false;
  this.items = [];

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.editItem = function (item, newItem) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items[index] = newItem;
    }
  };

  this.removeItem = function (item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  };

  this.updateData = function (name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  };

  this.setCompleted = function () {
    this.completed = true;
  };

  this.displayList = function () {
    console.log(this.name);
    console.log("Description: " + this.description);
    console.log("Due date: " + this.dueDate);
    console.log("Priority: " + this.priority);
    console.log("Notes: " + this.notes);
    for (let i = 0; i < this.items.length; i++) {
      console.log(i + 1 + ". " + this.items[i]);
    }
  };
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-dom */ "./src/todo-dom.js");





(function () {
  let isProject = true;
  let isProjects = false;
  let selectedProject = document.querySelector(".project");

  const container = document.querySelector(".lists-container");

  const allProjects = new _project__WEBPACK_IMPORTED_MODULE_2__.Projects();

  let sundayChores = new allProjects.Project("Sunday Chores");
  let homework = new allProjects.Project("Homework");

  allProjects.addProject(sundayChores);
  allProjects.addProject(homework);

  let groceryList = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList(
    "Groceries",
    "List for Sunday grocery run",
    "2002-02-02",
    "Can wait",
    "Don't forget to say high to Jerry at the front desk. You guys haven't seen each other in a while."
  );
  groceryList.addItem("Eggs");
  groceryList.addItem("Bread");
  groceryList.addItem("Milk");

  let houseChores = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList(
    "House Chores",
    "",
    "2010-01-04",
    "Anytime",
    ""
  );
  houseChores.addItem("Do laundry");
  houseChores.addItem("Take the trash out");
  houseChores.addItem("Clean the bathroom");
  houseChores.addItem("Vacuum the apartment");

  let mondayHomework = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList("monHW", "", "", "", "");
  let tuesdayHomework = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList("tuesHW", "", "", "", "");

  sundayChores.addList(groceryList);
  sundayChores.addList(houseChores);

  homework.addList(mondayHomework);
  homework.addList(tuesdayHomework);

  (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(sundayChores);

  allProjects.setProject(sundayChores);

  container.addEventListener("click", (e) => {
    const listContainer = e.target.closest(".lists-container");
    if (!listContainer) return;

    const viewCards = listContainer.querySelectorAll(".view-card");
    const editCards = listContainer.querySelectorAll(".edit-card");
    const parentId = e.target.parentNode.id;

    viewCards.forEach((viewCard) => {
      if (viewCard.id === parentId) {
        if (e.target.classList.contains("edit-button")) {
          listContainer.setAttribute("data-state", "edit");
          viewCard.style.display = "none";
        } else if (e.target.classList.contains("cancel-button")) {
          listContainer.setAttribute("data-state", "default");
          viewCard.style.display = "flex";
        } else if (e.target.classList.contains("save-button")) {
          listContainer.setAttribute("data-state", "default");
          viewCard.style.display = "flex";
        }
      }
    });

    editCards.forEach((editCard) => {
      if (editCard.id === parentId) {
        if (e.target.classList.contains("save-button")) {
          listContainer.setAttribute("data-state", "default");
          editCard.style.display = "none";
        } else if (e.target.classList.contains("edit-button")) {
          editCard.style.display = "flex";
        } else if (e.target.classList.contains("cancel-button")) {
          editCard.style.display = "none";
        }
      }
    });
  });

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("save-button")) {
      const listContainer = e.target.closest(".lists-container");
      const parentId = parseInt(e.target.parentNode.id);
      const lists = allProjects.currentProject.getCurrentProject().todoLists;
      const list = lists.find((list) => list.id === parentId);
      const editCard = listContainer.querySelector(
        `.edit-card[id="${parentId}"]`
      );
      const listItemInputs = editCard.querySelectorAll(
        ".edit-list-items li input"
      );

      const newItems = [];
      for (let i = 0; i < listItemInputs.length; i++) {
        if (listItemInputs[i].value !== "") {
          newItems.push(listItemInputs[i].value);
        } else {
          listItemInputs[i].parentNode.remove();
        }
      }

      for (let i = 0; i < newItems.length; i++) {
        list.editItem(list.items[i], newItems[i]);
      }

      console.log(newItems);

      list.updateData(
        editCard.querySelector(".edit-list-title").value,
        editCard.querySelector(".edit-list-description").value,
        editCard.querySelector(".edit-list-due-date").value,
        editCard.querySelector(".edit-list-priority").value
      );

      const viewCard = listContainer.querySelector(
        `.view-card[id="${parentId}"]`
      );

      viewCard.querySelector(".list-title").textContent = list.name;
      viewCard.querySelector(".description").textContent = list.description;
      viewCard.querySelector(".due-date").textContent = list.dueDate;
      viewCard.querySelector(".priority").textContent = list.priority;

      const listItemContainer = viewCard.querySelector(".list-items");
      listItemContainer.innerHTML = "";
      for (let item of newItems) {
        if (item !== "") {
          listItemContainer.innerHTML += `<li>${item}</li>`;
        }
      }
    }
  });

  const addItemButton = document.getElementById("add-item-button");

  addItemButton.addEventListener("click", function () {
    const itemInputsContainer = document.getElementById("add-item-input");

    const numInputs = itemInputsContainer.getElementsByTagName("input").length;

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "item";
    newInput.name = `item-${numInputs + 1}`;

    const newLabel = document.createElement("label");
    newLabel.htmlFor = newInput.id;
    newLabel.className = "label";
    newLabel.innerHTML = `Item ${numInputs + 1}`;

    itemInputsContainer.appendChild(newLabel);
    itemInputsContainer.appendChild(newInput);
  });

  function editProject(e) {
    if (!e.target.classList.contains("project-card")) {
      return;
    }

    const projectCard = e.target;
    projectCard.addEventListener("click", function (e) {
      editProjectModal.style.display = "block";
    });
  }

  function removeProjectLists() {
    const listCards = document.getElementsByClassName("list-card");
    for (let i = listCards.length - 1; i >= 0; i--) {
      if (listCards[i].parentNode) {
        listCards[i].remove();
      }
    }
  }

  function removeProjects() {
    const projectCards = document.getElementsByClassName("project-card");
    for (let i = projectCards.length - 1; i >= 0; i--) {
      if (projectCards[i].parentNode) {
        projectCards[i].remove();
      }
    }
  }

  const projectsButton = document.getElementById("projects");

  function handleClick() {
    isProject = false;
    isProjects = true;
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderAllProjects)(allProjects.projects);
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderCreateButton)();
    removeProjectLists();
    removeClickEventListener(projectsButton, handleClick);
  }

  function removeClickEventListener(element, callback) {
    element.removeEventListener("click", callback);
  }

  if (isProject === true) {
    projectsButton.addEventListener("click", handleClick);
  } else return;

  document.addEventListener("click", function (event) {
    if (event.target.matches(".close-modal")) {
      const modal = event.target.parentNode.parentNode;
      modal.style.display = "none";
    }
  });

  container.appendChild((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderCreateButton)());

  function showListModal() {
    const modal = document.getElementById("create-list-modal");
    modal.style.display = "block";
  }
  function showProjectModal() {
    const modal = document.getElementById("create-project-modal");
    modal.style.display = "block";
  }
  const createButton = document.querySelector(".create-button");

  createButton.addEventListener("click", function () {
    if (isProject) {
      showListModal();
    } else {
      showProjectModal();
    }
  });

  const form = document.getElementById("create-list-form");

  form.addEventListener("submit", function (event) {
    const modal = document.querySelector(".modal");
    const itemInputs = document.getElementsByClassName("item");
    const itemLabels = document.getElementsByClassName("label");
    event.preventDefault();

    const formData = new FormData(form);

    const todoList = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList(
      formData.get("name"),
      formData.get("description"),
      formData.get("due-date"),
      formData.get("priority")
    );

    allProjects.currentProject.getCurrentProject().addList(todoList);

    for (let input of itemInputs) {
      if (input.value !== "") {
        todoList.addItem(input.value);
        console.log(input);
      }
    }

    container.appendChild((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)(todoList));
    container.appendChild((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderEditModeCard)((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)(todoList)));

    modal.style.display = "none";

    for (let i = itemLabels.length - 1; i > 0; i--) {
      itemLabels[i].remove();
      itemInputs[i].remove();
    }

    form.reset();
  });

  function openProject(e) {
    if (!e.target.classList.contains("open-button")) {
      return;
    }
    isProject = true;
    isProjects = false;
    removeProjects();
    projectsButton.addEventListener("click", handleClick);
    const projectCards = document.getElementsByClassName("project-card");
    for (let card of projectCards) {
      card.style.display = "none";
    }
    let index = e.target.id;
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(allProjects.projects[index]);
    allProjects.setProject(allProjects.projects[index]);
    console.log(allProjects.currentProject);
  }

  const projectForm = document.getElementById("create-project-form");
  console.log(projectForm);

  projectForm.addEventListener("submit", function (event) {
    const modal = document.getElementById("create-project-modal");

    event.preventDefault();

    const formData = new FormData(projectForm);

    const project = new allProjects.Project(formData.get("name"));
    allProjects.addProject(project);
    console.log(allProjects.projects);

    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjectInput)(project);

    modal.style.display = "none";

    projectForm.reset();
  });

  function removeListCard(e) {
    if (!e.target.classList.contains("close-list")) {
      return;
    }

    if (e.target.closest("div").classList.contains("list-card")) {
      const editCards = document.querySelectorAll(".edit-card");
      const btn = e.target;
      const listId = parseInt(btn.closest("div").id, 10);
      allProjects.currentProject.getCurrentProject().removeList(listId);
      editCards.forEach((card) => {
        if (card.id == btn.id) {
          card.remove();
        }
      });
      btn.closest("div").remove();

      console.log(sundayChores.todoLists);
    } else if (e.target.closest("div").classList.contains("project-card")) {
      const btn = e.target;
      const projectId = parseInt(btn.closest("div").id, 10);
      allProjects.removeProject(projectId);
      btn.closest("div").remove();
      console.log(allProjects.projects);
    }
  }
  const defaultCard = document.querySelector(".default-card");
  // console.log(renderEditModeCard(defaultCard));

  selectedProject.addEventListener("click", removeListCard);
  selectedProject.addEventListener("click", openProject);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7QUN0T0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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QUFFQSx5QkFBeUIsMkNBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHlEQUFjO0FBQ3hDLDBCQUEwQiw2REFBa0IsQ0FBQyx5REFBYzs7QUFFM0Q7O0FBRUEsd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWE7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBa0I7O0FBRXRCOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWRvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMTJweDtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saXN0LWl0ZW1zIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjc1cHgsIDFmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogNi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxuLyogLmVkaXQtbW9kZS1jYXJkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIE1vZGFsIHN0eWxlICovXFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW5wdXQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCBpbnB1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2NyZWF0ZS1saXN0LWZvcm0sXFxuI2VkaXQtbGlzdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogZ2FwOiAxcmVtOyAqL1xcbn1cXG4jY3JlYXRlLWxpc3QtZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2FkZC1pdGVtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLW1vZGFsOmFjdGl2ZSB7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtaW4td2lkdGg6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcbm5hdiBoMSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1jYXJkLFxcbi5wcm9qZWN0LWNhcmQsXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtbGlzdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1saXN0OmhvdmVyLFxcbi5jbG9zZS1saXN0OmFjdGl2ZSB7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnJlbTtcXG59XFxuLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcbn1cXG4uY3JlYXRlLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xcbn1cXG5cXG4vKiAubGlzdC1jYXJkLFxcbi5wcm9qZWN0LWNhcmQge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5saXN0LWNhcmQ6aG92ZXIsXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiBcXG59ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztHQUVHOztBQUVILGdCQUFnQjs7QUFFaEI7RUFDRTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7RUFDQTtJQUNFLE1BQU07SUFDTixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7Ozs7Ozs7OztHQVVHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMTJweDtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saXN0LWl0ZW1zIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjc1cHgsIDFmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogNi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxuLyogLmVkaXQtbW9kZS1jYXJkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi8qIE1vZGFsIHN0eWxlICovXFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW5wdXQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCBpbnB1dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2NyZWF0ZS1saXN0LWZvcm0sXFxuI2VkaXQtbGlzdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogZ2FwOiAxcmVtOyAqL1xcbn1cXG4jY3JlYXRlLWxpc3QtZm9ybSB0ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2FkZC1pdGVtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLW1vZGFsOmFjdGl2ZSB7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtaW4td2lkdGg6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcbm5hdiBoMSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubGlzdC1jYXJkLFxcbi5wcm9qZWN0LWNhcmQsXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtbGlzdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1saXN0OmhvdmVyLFxcbi5jbG9zZS1saXN0OmFjdGl2ZSB7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnJlbTtcXG59XFxuLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcbn1cXG4uY3JlYXRlLWJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xcbn1cXG5cXG4vKiAubGlzdC1jYXJkLFxcbi5wcm9qZWN0LWNhcmQge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5saXN0LWNhcmQ6aG92ZXIsXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiBcXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG5cbiAgICB0aGlzLlByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMudG9kb0xpc3RzID0gW107XG5cbiAgICAgIHRoaXMuYWRkTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIGxpc3QuaWQgPSB0aGlzLnRvZG9MaXN0cy5sZW5ndGg7XG4gICAgICAgIHRoaXMudG9kb0xpc3RzLnB1c2gobGlzdCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlbW92ZUxpc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2RvTGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0LmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdGhpcy50b2RvTGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5kaXNwbGF5TGlzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdDogXCIgKyB0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgbGlzdC5kaXNwbGF5TGlzdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIHNldFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBuZXcgQ3VycmVudFByb2plY3QoKTtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0LnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC5pZCA9IHRoaXMucHJvamVjdHMubGVuZ3RoO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIHJlbW92ZVByb2plY3QoaWQpIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnByb2plY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICBjb25zb2xlLmxvZyhcIlByb2plY3RzOlwiKTtcbiAgICB0aGlzLnByb2plY3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgIHByb2plY3QuZGlzcGxheUxpc3RzKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgQ3VycmVudFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcbiAgfVxuXG4gIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3RzLCBDdXJyZW50UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRvRG9MaXN0KGxpc3QpIHtcbiAgY29uc3QgbGlzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXN0Q2FyZC5jbGFzc05hbWUgPSBcImxpc3QtY2FyZFwiO1xuICBsaXN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwidmlldy1jYXJkXCIpO1xuICBsaXN0Q2FyZC5pZCA9IGxpc3QuaWQ7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbGlzdFwiO1xuICBjbG9zZUJ1dHRvbi5pZCA9IGxpc3QuaWQ7XG5cbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLmNsYXNzTmFtZSA9IFwibGlzdC10aXRsZVwiO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IGxpc3QubmFtZTtcbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgY29uc3QgZGVzY1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVzY1NwYW4uaW5uZXJIVE1MID0gYCR7bGlzdC5kZXNjcmlwdGlvbn1gO1xuICBkZXNjU3Bhbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKGRlc2NTcGFuKTtcblxuICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkdWVEYXRlU3Bhbi5pbm5lckhUTUwgPSBgJHtsaXN0LmR1ZURhdGV9YDtcbiAgZHVlRGF0ZVNwYW4uY2xhc3NOYW1lID0gXCJkdWUtZGF0ZVwiO1xuICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG5cbiAgY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5U3Bhbi5pbm5lckhUTUwgPSBgJHtsaXN0LnByaW9yaXR5fWA7XG4gIHByaW9yaXR5U3Bhbi5jbGFzc05hbWUgPSBcInByaW9yaXR5XCI7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTmFtZSA9IFwibGlzdC1pdGVtc1wiO1xuXG4gIGxpc3QuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgY29uc3QgaXRlbUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgaXRlbUxpLmlubmVySFRNTCA9IGl0ZW07XG5cbiAgICBsaS5hcHBlbmRDaGlsZChpdGVtTGkpO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXQtYnV0dG9uXCI7XG4gIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gXCJFZGl0XCI7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICByZXR1cm4gbGlzdENhcmQ7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVkaXRNb2RlQ2FyZChsaXN0Q2FyZCkge1xuICBjb25zdCBlZGl0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRDYXJkLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWNhcmRcIiwgXCJlZGl0LWNhcmRcIik7XG4gIGVkaXRDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZWRpdENhcmQuaWQgPSBsaXN0Q2FyZC5pZDtcblxuICBjb25zdCB0aXRsZSA9IGxpc3RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBkdWVEYXRlID0gbGlzdENhcmQucXVlcnlTZWxlY3RvcihcIi5kdWUtZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICBjb25zdCBsaXN0SXRlbXMgPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbXMgbGlcIik7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1saXN0LXRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1saXN0LWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb24uaW5uZXJIVE1MO1xuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdC1kdWUtZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZS5pbm5lckhUTUw7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiBkdWVEYXRlLmlubmVySFRNTCk7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdC1wcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5pbm5lckhUTUwgPSBgXG4gICAgPG9wdGlvbiB2YWx1ZT1cIkFueXRpbWVcIiAke1xuICAgICAgcHJpb3JpdHkgPT09IFwiQW55dGltZVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgIH0+QW55dGltZTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJDYW4gd2FpdFwiICR7XG4gICAgICBwcmlvcml0eSA9PT0gXCJDYW4gd2FpdFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgIH0+Q2FuIHdhaXQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiVG9kYXlcIiAke1xuICAgICAgcHJpb3JpdHkgPT09IFwiVG9kYXlcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICB9PlRvZGF5PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkltbWVkaWF0ZWx5XCIgJHtcbiAgICAgIHByaW9yaXR5ID09PSBcIkltbWVkaWF0ZWx5XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgfT5JbW1lZGlhdGVseTwvb3B0aW9uPlxuICBgO1xuXG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eS5pbm5lckhUTUw7XG5cbiAgY29uc3QgbGlzdEl0ZW1zSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3RJdGVtc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWxpc3QtaXRlbXNcIik7XG5cbiAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnZhbHVlID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBsaXN0SXRlbUlucHV0LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0SXRlbXNJbnB1dC5hcHBlbmRDaGlsZChsaXN0SXRlbUlucHV0KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNhdmUtYnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICBlZGl0Q2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKGxpc3RJdGVtc0lucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgcmV0dXJuIGVkaXRDYXJkO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVCdXR0b24oKSB7XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNyZWF0ZS1idXR0b25cIjtcblxuICBjcmVhdGVCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gIHJldHVybiBjcmVhdGVCdXR0b247XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gIHByb2plY3QudG9kb0xpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyVG9Eb0xpc3QobGlzdCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFZGl0TW9kZUNhcmQocmVuZGVyVG9Eb0xpc3QobGlzdCkpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RJbnB1dChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RzV3JhcHBlci5jbGFzc05hbWUgPSBcInByb2plY3QtY2FyZFwiO1xuICBwcm9qZWN0c1dyYXBwZXIuaWQgPSBwcm9qZWN0LmlkO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLWxpc3RcIjtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgb3BlbkJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgb3BlbkJ1dHRvbi5pbm5lckhUTUwgPSBcIk9wZW5cIjtcbiAgb3BlbkJ1dHRvbi5jbGFzc05hbWUgPSBcIm9wZW4tYnV0dG9uXCI7XG4gIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChvcGVuQnV0dG9uKTtcblxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvTGlzdCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IHRvZG9MaXN0Lm5hbWU7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gICAgcHJvamVjdHNXcmFwcGVyLmlkID0gcHJvamVjdC5pZDtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbGlzdFwiO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgb3BlbkJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBvcGVuQnV0dG9uLmlubmVySFRNTCA9IFwiT3BlblwiO1xuICAgIG9wZW5CdXR0b24uY2xhc3NOYW1lID0gXCJvcGVuLWJ1dHRvblwiO1xuICAgIG9wZW5CdXR0b24uaWQgPSBwcm9qZWN0LmlkO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChvcGVuQnV0dG9uKTtcblxuICAgIHByb2plY3QudG9kb0xpc3RzLmZvckVhY2goZnVuY3Rpb24gKHRvZG9MaXN0KSB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IHRvZG9MaXN0Lm5hbWU7XG5cbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIHJlbmRlclRvRG9MaXN0LFxuICByZW5kZXJQcm9qZWN0LFxuICByZW5kZXJBbGxQcm9qZWN0cyxcbiAgcmVuZGVyQ3JlYXRlQnV0dG9uLFxuICByZW5kZXJQcm9qZWN0SW5wdXQsXG4gIHJlbmRlckVkaXRNb2RlQ2FyZCxcbn07XG4iLCJmdW5jdGlvbiBUb0RvTGlzdChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMuaXRlbXMgPSBbXTtcblxuICB0aGlzLmFkZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfTtcblxuICB0aGlzLmVkaXRJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIG5ld0l0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbmV3SXRlbTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy51cGRhdGVEYXRhID0gZnVuY3Rpb24gKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9O1xuXG4gIHRoaXMuc2V0Q29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmRpc3BsYXlMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJEZXNjcmlwdGlvbjogXCIgKyB0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIkR1ZSBkYXRlOiBcIiArIHRoaXMuZHVlRGF0ZSk7XG4gICAgY29uc29sZS5sb2coXCJQcmlvcml0eTogXCIgKyB0aGlzLnByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZyhcIk5vdGVzOiBcIiArIHRoaXMubm90ZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coaSArIDEgKyBcIi4gXCIgKyB0aGlzLml0ZW1zW2ldKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFRvRG9MaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBQcm9qZWN0cywgQ3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICByZW5kZXJUb0RvTGlzdCxcbiAgcmVuZGVyUHJvamVjdCxcbiAgcmVuZGVyQWxsUHJvamVjdHMsXG4gIHJlbmRlckNyZWF0ZUJ1dHRvbixcbiAgcmVuZGVyUHJvamVjdElucHV0LFxuICByZW5kZXJFZGl0TW9kZUNhcmQsXG59IGZyb20gXCIuL3RvZG8tZG9tXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBpc1Byb2plY3QgPSB0cnVlO1xuICBsZXQgaXNQcm9qZWN0cyA9IGZhbHNlO1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XG5cbiAgbGV0IHN1bmRheUNob3JlcyA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KFwiU3VuZGF5IENob3Jlc1wiKTtcbiAgbGV0IGhvbWV3b3JrID0gbmV3IGFsbFByb2plY3RzLlByb2plY3QoXCJIb21ld29ya1wiKTtcblxuICBhbGxQcm9qZWN0cy5hZGRQcm9qZWN0KHN1bmRheUNob3Jlcyk7XG4gIGFsbFByb2plY3RzLmFkZFByb2plY3QoaG9tZXdvcmspO1xuXG4gIGxldCBncm9jZXJ5TGlzdCA9IG5ldyBUb0RvTGlzdChcbiAgICBcIkdyb2Nlcmllc1wiLFxuICAgIFwiTGlzdCBmb3IgU3VuZGF5IGdyb2NlcnkgcnVuXCIsXG4gICAgXCIyMDAyLTAyLTAyXCIsXG4gICAgXCJDYW4gd2FpdFwiLFxuICAgIFwiRG9uJ3QgZm9yZ2V0IHRvIHNheSBoaWdoIHRvIEplcnJ5IGF0IHRoZSBmcm9udCBkZXNrLiBZb3UgZ3V5cyBoYXZlbid0IHNlZW4gZWFjaCBvdGhlciBpbiBhIHdoaWxlLlwiXG4gICk7XG4gIGdyb2NlcnlMaXN0LmFkZEl0ZW0oXCJFZ2dzXCIpO1xuICBncm9jZXJ5TGlzdC5hZGRJdGVtKFwiQnJlYWRcIik7XG4gIGdyb2NlcnlMaXN0LmFkZEl0ZW0oXCJNaWxrXCIpO1xuXG4gIGxldCBob3VzZUNob3JlcyA9IG5ldyBUb0RvTGlzdChcbiAgICBcIkhvdXNlIENob3Jlc1wiLFxuICAgIFwiXCIsXG4gICAgXCIyMDEwLTAxLTA0XCIsXG4gICAgXCJBbnl0aW1lXCIsXG4gICAgXCJcIlxuICApO1xuICBob3VzZUNob3Jlcy5hZGRJdGVtKFwiRG8gbGF1bmRyeVwiKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIlRha2UgdGhlIHRyYXNoIG91dFwiKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIkNsZWFuIHRoZSBiYXRocm9vbVwiKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIlZhY3V1bSB0aGUgYXBhcnRtZW50XCIpO1xuXG4gIGxldCBtb25kYXlIb21ld29yayA9IG5ldyBUb0RvTGlzdChcIm1vbkhXXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICBsZXQgdHVlc2RheUhvbWV3b3JrID0gbmV3IFRvRG9MaXN0KFwidHVlc0hXXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuXG4gIHN1bmRheUNob3Jlcy5hZGRMaXN0KGdyb2NlcnlMaXN0KTtcbiAgc3VuZGF5Q2hvcmVzLmFkZExpc3QoaG91c2VDaG9yZXMpO1xuXG4gIGhvbWV3b3JrLmFkZExpc3QobW9uZGF5SG9tZXdvcmspO1xuICBob21ld29yay5hZGRMaXN0KHR1ZXNkYXlIb21ld29yayk7XG5cbiAgcmVuZGVyUHJvamVjdChzdW5kYXlDaG9yZXMpO1xuXG4gIGFsbFByb2plY3RzLnNldFByb2plY3Qoc3VuZGF5Q2hvcmVzKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuICAgIGlmICghbGlzdENvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3Qgdmlld0NhcmRzID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctY2FyZFwiKTtcbiAgICBjb25zdCBlZGl0Q2FyZHMgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1jYXJkXCIpO1xuICAgIGNvbnN0IHBhcmVudElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICAgIHZpZXdDYXJkcy5mb3JFYWNoKCh2aWV3Q2FyZCkgPT4ge1xuICAgICAgaWYgKHZpZXdDYXJkLmlkID09PSBwYXJlbnRJZCkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idXR0b25cIikpIHtcbiAgICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJlZGl0XCIpO1xuICAgICAgICAgIHZpZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYW5jZWwtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICB2aWV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2F2ZS1idXR0b25cIikpIHtcbiAgICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgIHZpZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWRpdENhcmRzLmZvckVhY2goKGVkaXRDYXJkKSA9PiB7XG4gICAgICBpZiAoZWRpdENhcmQuaWQgPT09IHBhcmVudElkKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLWJ1dHRvblwiKSkge1xuICAgICAgICAgIGxpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgZWRpdENhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgZWRpdENhcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbC1idXR0b25cIikpIHtcbiAgICAgICAgICBlZGl0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLWJ1dHRvblwiKSkge1xuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuICAgICAgY29uc3QgcGFyZW50SWQgPSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGNvbnN0IGxpc3RzID0gYWxsUHJvamVjdHMuY3VycmVudFByb2plY3QuZ2V0Q3VycmVudFByb2plY3QoKS50b2RvTGlzdHM7XG4gICAgICBjb25zdCBsaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gcGFyZW50SWQpO1xuICAgICAgY29uc3QgZWRpdENhcmQgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZWRpdC1jYXJkW2lkPVwiJHtwYXJlbnRJZH1cIl1gXG4gICAgICApO1xuICAgICAgY29uc3QgbGlzdEl0ZW1JbnB1dHMgPSBlZGl0Q2FyZC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcIi5lZGl0LWxpc3QtaXRlbXMgbGkgaW5wdXRcIlxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW1JbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtSW5wdXRzW2ldLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgbmV3SXRlbXMucHVzaChsaXN0SXRlbUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdEl0ZW1JbnB1dHNbaV0ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpc3QuZWRpdEl0ZW0obGlzdC5pdGVtc1tpXSwgbmV3SXRlbXNbaV0pO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhuZXdJdGVtcyk7XG5cbiAgICAgIGxpc3QudXBkYXRlRGF0YShcbiAgICAgICAgZWRpdENhcmQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWxpc3QtdGl0bGVcIikudmFsdWUsXG4gICAgICAgIGVkaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1saXN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlLFxuICAgICAgICBlZGl0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbGlzdC1kdWUtZGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgZWRpdENhcmQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWxpc3QtcHJpb3JpdHlcIikudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHZpZXdDYXJkID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnZpZXctY2FyZFtpZD1cIiR7cGFyZW50SWR9XCJdYFxuICAgICAgKTtcblxuICAgICAgdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IGxpc3QuZGVzY3JpcHRpb247XG4gICAgICB2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmR1ZS1kYXRlXCIpLnRleHRDb250ZW50ID0gbGlzdC5kdWVEYXRlO1xuICAgICAgdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS50ZXh0Q29udGVudCA9IGxpc3QucHJpb3JpdHk7XG5cbiAgICAgIGNvbnN0IGxpc3RJdGVtQ29udGFpbmVyID0gdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1zXCIpO1xuICAgICAgbGlzdEl0ZW1Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgbmV3SXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW0gIT09IFwiXCIpIHtcbiAgICAgICAgICBsaXN0SXRlbUNvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbS1idXR0b25cIik7XG5cbiAgYWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW1JbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtLWlucHV0XCIpO1xuXG4gICAgY29uc3QgbnVtSW5wdXRzID0gaXRlbUlucHV0c0NvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLmxlbmd0aDtcblxuICAgIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdJbnB1dC5jbGFzc05hbWUgPSBcIml0ZW1cIjtcbiAgICBuZXdJbnB1dC5uYW1lID0gYGl0ZW0tJHtudW1JbnB1dHMgKyAxfWA7XG5cbiAgICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuZXdMYWJlbC5odG1sRm9yID0gbmV3SW5wdXQuaWQ7XG4gICAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJsYWJlbFwiO1xuICAgIG5ld0xhYmVsLmlubmVySFRNTCA9IGBJdGVtICR7bnVtSW5wdXRzICsgMX1gO1xuXG4gICAgaXRlbUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG4gICAgaXRlbUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtY2FyZFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZS50YXJnZXQ7XG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0TGlzdHMoKSB7XG4gICAgY29uc3QgbGlzdENhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3QtY2FyZFwiKTtcbiAgICBmb3IgKGxldCBpID0gbGlzdENhcmRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAobGlzdENhcmRzW2ldLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbGlzdENhcmRzW2ldLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNhcmRcIik7XG4gICAgZm9yIChsZXQgaSA9IHByb2plY3RDYXJkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHByb2plY3RDYXJkc1tpXS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHByb2plY3RDYXJkc1tpXS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgaXNQcm9qZWN0ID0gZmFsc2U7XG4gICAgaXNQcm9qZWN0cyA9IHRydWU7XG4gICAgcmVuZGVyQWxsUHJvamVjdHMoYWxsUHJvamVjdHMucHJvamVjdHMpO1xuICAgIHJlbmRlckNyZWF0ZUJ1dHRvbigpO1xuICAgIHJlbW92ZVByb2plY3RMaXN0cygpO1xuICAgIHJlbW92ZUNsaWNrRXZlbnRMaXN0ZW5lcihwcm9qZWN0c0J1dHRvbiwgaGFuZGxlQ2xpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xpY2tFdmVudExpc3RlbmVyKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGlzUHJvamVjdCA9PT0gdHJ1ZSkge1xuICAgIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIH0gZWxzZSByZXR1cm47XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5jbG9zZS1tb2RhbFwiKSkge1xuICAgICAgY29uc3QgbW9kYWwgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNyZWF0ZUJ1dHRvbigpKTtcblxuICBmdW5jdGlvbiBzaG93TGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtbGlzdC1tb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LW1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtYnV0dG9uXCIpO1xuXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1Byb2plY3QpIHtcbiAgICAgIHNob3dMaXN0TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1Byb2plY3RNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWxpc3QtZm9ybVwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgIGNvbnN0IGl0ZW1JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcbiAgICBjb25zdCBpdGVtTGFiZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxhYmVsXCIpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KFxuICAgICAgZm9ybURhdGEuZ2V0KFwibmFtZVwiKSxcbiAgICAgIGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgZm9ybURhdGEuZ2V0KFwiZHVlLWRhdGVcIiksXG4gICAgICBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKVxuICAgICk7XG5cbiAgICBhbGxQcm9qZWN0cy5jdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpLmFkZExpc3QodG9kb0xpc3QpO1xuXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgaXRlbUlucHV0cykge1xuICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIHRvZG9MaXN0LmFkZEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlclRvRG9MaXN0KHRvZG9MaXN0KSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVkaXRNb2RlQ2FyZChyZW5kZXJUb0RvTGlzdCh0b2RvTGlzdCkpKTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGZvciAobGV0IGkgPSBpdGVtTGFiZWxzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGl0ZW1MYWJlbHNbaV0ucmVtb3ZlKCk7XG4gICAgICBpdGVtSW5wdXRzW2ldLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb3BlblByb2plY3QoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3Blbi1idXR0b25cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXNQcm9qZWN0ID0gdHJ1ZTtcbiAgICBpc1Byb2plY3RzID0gZmFsc2U7XG4gICAgcmVtb3ZlUHJvamVjdHMoKTtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNhcmRcIik7XG4gICAgZm9yIChsZXQgY2FyZCBvZiBwcm9qZWN0Q2FyZHMpIHtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICByZW5kZXJQcm9qZWN0KGFsbFByb2plY3RzLnByb2plY3RzW2luZGV4XSk7XG4gICAgYWxsUHJvamVjdHMuc2V0UHJvamVjdChhbGxQcm9qZWN0cy5wcm9qZWN0c1tpbmRleF0pO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzLmN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtcHJvamVjdC1mb3JtXCIpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybSk7XG5cbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXByb2plY3QtbW9kYWxcIik7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEocHJvamVjdEZvcm0pO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KGZvcm1EYXRhLmdldChcIm5hbWVcIikpO1xuICAgIGFsbFByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMucHJvamVjdHMpO1xuXG4gICAgcmVuZGVyUHJvamVjdElucHV0KHByb2plY3QpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdENhcmQoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbGlzdFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtY2FyZFwiKSkge1xuICAgICAgY29uc3QgZWRpdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWNhcmRcIik7XG4gICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGxpc3RJZCA9IHBhcnNlSW50KGJ0bi5jbG9zZXN0KFwiZGl2XCIpLmlkLCAxMCk7XG4gICAgICBhbGxQcm9qZWN0cy5jdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUxpc3QobGlzdElkKTtcbiAgICAgIGVkaXRDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGlmIChjYXJkLmlkID09IGJ0bi5pZCkge1xuICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYnRuLmNsb3Nlc3QoXCJkaXZcIikucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHN1bmRheUNob3Jlcy50b2RvTGlzdHMpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdChcImRpdlwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWNhcmRcIikpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgcHJvamVjdElkID0gcGFyc2VJbnQoYnRuLmNsb3Nlc3QoXCJkaXZcIikuaWQsIDEwKTtcbiAgICAgIGFsbFByb2plY3RzLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIGJ0bi5jbG9zZXN0KFwiZGl2XCIpLnJlbW92ZSgpO1xuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMucHJvamVjdHMpO1xuICAgIH1cbiAgfVxuICBjb25zdCBkZWZhdWx0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1jYXJkXCIpO1xuICAvLyBjb25zb2xlLmxvZyhyZW5kZXJFZGl0TW9kZUNhcmQoZGVmYXVsdENhcmQpKTtcblxuICBzZWxlY3RlZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUxpc3RDYXJkKTtcbiAgc2VsZWN0ZWRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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

  saveData() {
    const data = JSON.stringify(this.projects);

    localStorage.setItem("projects", data);
  }

  loadData() {
    const data = localStorage.getItem("projects");

    this.projects = JSON.parse(data) || [];
    return this.projects;
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

  saveData() {
    const data = JSON.stringify(this.currentProject);

    localStorage.setItem("currentProject", data);
  }

  loadData() {
    const data = localStorage.getItem("currentProject");

    this.currentProject = JSON.parse(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBU0U7Ozs7Ozs7Ozs7Ozs7OztBQ3RPRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5QiwyQ0FBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIseURBQWM7QUFDeEMsMEJBQTBCLDZEQUFrQixDQUFDLHlEQUFjOztBQUUzRDs7QUFFQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUFrQjs7QUFFdEI7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8tZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2plY3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIxMnB4O1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtaXRlbXMgbGkge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNzVweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA2LjVyZW07XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4vKiAuZWRpdC1tb2RlLWNhcmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogTW9kYWwgc3R5bGUgKi9cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbnB1dCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3JlYXRlLWxpc3QtZm9ybSxcXG4jZWRpdC1saXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBnYXA6IDFyZW07ICovXFxufVxcbiNjcmVhdGUtbGlzdC1mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jYWRkLWl0ZW0taW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLmNsb3NlLW1vZGFsIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtbW9kYWw6YWN0aXZlIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1pbi13aWR0aDogNi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxubmF2IGgxIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5saXN0LWNhcmQsXFxuLnByb2plY3QtY2FyZCxcXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jbG9zZS1saXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWxpc3Q6aG92ZXIsXFxuLmNsb3NlLWxpc3Q6YWN0aXZlIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycmVtO1xcbn1cXG4uY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxufVxcbi5jcmVhdGUtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxufVxcblxcbi8qIC5saXN0LWNhcmQsXFxuLnByb2plY3QtY2FyZCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmxpc3QtY2FyZDpob3ZlcixcXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuIFxcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxvQkFBb0I7RUFDcEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0dBRUc7O0FBRUgsZ0JBQWdCOztBQUVoQjtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7Ozs7Ozs7O0dBVUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIxMnB4O1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtaXRlbXMgbGkge1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNzVweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA2LjVyZW07XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG4vKiAuZWRpdC1tb2RlLWNhcmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuXFxuLyogTW9kYWwgc3R5bGUgKi9cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbnB1dCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3JlYXRlLWxpc3QtZm9ybSxcXG4jZWRpdC1saXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBnYXA6IDFyZW07ICovXFxufVxcbiNjcmVhdGUtbGlzdC1mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jYWRkLWl0ZW0taW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLmNsb3NlLW1vZGFsIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtbW9kYWw6YWN0aXZlIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1pbi13aWR0aDogNi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxubmF2IGgxIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5saXN0LWNhcmQsXFxuLnByb2plY3QtY2FyZCxcXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jbG9zZS1saXN0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWxpc3Q6aG92ZXIsXFxuLmNsb3NlLWxpc3Q6YWN0aXZlIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycmVtO1xcbn1cXG4uY3JlYXRlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxufVxcbi5jcmVhdGUtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxufVxcblxcbi8qIC5saXN0LWNhcmQsXFxuLnByb2plY3QtY2FyZCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmxpc3QtY2FyZDpob3ZlcixcXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuIFxcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcblxuICAgIHRoaXMuUHJvamVjdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50b2RvTGlzdHMgPSBbXTtcblxuICAgICAgdGhpcy5hZGRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgbGlzdC5pZCA9IHRoaXMudG9kb0xpc3RzLmxlbmd0aDtcbiAgICAgICAgdGhpcy50b2RvTGlzdHMucHVzaChsaXN0KTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVtb3ZlTGlzdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9MaXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICB0aGlzLnRvZG9MaXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmRpc3BsYXlMaXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0OiBcIiArIHRoaXMubmFtZSk7XG4gICAgICAgIHRoaXMudG9kb0xpc3RzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICBsaXN0LmRpc3BsYXlMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgc2V0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IG5ldyBDdXJyZW50UHJvamVjdCgpO1xuICAgIHRoaXMuY3VycmVudFByb2plY3Quc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0LmlkID0gdGhpcy5wcm9qZWN0cy5sZW5ndGg7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMucHJvamVjdHNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheVByb2plY3RzKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdHM6XCIpO1xuICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5kaXNwbGF5TGlzdHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmVEYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgZGF0YSk7XG4gIH1cblxuICBsb2FkRGF0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcblxuICAgIHRoaXMucHJvamVjdHMgPSBKU09OLnBhcnNlKGRhdGEpIHx8IFtdO1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG59XG5cbmNsYXNzIEN1cnJlbnRQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IG51bGw7XG4gIH1cblxuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvamVjdDtcbiAgfVxuXG4gIHNhdmVEYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRQcm9qZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFByb2plY3RcIiwgZGF0YSk7XG4gIH1cblxuICBsb2FkRGF0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UHJvamVjdFwiKTtcblxuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3RzLCBDdXJyZW50UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRvRG9MaXN0KGxpc3QpIHtcbiAgY29uc3QgbGlzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsaXN0Q2FyZC5jbGFzc05hbWUgPSBcImxpc3QtY2FyZFwiO1xuICBsaXN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwidmlldy1jYXJkXCIpO1xuICBsaXN0Q2FyZC5pZCA9IGxpc3QuaWQ7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbGlzdFwiO1xuICBjbG9zZUJ1dHRvbi5pZCA9IGxpc3QuaWQ7XG5cbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLmNsYXNzTmFtZSA9IFwibGlzdC10aXRsZVwiO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IGxpc3QubmFtZTtcbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgY29uc3QgZGVzY1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVzY1NwYW4uaW5uZXJIVE1MID0gYCR7bGlzdC5kZXNjcmlwdGlvbn1gO1xuICBkZXNjU3Bhbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKGRlc2NTcGFuKTtcblxuICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkdWVEYXRlU3Bhbi5pbm5lckhUTUwgPSBgJHtsaXN0LmR1ZURhdGV9YDtcbiAgZHVlRGF0ZVNwYW4uY2xhc3NOYW1lID0gXCJkdWUtZGF0ZVwiO1xuICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG5cbiAgY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5U3Bhbi5pbm5lckhUTUwgPSBgJHtsaXN0LnByaW9yaXR5fWA7XG4gIHByaW9yaXR5U3Bhbi5jbGFzc05hbWUgPSBcInByaW9yaXR5XCI7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5U3Bhbik7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmNsYXNzTmFtZSA9IFwibGlzdC1pdGVtc1wiO1xuXG4gIGxpc3QuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgY29uc3QgaXRlbUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgaXRlbUxpLmlubmVySFRNTCA9IGl0ZW07XG5cbiAgICBsaS5hcHBlbmRDaGlsZChpdGVtTGkpO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQodWwpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXQtYnV0dG9uXCI7XG4gIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gXCJFZGl0XCI7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICByZXR1cm4gbGlzdENhcmQ7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVkaXRNb2RlQ2FyZChsaXN0Q2FyZCkge1xuICBjb25zdCBlZGl0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRDYXJkLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWNhcmRcIiwgXCJlZGl0LWNhcmRcIik7XG4gIGVkaXRDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZWRpdENhcmQuaWQgPSBsaXN0Q2FyZC5pZDtcblxuICBjb25zdCB0aXRsZSA9IGxpc3RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBkdWVEYXRlID0gbGlzdENhcmQucXVlcnlTZWxlY3RvcihcIi5kdWUtZGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICBjb25zdCBsaXN0SXRlbXMgPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QtaXRlbXMgbGlcIik7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1saXN0LXRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGUudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1saXN0LWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb24uaW5uZXJIVE1MO1xuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdC1kdWUtZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZS5pbm5lckhUTUw7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiBkdWVEYXRlLmlubmVySFRNTCk7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdC1wcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlJbnB1dC5pbm5lckhUTUwgPSBgXG4gICAgPG9wdGlvbiB2YWx1ZT1cIkFueXRpbWVcIiAke1xuICAgICAgcHJpb3JpdHkgPT09IFwiQW55dGltZVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgIH0+QW55dGltZTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJDYW4gd2FpdFwiICR7XG4gICAgICBwcmlvcml0eSA9PT0gXCJDYW4gd2FpdFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgIH0+Q2FuIHdhaXQ8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiVG9kYXlcIiAke1xuICAgICAgcHJpb3JpdHkgPT09IFwiVG9kYXlcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICB9PlRvZGF5PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkltbWVkaWF0ZWx5XCIgJHtcbiAgICAgIHByaW9yaXR5ID09PSBcIkltbWVkaWF0ZWx5XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgfT5JbW1lZGlhdGVseTwvb3B0aW9uPlxuICBgO1xuXG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eS5pbm5lckhUTUw7XG5cbiAgY29uc3QgbGlzdEl0ZW1zSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3RJdGVtc0lucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWxpc3QtaXRlbXNcIik7XG5cbiAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnZhbHVlID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICBsaXN0SXRlbUlucHV0LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0SXRlbXNJbnB1dC5hcHBlbmRDaGlsZChsaXN0SXRlbUlucHV0KTtcbiAgfSk7XG5cbiAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNhdmUtYnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG5cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICBlZGl0Q2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKGxpc3RJdGVtc0lucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgcmV0dXJuIGVkaXRDYXJkO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDcmVhdGVCdXR0b24oKSB7XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNyZWF0ZS1idXR0b25cIjtcblxuICBjcmVhdGVCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gIHJldHVybiBjcmVhdGVCdXR0b247XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gIHByb2plY3QudG9kb0xpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyVG9Eb0xpc3QobGlzdCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFZGl0TW9kZUNhcmQocmVuZGVyVG9Eb0xpc3QobGlzdCkpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RJbnB1dChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RzV3JhcHBlci5jbGFzc05hbWUgPSBcInByb2plY3QtY2FyZFwiO1xuICBwcm9qZWN0c1dyYXBwZXIuaWQgPSBwcm9qZWN0LmlkO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLWxpc3RcIjtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgb3BlbkJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgb3BlbkJ1dHRvbi5pbm5lckhUTUwgPSBcIk9wZW5cIjtcbiAgb3BlbkJ1dHRvbi5jbGFzc05hbWUgPSBcIm9wZW4tYnV0dG9uXCI7XG4gIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChvcGVuQnV0dG9uKTtcblxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvTGlzdCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IHRvZG9MaXN0Lm5hbWU7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gICAgcHJvamVjdHNXcmFwcGVyLmlkID0gcHJvamVjdC5pZDtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2UtbGlzdFwiO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgb3BlbkJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBvcGVuQnV0dG9uLmlubmVySFRNTCA9IFwiT3BlblwiO1xuICAgIG9wZW5CdXR0b24uY2xhc3NOYW1lID0gXCJvcGVuLWJ1dHRvblwiO1xuICAgIG9wZW5CdXR0b24uaWQgPSBwcm9qZWN0LmlkO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChvcGVuQnV0dG9uKTtcblxuICAgIHByb2plY3QudG9kb0xpc3RzLmZvckVhY2goZnVuY3Rpb24gKHRvZG9MaXN0KSB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IHRvZG9MaXN0Lm5hbWU7XG5cbiAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIHJlbmRlclRvRG9MaXN0LFxuICByZW5kZXJQcm9qZWN0LFxuICByZW5kZXJBbGxQcm9qZWN0cyxcbiAgcmVuZGVyQ3JlYXRlQnV0dG9uLFxuICByZW5kZXJQcm9qZWN0SW5wdXQsXG4gIHJlbmRlckVkaXRNb2RlQ2FyZCxcbn07XG4iLCJmdW5jdGlvbiBUb0RvTGlzdChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMuaXRlbXMgPSBbXTtcblxuICB0aGlzLmFkZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfTtcblxuICB0aGlzLmVkaXRJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIG5ld0l0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbmV3SXRlbTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy51cGRhdGVEYXRhID0gZnVuY3Rpb24gKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9O1xuXG4gIHRoaXMuc2V0Q29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmRpc3BsYXlMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJEZXNjcmlwdGlvbjogXCIgKyB0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIkR1ZSBkYXRlOiBcIiArIHRoaXMuZHVlRGF0ZSk7XG4gICAgY29uc29sZS5sb2coXCJQcmlvcml0eTogXCIgKyB0aGlzLnByaW9yaXR5KTtcbiAgICBjb25zb2xlLmxvZyhcIk5vdGVzOiBcIiArIHRoaXMubm90ZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coaSArIDEgKyBcIi4gXCIgKyB0aGlzLml0ZW1zW2ldKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IFRvRG9MaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBQcm9qZWN0cywgQ3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge1xuICByZW5kZXJUb0RvTGlzdCxcbiAgcmVuZGVyUHJvamVjdCxcbiAgcmVuZGVyQWxsUHJvamVjdHMsXG4gIHJlbmRlckNyZWF0ZUJ1dHRvbixcbiAgcmVuZGVyUHJvamVjdElucHV0LFxuICByZW5kZXJFZGl0TW9kZUNhcmQsXG59IGZyb20gXCIuL3RvZG8tZG9tXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBpc1Byb2plY3QgPSB0cnVlO1xuICBsZXQgaXNQcm9qZWN0cyA9IGZhbHNlO1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XG5cbiAgbGV0IHN1bmRheUNob3JlcyA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KFwiU3VuZGF5IENob3Jlc1wiKTtcbiAgbGV0IGhvbWV3b3JrID0gbmV3IGFsbFByb2plY3RzLlByb2plY3QoXCJIb21ld29ya1wiKTtcblxuICBhbGxQcm9qZWN0cy5hZGRQcm9qZWN0KHN1bmRheUNob3Jlcyk7XG4gIGFsbFByb2plY3RzLmFkZFByb2plY3QoaG9tZXdvcmspO1xuXG4gIGxldCBncm9jZXJ5TGlzdCA9IG5ldyBUb0RvTGlzdChcbiAgICBcIkdyb2Nlcmllc1wiLFxuICAgIFwiTGlzdCBmb3IgU3VuZGF5IGdyb2NlcnkgcnVuXCIsXG4gICAgXCIyMDAyLTAyLTAyXCIsXG4gICAgXCJDYW4gd2FpdFwiLFxuICAgIFwiRG9uJ3QgZm9yZ2V0IHRvIHNheSBoaWdoIHRvIEplcnJ5IGF0IHRoZSBmcm9udCBkZXNrLiBZb3UgZ3V5cyBoYXZlbid0IHNlZW4gZWFjaCBvdGhlciBpbiBhIHdoaWxlLlwiXG4gICk7XG4gIGdyb2NlcnlMaXN0LmFkZEl0ZW0oXCJFZ2dzXCIpO1xuICBncm9jZXJ5TGlzdC5hZGRJdGVtKFwiQnJlYWRcIik7XG4gIGdyb2NlcnlMaXN0LmFkZEl0ZW0oXCJNaWxrXCIpO1xuXG4gIGxldCBob3VzZUNob3JlcyA9IG5ldyBUb0RvTGlzdChcbiAgICBcIkhvdXNlIENob3Jlc1wiLFxuICAgIFwiXCIsXG4gICAgXCIyMDEwLTAxLTA0XCIsXG4gICAgXCJBbnl0aW1lXCIsXG4gICAgXCJcIlxuICApO1xuICBob3VzZUNob3Jlcy5hZGRJdGVtKFwiRG8gbGF1bmRyeVwiKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIlRha2UgdGhlIHRyYXNoIG91dFwiKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIkNsZWFuIHRoZSBiYXRocm9vbVwiKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIlZhY3V1bSB0aGUgYXBhcnRtZW50XCIpO1xuXG4gIGxldCBtb25kYXlIb21ld29yayA9IG5ldyBUb0RvTGlzdChcIm1vbkhXXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICBsZXQgdHVlc2RheUhvbWV3b3JrID0gbmV3IFRvRG9MaXN0KFwidHVlc0hXXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuXG4gIHN1bmRheUNob3Jlcy5hZGRMaXN0KGdyb2NlcnlMaXN0KTtcbiAgc3VuZGF5Q2hvcmVzLmFkZExpc3QoaG91c2VDaG9yZXMpO1xuXG4gIGhvbWV3b3JrLmFkZExpc3QobW9uZGF5SG9tZXdvcmspO1xuICBob21ld29yay5hZGRMaXN0KHR1ZXNkYXlIb21ld29yayk7XG5cbiAgcmVuZGVyUHJvamVjdChzdW5kYXlDaG9yZXMpO1xuXG4gIGFsbFByb2plY3RzLnNldFByb2plY3Qoc3VuZGF5Q2hvcmVzKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuICAgIGlmICghbGlzdENvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3Qgdmlld0NhcmRzID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctY2FyZFwiKTtcbiAgICBjb25zdCBlZGl0Q2FyZHMgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1jYXJkXCIpO1xuICAgIGNvbnN0IHBhcmVudElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICAgIHZpZXdDYXJkcy5mb3JFYWNoKCh2aWV3Q2FyZCkgPT4ge1xuICAgICAgaWYgKHZpZXdDYXJkLmlkID09PSBwYXJlbnRJZCkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idXR0b25cIikpIHtcbiAgICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJlZGl0XCIpO1xuICAgICAgICAgIHZpZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYW5jZWwtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICB2aWV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2F2ZS1idXR0b25cIikpIHtcbiAgICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgIHZpZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWRpdENhcmRzLmZvckVhY2goKGVkaXRDYXJkKSA9PiB7XG4gICAgICBpZiAoZWRpdENhcmQuaWQgPT09IHBhcmVudElkKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLWJ1dHRvblwiKSkge1xuICAgICAgICAgIGxpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgZWRpdENhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgZWRpdENhcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbC1idXR0b25cIikpIHtcbiAgICAgICAgICBlZGl0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLWJ1dHRvblwiKSkge1xuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuICAgICAgY29uc3QgcGFyZW50SWQgPSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGNvbnN0IGxpc3RzID0gYWxsUHJvamVjdHMuY3VycmVudFByb2plY3QuZ2V0Q3VycmVudFByb2plY3QoKS50b2RvTGlzdHM7XG4gICAgICBjb25zdCBsaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gcGFyZW50SWQpO1xuICAgICAgY29uc3QgZWRpdENhcmQgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZWRpdC1jYXJkW2lkPVwiJHtwYXJlbnRJZH1cIl1gXG4gICAgICApO1xuICAgICAgY29uc3QgbGlzdEl0ZW1JbnB1dHMgPSBlZGl0Q2FyZC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcIi5lZGl0LWxpc3QtaXRlbXMgbGkgaW5wdXRcIlxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW1JbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtSW5wdXRzW2ldLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgbmV3SXRlbXMucHVzaChsaXN0SXRlbUlucHV0c1tpXS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdEl0ZW1JbnB1dHNbaV0ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpc3QuZWRpdEl0ZW0obGlzdC5pdGVtc1tpXSwgbmV3SXRlbXNbaV0pO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhuZXdJdGVtcyk7XG5cbiAgICAgIGxpc3QudXBkYXRlRGF0YShcbiAgICAgICAgZWRpdENhcmQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWxpc3QtdGl0bGVcIikudmFsdWUsXG4gICAgICAgIGVkaXRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1saXN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlLFxuICAgICAgICBlZGl0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtbGlzdC1kdWUtZGF0ZVwiKS52YWx1ZSxcbiAgICAgICAgZWRpdENhcmQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWxpc3QtcHJpb3JpdHlcIikudmFsdWVcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHZpZXdDYXJkID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnZpZXctY2FyZFtpZD1cIiR7cGFyZW50SWR9XCJdYFxuICAgICAgKTtcblxuICAgICAgdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IGxpc3QuZGVzY3JpcHRpb247XG4gICAgICB2aWV3Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmR1ZS1kYXRlXCIpLnRleHRDb250ZW50ID0gbGlzdC5kdWVEYXRlO1xuICAgICAgdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS50ZXh0Q29udGVudCA9IGxpc3QucHJpb3JpdHk7XG5cbiAgICAgIGNvbnN0IGxpc3RJdGVtQ29udGFpbmVyID0gdmlld0NhcmQucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1zXCIpO1xuICAgICAgbGlzdEl0ZW1Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGl0ZW0gb2YgbmV3SXRlbXMpIHtcbiAgICAgICAgaWYgKGl0ZW0gIT09IFwiXCIpIHtcbiAgICAgICAgICBsaXN0SXRlbUNvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbS1idXR0b25cIik7XG5cbiAgYWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW1JbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1pdGVtLWlucHV0XCIpO1xuXG4gICAgY29uc3QgbnVtSW5wdXRzID0gaXRlbUlucHV0c0NvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLmxlbmd0aDtcblxuICAgIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdJbnB1dC5jbGFzc05hbWUgPSBcIml0ZW1cIjtcbiAgICBuZXdJbnB1dC5uYW1lID0gYGl0ZW0tJHtudW1JbnB1dHMgKyAxfWA7XG5cbiAgICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuZXdMYWJlbC5odG1sRm9yID0gbmV3SW5wdXQuaWQ7XG4gICAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJsYWJlbFwiO1xuICAgIG5ld0xhYmVsLmlubmVySFRNTCA9IGBJdGVtICR7bnVtSW5wdXRzICsgMX1gO1xuXG4gICAgaXRlbUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG4gICAgaXRlbUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtY2FyZFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZS50YXJnZXQ7XG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlZGl0UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0TGlzdHMoKSB7XG4gICAgY29uc3QgbGlzdENhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3QtY2FyZFwiKTtcbiAgICBmb3IgKGxldCBpID0gbGlzdENhcmRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAobGlzdENhcmRzW2ldLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbGlzdENhcmRzW2ldLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNhcmRcIik7XG4gICAgZm9yIChsZXQgaSA9IHByb2plY3RDYXJkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKHByb2plY3RDYXJkc1tpXS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHByb2plY3RDYXJkc1tpXS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgaXNQcm9qZWN0ID0gZmFsc2U7XG4gICAgaXNQcm9qZWN0cyA9IHRydWU7XG4gICAgcmVuZGVyQWxsUHJvamVjdHMoYWxsUHJvamVjdHMucHJvamVjdHMpO1xuICAgIHJlbmRlckNyZWF0ZUJ1dHRvbigpO1xuICAgIHJlbW92ZVByb2plY3RMaXN0cygpO1xuICAgIHJlbW92ZUNsaWNrRXZlbnRMaXN0ZW5lcihwcm9qZWN0c0J1dHRvbiwgaGFuZGxlQ2xpY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xpY2tFdmVudExpc3RlbmVyKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGlzUHJvamVjdCA9PT0gdHJ1ZSkge1xuICAgIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIH0gZWxzZSByZXR1cm47XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5jbG9zZS1tb2RhbFwiKSkge1xuICAgICAgY29uc3QgbW9kYWwgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNyZWF0ZUJ1dHRvbigpKTtcblxuICBmdW5jdGlvbiBzaG93TGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtbGlzdC1tb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LW1vZGFsXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtYnV0dG9uXCIpO1xuXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1Byb2plY3QpIHtcbiAgICAgIHNob3dMaXN0TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1Byb2plY3RNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWxpc3QtZm9ybVwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgIGNvbnN0IGl0ZW1JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcbiAgICBjb25zdCBpdGVtTGFiZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxhYmVsXCIpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KFxuICAgICAgZm9ybURhdGEuZ2V0KFwibmFtZVwiKSxcbiAgICAgIGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgZm9ybURhdGEuZ2V0KFwiZHVlLWRhdGVcIiksXG4gICAgICBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKVxuICAgICk7XG5cbiAgICBhbGxQcm9qZWN0cy5jdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpLmFkZExpc3QodG9kb0xpc3QpO1xuXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgaXRlbUlucHV0cykge1xuICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIHRvZG9MaXN0LmFkZEl0ZW0oaW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlclRvRG9MaXN0KHRvZG9MaXN0KSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckVkaXRNb2RlQ2FyZChyZW5kZXJUb0RvTGlzdCh0b2RvTGlzdCkpKTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGZvciAobGV0IGkgPSBpdGVtTGFiZWxzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGl0ZW1MYWJlbHNbaV0ucmVtb3ZlKCk7XG4gICAgICBpdGVtSW5wdXRzW2ldLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb3BlblByb2plY3QoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3Blbi1idXR0b25cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXNQcm9qZWN0ID0gdHJ1ZTtcbiAgICBpc1Byb2plY3RzID0gZmFsc2U7XG4gICAgcmVtb3ZlUHJvamVjdHMoKTtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWNhcmRcIik7XG4gICAgZm9yIChsZXQgY2FyZCBvZiBwcm9qZWN0Q2FyZHMpIHtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICByZW5kZXJQcm9qZWN0KGFsbFByb2plY3RzLnByb2plY3RzW2luZGV4XSk7XG4gICAgYWxsUHJvamVjdHMuc2V0UHJvamVjdChhbGxQcm9qZWN0cy5wcm9qZWN0c1tpbmRleF0pO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzLmN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtcHJvamVjdC1mb3JtXCIpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybSk7XG5cbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXByb2plY3QtbW9kYWxcIik7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEocHJvamVjdEZvcm0pO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KGZvcm1EYXRhLmdldChcIm5hbWVcIikpO1xuICAgIGFsbFByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMucHJvamVjdHMpO1xuXG4gICAgcmVuZGVyUHJvamVjdElucHV0KHByb2plY3QpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdENhcmQoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtbGlzdFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtY2FyZFwiKSkge1xuICAgICAgY29uc3QgZWRpdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWNhcmRcIik7XG4gICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IGxpc3RJZCA9IHBhcnNlSW50KGJ0bi5jbG9zZXN0KFwiZGl2XCIpLmlkLCAxMCk7XG4gICAgICBhbGxQcm9qZWN0cy5jdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUxpc3QobGlzdElkKTtcbiAgICAgIGVkaXRDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGlmIChjYXJkLmlkID09IGJ0bi5pZCkge1xuICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYnRuLmNsb3Nlc3QoXCJkaXZcIikucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHN1bmRheUNob3Jlcy50b2RvTGlzdHMpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdChcImRpdlwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWNhcmRcIikpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgcHJvamVjdElkID0gcGFyc2VJbnQoYnRuLmNsb3Nlc3QoXCJkaXZcIikuaWQsIDEwKTtcbiAgICAgIGFsbFByb2plY3RzLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIGJ0bi5jbG9zZXN0KFwiZGl2XCIpLnJlbW92ZSgpO1xuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMucHJvamVjdHMpO1xuICAgIH1cbiAgfVxuICBjb25zdCBkZWZhdWx0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1jYXJkXCIpO1xuICAvLyBjb25zb2xlLmxvZyhyZW5kZXJFZGl0TW9kZUNhcmQoZGVmYXVsdENhcmQpKTtcblxuICBzZWxlY3RlZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZUxpc3RDYXJkKTtcbiAgc2VsZWN0ZWRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
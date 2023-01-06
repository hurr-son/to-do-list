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

  this.removeItem = function (item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    console.log(`Removed: ${item}`);
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

  sundayChores.addList(groceryList);
  sundayChores.addList(houseChores);

  homework.addList(mondayHomework);
  homework.addList(mondayHomework);

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
      const btn = e.target;
      const listId = parseInt(btn.closest("div").id, 10);
      allProjects.currentProject.getCurrentProject().removeList(listId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7QUN0T0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FB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RUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvamVjdC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjEycHg7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1pdGVtcyBsaSB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI3NXB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbi8qIC5lZGl0LW1vZGUtY2FyZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4vKiBNb2RhbCBzdHlsZSAqL1xcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50LFxcbi5wcm9qZWN0LW1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGlucHV0LFxcbi5wcm9qZWN0LW1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjcmVhdGUtbGlzdC1mb3JtLFxcbiNlZGl0LWxpc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGdhcDogMXJlbTsgKi9cXG59XFxuI2NyZWF0ZS1saXN0LWZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNhZGQtaXRlbS1pbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1tb2RhbDphY3RpdmUge1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWluLXdpZHRoOiA2LjVyZW07XFxuICBtYXJnaW4tdG9wOiA1OHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG5uYXYgaDEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmxpc3QtY2FyZCxcXG4ucHJvamVjdC1jYXJkLFxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNsb3NlLWxpc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtbGlzdDpob3ZlcixcXG4uY2xvc2UtbGlzdDphY3RpdmUge1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJyZW07XFxufVxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKTtcXG59XFxuLmNyZWF0ZS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG59XFxuXFxuLyogLmxpc3QtY2FyZCxcXG4ucHJvamVjdC1jYXJkIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG4ubGlzdC1jYXJkOmhvdmVyLFxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gXFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7R0FFRzs7QUFFSCxnQkFBZ0I7O0FBRWhCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7SUFDRSxNQUFNO0lBQ04sVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7Ozs7Ozs7R0FVR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjEycHg7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1pdGVtcyBsaSB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI3NXB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbi8qIC5lZGl0LW1vZGUtY2FyZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4vKiBNb2RhbCBzdHlsZSAqL1xcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50LFxcbi5wcm9qZWN0LW1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGlucHV0LFxcbi5wcm9qZWN0LW1vZGFsLWNvbnRlbnQgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjcmVhdGUtbGlzdC1mb3JtLFxcbiNlZGl0LWxpc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGdhcDogMXJlbTsgKi9cXG59XFxuI2NyZWF0ZS1saXN0LWZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNhZGQtaXRlbS1pbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1tb2RhbDphY3RpdmUge1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWluLXdpZHRoOiA2LjVyZW07XFxuICBtYXJnaW4tdG9wOiA1OHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG5uYXYgaDEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmxpc3QtY2FyZCxcXG4ucHJvamVjdC1jYXJkLFxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNsb3NlLWxpc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtbGlzdDpob3ZlcixcXG4uY2xvc2UtbGlzdDphY3RpdmUge1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJyZW07XFxufVxcbi5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKTtcXG59XFxuLmNyZWF0ZS1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG59XFxuXFxuLyogLmxpc3QtY2FyZCxcXG4ucHJvamVjdC1jYXJkIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG4ubGlzdC1jYXJkOmhvdmVyLFxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gXFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuXG4gICAgdGhpcy5Qcm9qZWN0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnRvZG9MaXN0cyA9IFtdO1xuXG4gICAgICB0aGlzLmFkZExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICBsaXN0LmlkID0gdGhpcy50b2RvTGlzdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5wdXNoKGxpc3QpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZW1vdmVMaXN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9kb0xpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHRoaXMudG9kb0xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZGlzcGxheUxpc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3Q6IFwiICsgdGhpcy5uYW1lKTtcbiAgICAgICAgdGhpcy50b2RvTGlzdHMuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgIGxpc3QuZGlzcGxheUxpc3QoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBzZXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbmV3IEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdC5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3QuaWQgPSB0aGlzLnByb2plY3RzLmxlbmd0aDtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICByZW1vdmVQcm9qZWN0KGlkKSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgY29uc29sZS5sb2coXCJQcm9qZWN0czpcIik7XG4gICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LmRpc3BsYXlMaXN0cygpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIEN1cnJlbnRQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IG51bGw7XG4gIH1cblxuICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0cywgQ3VycmVudFByb2plY3QgfTtcbiIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5mdW5jdGlvbiByZW5kZXJUb0RvTGlzdChsaXN0KSB7XG4gIGNvbnN0IGxpc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGlzdENhcmQuY2xhc3NOYW1lID0gXCJsaXN0LWNhcmRcIjtcbiAgbGlzdENhcmQuY2xhc3NMaXN0LmFkZChcInZpZXctY2FyZFwiKTtcbiAgbGlzdENhcmQuaWQgPSBsaXN0LmlkO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLWxpc3RcIjtcbiAgY2xvc2VCdXR0b24uaWQgPSBsaXN0LmlkO1xuXG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGluZy5jbGFzc05hbWUgPSBcImxpc3QtdGl0bGVcIjtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBsaXN0Lm5hbWU7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIGNvbnN0IGRlc2NTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRlc2NTcGFuLmlubmVySFRNTCA9IGAke2xpc3QuZGVzY3JpcHRpb259YDtcbiAgZGVzY1NwYW4uY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChkZXNjU3Bhbik7XG5cbiAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlRGF0ZVNwYW4uaW5uZXJIVE1MID0gYCR7bGlzdC5kdWVEYXRlfWA7XG4gIGR1ZURhdGVTcGFuLmNsYXNzTmFtZSA9IFwiZHVlLWRhdGVcIjtcbiAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVNwYW4pO1xuXG4gIGNvbnN0IHByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eVNwYW4uaW5uZXJIVE1MID0gYCR7bGlzdC5wcmlvcml0eX1gO1xuICBwcmlvcml0eVNwYW4uY2xhc3NOYW1lID0gXCJwcmlvcml0eVwiO1xuICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eVNwYW4pO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB1bC5jbGFzc05hbWUgPSBcImxpc3QtaXRlbXNcIjtcblxuICBsaXN0Lml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIGNvbnN0IGl0ZW1MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIGl0ZW1MaS5pbm5lckhUTUwgPSBpdGVtO1xuXG4gICAgbGkuYXBwZW5kQ2hpbGQoaXRlbUxpKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIGxpc3RDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0LWJ1dHRvblwiO1xuICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IFwiRWRpdFwiO1xuICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgcmV0dXJuIGxpc3RDYXJkO1xufVxuXG5mdW5jdGlvbiByZW5kZXJFZGl0TW9kZUNhcmQobGlzdENhcmQpIHtcbiAgY29uc3QgZWRpdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0Q2FyZC5jbGFzc0xpc3QuYWRkKFwibGlzdC1jYXJkXCIsIFwiZWRpdC1jYXJkXCIpO1xuICBlZGl0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGVkaXRDYXJkLmlkID0gbGlzdENhcmQuaWQ7XG5cbiAgY29uc3QgdGl0bGUgPSBsaXN0Q2FyZC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gbGlzdENhcmQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGxpc3RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5ID0gbGlzdENhcmQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcbiAgY29uc3QgbGlzdEl0ZW1zID0gbGlzdENhcmQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1zIGxpXCIpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdC10aXRsZVwiKTtcbiAgdGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtbGlzdC1kZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uLmlubmVySFRNTDtcbiAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWxpc3QtZHVlLWRhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGR1ZURhdGUuaW5uZXJIVE1MO1xuICBjb25zb2xlLmxvZyh0eXBlb2YgZHVlRGF0ZS5pbm5lckhUTUwpO1xuXG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWxpc3QtcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5SW5wdXQuaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCJBbnl0aW1lXCIgJHtcbiAgICAgIHByaW9yaXR5ID09PSBcIkFueXRpbWVcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICB9PkFueXRpbWU8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiQ2FuIHdhaXRcIiAke1xuICAgICAgcHJpb3JpdHkgPT09IFwiQ2FuIHdhaXRcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICB9PkNhbiB3YWl0PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlRvZGF5XCIgJHtcbiAgICAgIHByaW9yaXR5ID09PSBcIlRvZGF5XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgfT5Ub2RheTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJJbW1lZGlhdGVseVwiICR7XG4gICAgICBwcmlvcml0eSA9PT0gXCJJbW1lZGlhdGVseVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgIH0+SW1tZWRpYXRlbHk8L29wdGlvbj5cbiAgYDtcblxuICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHkuaW5uZXJIVE1MO1xuXG4gIGNvbnN0IGxpc3RJdGVtc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsaXN0SXRlbXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1saXN0LWl0ZW1zXCIpO1xuXG4gIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IGl0ZW0udGV4dENvbnRlbnQ7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgbGlzdEl0ZW1JbnB1dC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdEl0ZW1zSW5wdXQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1JbnB1dCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWJ1dHRvblwiKTtcbiAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBlZGl0Q2FyZC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZWRpdENhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBlZGl0Q2FyZC5hcHBlbmRDaGlsZChsaXN0SXRlbXNJbnB1dCk7XG4gIGVkaXRDYXJkLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICBlZGl0Q2FyZC5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gIHJldHVybiBlZGl0Q2FyZDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlQnV0dG9uKCkge1xuICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjcmVhdGVCdXR0b24uY2xhc3NOYW1lID0gXCJjcmVhdGUtYnV0dG9uXCI7XG5cbiAgY3JlYXRlQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICByZXR1cm4gY3JlYXRlQnV0dG9uO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0cy1jb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlclRvRG9MaXN0KGxpc3QpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRWRpdE1vZGVDYXJkKHJlbmRlclRvRG9MaXN0KGxpc3QpKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0SW5wdXQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgcHJvamVjdHNXcmFwcGVyLmlkID0gcHJvamVjdC5pZDtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS1saXN0XCI7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG9wZW5CdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIG9wZW5CdXR0b24uaW5uZXJIVE1MID0gXCJPcGVuXCI7XG4gIG9wZW5CdXR0b24uY2xhc3NOYW1lID0gXCJvcGVuLWJ1dHRvblwiO1xuICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQob3BlbkJ1dHRvbik7XG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgcHJvamVjdC50b2RvTGlzdHMuZm9yRWFjaChmdW5jdGlvbiAodG9kb0xpc3QpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSB0b2RvTGlzdC5uYW1lO1xuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzV3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzKHByb2plY3RzKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzV3JhcHBlci5jbGFzc05hbWUgPSBcInByb2plY3QtY2FyZFwiO1xuICAgIHByb2plY3RzV3JhcHBlci5pZCA9IHByb2plY3QuaWQ7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLWxpc3RcIjtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGNvbnN0IG9wZW5CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG9wZW5CdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgb3BlbkJ1dHRvbi5pbm5lckhUTUwgPSBcIk9wZW5cIjtcbiAgICBvcGVuQnV0dG9uLmNsYXNzTmFtZSA9IFwib3Blbi1idXR0b25cIjtcbiAgICBvcGVuQnV0dG9uLmlkID0gcHJvamVjdC5pZDtcbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQob3BlbkJ1dHRvbik7XG5cbiAgICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvTGlzdCkge1xuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSB0b2RvTGlzdC5uYW1lO1xuXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzV3JhcHBlcik7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICByZW5kZXJUb0RvTGlzdCxcbiAgcmVuZGVyUHJvamVjdCxcbiAgcmVuZGVyQWxsUHJvamVjdHMsXG4gIHJlbmRlckNyZWF0ZUJ1dHRvbixcbiAgcmVuZGVyUHJvamVjdElucHV0LFxuICByZW5kZXJFZGl0TW9kZUNhcmQsXG59O1xuIiwiZnVuY3Rpb24gVG9Eb0xpc3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB0aGlzLml0ZW1zID0gW107XG5cbiAgdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gIH07XG5cbiAgdGhpcy5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFJlbW92ZWQ6ICR7aXRlbX1gKTtcbiAgfTtcblxuICB0aGlzLnNldENvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gIH07XG5cbiAgdGhpcy5kaXNwbGF5TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiRGVzY3JpcHRpb246IFwiICsgdGhpcy5kZXNjcmlwdGlvbik7XG4gICAgY29uc29sZS5sb2coXCJEdWUgZGF0ZTogXCIgKyB0aGlzLmR1ZURhdGUpO1xuICAgIGNvbnNvbGUubG9nKFwiUHJpb3JpdHk6IFwiICsgdGhpcy5wcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2coXCJOb3RlczogXCIgKyB0aGlzLm5vdGVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKGkgKyAxICsgXCIuIFwiICsgdGhpcy5pdGVtc1tpXSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyBUb0RvTGlzdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgUHJvamVjdHMsIEN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgcmVuZGVyVG9Eb0xpc3QsXG4gIHJlbmRlclByb2plY3QsXG4gIHJlbmRlckFsbFByb2plY3RzLFxuICByZW5kZXJDcmVhdGVCdXR0b24sXG4gIHJlbmRlclByb2plY3RJbnB1dCxcbiAgcmVuZGVyRWRpdE1vZGVDYXJkLFxufSBmcm9tIFwiLi90b2RvLWRvbVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBsZXQgaXNQcm9qZWN0ID0gdHJ1ZTtcbiAgbGV0IGlzUHJvamVjdHMgPSBmYWxzZTtcbiAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RzLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhbGxQcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xuXG4gIGxldCBzdW5kYXlDaG9yZXMgPSBuZXcgYWxsUHJvamVjdHMuUHJvamVjdChcIlN1bmRheSBDaG9yZXNcIik7XG4gIGxldCBob21ld29yayA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KFwiSG9tZXdvcmtcIik7XG5cbiAgYWxsUHJvamVjdHMuYWRkUHJvamVjdChzdW5kYXlDaG9yZXMpO1xuICBhbGxQcm9qZWN0cy5hZGRQcm9qZWN0KGhvbWV3b3JrKTtcblxuICBsZXQgZ3JvY2VyeUxpc3QgPSBuZXcgVG9Eb0xpc3QoXG4gICAgXCJHcm9jZXJpZXNcIixcbiAgICBcIkxpc3QgZm9yIFN1bmRheSBncm9jZXJ5IHJ1blwiLFxuICAgIFwiMjAwMi0wMi0wMlwiLFxuICAgIFwiQ2FuIHdhaXRcIixcbiAgICBcIkRvbid0IGZvcmdldCB0byBzYXkgaGlnaCB0byBKZXJyeSBhdCB0aGUgZnJvbnQgZGVzay4gWW91IGd1eXMgaGF2ZW4ndCBzZWVuIGVhY2ggb3RoZXIgaW4gYSB3aGlsZS5cIlxuICApO1xuICBncm9jZXJ5TGlzdC5hZGRJdGVtKFwiRWdnc1wiKTtcbiAgZ3JvY2VyeUxpc3QuYWRkSXRlbShcIkJyZWFkXCIpO1xuICBncm9jZXJ5TGlzdC5hZGRJdGVtKFwiTWlsa1wiKTtcblxuICBsZXQgaG91c2VDaG9yZXMgPSBuZXcgVG9Eb0xpc3QoXG4gICAgXCJIb3VzZSBDaG9yZXNcIixcbiAgICBcIlwiLFxuICAgIFwiMjAxMC0wMS0wNFwiLFxuICAgIFwiQW55dGltZVwiLFxuICAgIFwiXCJcbiAgKTtcbiAgaG91c2VDaG9yZXMuYWRkSXRlbShcIkRvIGxhdW5kcnlcIik7XG4gIGhvdXNlQ2hvcmVzLmFkZEl0ZW0oXCJUYWtlIHRoZSB0cmFzaCBvdXRcIik7XG4gIGhvdXNlQ2hvcmVzLmFkZEl0ZW0oXCJDbGVhbiB0aGUgYmF0aHJvb21cIik7XG4gIGhvdXNlQ2hvcmVzLmFkZEl0ZW0oXCJWYWN1dW0gdGhlIGFwYXJ0bWVudFwiKTtcblxuICBsZXQgbW9uZGF5SG9tZXdvcmsgPSBuZXcgVG9Eb0xpc3QoXCJtb25IV1wiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiKTtcblxuICBzdW5kYXlDaG9yZXMuYWRkTGlzdChncm9jZXJ5TGlzdCk7XG4gIHN1bmRheUNob3Jlcy5hZGRMaXN0KGhvdXNlQ2hvcmVzKTtcblxuICBob21ld29yay5hZGRMaXN0KG1vbmRheUhvbWV3b3JrKTtcbiAgaG9tZXdvcmsuYWRkTGlzdChtb25kYXlIb21ld29yayk7XG5cbiAgcmVuZGVyUHJvamVjdChzdW5kYXlDaG9yZXMpO1xuXG4gIGFsbFByb2plY3RzLnNldFByb2plY3Qoc3VuZGF5Q2hvcmVzKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdHMtY29udGFpbmVyXCIpO1xuICAgIGlmICghbGlzdENvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3Qgdmlld0NhcmRzID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctY2FyZFwiKTtcbiAgICBjb25zdCBlZGl0Q2FyZHMgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1jYXJkXCIpO1xuICAgIGNvbnN0IHBhcmVudElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICAgIHZpZXdDYXJkcy5mb3JFYWNoKCh2aWV3Q2FyZCkgPT4ge1xuICAgICAgaWYgKHZpZXdDYXJkLmlkID09PSBwYXJlbnRJZCkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1idXR0b25cIikpIHtcbiAgICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJlZGl0XCIpO1xuICAgICAgICAgIHZpZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjYW5jZWwtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICB2aWV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2F2ZS1idXR0b25cIikpIHtcbiAgICAgICAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdGVcIiwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgIHZpZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWRpdENhcmRzLmZvckVhY2goKGVkaXRDYXJkKSA9PiB7XG4gICAgICBpZiAoZWRpdENhcmQuaWQgPT09IHBhcmVudElkKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLWJ1dHRvblwiKSkge1xuICAgICAgICAgIGxpc3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0ZVwiLCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgZWRpdENhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgZWRpdENhcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNhbmNlbC1idXR0b25cIikpIHtcbiAgICAgICAgICBlZGl0Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWl0ZW0tYnV0dG9uXCIpO1xuXG4gIGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpdGVtSW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbS1pbnB1dFwiKTtcblxuICAgIGNvbnN0IG51bUlucHV0cyA9IGl0ZW1JbnB1dHNDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKS5sZW5ndGg7XG5cbiAgICBjb25zdCBuZXdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3SW5wdXQuY2xhc3NOYW1lID0gXCJpdGVtXCI7XG4gICAgbmV3SW5wdXQubmFtZSA9IGBpdGVtLSR7bnVtSW5wdXRzICsgMX1gO1xuXG4gICAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmV3TGFiZWwuaHRtbEZvciA9IG5ld0lucHV0LmlkO1xuICAgIG5ld0xhYmVsLmNsYXNzTmFtZSA9IFwibGFiZWxcIjtcbiAgICBuZXdMYWJlbC5pbm5lckhUTUwgPSBgSXRlbSAke251bUlucHV0cyArIDF9YDtcblxuICAgIGl0ZW1JbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuICAgIGl0ZW1JbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW5wdXQpO1xuICB9KTtcblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWNhcmRcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGUudGFyZ2V0O1xuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZWRpdFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdExpc3RzKCkge1xuICAgIGNvbnN0IGxpc3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWNhcmRcIik7XG4gICAgZm9yIChsZXQgaSA9IGxpc3RDYXJkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKGxpc3RDYXJkc1tpXS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGxpc3RDYXJkc1tpXS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1jYXJkXCIpO1xuICAgIGZvciAobGV0IGkgPSBwcm9qZWN0Q2FyZHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmIChwcm9qZWN0Q2FyZHNbaV0ucGFyZW50Tm9kZSkge1xuICAgICAgICBwcm9qZWN0Q2FyZHNbaV0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIGlzUHJvamVjdCA9IGZhbHNlO1xuICAgIGlzUHJvamVjdHMgPSB0cnVlO1xuICAgIHJlbmRlckFsbFByb2plY3RzKGFsbFByb2plY3RzLnByb2plY3RzKTtcbiAgICByZW5kZXJDcmVhdGVCdXR0b24oKTtcbiAgICByZW1vdmVQcm9qZWN0TGlzdHMoKTtcbiAgICByZW1vdmVDbGlja0V2ZW50TGlzdGVuZXIocHJvamVjdHNCdXR0b24sIGhhbmRsZUNsaWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsaWNrRXZlbnRMaXN0ZW5lcihlbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmIChpc1Byb2plY3QgPT09IHRydWUpIHtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICB9IGVsc2UgcmV0dXJuO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIuY2xvc2UtbW9kYWxcIikpIHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJDcmVhdGVCdXR0b24oKSk7XG5cbiAgZnVuY3Rpb24gc2hvd0xpc3RNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWxpc3QtbW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuICBmdW5jdGlvbiBzaG93UHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtcHJvamVjdC1tb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWJ1dHRvblwiKTtcblxuICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNQcm9qZWN0KSB7XG4gICAgICBzaG93TGlzdE1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dQcm9qZWN0TW9kYWwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1saXN0LWZvcm1cIik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICBjb25zdCBpdGVtSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XG4gICAgY29uc3QgaXRlbUxhYmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsYWJlbFwiKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICBjb25zdCB0b2RvTGlzdCA9IG5ldyBUb0RvTGlzdChcbiAgICAgIGZvcm1EYXRhLmdldChcIm5hbWVcIiksXG4gICAgICBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgIGZvcm1EYXRhLmdldChcImR1ZS1kYXRlXCIpLFxuICAgICAgZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIilcbiAgICApO1xuXG4gICAgYWxsUHJvamVjdHMuY3VycmVudFByb2plY3QuZ2V0Q3VycmVudFByb2plY3QoKS5hZGRMaXN0KHRvZG9MaXN0KTtcblxuICAgIGZvciAobGV0IGlucHV0IG9mIGl0ZW1JbnB1dHMpIHtcbiAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICB0b2RvTGlzdC5hZGRJdGVtKGlucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJUb0RvTGlzdCh0b2RvTGlzdCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJFZGl0TW9kZUNhcmQocmVuZGVyVG9Eb0xpc3QodG9kb0xpc3QpKSk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBmb3IgKGxldCBpID0gaXRlbUxhYmVscy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICBpdGVtTGFiZWxzW2ldLnJlbW92ZSgpO1xuICAgICAgaXRlbUlucHV0c1tpXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0KGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW4tYnV0dG9uXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzUHJvamVjdCA9IHRydWU7XG4gICAgaXNQcm9qZWN0cyA9IGZhbHNlO1xuICAgIHJlbW92ZVByb2plY3RzKCk7XG4gICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1jYXJkXCIpO1xuICAgIGZvciAobGV0IGNhcmQgb2YgcHJvamVjdENhcmRzKSB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gZS50YXJnZXQuaWQ7XG4gICAgcmVuZGVyUHJvamVjdChhbGxQcm9qZWN0cy5wcm9qZWN0c1tpbmRleF0pO1xuICAgIGFsbFByb2plY3RzLnNldFByb2plY3QoYWxsUHJvamVjdHMucHJvamVjdHNbaW5kZXhdKTtcbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cy5jdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXByb2plY3QtZm9ybVwiKTtcbiAgY29uc29sZS5sb2cocHJvamVjdEZvcm0pO1xuXG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LW1vZGFsXCIpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHByb2plY3RGb3JtKTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgYWxsUHJvamVjdHMuUHJvamVjdChmb3JtRGF0YS5nZXQoXCJuYW1lXCIpKTtcbiAgICBhbGxQcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzLnByb2plY3RzKTtcblxuICAgIHJlbmRlclByb2plY3RJbnB1dChwcm9qZWN0KTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RDYXJkKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLWxpc3RcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcImRpdlwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaXN0LWNhcmRcIikpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgbGlzdElkID0gcGFyc2VJbnQoYnRuLmNsb3Nlc3QoXCJkaXZcIikuaWQsIDEwKTtcbiAgICAgIGFsbFByb2plY3RzLmN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlTGlzdChsaXN0SWQpO1xuICAgICAgYnRuLmNsb3Nlc3QoXCJkaXZcIikucmVtb3ZlKCk7XG4gICAgICBjb25zb2xlLmxvZyhzdW5kYXlDaG9yZXMudG9kb0xpc3RzKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1jYXJkXCIpKSB7XG4gICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHBhcnNlSW50KGJ0bi5jbG9zZXN0KFwiZGl2XCIpLmlkLCAxMCk7XG4gICAgICBhbGxQcm9qZWN0cy5yZW1vdmVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICBidG4uY2xvc2VzdChcImRpdlwiKS5yZW1vdmUoKTtcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzLnByb2plY3RzKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZGVmYXVsdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZmF1bHQtY2FyZFwiKTtcbiAgLy8gY29uc29sZS5sb2cocmVuZGVyRWRpdE1vZGVDYXJkKGRlZmF1bHRDYXJkKSk7XG5cbiAgc2VsZWN0ZWRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVMaXN0Q2FyZCk7XG4gIHNlbGVjdGVkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlblByb2plY3QpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
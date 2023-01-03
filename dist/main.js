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
___CSS_LOADER_EXPORT___.push([module.id, ".project-title {\n  display: flex;\n  justify-content: center;\n  margin-left: 212px;\n    margin-top: 70px;\n}\n\nli {\n    list-style: none;\n}\n\n.list-items li{\n  list-style: circle;\n}\n\n.lists-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-rows: 1fr;\n  gap: 1rem;\n  margin-left: 6.5rem;\n  margin-top: 70px;\n  \n}\n\n\n\n/* Modal style */\n\n@keyframes animatetop {\n  from {top: -300px; opacity: 0;}\n  to {top: 0; opacity: 1;}\n}\n\n.modal {\n  display: none; \n  position: fixed; \n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.modal-content,\n.project-modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 15% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content;\n  font-size: 1.6rem;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-content input,\n.project-modal-content input{\n  font-size: 1.5rem;\n}\n\n#create-list-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#create-list-form textarea{\n  resize: none;\n  font-size: 1.1rem;\n}\n\n\n.close-modal {\n  float: right;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-modal:hover,\n.close-modal:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n.vertical-nav {\n  position: fixed;\n  float: left;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  min-width: 6.5rem;\n  margin-top: 58px;\n  background-color: #333;\n  color: #fff;\n}\n\n.vertical-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.vertical-nav li {\n  width: 100%;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vertical-nav a:hover {\n  background-color: #444;\n}\n\n\n\n.horizontal-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #333;\n  color: #fff;\n}\n\n.horizontal-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n  .horizontal-nav li {\n    width: 100%;\n  }\n  \n  \n  \n  .horizontal-nav a {\n    display: block;\n    padding: 20px;\n    color: #fff;\n    text-decoration: none;\n  }\n  \n  .horizontal-nav a:hover {\n    background-color: #444;\n  }\n  \n  nav h1 {\n    font-size: 20px;\n  }\n  \n .list-title {\n    margin: 0;\n    padding-bottom: 1rem;\n  }\n\n \n\n  .list-card,\n  .project-card,\n  .create-button {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-radius: 7px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n    padding: 1rem;\n  }\n\n  \n  \n  .close-list {\n    align-self: flex-end;\n    font-weight: bold;\n    font-size: 1.5rem;\n  }\n  \n  .close-list:hover,\n  .close-list:active {\n    color: #888;\n    text-decoration: none;\n    cursor: pointer;\n  } \n\n  .create-button {\n    \n    text-align: center;\n    font-size: 12rem;\n  }\n  .create-button:hover,\n  .list-card:hover,\n  .project-card:hover {\n    background-color: rgb(203, 203, 203);\n  }\n  .create-button:active,\n  .list-card:active,\n  .project-card:active {\n    background-color: rgb(153, 153, 153);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;;AAElB;;;;AAIA,gBAAgB;;AAEhB;EACE,MAAM,WAAW,EAAE,UAAU,CAAC;EAC9B,IAAI,MAAM,EAAE,UAAU,CAAC;AACzB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;;EAEE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;;;AAGA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;;AAGA;EACE,eAAe;EACf,WAAW;EACX,OAAO;EACP,MAAM;EACN,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;;;AAIA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;EAEE;IACE,WAAW;EACb;;;;EAIA;IACE,cAAc;IACd,aAAa;IACb,WAAW;IACX,qBAAqB;EACvB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;CAED;IACG,SAAS;IACT,oBAAoB;EACtB;;;;EAIA;;;IAGE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,wCAAwC;IACxC,aAAa;EACf;;;;EAIA;IACE,oBAAoB;IACpB,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;;IAEE,WAAW;IACX,qBAAqB;IACrB,eAAe;EACjB;;EAEA;;IAEE,kBAAkB;IAClB,gBAAgB;EAClB;EACA;;;IAGE,oCAAoC;EACtC;EACA;;;IAGE,oCAAoC;AACxC","sourcesContent":[".project-title {\n  display: flex;\n  justify-content: center;\n  margin-left: 212px;\n    margin-top: 70px;\n}\n\nli {\n    list-style: none;\n}\n\n.list-items li{\n  list-style: circle;\n}\n\n.lists-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-rows: 1fr;\n  gap: 1rem;\n  margin-left: 6.5rem;\n  margin-top: 70px;\n  \n}\n\n\n\n/* Modal style */\n\n@keyframes animatetop {\n  from {top: -300px; opacity: 0;}\n  to {top: 0; opacity: 1;}\n}\n\n.modal {\n  display: none; \n  position: fixed; \n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.modal-content,\n.project-modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 15% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content;\n  font-size: 1.6rem;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-content input,\n.project-modal-content input{\n  font-size: 1.5rem;\n}\n\n#create-list-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n#create-list-form textarea{\n  resize: none;\n  font-size: 1.1rem;\n}\n\n\n.close-modal {\n  float: right;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-modal:hover,\n.close-modal:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n.vertical-nav {\n  position: fixed;\n  float: left;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  min-width: 6.5rem;\n  margin-top: 58px;\n  background-color: #333;\n  color: #fff;\n}\n\n.vertical-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.vertical-nav li {\n  width: 100%;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vertical-nav a:hover {\n  background-color: #444;\n}\n\n\n\n.horizontal-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #333;\n  color: #fff;\n}\n\n.horizontal-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n  .horizontal-nav li {\n    width: 100%;\n  }\n  \n  \n  \n  .horizontal-nav a {\n    display: block;\n    padding: 20px;\n    color: #fff;\n    text-decoration: none;\n  }\n  \n  .horizontal-nav a:hover {\n    background-color: #444;\n  }\n  \n  nav h1 {\n    font-size: 20px;\n  }\n  \n .list-title {\n    margin: 0;\n    padding-bottom: 1rem;\n  }\n\n \n\n  .list-card,\n  .project-card,\n  .create-button {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-radius: 7px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n    padding: 1rem;\n  }\n\n  \n  \n  .close-list {\n    align-self: flex-end;\n    font-weight: bold;\n    font-size: 1.5rem;\n  }\n  \n  .close-list:hover,\n  .close-list:active {\n    color: #888;\n    text-decoration: none;\n    cursor: pointer;\n  } \n\n  .create-button {\n    \n    text-align: center;\n    font-size: 12rem;\n  }\n  .create-button:hover,\n  .list-card:hover,\n  .project-card:hover {\n    background-color: rgb(203, 203, 203);\n  }\n  .create-button:active,\n  .list-card:active,\n  .project-card:active {\n    background-color: rgb(153, 153, 153);\n}"],"sourceRoot":""}]);
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
    
    this.Project = function(name) {
      this.name = name;
      this.todoLists = [];
      
      this.addList = function(list) {
        list.id = this.todoLists.length;
        this.todoLists.push(list);
       
      };
      
      this.removeList = function(id) {
        let index = this.todoLists.findIndex(list => list.id === id);
        if (index > -1) {
          this.todoLists.splice(index, 1);
        }
      };
      
      this.displayLists = function() {
        console.log("Project: " + this.name);
        this.todoLists.forEach(function(list) {
          list.displayList();
        });
      };
    }
    }

    setProject(project) {
      this.currentProject = new CurrentProject;
      this.currentProject.setCurrentProject(project);

    }

    addProject(project) {
      project.id = this.projects.length;
      this.projects.push(project);
    }
  
    removeProject(id) {
      let index = -1
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id === id) {
          index = i
          break
        }
      }
      if (index > -1) {
        this.projects.splice(index, 1)
        
      }
      
    }
    
  
    displayProjects() {
      console.log("Projects:");
      this.projects.forEach(function(project) {
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
/* harmony export */   "renderProject": () => (/* binding */ renderProject),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function renderToDoList(list) {
    
    const listCard = document.createElement('div');
    listCard.className = 'list-card'
    listCard.id = list.id

    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-list';
    closeButton.id = list.id

    listCard.appendChild(closeButton);
    const heading = document.createElement('h3');
    heading.className = 'list-title';
    heading.innerHTML = list.name;
    listCard.appendChild(heading);

    const descSpan = document.createElement('span');
    descSpan.innerHTML = `Description: ${list.description}`;
    listCard.appendChild(descSpan);

    const dueDateSpan = document.createElement('span');
    dueDateSpan.innerHTML = `Due: ${list.dueDate}`;
    listCard.appendChild(dueDateSpan);

    const prioritySpan = document.createElement('span');
    prioritySpan.innerHTML = `Priority: ${list.priority}`;
    listCard.appendChild(prioritySpan);

    const ul = document.createElement("ul");
    ul.className = 'list-items'
    
    list.items.forEach(function(item) {

        const li = document.createElement('li');

        const itemLi = document.createElement('li');
        

        itemLi.innerHTML = item;

        li.appendChild(itemLi);
        
        ul.appendChild(li);

    });
    listCard.appendChild(ul);
    return listCard;
}


function renderCreateButton() {
    const createButton = document.createElement('div');
    createButton.className = 'create-button';
    
    createButton.innerHTML = '+';
    return createButton;
}


function renderProject(project) {
    const container = document.querySelector('.lists-container');
    const projectTitle = document.querySelector('.project-title');
    projectTitle.innerHTML = project.name

    project.todoLists.forEach(list => {
        
        container.appendChild(renderToDoList(list));
        
    });

    
}


function renderAllProjects(projects) {
    const projectContainer = document.querySelector('.project-container');
    
    
    projects.forEach(function(project) {
        const projectsWrapper = document.createElement('div');
        projectsWrapper.className = 'project-card';
        projectsWrapper.id = project.id
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-list';
       
        
        const heading = document.createElement('h3');
        heading.innerHTML = project.name;

        const list = document.createElement('ul');
        projectsWrapper.appendChild(closeButton);
        projectsWrapper.appendChild(heading);
        projectsWrapper.appendChild(list);

        project.todoLists.forEach(function(todoList) {
            const listItem = document.createElement('li');
            listItem.innerHTML = todoList.name;
        
            list.appendChild(listItem);
        })
        projectContainer.appendChild(projectsWrapper);
    })


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
    this.completed = false
    this.items = [];

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        let index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        console.log(`Removed: ${item}`);
    };

    this.setCompleted = function() {
        this.completed = true;
    }



    this.displayList = function() {
        console.log(this.name);
        console.log("Description: " + this.description);
        console.log("Due date: " + this.dueDate);
        console.log("Priority: " + this.priority);
        console.log("Notes: " + this.notes);
        for (let i = 0; i < this.items.length; i++) {
            console.log((i + 1) + ". " + this.items[i]);
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






const container = document.querySelector('.lists-container');

const allProjects = new _project__WEBPACK_IMPORTED_MODULE_2__.Projects()

let sundayChores = new allProjects.Project("Sunday Chores"); 
let homework = new allProjects.Project("Homework");

allProjects.addProject(sundayChores);
allProjects.addProject(homework);

let groceryList = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList("Groceries", "List for Sunday grocery run", "01-01-2023", "High", "Don't forget to say high to Jerry at the front desk. You guys haven't seen each other in a while.");
groceryList.addItem("Eggs");
groceryList.addItem("Bread");
groceryList.addItem("Milk");




let houseChores = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList("House Chores", "", "01-01-2023", "High", "");
houseChores.addItem("Do laundry");
houseChores.addItem("Take the trash out");
houseChores.addItem("Clean the bathroom");
houseChores.addItem("Vacuum the apartment");


let mondayHomework = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList("monHW", "", "", "", "");


sundayChores.addList(groceryList);
sundayChores.addList(houseChores);

homework.addList(mondayHomework)
homework.addList(mondayHomework)


function hideDefaultCard() {
    const defaultCard = document.querySelector(".default-card");
    defaultCard.style.display = 'none'
}


(0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(sundayChores)

allProjects.setProject(sundayChores)

console.log(allProjects.currentProject)

const projectsButton = document.getElementById('projects')

function hideProjectLists() {
    const projectLists = document.getElementsByClassName('list-card')
    for (let list of projectLists) {
        list.style.display = 'none'
    }
}




projectsButton.addEventListener('click', function() {
    const createButton = document.querySelector('.create-button');
    createButton.addEventListener('click', showProjectModal)
    
    closeModal()
    hideProjectLists()
    hideDefaultCard()
    ;(0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderAllProjects)(allProjects.projects);
    (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderCreateButton)()
    

})


function closeModal()  {   
    const closeModalButtons = document.getElementsByClassName('close-modal')
    for (let i = 0; i < closeModalButtons.length; i++) {
        closeModalButtons[i].addEventListener('click', function() {
        const modal = this.parentNode.parentNode
        modal.style.display = 'none'
  })}
}

container.appendChild((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderCreateButton)())
const createButton = document.querySelector('.create-button');

function showListModal() {
    const modal = document.getElementById('create-list-modal')
    modal.style.display = 'block';
}
function showProjectModal() {
    const modal = document.getElementById('create-project-modal')
    modal.style.display = 'block';
}


const form = document.getElementById('create-list-form');

form.addEventListener("submit", function(event) {
    const itemInputs = document.getElementsByClassName('item');
    
    event.preventDefault();
    
    const formData = new FormData(form);
    
    const todoList = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDoList(
        formData.get("name"),
        formData.get("description"),
        formData.get("priority"),
        formData.get("due-date")
        );
        
        sundayChores.addList(todoList);
        
        for (let input of itemInputs) {
            if (input.value !== '') {
                todoList.addItem(input.value);
                
            }
        }
        
        container.appendChild((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderToDoList)(todoList))
        
        closeModal();
        
        console.log(sundayChores)
        
    })
    
    function openProject(e) {

        if(!e.target.classList.contains('project-card')) {
            return
        };
            const projectCards = document.getElementsByClassName('project-card');
            for (let card of projectCards) {
                card.style.display = 'none';
            }
            let index = e.target.id;
            (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(allProjects.projects[index])
            allProjects.setProject(allProjects.projects[index])

    }
   
    
    const closeButton = document.querySelector('.close-modal');
    const removeButton = document.querySelector('.close-list')
    let selectedProject = document.querySelector('.project');
    let projectsContainer = document.querySelector('.project-container');
    // createButton.addEventListener("click", showListModal);
    
    
    
    
    function removeListCard(e) {

        if(!e.target.classList.contains('close-list')) {
            return;
        }

            if(e.target.closest('div').classList.contains('list-card')) {

            const btn = e.target;
            const listId = parseInt(btn.closest('div').id, 10);
            allProjects.currentProject.getCurrentProject().removeList(listId);
            btn.closest('div').remove();
            console.log(sundayChores.todoLists);
            }

            else if(e.target.closest('div').classList.contains('project-card')) {
                const btn = e.target;
                const projectId = parseInt(btn.closest('div').id, 10);
                allProjects.removeProject(projectId)
                btn.closest('div').remove();
                console.log(allProjects.projects)
            }    
    }

    selectedProject.addEventListener("click", removeListCard)
    
    projectsContainer.addEventListener('click', openProject)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQkFBc0IsNkRBQWtCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5REFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWE7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvamVjdC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjEycHg7XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpc3QtaXRlbXMgbGl7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA2LjVyZW07XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgXFxufVxcblxcblxcblxcbi8qIE1vZGFsIHN0eWxlICovXFxuXFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OiAwO31cXG4gIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDE7fVxcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgXFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGlucHV0LFxcbi5wcm9qZWN0LW1vZGFsLWNvbnRlbnQgaW5wdXR7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2NyZWF0ZS1saXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcbiNjcmVhdGUtbGlzdC1mb3JtIHRleHRhcmVhe1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLW1vZGFsOmFjdGl2ZSB7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnZlcnRpY2FsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtaW4td2lkdGg6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcblxcblxcbi5ob3Jpem9udGFsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiAgLmhvcml6b250YWwtbmF2IGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIFxcbiAgXFxuICAuaG9yaXpvbnRhbC1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgXFxuICAuaG9yaXpvbnRhbC1uYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxuICB9XFxuICBcXG4gIG5hdiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIFxcbiAubGlzdC10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuIFxcblxcbiAgLmxpc3QtY2FyZCxcXG4gIC5wcm9qZWN0LWNhcmQsXFxuICAuY3JlYXRlLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICBcXG4gIFxcbiAgLmNsb3NlLWxpc3Qge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgXFxuICAuY2xvc2UtbGlzdDpob3ZlcixcXG4gIC5jbG9zZS1saXN0OmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjODg4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH0gXFxuXFxuICAuY3JlYXRlLWJ1dHRvbiB7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTJyZW07XFxuICB9XFxuICAuY3JlYXRlLWJ1dHRvbjpob3ZlcixcXG4gIC5saXN0LWNhcmQ6aG92ZXIsXFxuICAucHJvamVjdC1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcbiAgfVxcbiAgLmNyZWF0ZS1idXR0b246YWN0aXZlLFxcbiAgLmxpc3QtY2FyZDphY3RpdmUsXFxuICAucHJvamVjdC1jYXJkOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCOztBQUVsQjs7OztBQUlBLGdCQUFnQjs7QUFFaEI7RUFDRSxNQUFNLFdBQVcsRUFBRSxVQUFVLENBQUM7RUFDOUIsSUFBSSxNQUFNLEVBQUUsVUFBVSxDQUFDO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7Ozs7RUFJQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0NBRUQ7SUFDRyxTQUFTO0lBQ1Qsb0JBQW9CO0VBQ3RCOzs7O0VBSUE7OztJQUdFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsYUFBYTtFQUNmOzs7O0VBSUE7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBOzs7SUFHRSxvQ0FBb0M7RUFDdEM7RUFDQTs7O0lBR0Usb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMTJweDtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1pdGVtcyBsaXtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxuICBcXG59XFxuXFxuXFxuXFxuLyogTW9kYWwgc3R5bGUgKi9cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDA7fVxcbiAgdG8ge3RvcDogMDsgb3BhY2l0eTogMTt9XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyBcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW5wdXQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCBpbnB1dHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3JlYXRlLWxpc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuI2NyZWF0ZS1saXN0LWZvcm0gdGV4dGFyZWF7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuXFxuLmNsb3NlLW1vZGFsIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1tb2RhbDpob3ZlcixcXG4uY2xvc2UtbW9kYWw6YWN0aXZlIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udmVydGljYWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1pbi13aWR0aDogNi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuXFxuXFxuLmhvcml6b250YWwtbmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhvcml6b250YWwtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuICAuaG9yaXpvbnRhbC1uYXYgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgXFxuICBcXG4gIC5ob3Jpem9udGFsLW5hdiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuICBcXG4gIC5ob3Jpem9udGFsLW5hdiBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gIH1cXG4gIFxcbiAgbmF2IGgxIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgXFxuIC5saXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gXFxuXFxuICAubGlzdC1jYXJkLFxcbiAgLnByb2plY3QtY2FyZCxcXG4gIC5jcmVhdGUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG5cXG4gIFxcbiAgXFxuICAuY2xvc2UtbGlzdCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIC5jbG9zZS1saXN0OmhvdmVyLFxcbiAgLmNsb3NlLWxpc3Q6YWN0aXZlIHtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfSBcXG5cXG4gIC5jcmVhdGUtYnV0dG9uIHtcXG4gICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnJlbTtcXG4gIH1cXG4gIC5jcmVhdGUtYnV0dG9uOmhvdmVyLFxcbiAgLmxpc3QtY2FyZDpob3ZlcixcXG4gIC5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxuICB9XFxuICAuY3JlYXRlLWJ1dHRvbjphY3RpdmUsXFxuICAubGlzdC1jYXJkOmFjdGl2ZSxcXG4gIC5wcm9qZWN0LWNhcmQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICBcbiAgICB0aGlzLlByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50b2RvTGlzdHMgPSBbXTtcbiAgICAgIFxuICAgICAgdGhpcy5hZGRMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xuICAgICAgICBsaXN0LmlkID0gdGhpcy50b2RvTGlzdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5wdXNoKGxpc3QpO1xuICAgICAgIFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgdGhpcy5yZW1vdmVMaXN0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2RvTGlzdHMuZmluZEluZGV4KGxpc3QgPT4gbGlzdC5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHRoaXMudG9kb0xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMuZGlzcGxheUxpc3RzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdDogXCIgKyB0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgICBsaXN0LmRpc3BsYXlMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbmV3IEN1cnJlbnRQcm9qZWN0O1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdC5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcblxuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5pZCA9IHRoaXMucHJvamVjdHMubGVuZ3RoO1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cbiAgXG4gICAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgICAgbGV0IGluZGV4ID0gLTFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gIFxuICAgIGRpc3BsYXlQcm9qZWN0cygpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdHM6XCIpO1xuICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC5kaXNwbGF5TGlzdHMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzIEN1cnJlbnRQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICBcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9qZWN0O1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCB7UHJvamVjdHMsIEN1cnJlbnRQcm9qZWN0fTtcbiAgXG5cbiIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5mdW5jdGlvbiByZW5kZXJUb0RvTGlzdChsaXN0KSB7XG4gICAgXG4gICAgY29uc3QgbGlzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0Q2FyZC5jbGFzc05hbWUgPSAnbGlzdC1jYXJkJ1xuICAgIGxpc3RDYXJkLmlkID0gbGlzdC5pZFxuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZS1saXN0JztcbiAgICBjbG9zZUJ1dHRvbi5pZCA9IGxpc3QuaWRcblxuICAgIGxpc3RDYXJkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoZWFkaW5nLmNsYXNzTmFtZSA9ICdsaXN0LXRpdGxlJztcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IGxpc3QubmFtZTtcbiAgICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IGRlc2NTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2NTcGFuLmlubmVySFRNTCA9IGBEZXNjcmlwdGlvbjogJHtsaXN0LmRlc2NyaXB0aW9ufWA7XG4gICAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoZGVzY1NwYW4pO1xuXG4gICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlRGF0ZVNwYW4uaW5uZXJIVE1MID0gYER1ZTogJHtsaXN0LmR1ZURhdGV9YDtcbiAgICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG5cbiAgICBjb25zdCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJpb3JpdHlTcGFuLmlubmVySFRNTCA9IGBQcmlvcml0eTogJHtsaXN0LnByaW9yaXR5fWA7XG4gICAgbGlzdENhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHlTcGFuKTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHVsLmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW1zJ1xuICAgIFxuICAgIGxpc3QuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuXG4gICAgICAgIGl0ZW1MaS5pbm5lckhUTUwgPSBpdGVtO1xuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGl0ZW1MaSk7XG4gICAgICAgIFxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICB9KTtcbiAgICBsaXN0Q2FyZC5hcHBlbmRDaGlsZCh1bCk7XG4gICAgcmV0dXJuIGxpc3RDYXJkO1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlckNyZWF0ZUJ1dHRvbigpIHtcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NOYW1lID0gJ2NyZWF0ZS1idXR0b24nO1xuICAgIFxuICAgIGNyZWF0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1dHRvbjtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lXG5cbiAgICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlclRvRG9MaXN0KGxpc3QpKTtcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICBcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBcbiAgICBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzV3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkJztcbiAgICAgICAgcHJvamVjdHNXcmFwcGVyLmlkID0gcHJvamVjdC5pZFxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xvc2UtbGlzdCc7XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgICAgIHByb2plY3QudG9kb0xpc3RzLmZvckVhY2goZnVuY3Rpb24odG9kb0xpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IHRvZG9MaXN0Lm5hbWU7XG4gICAgICAgIFxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNXcmFwcGVyKTtcbiAgICB9KVxuXG5cbn1cblxuZXhwb3J0IHtyZW5kZXJUb0RvTGlzdCwgcmVuZGVyUHJvamVjdCwgcmVuZGVyQWxsUHJvamVjdHMsIHJlbmRlckNyZWF0ZUJ1dHRvbn07IiwiZnVuY3Rpb24gVG9Eb0xpc3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmVkOiAke2l0ZW19YCk7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0Q29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5kaXNwbGF5TGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2NyaXB0aW9uOiBcIiArIHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkR1ZSBkYXRlOiBcIiArIHRoaXMuZHVlRGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJpb3JpdHk6IFwiICsgdGhpcy5wcmlvcml0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90ZXM6IFwiICsgdGhpcy5ub3Rlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coKGkgKyAxKSArIFwiLiBcIiArIHRoaXMuaXRlbXNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuXG59XG5cbmV4cG9ydCB7VG9Eb0xpc3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgUHJvamVjdHMsIEN1cnJlbnRQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHJlbmRlclRvRG9MaXN0LCByZW5kZXJQcm9qZWN0LCByZW5kZXJBbGxQcm9qZWN0cywgcmVuZGVyQ3JlYXRlQnV0dG9ufSBmcm9tICcuL3RvZG8tZG9tJztcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGFpbmVyJyk7XG5cbmNvbnN0IGFsbFByb2plY3RzID0gbmV3IFByb2plY3RzKClcblxubGV0IHN1bmRheUNob3JlcyA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KFwiU3VuZGF5IENob3Jlc1wiKTsgXG5sZXQgaG9tZXdvcmsgPSBuZXcgYWxsUHJvamVjdHMuUHJvamVjdChcIkhvbWV3b3JrXCIpO1xuXG5hbGxQcm9qZWN0cy5hZGRQcm9qZWN0KHN1bmRheUNob3Jlcyk7XG5hbGxQcm9qZWN0cy5hZGRQcm9qZWN0KGhvbWV3b3JrKTtcblxubGV0IGdyb2NlcnlMaXN0ID0gbmV3IFRvRG9MaXN0KFwiR3JvY2VyaWVzXCIsIFwiTGlzdCBmb3IgU3VuZGF5IGdyb2NlcnkgcnVuXCIsIFwiMDEtMDEtMjAyM1wiLCBcIkhpZ2hcIiwgXCJEb24ndCBmb3JnZXQgdG8gc2F5IGhpZ2ggdG8gSmVycnkgYXQgdGhlIGZyb250IGRlc2suIFlvdSBndXlzIGhhdmVuJ3Qgc2VlbiBlYWNoIG90aGVyIGluIGEgd2hpbGUuXCIpO1xuZ3JvY2VyeUxpc3QuYWRkSXRlbShcIkVnZ3NcIik7XG5ncm9jZXJ5TGlzdC5hZGRJdGVtKFwiQnJlYWRcIik7XG5ncm9jZXJ5TGlzdC5hZGRJdGVtKFwiTWlsa1wiKTtcblxuXG5cblxubGV0IGhvdXNlQ2hvcmVzID0gbmV3IFRvRG9MaXN0KFwiSG91c2UgQ2hvcmVzXCIsIFwiXCIsIFwiMDEtMDEtMjAyM1wiLCBcIkhpZ2hcIiwgXCJcIik7XG5ob3VzZUNob3Jlcy5hZGRJdGVtKFwiRG8gbGF1bmRyeVwiKTtcbmhvdXNlQ2hvcmVzLmFkZEl0ZW0oXCJUYWtlIHRoZSB0cmFzaCBvdXRcIik7XG5ob3VzZUNob3Jlcy5hZGRJdGVtKFwiQ2xlYW4gdGhlIGJhdGhyb29tXCIpO1xuaG91c2VDaG9yZXMuYWRkSXRlbShcIlZhY3V1bSB0aGUgYXBhcnRtZW50XCIpO1xuXG5cbmxldCBtb25kYXlIb21ld29yayA9IG5ldyBUb0RvTGlzdChcIm1vbkhXXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuXG5cbnN1bmRheUNob3Jlcy5hZGRMaXN0KGdyb2NlcnlMaXN0KTtcbnN1bmRheUNob3Jlcy5hZGRMaXN0KGhvdXNlQ2hvcmVzKTtcblxuaG9tZXdvcmsuYWRkTGlzdChtb25kYXlIb21ld29yaylcbmhvbWV3b3JrLmFkZExpc3QobW9uZGF5SG9tZXdvcmspXG5cblxuZnVuY3Rpb24gaGlkZURlZmF1bHRDYXJkKCkge1xuICAgIGNvbnN0IGRlZmF1bHRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWZhdWx0LWNhcmRcIik7XG4gICAgZGVmYXVsdENhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xufVxuXG5cbnJlbmRlclByb2plY3Qoc3VuZGF5Q2hvcmVzKVxuXG5hbGxQcm9qZWN0cy5zZXRQcm9qZWN0KHN1bmRheUNob3JlcylcblxuY29uc29sZS5sb2coYWxsUHJvamVjdHMuY3VycmVudFByb2plY3QpXG5cbmNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJylcblxuZnVuY3Rpb24gaGlkZVByb2plY3RMaXN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0LWNhcmQnKVxuICAgIGZvciAobGV0IGxpc3Qgb2YgcHJvamVjdExpc3RzKSB7XG4gICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbn1cblxuXG5cblxucHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWJ1dHRvbicpO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQcm9qZWN0TW9kYWwpXG4gICAgXG4gICAgY2xvc2VNb2RhbCgpXG4gICAgaGlkZVByb2plY3RMaXN0cygpXG4gICAgaGlkZURlZmF1bHRDYXJkKClcbiAgICByZW5kZXJBbGxQcm9qZWN0cyhhbGxQcm9qZWN0cy5wcm9qZWN0cyk7XG4gICAgcmVuZGVyQ3JlYXRlQnV0dG9uKClcbiAgICBcblxufSlcblxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkgIHsgICBcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlLW1vZGFsJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsb3NlTW9kYWxCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNsb3NlTW9kYWxCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9KX1cbn1cblxuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNyZWF0ZUJ1dHRvbigpKVxuY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcblxuZnVuY3Rpb24gc2hvd0xpc3RNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbGlzdC1tb2RhbCcpXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5mdW5jdGlvbiBzaG93UHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LW1vZGFsJylcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1saXN0LWZvcm0nKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW0nKTtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIFxuICAgIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KFxuICAgICAgICBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpLFxuICAgICAgICBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIiksXG4gICAgICAgIGZvcm1EYXRhLmdldChcImR1ZS1kYXRlXCIpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBzdW5kYXlDaG9yZXMuYWRkTGlzdCh0b2RvTGlzdCk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiBpdGVtSW5wdXRzKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuYWRkSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJUb0RvTGlzdCh0b2RvTGlzdCkpXG4gICAgICAgIFxuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhzdW5kYXlDaG9yZXMpXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgZnVuY3Rpb24gb3BlblByb2plY3QoZSkge1xuXG4gICAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtY2FyZCcpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtY2FyZCcpO1xuICAgICAgICAgICAgZm9yIChsZXQgY2FyZCBvZiBwcm9qZWN0Q2FyZHMpIHtcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QoYWxsUHJvamVjdHMucHJvamVjdHNbaW5kZXhdKVxuICAgICAgICAgICAgYWxsUHJvamVjdHMuc2V0UHJvamVjdChhbGxQcm9qZWN0cy5wcm9qZWN0c1tpbmRleF0pXG5cbiAgICB9XG4gICBcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1saXN0JylcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICAvLyBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dMaXN0TW9kYWwpO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RDYXJkKGUpIHtcblxuICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZS1saXN0JykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtY2FyZCcpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgbGlzdElkID0gcGFyc2VJbnQoYnRuLmNsb3Nlc3QoJ2RpdicpLmlkLCAxMCk7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5jdXJyZW50UHJvamVjdC5nZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZUxpc3QobGlzdElkKTtcbiAgICAgICAgICAgIGJ0bi5jbG9zZXN0KCdkaXYnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1bmRheUNob3Jlcy50b2RvTGlzdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1jYXJkJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChidG4uY2xvc2VzdCgnZGl2JykuaWQsIDEwKTtcbiAgICAgICAgICAgICAgICBhbGxQcm9qZWN0cy5yZW1vdmVQcm9qZWN0KHByb2plY3RJZClcbiAgICAgICAgICAgICAgICBidG4uY2xvc2VzdCgnZGl2JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMucHJvamVjdHMpXG4gICAgICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHNlbGVjdGVkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlTGlzdENhcmQpXG4gICAgXG4gICAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJvamVjdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
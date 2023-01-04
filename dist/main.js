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
___CSS_LOADER_EXPORT___.push([module.id, ".project-title {\n  display: flex;\n  justify-content: center;\n  margin-left: 212px;\n    margin-top: 70px;\n}\n\nli {\n    list-style: none;\n}\n\n.list-items li{\n  list-style: circle;\n}\n\n.lists-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-rows: 1fr;\n  gap: 1rem;\n  margin-left: 6.5rem;\n  margin-top: 70px;\n  \n}\n\n\n\n/* Modal style */\n\n@keyframes animatetop {\n  from {top: -300px; opacity: 0;}\n  to {top: 0; opacity: 1;}\n}\n\n\n\n.modal {\n  display: none; \n  position: fixed; \n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.modal-content,\n.project-modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 15% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content;\n  font-size: 1.6rem;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-content input,\n.project-modal-content input{\n  font-size: 1.5rem;\n}\n\n#create-list-form,\n#edit-list-form {\n  display: flex;\n  flex-direction: column;\n  /* gap: 1rem; */\n}\n#create-list-form textarea{\n  resize: none;\n  font-size: 1.1rem;\n}\n\n\n#add-item-input {\n  display: grid;\n  grid-template-columns:1fr 4fr;\n  \n  \n}\n\n.close-modal {\n  float: right;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-modal:hover,\n.close-modal:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n\n.vertical-nav {\n  position: fixed;\n  float: left;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  min-width: 6.5rem;\n  margin-top: 58px;\n  background-color: #333;\n  color: #fff;\n}\n\n.vertical-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.vertical-nav li {\n  width: 100%;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vertical-nav a:hover {\n  background-color: #444;\n}\n\n\n\n.horizontal-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #333;\n  color: #fff;\n}\n\n.horizontal-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n  .horizontal-nav li {\n    width: 100%;\n  }\n  \n  \n  \n  .horizontal-nav a {\n    display: block;\n    padding: 20px;\n    color: #fff;\n    text-decoration: none;\n  }\n  \n  .horizontal-nav a:hover {\n    background-color: #444;\n  }\n  \n  nav h1 {\n    font-size: 20px;\n  }\n  \n .list-title {\n    margin: 0;\n    padding-bottom: 1rem;\n  }\n\n \n\n  .list-card,\n  .project-card,\n  .create-button {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-radius: 7px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n    padding: 1rem;\n  }\n\n  \n  .close-list {\n    align-self: flex-end;\n    font-weight: bold;\n    font-size: 1.5rem;\n  }\n  \n  .close-list:hover,\n  .close-list:active {\n    color: #888;\n    text-decoration: none;\n    cursor: pointer;\n  } \n\n  .create-button {\n    \n    text-align: center;\n    font-size: 12rem;\n  }\n  .create-button:hover {\n    background-color: rgb(203, 203, 203);\n  }\n  .create-button:active {\n    background-color: rgb(153, 153, 153);\n}\n\n/* .list-card,\n.project-card {\n  transition: all 0.2s ease-in-out;\n  transform: translateY(-5px);\n}\n\n.list-card:hover,\n.project-card:hover {\n  transform: translateY(-10px);\n \n} */\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;;AAElB;;;;AAIA,gBAAgB;;AAEhB;EACE,MAAM,WAAW,EAAE,UAAU,CAAC;EAC9B,IAAI,MAAM,EAAE,UAAU,CAAC;AACzB;;;;AAIA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;;EAEE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;;;AAGA;EACE,aAAa;EACb,6BAA6B;;;AAG/B;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB;;;;AAIA;EACE,eAAe;EACf,WAAW;EACX,OAAO;EACP,MAAM;EACN,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;;;AAIA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;EAEE;IACE,WAAW;EACb;;;;EAIA;IACE,cAAc;IACd,aAAa;IACb,WAAW;IACX,qBAAqB;EACvB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;CAED;IACG,SAAS;IACT,oBAAoB;EACtB;;;;EAIA;;;IAGE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,wCAAwC;IACxC,aAAa;EACf;;;EAGA;IACE,oBAAoB;IACpB,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA;;IAEE,WAAW;IACX,qBAAqB;IACrB,eAAe;EACjB;;EAEA;;IAEE,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;AACxC;;AAEA;;;;;;;;;;GAUG","sourcesContent":[".project-title {\n  display: flex;\n  justify-content: center;\n  margin-left: 212px;\n    margin-top: 70px;\n}\n\nli {\n    list-style: none;\n}\n\n.list-items li{\n  list-style: circle;\n}\n\n.lists-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-rows: 1fr;\n  gap: 1rem;\n  margin-left: 6.5rem;\n  margin-top: 70px;\n  \n}\n\n\n\n/* Modal style */\n\n@keyframes animatetop {\n  from {top: -300px; opacity: 0;}\n  to {top: 0; opacity: 1;}\n}\n\n\n\n.modal {\n  display: none; \n  position: fixed; \n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n}\n\n.modal-content,\n.project-modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 15% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: fit-content;\n  font-size: 1.6rem;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n\n.modal-content input,\n.project-modal-content input{\n  font-size: 1.5rem;\n}\n\n#create-list-form,\n#edit-list-form {\n  display: flex;\n  flex-direction: column;\n  /* gap: 1rem; */\n}\n#create-list-form textarea{\n  resize: none;\n  font-size: 1.1rem;\n}\n\n\n#add-item-input {\n  display: grid;\n  grid-template-columns:1fr 4fr;\n  \n  \n}\n\n.close-modal {\n  float: right;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.close-modal:hover,\n.close-modal:active {\n  color: #888;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n\n.vertical-nav {\n  position: fixed;\n  float: left;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  min-width: 6.5rem;\n  margin-top: 58px;\n  background-color: #333;\n  color: #fff;\n}\n\n.vertical-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.vertical-nav li {\n  width: 100%;\n}\n\n.vertical-nav a {\n  display: block;\n  padding: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vertical-nav a:hover {\n  background-color: #444;\n}\n\n\n\n.horizontal-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #333;\n  color: #fff;\n}\n\n.horizontal-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n  .horizontal-nav li {\n    width: 100%;\n  }\n  \n  \n  \n  .horizontal-nav a {\n    display: block;\n    padding: 20px;\n    color: #fff;\n    text-decoration: none;\n  }\n  \n  .horizontal-nav a:hover {\n    background-color: #444;\n  }\n  \n  nav h1 {\n    font-size: 20px;\n  }\n  \n .list-title {\n    margin: 0;\n    padding-bottom: 1rem;\n  }\n\n \n\n  .list-card,\n  .project-card,\n  .create-button {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-radius: 7px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);\n    padding: 1rem;\n  }\n\n  \n  .close-list {\n    align-self: flex-end;\n    font-weight: bold;\n    font-size: 1.5rem;\n  }\n  \n  .close-list:hover,\n  .close-list:active {\n    color: #888;\n    text-decoration: none;\n    cursor: pointer;\n  } \n\n  .create-button {\n    \n    text-align: center;\n    font-size: 12rem;\n  }\n  .create-button:hover {\n    background-color: rgb(203, 203, 203);\n  }\n  .create-button:active {\n    background-color: rgb(153, 153, 153);\n}\n\n/* .list-card,\n.project-card {\n  transition: all 0.2s ease-in-out;\n  transform: translateY(-5px);\n}\n\n.list-card:hover,\n.project-card:hover {\n  transform: translateY(-10px);\n \n} */\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "renderProjectInput": () => (/* binding */ renderProjectInput),
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
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'edit-button';
    editButton.innerHTML = 'Edit'
    listCard.appendChild(editButton)
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

function renderProjectInput(project) {
    const projectContainer = document.querySelector('.project-container');
    
    const projectsWrapper = document.createElement('div');
    projectsWrapper.className = 'project-card';
    projectsWrapper.id = project.id;
    
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





(function(){
let isProject = true
let isProjects = false


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




;(0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(sundayChores)

allProjects.setProject(sundayChores)


const addItemButton = document.getElementById('add-item-button');

addItemButton.addEventListener('click', function() {
    const itemInputsContainer = document.getElementById('add-item-input');

    const numInputs = itemInputsContainer.getElementsByTagName('input').length;

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'item';
    newInput.name = `item-${numInputs + 1}`;

    const newLabel = document.createElement('label');
    newLabel.htmlFor = newInput.id;
    newLabel.innerHTML = `Item ${numInputs + 1}`;

    itemInputsContainer.appendChild(newLabel);
    itemInputsContainer.appendChild(newInput);
})



const editModal = document.getElementById('edit-list-modal');

function editList(e) {
    if(!e.target.classList.contains('edit-button')) {
        return
    }

    const btn = e.target
    btn.addEventListener("click", function(e) {
        editModal.style.display = 'block'
    })
    
}

function hideDefaultCard() {
    const defaultCard = document.querySelector(".default-card");
    defaultCard.style.display = 'none'
}

function hideProjectLists() {
    const projectLists = document.getElementsByClassName('list-card')
    for (let list of projectLists) {
        list.style.display = 'none'
    }
}

const projectsButton = document.getElementById('projects');

function handleClick() {
  isProject = false;
  isProjects = true;
  hideProjectLists();
  hideDefaultCard();
  (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderAllProjects)(allProjects.projects);
  (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderCreateButton)();
  projectsButton.removeEventListener('click', handleClick);
}

projectsButton.addEventListener('click', handleClick);

 
    document.addEventListener('click', function(event) {
      if (event.target.matches('.close-modal')) {
        const modal = event.target.parentNode.parentNode;
        modal.style.display = 'none';
      }
    });



container.appendChild((0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderCreateButton)())



function showListModal() {
    const modal = document.getElementById('create-list-modal')
    modal.style.display = 'block';
}
function showProjectModal() {
    const modal = document.getElementById('create-project-modal')
    modal.style.display = 'block';
}
const createButton = document.querySelector('.create-button');
createButton.addEventListener('click', function() {
    if(isProject) {
        showListModal();
    } else {
        showProjectModal();
    }
})

console.log(allProjects.currentProject);

const form = document.getElementById('create-list-form');

form.addEventListener("submit", function(event) {
    const modal = document.querySelector('.modal');
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
        
        modal.style.display = 'none'
        

    })


  
    
    function openProject(e) {

        if(!e.target.classList.contains('project-card')) {
            return
        };
            isProject = true;
            isProjects = false;
            projectsButton.addEventListener('click', handleClick);
            projectsButton.disabled = false;
            const projectCards = document.getElementsByClassName('project-card');
            for (let card of projectCards) {
                card.style.display = 'none';
            }
            let index = e.target.id;
            (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(allProjects.projects[index])
            allProjects.setProject(allProjects.projects[index])

    }

const projectForm = document.getElementById('create-project-form');

projectForm.addEventListener('submit', function(event) {
    const modal = document.getElementById('create-project-modal');
    
    event.preventDefault();
    
      const formData = new FormData(projectForm);
      
      const project = new allProjects.Project(formData.get('name'));
      allProjects.addProject(project);
    
      (0,_todo_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjectInput)(project);
    
      modal.style.display = 'none';  
    });
    
    
    

    // // createButton.addEventListener("click", showListModal);
    // createButton.addEventListener("click", showProjectModal);
    
    
    
    
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
    
    let selectedProject = document.querySelector('.project');
    let projectsContainer = document.querySelector('.project-container');
    selectedProject.addEventListener("click", removeListCard)
    selectedProject.addEventListener("click", editList)
    projectsContainer.addEventListener('click', openProject)

})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBYTtBQUN6Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQWtCO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWRvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMTJweDtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGlzdC1pdGVtcyBsaXtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG59XFxuXFxuLmxpc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxuICBcXG59XFxuXFxuXFxuXFxuLyogTW9kYWwgc3R5bGUgKi9cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6IDA7fVxcbiAgdG8ge3RvcDogMDsgb3BhY2l0eTogMTt9XFxufVxcblxcblxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyBcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgaW5wdXQsXFxuLnByb2plY3QtbW9kYWwtY29udGVudCBpbnB1dHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3JlYXRlLWxpc3QtZm9ybSxcXG4jZWRpdC1saXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBnYXA6IDFyZW07ICovXFxufVxcbiNjcmVhdGUtbGlzdC1mb3JtIHRleHRhcmVhe1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblxcbiNhZGQtaXRlbS1pbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA0ZnI7XFxuICBcXG4gIFxcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1tb2RhbDphY3RpdmUge1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi52ZXJ0aWNhbC1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWluLXdpZHRoOiA2LjVyZW07XFxuICBtYXJnaW4tdG9wOiA1OHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udmVydGljYWwtbmF2IGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG5cXG5cXG4uaG9yaXpvbnRhbC1uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4gIC5ob3Jpem9udGFsLW5hdiBsaSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICBcXG4gIFxcbiAgLmhvcml6b250YWwtbmF2IGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLmhvcml6b250YWwtbmF2IGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbiAgfVxcbiAgXFxuICBuYXYgaDEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICBcXG4gLmxpc3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiBcXG5cXG4gIC5saXN0LWNhcmQsXFxuICAucHJvamVjdC1jYXJkLFxcbiAgLmNyZWF0ZS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcblxcbiAgXFxuICAuY2xvc2UtbGlzdCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICBcXG4gIC5jbG9zZS1saXN0OmhvdmVyLFxcbiAgLmNsb3NlLWxpc3Q6YWN0aXZlIHtcXG4gICAgY29sb3I6ICM4ODg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfSBcXG5cXG4gIC5jcmVhdGUtYnV0dG9uIHtcXG4gICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnJlbTtcXG4gIH1cXG4gIC5jcmVhdGUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMywgMjAzLCAyMDMpO1xcbiAgfVxcbiAgLmNyZWF0ZS1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xcbn1cXG5cXG4vKiAubGlzdC1jYXJkLFxcbi5wcm9qZWN0LWNhcmQge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5saXN0LWNhcmQ6aG92ZXIsXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiBcXG59ICovXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCOztBQUVsQjs7OztBQUlBLGdCQUFnQjs7QUFFaEI7RUFDRSxNQUFNLFdBQVcsRUFBRSxVQUFVLENBQUM7RUFDOUIsSUFBSSxNQUFNLEVBQUUsVUFBVSxDQUFDO0FBQ3pCOzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCOzs7QUFHL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7Ozs7QUFJQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7Ozs7QUFJQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7OztFQUlBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7Q0FFRDtJQUNHLFNBQVM7SUFDVCxvQkFBb0I7RUFDdEI7Ozs7RUFJQTs7O0lBR0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxhQUFhO0VBQ2Y7OztFQUdBO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usb0NBQW9DO0FBQ3hDOztBQUVBOzs7Ozs7Ozs7O0dBVUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnByb2plY3QtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saXN0LWl0ZW1zIGxpe1xcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcbn1cXG5cXG4ubGlzdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW4tbGVmdDogNi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG4gIFxcbn1cXG5cXG5cXG5cXG4vKiBNb2RhbCBzdHlsZSAqL1xcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHt0b3A6IC0zMDBweDsgb3BhY2l0eTogMDt9XFxuICB0byB7dG9wOiAwOyBvcGFjaXR5OiAxO31cXG59XFxuXFxuXFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IFxcbiAgcG9zaXRpb246IGZpeGVkOyBcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50LFxcbi5wcm9qZWN0LW1vZGFsLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IFxcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBpbnB1dCxcXG4ucHJvamVjdC1tb2RhbC1jb250ZW50IGlucHV0e1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjcmVhdGUtbGlzdC1mb3JtLFxcbiNlZGl0LWxpc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGdhcDogMXJlbTsgKi9cXG59XFxuI2NyZWF0ZS1saXN0LWZvcm0gdGV4dGFyZWF7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuXFxuI2FkZC1pdGVtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDRmcjtcXG4gIFxcbiAgXFxufVxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLW1vZGFsOmFjdGl2ZSB7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLnZlcnRpY2FsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtaW4td2lkdGg6IDYuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDU4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52ZXJ0aWNhbC1uYXYgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnZlcnRpY2FsLW5hdiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcblxcblxcbi5ob3Jpem9udGFsLW5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5ob3Jpem9udGFsLW5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiAgLmhvcml6b250YWwtbmF2IGxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIFxcbiAgXFxuICAuaG9yaXpvbnRhbC1uYXYgYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgXFxuICAuaG9yaXpvbnRhbC1uYXYgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxuICB9XFxuICBcXG4gIG5hdiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIFxcbiAubGlzdC10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuXFxuIFxcblxcbiAgLmxpc3QtY2FyZCxcXG4gIC5wcm9qZWN0LWNhcmQsXFxuICAuY3JlYXRlLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICBcXG4gIC5jbG9zZS1saXN0IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIFxcbiAgLmNsb3NlLWxpc3Q6aG92ZXIsXFxuICAuY2xvc2UtbGlzdDphY3RpdmUge1xcbiAgICBjb2xvcjogIzg4ODtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9IFxcblxcbiAgLmNyZWF0ZS1idXR0b24ge1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEycmVtO1xcbiAgfVxcbiAgLmNyZWF0ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxuICB9XFxuICAuY3JlYXRlLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxufVxcblxcbi8qIC5saXN0LWNhcmQsXFxuLnByb2plY3QtY2FyZCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmxpc3QtY2FyZDpob3ZlcixcXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuIFxcbn0gKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBQcm9qZWN0cyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICBcbiAgICB0aGlzLlByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50b2RvTGlzdHMgPSBbXTtcbiAgICAgIFxuICAgICAgdGhpcy5hZGRMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xuICAgICAgICBsaXN0LmlkID0gdGhpcy50b2RvTGlzdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5wdXNoKGxpc3QpO1xuICAgICAgIFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgdGhpcy5yZW1vdmVMaXN0ID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2RvTGlzdHMuZmluZEluZGV4KGxpc3QgPT4gbGlzdC5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHRoaXMudG9kb0xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBcbiAgICAgIHRoaXMuZGlzcGxheUxpc3RzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdDogXCIgKyB0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzLnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgICBsaXN0LmRpc3BsYXlMaXN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbmV3IEN1cnJlbnRQcm9qZWN0O1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdC5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcblxuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgcHJvamVjdC5pZCA9IHRoaXMucHJvamVjdHMubGVuZ3RoO1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cbiAgXG4gICAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgICAgbGV0IGluZGV4ID0gLTFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5wcm9qZWN0c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgZGlzcGxheVByb2plY3RzKCkge1xuICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0czpcIik7XG4gICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LmRpc3BsYXlMaXN0cygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgQ3VycmVudFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gIFxuICAgIH1cblxuICAgIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2plY3Q7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHtQcm9qZWN0cywgQ3VycmVudFByb2plY3R9O1xuICBcblxuIiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRvRG9MaXN0KGxpc3QpIHtcbiAgICBcbiAgICBjb25zdCBsaXN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RDYXJkLmNsYXNzTmFtZSA9ICdsaXN0LWNhcmQnXG4gICAgbGlzdENhcmQuaWQgPSBsaXN0LmlkXG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2Nsb3NlLWxpc3QnO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gbGlzdC5pZFxuXG4gICAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcuY2xhc3NOYW1lID0gJ2xpc3QtdGl0bGUnO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gbGlzdC5uYW1lO1xuICAgIGxpc3RDYXJkLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgZGVzY1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVzY1NwYW4uaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiAke2xpc3QuZGVzY3JpcHRpb259YDtcbiAgICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChkZXNjU3Bhbik7XG5cbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVEYXRlU3Bhbi5pbm5lckhUTUwgPSBgRHVlOiAke2xpc3QuZHVlRGF0ZX1gO1xuICAgIGxpc3RDYXJkLmFwcGVuZENoaWxkKGR1ZURhdGVTcGFuKTtcblxuICAgIGNvbnN0IHByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcmlvcml0eVNwYW4uaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke2xpc3QucHJpb3JpdHl9YDtcbiAgICBsaXN0Q2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eVNwYW4pO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NOYW1lID0gJ2xpc3QtaXRlbXMnXG5cbiAgICBcbiAgICBcbiAgICBsaXN0Lml0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpdGVtTGkuaW5uZXJIVE1MID0gaXRlbTtcbiAgICAgICAgXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGl0ZW1MaSk7XG4gICAgICAgIFxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIGxpc3RDYXJkLmFwcGVuZENoaWxkKHVsKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnZWRpdC1idXR0b24nO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJ0VkaXQnXG4gICAgbGlzdENhcmQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbilcbiAgICByZXR1cm4gbGlzdENhcmQ7XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyQ3JlYXRlQnV0dG9uKCkge1xuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnY3JlYXRlLWJ1dHRvbic7XG4gICAgXG4gICAgY3JlYXRlQnV0dG9uLmlubmVySFRNTCA9ICcrJztcbiAgICByZXR1cm4gY3JlYXRlQnV0dG9uO1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVcblxuICAgIHByb2plY3QudG9kb0xpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyVG9Eb0xpc3QobGlzdCkpO1xuICAgICAgICBcbiAgICB9KTtcblxuICAgIFxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0SW5wdXQocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtY2FyZCc7XG4gICAgcHJvamVjdHNXcmFwcGVyLmlkID0gcHJvamVjdC5pZDtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2Nsb3NlLWxpc3QnO1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuICAgIFxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBcbiAgICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKHRvZG9MaXN0KSB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSB0b2RvTGlzdC5uYW1lO1xuICAgIFxuICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSlcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzV3JhcHBlcik7XG4gIH1cbiAgXG5cblxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgXG4gICAgXG4gICAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtY2FyZCc7XG4gICAgICAgIHByb2plY3RzV3JhcHBlci5pZCA9IHByb2plY3QuaWRcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2Nsb3NlLWxpc3QnO1xuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgICAgICBwcm9qZWN0LnRvZG9MaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKHRvZG9MaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSB0b2RvTGlzdC5uYW1lO1xuICAgICAgICBcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzV3JhcHBlcik7XG4gICAgfSlcblxuXG59XG5cbmV4cG9ydCB7cmVuZGVyVG9Eb0xpc3QsIHJlbmRlclByb2plY3QsIHJlbmRlckFsbFByb2plY3RzLCByZW5kZXJDcmVhdGVCdXR0b24sIHJlbmRlclByb2plY3RJbnB1dH07IiwiZnVuY3Rpb24gVG9Eb0xpc3QobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfTtcblxuICAgIHRoaXMucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmVkOiAke2l0ZW19YCk7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0Q29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgdGhpcy5kaXNwbGF5TGlzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRlc2NyaXB0aW9uOiBcIiArIHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkR1ZSBkYXRlOiBcIiArIHRoaXMuZHVlRGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJpb3JpdHk6IFwiICsgdGhpcy5wcmlvcml0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90ZXM6IFwiICsgdGhpcy5ub3Rlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coKGkgKyAxKSArIFwiLiBcIiArIHRoaXMuaXRlbXNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuXG59XG5cbmV4cG9ydCB7VG9Eb0xpc3R9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgUHJvamVjdHMsIEN1cnJlbnRQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHJlbmRlclRvRG9MaXN0LCByZW5kZXJQcm9qZWN0LCByZW5kZXJBbGxQcm9qZWN0cywgcmVuZGVyQ3JlYXRlQnV0dG9uLCByZW5kZXJQcm9qZWN0SW5wdXR9IGZyb20gJy4vdG9kby1kb20nO1xuXG4oZnVuY3Rpb24oKXtcbmxldCBpc1Byb2plY3QgPSB0cnVlXG5sZXQgaXNQcm9qZWN0cyA9IGZhbHNlXG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzLWNvbnRhaW5lcicpO1xuXG5jb25zdCBhbGxQcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpXG5cbmxldCBzdW5kYXlDaG9yZXMgPSBuZXcgYWxsUHJvamVjdHMuUHJvamVjdChcIlN1bmRheSBDaG9yZXNcIik7IFxubGV0IGhvbWV3b3JrID0gbmV3IGFsbFByb2plY3RzLlByb2plY3QoXCJIb21ld29ya1wiKTtcblxuYWxsUHJvamVjdHMuYWRkUHJvamVjdChzdW5kYXlDaG9yZXMpO1xuYWxsUHJvamVjdHMuYWRkUHJvamVjdChob21ld29yayk7XG5cbmxldCBncm9jZXJ5TGlzdCA9IG5ldyBUb0RvTGlzdChcIkdyb2Nlcmllc1wiLCBcIkxpc3QgZm9yIFN1bmRheSBncm9jZXJ5IHJ1blwiLCBcIjAxLTAxLTIwMjNcIiwgXCJIaWdoXCIsIFwiRG9uJ3QgZm9yZ2V0IHRvIHNheSBoaWdoIHRvIEplcnJ5IGF0IHRoZSBmcm9udCBkZXNrLiBZb3UgZ3V5cyBoYXZlbid0IHNlZW4gZWFjaCBvdGhlciBpbiBhIHdoaWxlLlwiKTtcbmdyb2NlcnlMaXN0LmFkZEl0ZW0oXCJFZ2dzXCIpO1xuZ3JvY2VyeUxpc3QuYWRkSXRlbShcIkJyZWFkXCIpO1xuZ3JvY2VyeUxpc3QuYWRkSXRlbShcIk1pbGtcIik7XG5cblxuXG5cbmxldCBob3VzZUNob3JlcyA9IG5ldyBUb0RvTGlzdChcIkhvdXNlIENob3Jlc1wiLCBcIlwiLCBcIjAxLTAxLTIwMjNcIiwgXCJIaWdoXCIsIFwiXCIpO1xuaG91c2VDaG9yZXMuYWRkSXRlbShcIkRvIGxhdW5kcnlcIik7XG5ob3VzZUNob3Jlcy5hZGRJdGVtKFwiVGFrZSB0aGUgdHJhc2ggb3V0XCIpO1xuaG91c2VDaG9yZXMuYWRkSXRlbShcIkNsZWFuIHRoZSBiYXRocm9vbVwiKTtcbmhvdXNlQ2hvcmVzLmFkZEl0ZW0oXCJWYWN1dW0gdGhlIGFwYXJ0bWVudFwiKTtcblxuXG5sZXQgbW9uZGF5SG9tZXdvcmsgPSBuZXcgVG9Eb0xpc3QoXCJtb25IV1wiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiKTtcblxuXG5zdW5kYXlDaG9yZXMuYWRkTGlzdChncm9jZXJ5TGlzdCk7XG5zdW5kYXlDaG9yZXMuYWRkTGlzdChob3VzZUNob3Jlcyk7XG5cbmhvbWV3b3JrLmFkZExpc3QobW9uZGF5SG9tZXdvcmspXG5ob21ld29yay5hZGRMaXN0KG1vbmRheUhvbWV3b3JrKVxuXG5cblxuXG5yZW5kZXJQcm9qZWN0KHN1bmRheUNob3JlcylcblxuYWxsUHJvamVjdHMuc2V0UHJvamVjdChzdW5kYXlDaG9yZXMpXG5cblxuY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaXRlbS1idXR0b24nKTtcblxuYWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGl0ZW1JbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWl0ZW0taW5wdXQnKTtcblxuICAgIGNvbnN0IG51bUlucHV0cyA9IGl0ZW1JbnB1dHNDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JykubGVuZ3RoO1xuXG4gICAgY29uc3QgbmV3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbmV3SW5wdXQuY2xhc3NOYW1lID0gJ2l0ZW0nO1xuICAgIG5ld0lucHV0Lm5hbWUgPSBgaXRlbS0ke251bUlucHV0cyArIDF9YDtcblxuICAgIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuZXdMYWJlbC5odG1sRm9yID0gbmV3SW5wdXQuaWQ7XG4gICAgbmV3TGFiZWwuaW5uZXJIVE1MID0gYEl0ZW0gJHtudW1JbnB1dHMgKyAxfWA7XG5cbiAgICBpdGVtSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0xhYmVsKTtcbiAgICBpdGVtSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0lucHV0KTtcbn0pXG5cblxuXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1saXN0LW1vZGFsJyk7XG5cbmZ1bmN0aW9uIGVkaXRMaXN0KGUpIHtcbiAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWJ1dHRvbicpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGVkaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH0pXG4gICAgXG59XG5cbmZ1bmN0aW9uIGhpZGVEZWZhdWx0Q2FyZCgpIHtcbiAgICBjb25zdCBkZWZhdWx0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1jYXJkXCIpO1xuICAgIGRlZmF1bHRDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RMaXN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0LWNhcmQnKVxuICAgIGZvciAobGV0IGxpc3Qgb2YgcHJvamVjdExpc3RzKSB7XG4gICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gIGlzUHJvamVjdCA9IGZhbHNlO1xuICBpc1Byb2plY3RzID0gdHJ1ZTtcbiAgaGlkZVByb2plY3RMaXN0cygpO1xuICBoaWRlRGVmYXVsdENhcmQoKTtcbiAgcmVuZGVyQWxsUHJvamVjdHMoYWxsUHJvamVjdHMucHJvamVjdHMpO1xuICByZW5kZXJDcmVhdGVCdXR0b24oKTtcbiAgcHJvamVjdHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG59XG5cbnByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuXG4gXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuY2xvc2UtbW9kYWwnKSkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQ3JlYXRlQnV0dG9uKCkpXG5cblxuXG5mdW5jdGlvbiBzaG93TGlzdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1saXN0LW1vZGFsJylcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cbmZ1bmN0aW9uIHNob3dQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QtbW9kYWwnKVxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1idXR0b24nKTtcbmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmKGlzUHJvamVjdCkge1xuICAgICAgICBzaG93TGlzdE1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1Byb2plY3RNb2RhbCgpO1xuICAgIH1cbn0pXG5cbmNvbnNvbGUubG9nKGFsbFByb2plY3RzLmN1cnJlbnRQcm9qZWN0KTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbGlzdC1mb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgaXRlbUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW0nKTtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIFxuICAgIGNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvRG9MaXN0KFxuICAgICAgICBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpLFxuICAgICAgICBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIiksXG4gICAgICAgIGZvcm1EYXRhLmdldChcImR1ZS1kYXRlXCIpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBzdW5kYXlDaG9yZXMuYWRkTGlzdCh0b2RvTGlzdCk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiBpdGVtSW5wdXRzKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3QuYWRkSXRlbShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJUb0RvTGlzdCh0b2RvTGlzdCkpXG4gICAgICAgIFxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIFxuXG4gICAgfSlcblxuXG4gIFxuICAgIFxuICAgIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0KGUpIHtcblxuICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWNhcmQnKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH07XG4gICAgICAgICAgICBpc1Byb2plY3QgPSB0cnVlO1xuICAgICAgICAgICAgaXNQcm9qZWN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgcHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICAgICAgICBwcm9qZWN0c0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1jYXJkJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBjYXJkIG9mIHByb2plY3RDYXJkcykge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdChhbGxQcm9qZWN0cy5wcm9qZWN0c1tpbmRleF0pXG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5zZXRQcm9qZWN0KGFsbFByb2plY3RzLnByb2plY3RzW2luZGV4XSlcblxuICAgIH1cblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QtZm9ybScpO1xuXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LW1vZGFsJyk7XG4gICAgXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHByb2plY3RGb3JtKTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBhbGxQcm9qZWN0cy5Qcm9qZWN0KGZvcm1EYXRhLmdldCgnbmFtZScpKTtcbiAgICAgIGFsbFByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgXG4gICAgICByZW5kZXJQcm9qZWN0SW5wdXQocHJvamVjdCk7XG4gICAgXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgXG4gICAgfSk7XG4gICAgXG4gICAgXG4gICAgXG5cbiAgICAvLyAvLyBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dMaXN0TW9kYWwpO1xuICAgIC8vIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3RNb2RhbCk7XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdENhcmQoZSkge1xuICAgICAgICBcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtbGlzdCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpLmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1jYXJkJykpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBsaXN0SWQgPSBwYXJzZUludChidG4uY2xvc2VzdCgnZGl2JykuaWQsIDEwKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnRQcm9qZWN0KCkucmVtb3ZlTGlzdChsaXN0SWQpO1xuICAgICAgICAgICAgYnRuLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3VuZGF5Q2hvcmVzLnRvZG9MaXN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYoZS50YXJnZXQuY2xvc2VzdCgnZGl2JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWNhcmQnKSkge1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChidG4uY2xvc2VzdCgnZGl2JykuaWQsIDEwKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnJlbW92ZVByb2plY3QocHJvamVjdElkKVxuICAgICAgICAgICAgYnRuLmNsb3Nlc3QoJ2RpdicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMucHJvamVjdHMpXG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIFxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIGxldCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHNlbGVjdGVkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlTGlzdENhcmQpXG4gICAgc2VsZWN0ZWRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0TGlzdClcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0KVxuXG59KSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
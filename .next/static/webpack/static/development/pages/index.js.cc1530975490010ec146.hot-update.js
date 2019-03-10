webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/prices.js":
/*!******************************!*\
  !*** ./components/prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/oanaporan/Desktop/bitzprice/components/prices.js";


var Prices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Prices, _React$Component);

  function Prices() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var list = ''; //the api returns an object and not an array

      switch (this.state.currency) {
        case 'USD':
          list = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "list-group-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          }, "Bitcoin rate for ", this.props.bpi.USD.description, " : ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "badge badge-primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }, this.props.bpi.USD.code), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, this.props.bpi.USD.rate));
          break;

        case 'GBP':
          list = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "list-group-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, "Bitcoin rate for ", this.props.bpi.GBP.description, " : ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "badge badge-primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          }, this.props.bpi.GBP.code), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, this.props.bpi.GBP.rate));
          break;

        case 'EUR':
          list = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            className: "list-group-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, "Bitcoin rate for ", this.props.bpi.EUR.description, " : ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "badge badge-primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.bpi.EUR.code), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("stong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, this.props.bpi.EUR.rate));
          break;

        default:
          '';
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, list));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.cc1530975490010ec146.hot-update.js.map
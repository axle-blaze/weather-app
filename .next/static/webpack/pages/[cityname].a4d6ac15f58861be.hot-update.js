"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[cityname]",{

/***/ "./src/pages/[cityname].tsx":
/*!**********************************!*\
  !*** ./src/pages/[cityname].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/weather */ \"./src/components/weather.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar CityPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var cityName = Array.isArray(router.query.cityname) ? router.query.cityname[0] // If it's an array, take the first element\n     : router.query.cityname; // If it's not an array, keep it as is\n    console.log(cityName);\n    if (!cityName) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_weather__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                cityName: cityName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(CityPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CityPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CityPage);\nvar _c;\n$RefreshReg$(_c, \"CityPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2NpdHluYW1lXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNrQjtBQUU1QyxJQUFNRyxXQUFXOztJQUNmLElBQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixJQUFNSyxXQUFXQyxNQUFNQyxPQUFPLENBQUNILE9BQU9JLEtBQUssQ0FBQ0MsUUFBUSxJQUNoREwsT0FBT0ksS0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDLDJDQUEyQztPQUNwRUwsT0FBT0ksS0FBSyxDQUFDQyxRQUFRLEVBQUksc0NBQXNDO0lBRW5FQyxRQUFRQyxHQUFHLENBQUNOO0lBRVosSUFBSSxDQUFDQSxVQUFVO1FBQ2IscUJBQU8sOERBQUNPO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTtrQkFFQyw0RUFBQ0E7c0JBQ0MsNEVBQUNWLDJEQUFPQTtnQkFBQ0csVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0FwQk1GOztRQUNXSCxrREFBU0E7OztLQURwQkc7QUFzQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tjaXR5bmFtZV0udHN4Pzg2YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy93ZWF0aGVyXCI7XHJcblxyXG5jb25zdCBDaXR5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjaXR5TmFtZSA9IEFycmF5LmlzQXJyYXkocm91dGVyLnF1ZXJ5LmNpdHluYW1lKVxyXG4gICAgPyByb3V0ZXIucXVlcnkuY2l0eW5hbWVbMF0gLy8gSWYgaXQncyBhbiBhcnJheSwgdGFrZSB0aGUgZmlyc3QgZWxlbWVudFxyXG4gICAgOiByb3V0ZXIucXVlcnkuY2l0eW5hbWU7ICAgLy8gSWYgaXQncyBub3QgYW4gYXJyYXksIGtlZXAgaXQgYXMgaXNcclxuXHJcbiAgY29uc29sZS5sb2coY2l0eU5hbWUpO1xyXG5cclxuICBpZiAoIWNpdHlOYW1lKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8ZGl2PldlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHtjaXR5TmFtZX08L2Rpdj4gKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFdlYXRoZXIgY2l0eU5hbWU9e2NpdHlOYW1lfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXR5UGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiV2VhdGhlciIsIkNpdHlQYWdlIiwicm91dGVyIiwiY2l0eU5hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeSIsImNpdHluYW1lIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[cityname].tsx\n"));

/***/ })

});
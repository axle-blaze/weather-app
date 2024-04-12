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

/***/ "./src/components/weather.tsx":
/*!************************************!*\
  !*** ./src/components/weather.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar WeatherPage = function(param) {\n    var cityName = param.cityName;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), weatherData = _useState[0], setWeatherData = _useState[1];\n    var API_KEY = \"Yb95e009d5e15b62e4a97ed339a9eff3e\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchWeatherData = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n                var response, data, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\".concat(cityName, \"&appid=\").concat(API_KEY))\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setWeatherData(data);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Error fetching weather data:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchWeatherData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchWeatherData();\n    }, [\n        cityName\n    ]);\n    if (!weatherData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Weather for \",\n                    cityName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Temperature: \",\n                    weatherData.main.temp,\n                    \"\\xb0C\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Weather: \",\n                    weatherData.weather[0].description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Humidity: \",\n                    weatherData.main.humidity,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Wind Speed: \",\n                    weatherData.wind.speed,\n                    \" m/s\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Pressure: \",\n                    weatherData.main.pressure,\n                    \" hPa\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\components\\\\weather.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(WeatherPage, \"BCUo9muHyxrqajg6diFxqqqjG/A=\");\n_c = WeatherPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherPage);\nvar _c;\n$RefreshReg$(_c, \"WeatherPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQW9CbkQsSUFBTUcsY0FBMEM7UUFBR0MsaUJBQUFBOztJQUNqRCxJQUFzQ0gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFxQixXQUE1REksY0FBK0JKLGNBQWxCSyxpQkFBa0JMO0lBQ3RDLElBQU1NLFVBQVU7SUFFaEJMLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTU07dUJBQW1CO29CQUVmQyxVQUNBQyxNQUVDQzs7Ozs7Ozs7Ozs0QkFIVTs7Z0NBQU1DLE1BQU0scURBQXVFTCxPQUFsQkgsVUFBUyxXQUFpQixPQUFSRzs7OzRCQUE5RkUsV0FBVzs0QkFDUzs7Z0NBQU1BLFNBQVNJLElBQUk7Ozs0QkFBdkNILE9BQW9COzRCQUMxQkosZUFBZUk7Ozs7Ozs0QkFDUkM7NEJBQ1BHLFFBQVFILEtBQUssQ0FBQyxnQ0FBZ0NBOzs7Ozs7Ozs7OztZQUVsRDs0QkFSTUg7Ozs7UUFVTkE7SUFDRixHQUFHO1FBQUNKO0tBQVM7SUFFYixJQUFJLENBQUNDLGFBQWE7UUFDaEIscUJBQU8sOERBQUNVO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOztvQkFBRztvQkFBYWI7Ozs7Ozs7MEJBQ2pCLDhEQUFDVzs7b0JBQUU7b0JBQWNWLFlBQVlhLElBQUksQ0FBQ0MsSUFBSTtvQkFBQzs7Ozs7OzswQkFDdkMsOERBQUNKOztvQkFBRTtvQkFBVVYsWUFBWWUsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsV0FBVzs7Ozs7OzswQkFDL0MsOERBQUNOOztvQkFBRTtvQkFBV1YsWUFBWWEsSUFBSSxDQUFDSSxRQUFRO29CQUFDOzs7Ozs7OzBCQUN4Qyw4REFBQ1A7O29CQUFFO29CQUFhVixZQUFZa0IsSUFBSSxDQUFDQyxLQUFLO29CQUFDOzs7Ozs7OzBCQUN2Qyw4REFBQ1Q7O29CQUFFO29CQUFXVixZQUFZYSxJQUFJLENBQUNPLFFBQVE7b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFHOUM7R0FoQ010QjtLQUFBQTtBQWtDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLnRzeD82ODMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFdlYXRoZXJQYWdlUHJvcHMge1xyXG4gIGNpdHlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVyRGF0YSB7XHJcbiAgbWFpbjoge1xyXG4gICAgdGVtcDogbnVtYmVyO1xyXG4gICAgaHVtaWRpdHk6IG51bWJlcjtcclxuICAgIHByZXNzdXJlOiBudW1iZXI7XHJcbiAgfTtcclxuICB3ZWF0aGVyOiB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIH1bXTtcclxuICB3aW5kOiB7XHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IFdlYXRoZXJQYWdlOiBSZWFjdC5GQzxXZWF0aGVyUGFnZVByb3BzPiA9ICh7IGNpdHlOYW1lIH0pID0+IHtcclxuICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlPFdlYXRoZXJEYXRhIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgQVBJX0tFWSA9ICdZYjk1ZTAwOWQ1ZTE1YjYyZTRhOTdlZDMzOWE5ZWZmM2UnO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hXZWF0aGVyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7QVBJX0tFWX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhOiBXZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRXZWF0aGVyRGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoV2VhdGhlckRhdGEoKTtcclxuICB9LCBbY2l0eU5hbWVdKTtcclxuXHJcbiAgaWYgKCF3ZWF0aGVyRGF0YSkge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5XZWF0aGVyIGZvciB7Y2l0eU5hbWV9PC9oMT5cclxuICAgICAgPHA+VGVtcGVyYXR1cmU6IHt3ZWF0aGVyRGF0YS5tYWluLnRlbXB9wrBDPC9wPlxyXG4gICAgICA8cD5XZWF0aGVyOiB7d2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxwPkh1bWlkaXR5OiB7d2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0lPC9wPlxyXG4gICAgICA8cD5XaW5kIFNwZWVkOiB7d2VhdGhlckRhdGEud2luZC5zcGVlZH0gbS9zPC9wPlxyXG4gICAgICA8cD5QcmVzc3VyZToge3dlYXRoZXJEYXRhLm1haW4ucHJlc3N1cmV9IGhQYTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWF0aGVyUGFnZSIsImNpdHlOYW1lIiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsIkFQSV9LRVkiLCJmZXRjaFdlYXRoZXJEYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwicCIsImRpdiIsImgxIiwibWFpbiIsInRlbXAiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJodW1pZGl0eSIsIndpbmQiLCJzcGVlZCIsInByZXNzdXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/weather.tsx\n"));

/***/ }),

/***/ "./src/pages/[cityname].tsx":
/*!**********************************!*\
  !*** ./src/pages/[cityname].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/weather */ \"./src/components/weather.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar CityPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var cityName = Array.isArray(router.query.cityname) ? router.query.cityname[0] // If it's an array, take the first element\n     : router.query.cityname; // If it's not an array, keep it as is\n    console.log(cityName);\n    if (!cityName) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Weather information for \",\n                    cityName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_weather__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    cityName: cityName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\singh\\\\OneDrive\\\\Desktop\\\\Web Development\\\\Weather_Task\\\\weather-app\\\\src\\\\pages\\\\[cityname].tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(CityPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CityPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CityPage);\nvar _c;\n$RefreshReg$(_c, \"CityPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2NpdHluYW1lXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNrQjtBQUU1QyxJQUFNRyxXQUFXOztJQUNmLElBQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixJQUFNSyxXQUFXQyxNQUFNQyxPQUFPLENBQUNILE9BQU9JLEtBQUssQ0FBQ0MsUUFBUSxJQUNoREwsT0FBT0ksS0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDLDJDQUEyQztPQUNwRUwsT0FBT0ksS0FBSyxDQUFDQyxRQUFRLEVBQUksc0NBQXNDO0lBRW5FQyxRQUFRQyxHQUFHLENBQUNOO0lBRVosSUFBSSxDQUFDQSxVQUFVO1FBQ2IscUJBQU8sOERBQUNPO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNBOztvQkFBSTtvQkFBeUJQOzs7Ozs7OzBCQUM5Qiw4REFBQ087MEJBQ0MsNEVBQUNWLDJEQUFPQTtvQkFBQ0csVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNCO0dBcEJNRjs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBc0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bY2l0eW5hbWVdLnRzeD84NmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvd2VhdGhlclwiO1xyXG5cclxuY29uc3QgQ2l0eVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS5jaXR5bmFtZSlcclxuICAgID8gcm91dGVyLnF1ZXJ5LmNpdHluYW1lWzBdIC8vIElmIGl0J3MgYW4gYXJyYXksIHRha2UgdGhlIGZpcnN0IGVsZW1lbnRcclxuICAgIDogcm91dGVyLnF1ZXJ5LmNpdHluYW1lOyAgIC8vIElmIGl0J3Mgbm90IGFuIGFycmF5LCBrZWVwIGl0IGFzIGlzXHJcblxyXG4gIGNvbnNvbGUubG9nKGNpdHlOYW1lKTtcclxuXHJcbiAgaWYgKCFjaXR5TmFtZSkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PldlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHtjaXR5TmFtZX08L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8V2VhdGhlciBjaXR5TmFtZT17Y2l0eU5hbWV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpdHlQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJXZWF0aGVyIiwiQ2l0eVBhZ2UiLCJyb3V0ZXIiLCJjaXR5TmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5IiwiY2l0eW5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[cityname].tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/auth/logout.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/logout.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n    res.setHeader(\"Set-Cookie\", (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(\"token\", \"\", {\n        path: \"/\",\n        maxAge: -1\n    }));\n    res.json({\n        ok: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dvdXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ3BCLFNBQVNDLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQ3RDQSxJQUFJQyxTQUFTLENBQUMsY0FBY0osaURBQVNBLENBQUMsU0FBUyxJQUFJO1FBQUVLLE1BQU07UUFBS0MsUUFBUSxDQUFDO0lBQUU7SUFDM0VILElBQUlJLElBQUksQ0FBQztRQUFFQyxJQUFJLElBQUk7SUFBQztBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyYWNrZXIvLi9wYWdlcy9hcGkvYXV0aC9sb2dvdXQudHM/ZDkzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICdjb29raWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIHNlcmlhbGl6ZSgndG9rZW4nLCAnJywgeyBwYXRoOiAnLycsIG1heEFnZTogLTEgfSkpO1xuICByZXMuanNvbih7IG9rOiB0cnVlIH0pO1xufSJdLCJuYW1lcyI6WyJzZXJpYWxpemUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwicGF0aCIsIm1heEFnZSIsImpzb24iLCJvayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/logout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/logout.ts"));
module.exports = __webpack_exports__;

})();
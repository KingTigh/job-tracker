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
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBRWhELElBQUlHLElBQXlCLEVBQWNELE9BQU9ELE1BQU0sR0FBR0E7QUFFM0QsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJhY2tlci8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/register.ts":
/*!************************************!*\
  !*** ./pages/api/auth/register.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.status(405).end();\n    const { email , password , name  } = req.body;\n    const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (existing) return res.status(409).json({\n        error: \"User exists\"\n    });\n    const hashed = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);\n    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            email,\n            password: hashed,\n            name\n        }\n    });\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n        userId: user.id\n    }, process.env.JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n    res.setHeader(\"Set-Cookie\", (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)(\"token\", token, {\n        httpOnly: true,\n        path: \"/\",\n        secure: \"development\" === \"production\",\n        maxAge: 60 * 60 * 24 * 7\n    }));\n    return res.status(201).json({\n        id: user.id,\n        email: user.email,\n        name: user.name\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QztBQUNiO0FBQ0c7QUFDSTtBQUVwQixlQUFlSSxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQ3JELE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRSxHQUFHUCxJQUFJUSxJQUFJO0lBQzFDLE1BQU1DLFdBQVcsTUFBTWQsbUVBQXNCLENBQUM7UUFBRWlCLE9BQU87WUFBRVA7UUFBTTtJQUFDO0lBQ2hFLElBQUlJLFVBQVUsT0FBT1IsSUFBSUUsTUFBTSxDQUFDLEtBQUtVLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWM7SUFDakUsTUFBTUMsU0FBUyxNQUFNbkIsa0RBQVcsQ0FBQ1UsVUFBVTtJQUMzQyxNQUFNSSxPQUFPLE1BQU1mLCtEQUFrQixDQUFDO1FBQUV1QixNQUFNO1lBQUViO1lBQU9DLFVBQVVTO1lBQVFSO1FBQUs7SUFBQztJQUMvRSxNQUFNWSxRQUFRdEIsd0RBQVEsQ0FBQztRQUFFd0IsUUFBUVgsS0FBS1ksRUFBRTtJQUFDLEdBQUdDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFZO1FBQUVDLFdBQVc7SUFBSztJQUNoR3pCLElBQUkwQixTQUFTLENBQUMsY0FBYzdCLGlEQUFTQSxDQUFDLFNBQVNxQixPQUFPO1FBQ3BEUyxVQUFVLElBQUk7UUFDZEMsTUFBTTtRQUNOQyxRQUFRUCxrQkFBeUI7UUFDakNRLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQSxPQUFPOUIsSUFBSUUsTUFBTSxDQUFDLEtBQUtVLElBQUksQ0FBQztRQUFFUyxJQUFJWixLQUFLWSxFQUFFO1FBQUVqQixPQUFPSyxLQUFLTCxLQUFLO1FBQUVFLE1BQU1HLEtBQUtILElBQUk7SUFBQztBQUNoRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyYWNrZXIvLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci50cz8xM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICdjb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBuYW1lIH0gPSByZXEuYm9keTtcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfX0pO1xuICBpZiAoZXhpc3RpbmcpIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IGVycm9yOiAnVXNlciBleGlzdHMnIH0pO1xuICBjb25zdCBoYXNoZWQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHsgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQ6IGhhc2hlZCwgbmFtZSB9fSk7XG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyB1c2VySWQ6IHVzZXIuaWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCBhcyBzdHJpbmcsIHsgZXhwaXJlc0luOiAnN2QnIH0pO1xuICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgc2VyaWFsaXplKCd0b2tlbicsIHRva2VuLCB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgcGF0aDogJy8nLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDdcbiAgfSkpO1xuICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6IHVzZXIubmFtZSB9KTtcbn0iXSwibmFtZXMiOlsicHJpc21hIiwiYmNyeXB0Iiwiand0Iiwic2VyaWFsaXplIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiYm9keSIsImV4aXN0aW5nIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImpzb24iLCJlcnJvciIsImhhc2hlZCIsImhhc2giLCJjcmVhdGUiLCJkYXRhIiwidG9rZW4iLCJzaWduIiwidXNlcklkIiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsInNldEhlYWRlciIsImh0dHBPbmx5IiwicGF0aCIsInNlY3VyZSIsIm1heEFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/register.ts"));
module.exports = __webpack_exports__;

})();
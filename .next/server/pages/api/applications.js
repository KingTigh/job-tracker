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
exports.id = "pages/api/applications";
exports.ids = ["pages/api/applications"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserFromReq\": () => (/* binding */ getUserFromReq)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getUserFromReq(req) {\n    const cookie = req.headers.cookie;\n    if (!cookie) return null;\n    const { token  } = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(cookie);\n    if (!token) return null;\n    try {\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);\n        const user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                id: payload.userId\n            }\n        });\n        return user;\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFDRDtBQUNDO0FBRXhCLGVBQWVHLGVBQWVDLEdBQW1CLEVBQUU7SUFDeEQsTUFBTUMsU0FBU0QsSUFBSUUsT0FBTyxDQUFDRCxNQUFNO0lBQ2pDLElBQUksQ0FBQ0EsUUFBUSxPQUFPLElBQUk7SUFDeEIsTUFBTSxFQUFFRSxNQUFLLEVBQUUsR0FBR0wsNkNBQUtBLENBQUNHO0lBQ3hCLElBQUksQ0FBQ0UsT0FBTyxPQUFPLElBQUk7SUFDdkIsSUFBSTtRQUNGLE1BQU1DLFVBQVVSLDBEQUFVLENBQUNPLE9BQU9HLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUN4RCxNQUFNQyxPQUFPLE1BQU1aLCtEQUFzQixDQUFDO1lBQUVjLE9BQU87Z0JBQUVDLElBQUlSLFFBQVFTLE1BQU07WUFBQztRQUFFO1FBQzFFLE9BQU9KO0lBQ1QsRUFBRSxPQUFNO1FBQ04sT0FBTyxJQUFJO0lBQ2I7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyYWNrZXIvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4vcHJpc21hJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnY29va2llJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJGcm9tUmVxKHJlcTogTmV4dEFwaVJlcXVlc3QpIHtcbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnMuY29va2llO1xuICBpZiAoIWNvb2tpZSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlKGNvb2tpZSk7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIGFzIHN0cmluZykgYXMgYW55O1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBheWxvYWQudXNlcklkIH0gfSk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiand0IiwicHJpc21hIiwicGFyc2UiLCJnZXRVc2VyRnJvbVJlcSIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJ0b2tlbiIsInBheWxvYWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO1FBQVM7UUFBUztLQUFPO0FBQ2pDLEdBQUc7QUFFTCxJQUFJQyxJQUF5QixFQUFjSixnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJhY2tlci8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHxcbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/applications/index.ts":
/*!*****************************************!*\
  !*** ./pages/api/applications/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.ts\");\n\n\nasync function handler(req, res) {\n    const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getUserFromReq)(req);\n    if (!user) return res.status(401).json({\n        error: \"Unauthorized\"\n    });\n    if (req.method === \"GET\") {\n        const apps = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].application.findMany({\n            where: {\n                userId: user.id\n            },\n            orderBy: [\n                {\n                    status: \"asc\"\n                },\n                {\n                    createdAt: \"desc\"\n                }\n            ]\n        });\n        return res.status(200).json(apps);\n    }\n    if (req.method === \"POST\") {\n        const { company , position , status , location , link , appliedDate , notes  } = req.body;\n        const app = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].application.create({\n            data: {\n                userId: user.id,\n                company,\n                position,\n                status,\n                location,\n                link,\n                appliedDate: appliedDate ? new Date(appliedDate) : null,\n                notes\n            }\n        });\n        return res.status(201).json(app);\n    }\n    return res.status(405).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXBwbGljYXRpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUNVO0FBRXBDLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTUMsT0FBTyxNQUFNSix5REFBY0EsQ0FBQ0U7SUFDbEMsSUFBSSxDQUFDRSxNQUFNLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlO0lBRS9ELElBQUlMLElBQUlNLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLE9BQU8sTUFBTVYsd0VBQTJCLENBQUM7WUFDN0NhLE9BQU87Z0JBQUVDLFFBQVFULEtBQUtVLEVBQUU7WUFBQztZQUN6QkMsU0FBUztnQkFDUDtvQkFBRVYsUUFBUTtnQkFBTTtnQkFDaEI7b0JBQUVXLFdBQVc7Z0JBQU87YUFDckI7UUFDSDtRQUNBLE9BQU9iLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNHO0lBQzlCLENBQUM7SUFFRCxJQUFJUCxJQUFJTSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVTLFFBQU8sRUFBRUMsU0FBUSxFQUFFYixPQUFNLEVBQUVjLFNBQVEsRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRSxHQUFHcEIsSUFBSXFCLElBQUk7UUFDbEYsTUFBTUMsTUFBTSxNQUFNekIsc0VBQXlCLENBQUM7WUFDMUMyQixNQUFNO2dCQUNKYixRQUFRVCxLQUFLVSxFQUFFO2dCQUNmRztnQkFDQUM7Z0JBQ0FiO2dCQUNBYztnQkFDQUM7Z0JBQ0FDLGFBQWFBLGNBQWMsSUFBSU0sS0FBS04sZUFBZSxJQUFJO2dCQUN2REM7WUFDRjtRQUNGO1FBQ0EsT0FBT25CLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNrQjtJQUM5QixDQUFDO0lBRUQsT0FBT3JCLElBQUlFLE1BQU0sQ0FBQyxLQUFLdUIsR0FBRztBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXRyYWNrZXIvLi9wYWdlcy9hcGkvYXBwbGljYXRpb25zL2luZGV4LnRzP2ViNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcbmltcG9ydCB7IGdldFVzZXJGcm9tUmVxIH0gZnJvbSAnLi4vLi4vLi4vbGliL2F1dGgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyRnJvbVJlcShyZXEpO1xuICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9KTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBjb25zdCBhcHBzID0gYXdhaXQgcHJpc21hLmFwcGxpY2F0aW9uLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IHVzZXJJZDogdXNlci5pZCB9LFxuICAgICAgb3JkZXJCeTogW1xuICAgICAgICB7IHN0YXR1czogJ2FzYycgfSxcbiAgICAgICAgeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oYXBwcyk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBjb21wYW55LCBwb3NpdGlvbiwgc3RhdHVzLCBsb2NhdGlvbiwgbGluaywgYXBwbGllZERhdGUsIG5vdGVzIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCBhcHAgPSBhd2FpdCBwcmlzbWEuYXBwbGljYXRpb24uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICBjb21wYW55LFxuICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbGluayxcbiAgICAgICAgYXBwbGllZERhdGU6IGFwcGxpZWREYXRlID8gbmV3IERhdGUoYXBwbGllZERhdGUpIDogbnVsbCxcbiAgICAgICAgbm90ZXMsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbihhcHApO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRVc2VyRnJvbVJlcSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWV0aG9kIiwiYXBwcyIsImFwcGxpY2F0aW9uIiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZCIsImlkIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImNvbXBhbnkiLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwibGluayIsImFwcGxpZWREYXRlIiwibm90ZXMiLCJib2R5IiwiYXBwIiwiY3JlYXRlIiwiZGF0YSIsIkRhdGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/applications/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/applications/index.ts"));
module.exports = __webpack_exports__;

})();
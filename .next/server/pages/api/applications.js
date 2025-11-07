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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBRWhELElBQUlHLElBQXlCLEVBQWNELE9BQU9ELE1BQU0sR0FBR0E7QUFFM0QsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJhY2tlci8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/applications/index.ts":
/*!*****************************************!*\
  !*** ./pages/api/applications/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(api)/./lib/auth.ts\");\n\n\nasync function handler(req, res) {\n    const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getUserFromReq)(req);\n    if (!user) return res.status(401).json({\n        error: \"Unauthorized\"\n    });\n    if (req.method === \"GET\") {\n        const apps = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].application.findMany({\n            where: {\n                userId: user.id\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return res.json(apps);\n    }\n    if (req.method === \"POST\") {\n        const { company , position , status , location , link , appliedDate , notes  } = req.body;\n        const app = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].application.create({\n            data: {\n                userId: user.id,\n                company,\n                position,\n                status,\n                location,\n                link,\n                appliedDate: appliedDate ? new Date(appliedDate) : null,\n                notes\n            }\n        });\n        return res.status(201).json(app);\n    }\n    return res.status(405).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXBwbGljYXRpb25zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUNVO0FBRXBDLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsTUFBTUMsT0FBTyxNQUFNSix5REFBY0EsQ0FBQ0U7SUFDbEMsSUFBSSxDQUFDRSxNQUFNLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlO0lBRS9ELElBQUlMLElBQUlNLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLE9BQU8sTUFBTVYsd0VBQTJCLENBQUM7WUFBRWEsT0FBTztnQkFBRUMsUUFBUVQsS0FBS1UsRUFBRTtZQUFDO1lBQUdDLFNBQVM7Z0JBQUVDLFdBQVc7WUFBTztRQUFDO1FBQzNHLE9BQU9iLElBQUlHLElBQUksQ0FBQ0c7SUFDbEIsQ0FBQztJQUVELElBQUlQLElBQUlNLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRVMsUUFBTyxFQUFFQyxTQUFRLEVBQUViLE9BQU0sRUFBRWMsU0FBUSxFQUFFQyxLQUFJLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdwQixJQUFJcUIsSUFBSTtRQUNsRixNQUFNQyxNQUFNLE1BQU16QixzRUFBeUIsQ0FBQztZQUMxQzJCLE1BQU07Z0JBQUViLFFBQVFULEtBQUtVLEVBQUU7Z0JBQUVHO2dCQUFTQztnQkFBVWI7Z0JBQVFjO2dCQUFVQztnQkFBTUMsYUFBYUEsY0FBYyxJQUFJTSxLQUFLTixlQUFlLElBQUk7Z0JBQUVDO1lBQU07UUFDckk7UUFDQSxPQUFPbkIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2tCO0lBQzlCLENBQUM7SUFFRCxPQUFPckIsSUFBSUUsTUFBTSxDQUFDLEtBQUt1QixHQUFHO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2ItdHJhY2tlci8uL3BhZ2VzL2FwaS9hcHBsaWNhdGlvbnMvaW5kZXgudHM/ZWI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgZ2V0VXNlckZyb21SZXEgfSBmcm9tICcuLi8uLi8uLi9saWIvYXV0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJGcm9tUmVxKHJlcSk7XG4gIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0pO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IGFwcHMgPSBhd2FpdCBwcmlzbWEuYXBwbGljYXRpb24uZmluZE1hbnkoeyB3aGVyZTogeyB1c2VySWQ6IHVzZXIuaWQgfSwgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9fSk7XG4gICAgcmV0dXJuIHJlcy5qc29uKGFwcHMpO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgY29tcGFueSwgcG9zaXRpb24sIHN0YXR1cywgbG9jYXRpb24sIGxpbmssIGFwcGxpZWREYXRlLCBub3RlcyB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgYXBwID0gYXdhaXQgcHJpc21hLmFwcGxpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7IHVzZXJJZDogdXNlci5pZCwgY29tcGFueSwgcG9zaXRpb24sIHN0YXR1cywgbG9jYXRpb24sIGxpbmssIGFwcGxpZWREYXRlOiBhcHBsaWVkRGF0ZSA/IG5ldyBEYXRlKGFwcGxpZWREYXRlKSA6IG51bGwsIG5vdGVzIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oYXBwKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImdldFVzZXJGcm9tUmVxIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXRob2QiLCJhcHBzIiwiYXBwbGljYXRpb24iLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcklkIiwiaWQiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwiY29tcGFueSIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJsaW5rIiwiYXBwbGllZERhdGUiLCJub3RlcyIsImJvZHkiLCJhcHAiLCJjcmVhdGUiLCJkYXRhIiwiRGF0ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/applications/index.ts\n");

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
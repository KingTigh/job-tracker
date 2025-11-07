"use strict";
(() => {
var exports = {};
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 6882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getUserFromReq)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8869);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);



async function getUserFromReq(req) {
    const cookie = req.headers.cookie;
    if (!cookie) return null;
    const { token  } = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(cookie);
    if (!token) return null;
    try {
        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);
        const user = await _prisma__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.findUnique */ .Z.user.findUnique({
            where: {
                id: payload.userId
            }
        });
        return user;
    } catch  {
        return null;
    }
}


/***/ }),

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

const prisma = global.prisma ?? new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6882);


async function handler(req, res) {
    const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .getUserFromReq */ .a)(req);
    if (!user) return res.status(401).json({
        error: "Unauthorized"
    });
    if (req.method === "GET") {
        const apps = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].application.findMany */ .Z.application.findMany({
            where: {
                userId: user.id
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return res.json(apps);
    }
    if (req.method === "POST") {
        const { company , position , status , location , link , appliedDate , notes  } = req.body;
        const app = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].application.create */ .Z.application.create({
            data: {
                userId: user.id,
                company,
                position,
                status,
                location,
                link,
                appliedDate: appliedDate ? new Date(appliedDate) : null,
                notes
            }
        });
        return res.status(201).json(app);
    }
    return res.status(405).end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2226));
module.exports = __webpack_exports__;

})();
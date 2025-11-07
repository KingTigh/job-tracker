"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ 8285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const { email , password , name  } = req.body;
    const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.findUnique */ .Z.user.findUnique({
        where: {
            email
        }
    });
    if (existing) return res.status(409).json({
        error: "User exists"
    });
    const hashed = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);
    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.create */ .Z.user.create({
        data: {
            email,
            password: hashed,
            name
        }
    });
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
        userId: user.id
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)("token", token, {
        httpOnly: true,
        path: "/",
        secure: "production" === "production",
        maxAge: 60 * 60 * 24 * 7
    }));
    return res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8285));
module.exports = __webpack_exports__;

})();
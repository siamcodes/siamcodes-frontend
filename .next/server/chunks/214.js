"use strict";
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 7214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1445);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4865);







const LoginGoogle = ()=>{
    const responseGoogle = (response)=>{
        console.log(response);
        const tokenId = response.tokenId;
        const user = {
            tokenId
        };
        (0,_actions_auth__WEBPACK_IMPORTED_MODULE_5__/* .loginWithGoogle */ .Cb)(user).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                (0,_actions_auth__WEBPACK_IMPORTED_MODULE_5__/* .authenticate */ .YR)(data, ()=>{
                    if ((0,_actions_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)() && (0,_actions_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)().role === 1) {
                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/admin`);
                    } else {
                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/user`);
                    }
                });
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "d-grid pb-3",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_google_login__WEBPACK_IMPORTED_MODULE_4___default()), {
            clientId: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .GOOGLE_CLIENT_ID */ .wL}`,
            buttonText: "Login with Google",
            onSuccess: responseGoogle,
            onFailure: responseGoogle,
            theme: "dark"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginGoogle);


/***/ })

};
;
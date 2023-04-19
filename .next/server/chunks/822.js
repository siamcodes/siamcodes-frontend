"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 5822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ai": () => (/* binding */ getProfile),
/* harmony export */   "Vx": () => (/* binding */ update),
/* harmony export */   "bn": () => (/* binding */ userPublicProfile)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4865);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1445);



const userPublicProfile = (username)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/user/${username}`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const getProfile = (token)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/user/profile`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const update = (token, user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/user/update`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: user
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_2__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};


/***/ })

};
;
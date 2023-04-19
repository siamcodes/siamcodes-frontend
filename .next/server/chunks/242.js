"use strict";
exports.id = 242;
exports.ids = [242];
exports.modules = {

/***/ 9242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NJ": () => (/* binding */ getTags),
/* harmony export */   "Ue": () => (/* binding */ create),
/* harmony export */   "tc": () => (/* binding */ removeTag),
/* harmony export */   "xn": () => (/* binding */ singleTag)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4865);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1445);



const create = (tag, token)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/tag`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_2__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};
const getTags = ()=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/tags`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const singleTag = (slug)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/tag/${slug}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const removeTag = (slug, token)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/tag/${slug}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_2__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};


/***/ })

};
;
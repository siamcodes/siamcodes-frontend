"use strict";
exports.id = 49;
exports.ids = [49];
exports.modules = {

/***/ 9049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* binding */ getCategories),
/* harmony export */   "Ue": () => (/* binding */ create),
/* harmony export */   "sT": () => (/* binding */ removeCategory),
/* harmony export */   "ui": () => (/* binding */ singleCategory)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4865);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1445);



const create = (category, token)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/category`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_2__/* .handleResponse */ ._y)(response);
        return response.json();
    }).catch((err)=>console.log(err));
};
const getCategories = ()=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/categories`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const singleCategory = (slug)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/category/${slug}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const removeCategory = (slug, token)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/category/${slug}`, {
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
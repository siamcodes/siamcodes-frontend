"use strict";
(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 8679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9282);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9049);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4865);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3677);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_blog_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4230);










const Category = ({ category , blogs , query  })=>{
    const head = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        category.name,
                        " | ",
                        _config__WEBPACK_IMPORTED_MODULE_6__/* .APP_NAME */ .iC
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: `Best programming tutorials on ${category.name}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "canonical",
                    href: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .DOMAIN */ .yK}/categories/${query.slug}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: `${category.name}| ${_config__WEBPACK_IMPORTED_MODULE_6__/* .APP_NAME */ .iC}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: `Best programming tutorials on ${category.name}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .DOMAIN */ .yK}/categories/${query.slug}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .APP_NAME */ .iC}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .DOMAIN */ .yK}/images/seoblog.jpg`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image:secure_url",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .DOMAIN */ .yK}/images/seoblog.jpg`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image:type",
                    content: "image/jpg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "fb:app_id",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_6__/* .FB_APP_ID */ .f6}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    "data-ad-client": "ca-pub-6218184931833362",
                    async: true,
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                })
            ]
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            head(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-12 pt-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "display-4 font-weight-bold text-center",
                                        children: category.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row row-cols-1 row-cols-md-3 g-3",
                                        children: blogs.map((b, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    blog: b
                                                }, i)
                                            }))
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
Category.getInitialProps = ({ query  })=>{
    return (0,_actions_category__WEBPACK_IMPORTED_MODULE_5__/* .singleCategory */ .ui)(query.slug).then((data)=>{
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                category: data.category,
                blogs: data.blogs,
                query
            };
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ 6583:
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3677:
/***/ ((module) => {

module.exports = require("react-render-html");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,282,49,230], () => (__webpack_exec__(8679)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6616:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9282);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1445);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7283);
/* harmony import */ var _components_blog_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4230);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4865);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_10__);











const Index = ({ blogs , categories , tags , totalBlogs , blogsLimit , blogSkip , router  })=>{
    const shareUrl = `${_config__WEBPACK_IMPORTED_MODULE_9__/* .DOMAIN */ .yK}`;
    const head = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                    "data-ad-client": "ca-pub-3283607139562325",
                    async: true,
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        _config__WEBPACK_IMPORTED_MODULE_9__/* .APP_NAME */ .iC,
                        " | Programming"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: "Programming and tutorials on react node next angular vue php laravel ionic and web developoment"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "canonical",
                    href: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .DOMAIN */ .yK}${router.pathname}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: `Developoment tutorials | ${_config__WEBPACK_IMPORTED_MODULE_9__/* .APP_NAME */ .iC}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: "Programming and tutorials on react node next angular vue php laravel ionic and web developoment"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website android ios"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:url",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .DOMAIN */ .yK}${router.pathname}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .APP_NAME */ .iC}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .DOMAIN */ .yK}/images/seoblog.jpg`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image:secure_url",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .DOMAIN */ .yK}/images/seoblog.jpg`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image:type",
                    content: "image/jpg"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "fb:app_id",
                    content: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .FB_APP_ID */ .f6}`
                })
            ]
        });
    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(blogsLimit);
    const [skip, setSkip] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const loadMore = ()=>{
        let toSkip = skip + limit;
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_7__/* .listBlogsWithCategoriesAndTags */ .FH)(toSkip, limit).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([
                    ...loadedBlogs,
                    ...data.blogs
                ]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };
    const loadMoreButton = ()=>{
        return size > 0 && size >= limit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "d-grid",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: loadMore,
                className: "btn btn-lg btn-outline-success fs-1 fw-bold",
                children: "Load more"
            })
        });
    };
    const showAllBlogs = ()=>{
        return blogs.map((blog, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    blog: blog
                }, i)
            });
        });
    };
    const showAllCategories = ()=>{
        return categories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/categories/${c.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "btn btn-sm btn-secondary mt-1",
                            children: c.name
                        })
                    }, i),
                    " "
                ]
            }));
    };
    const showAllTags = ()=>{
        return tags.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/tags/${t.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "btn btn-sm btn-outline-secondary mt-1",
                            children: t.name
                        })
                    }, i),
                    " ",
                    " "
                ]
            }));
    };
    const showLoadedBlogs = ()=>{
        return loadedBlogs.map((blog, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    blog: blog
                }, i)
            }));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            head(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            class: "row row-cols-1 row-cols-md-4 g-2",
                                            children: showAllBlogs()
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row row-cols-1 row-cols-md-4 g-2 pt-2",
                                            children: showLoadedBlogs()
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center pt-2 pb-5",
                                            children: loadMoreButton()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pb-1",
                                            children: [
                                                showAllCategories(),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                showAllTags()
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.FacebookShareButton, {
                                            url: shareUrl,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.FacebookIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.FacebookShareCount, {
                                            url: shareUrl,
                                            children: (shareCount)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: shareCount
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.LineShareButton, {
                                            url: shareUrl,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.LineIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.EmailShareButton, {
                                            url: shareUrl,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.EmailIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.FacebookMessengerShareButton, {
                                            url: shareUrl,
                                            appId: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .FB_APP_ID */ .f6}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.FacebookMessengerIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.TwitterShareButton, {
                                            url: shareUrl,
                                            title: _config__WEBPACK_IMPORTED_MODULE_9__/* .APP_NAME */ .iC,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.TwitterIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.TelegramShareButton, {
                                            url: shareUrl,
                                            title: _config__WEBPACK_IMPORTED_MODULE_9__/* .APP_NAME */ .iC,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.TelegramIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.LinkedinShareButton, {
                                            url: shareUrl,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.LinkedinIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.PinterestShareButton, {
                                            url: shareUrl,
                                            media: `${_config__WEBPACK_IMPORTED_MODULE_9__/* .DOMAIN */ .yK}/images/seoblog.jpg`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.PinterestIcon, {
                                                size: 40,
                                                round: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_10__.PinterestShareCount, {
                                            url: shareUrl,
                                            className: "btn btn-light"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
Index.getInitialProps = ()=>{
    let skip = 0;
    let limit = 12;
    return (0,_actions_blog__WEBPACK_IMPORTED_MODULE_7__/* .listBlogsWithCategoriesAndTags */ .FH)(skip, limit).then((data)=>{
        // console.log('Data:', data)
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(Index));


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

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,282,230], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();
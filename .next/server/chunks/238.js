"use strict";
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 9238:
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
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1445);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4865);








const BlogRead = ({ username  })=>{
    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const token = (0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .getCookie */ .ej)("token");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        loadBlogs();
    }, []);
    const loadBlogs = ()=>{
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_5__/* .list */ .pb)(username).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };
    const deleteBlog = (slug)=>{
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_5__/* .removeBlog */ .T7)(slug, token).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };
    const deleteConfirm = (slug)=>{
        let answer = window.confirm("Are you sure you want to delete your blog?");
        if (answer) {
            deleteBlog(slug);
        }
    };
    const showUpdateButton = (blog)=>{
        if ((0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)() && (0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)().role === 0) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `/user/crud/${blog.slug}`,
                        className: "btn btn-sm btn-warning",
                        children: "Update"
                    }),
                    " "
                ]
            });
        } else if ((0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)() && (0,_actions_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)().role === 1) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `/admin/crud/${blog.slug}`,
                        className: "btn btn-sm btn-warning",
                        children: "Update"
                    }),
                    " "
                ]
            });
        }
    };
    const showAllBlogs = ()=>{
        return blogs.map((blog, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "card-img-top",
                            style: {
                                objectFit: "cover"
                            },
                            src: `${_config__WEBPACK_IMPORTED_MODULE_7__/* .API */ .bl}/blog/photo/${blog.slug}`,
                            alt: blog.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "card-title",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `/blogs/${blog.slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: blog.title
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "card-text",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                        className: "text-muted",
                                        children: [
                                            "Written by ",
                                            blog.postedBy.name,
                                            " | Published on ",
                                            moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow()
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "btn btn-sm btn-danger",
                                            onClick: ()=>deleteConfirm(blog.slug),
                                            children: " Delete "
                                        }),
                                        " ",
                                        " ",
                                        showUpdateButton(blog)
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, i);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-12",
                children: [
                    message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "alert alert-warning",
                        children: message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row row-cols-1 row-cols-md-4 g-1",
                        children: showAllBlogs()
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogRead);


/***/ })

};
;
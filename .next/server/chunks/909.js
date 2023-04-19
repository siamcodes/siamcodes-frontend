"use strict";
exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 8909:
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1445);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9049);
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9242);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7283);
/* harmony import */ var _helpers_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3847);










const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/crud/BlogCreate.js -> " + "react-quill"
        ]
    },
    ssr: false
});

const CreateBlog = ({ router  })=>{
    const blogFromLS = ()=>{
        if (true) {
            return false;
        }
        if (localStorage.getItem("blog")) {
            return JSON.parse(localStorage.getItem("blog"));
        } else {
            return false;
        }
    };
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // categories
    const [checkedTag, setCheckedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // tags
    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(blogFromLS());
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        error: "",
        sizeError: "",
        success: "",
        formData: "",
        title: "",
        hidePublishButton: false
    });
    const { error , sizeError , success , formData , title , hidePublishButton  } = values;
    const token = (0,_actions_auth__WEBPACK_IMPORTED_MODULE_5__/* .getCookie */ .ej)("token");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setValues({
            ...values,
            formData: new FormData()
        });
        initCategories();
        initTags();
    }, [
        router
    ]);
    const initCategories = ()=>{
        (0,_actions_category__WEBPACK_IMPORTED_MODULE_6__/* .getCategories */ .CP)().then((data)=>{
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setCategories(data);
            }
        });
    };
    const initTags = ()=>{
        (0,_actions_tag__WEBPACK_IMPORTED_MODULE_7__/* .getTags */ .NJ)().then((data)=>{
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setTags(data);
            }
        });
    };
    const publishBlog = (e)=>{
        e.preventDefault();
        console.log("ready to publishBlog");
        (0,_actions_blog__WEBPACK_IMPORTED_MODULE_8__/* .createBlog */ .Vh)(formData, token).then((data)=>{
            // console.log('Data:', data);
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    success: false
                });
            } else {
                setValues({
                    ...values,
                    title: "",
                    error: "",
                    success: `A new blog titled "${data.title}" is created`
                });
                setBody("");
                setCategories([]);
                setTags([]);
            }
        });
    };
    const handleChange = (name)=>(e)=>{
            //console.log(e.target.value);
            const value = name === "photo" ? e.target.files[0] : e.target.value;
            formData.set(name, value);
            setValues({
                ...values,
                [name]: value,
                formData,
                error: ""
            });
        };
    const handleBody = (e)=>{
        //console.log(e);
        setBody(e);
        formData.set("body", e);
        if (false) {}
    };
    const handleToggle = (c)=>()=>{
            setValues({
                ...values,
                error: ""
            });
            // return the first index or -1
            const clickedCategory = checked.indexOf(c);
            const all = [
                ...checked
            ];
            if (clickedCategory === -1) {
                all.push(c);
            } else {
                all.splice(clickedCategory, 1);
            }
            console.log(all);
            setChecked(all);
            formData.set("categories", all);
        };
    const handleTagsToggle = (t)=>()=>{
            setValues({
                ...values,
                error: ""
            });
            // return the first index or -1
            const clickedTag = checked.indexOf(t);
            const all = [
                ...checkedTag
            ];
            if (clickedTag === -1) {
                all.push(t);
            } else {
                all.splice(clickedTag, 1);
            }
            console.log(all);
            setCheckedTag(all);
            formData.set("tags", all);
        };
    const showCategories = ()=>{
        return categories && categories.map((c, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "list-unstyled",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleToggle(c._id),
                        type: "checkbox",
                        className: "form-check-input"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "form-check-label",
                        children: c.name
                    })
                ]
            }, i));
    };
    const showTags = ()=>{
        return tags && tags.map((t, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "list-unstyled",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleTagsToggle(t._id),
                        type: "checkbox",
                        className: "form-check-input"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "form-check-label",
                        children: t.name
                    })
                ]
            }, i));
    };
    const showError = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "alert alert-danger",
            style: {
                display: error ? "" : "none"
            },
            children: error
        });
    const showSuccess = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "alert alert-success",
            style: {
                display: success ? "" : "none"
            },
            children: success
        });
    const createBlogForm = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: publishBlog,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "form-label",
                            children: "Title"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            className: "form-control",
                            value: title,
                            onChange: handleChange("title")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                        modules: _helpers_quill__WEBPACK_IMPORTED_MODULE_9__/* .QuillModules */ .J,
                        formats: _helpers_quill__WEBPACK_IMPORTED_MODULE_9__/* .QuillFormats */ .$,
                        value: body,
                        placeholder: "Write something amazing...",
                        onChange: handleBody
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-grid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn btn-lg btn-primary",
                        children: "Publish"
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-8",
                children: [
                    createBlogForm(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-3",
                        children: [
                            showError(),
                            showSuccess()
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-md-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group pb-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: "Featured image"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    className: "text-muted",
                                    children: "Max size: 1 Mb"
                                }),
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "btn btn-lg btn-outline-info",
                                    children: [
                                        "Upload featured image",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onChange: handleChange("photo"),
                                            type: "file",
                                            accept: "image/*",
                                            hidden: true
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Categories"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                style: {
                                    maxHeight: "200px",
                                    overflowY: "scroll"
                                },
                                children: showCategories()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                children: "Tags"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                style: {
                                    maxHeight: "300px",
                                    overflowY: "scroll"
                                },
                                children: showTags()
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(CreateBlog));


/***/ })

};
;
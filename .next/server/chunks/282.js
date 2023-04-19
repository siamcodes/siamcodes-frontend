"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 1445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$D": () => (/* binding */ isAuth),
/* harmony export */   "Cb": () => (/* binding */ loginWithGoogle),
/* harmony export */   "IU": () => (/* binding */ signup),
/* harmony export */   "Nq": () => (/* binding */ updateUser),
/* harmony export */   "YR": () => (/* binding */ authenticate),
/* harmony export */   "_y": () => (/* binding */ handleResponse),
/* harmony export */   "c0": () => (/* binding */ resetPassword),
/* harmony export */   "ej": () => (/* binding */ getCookie),
/* harmony export */   "gF": () => (/* binding */ forgotPassword),
/* harmony export */   "q": () => (/* binding */ preSignup),
/* harmony export */   "uf": () => (/* binding */ signout),
/* harmony export */   "xJ": () => (/* binding */ signin)
/* harmony export */ });
/* unused harmony exports setCookie, removeCookie, setLocalStorage, removeLocalStorage */
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4865);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const handleResponse = (response)=>{
    if (response.status === 401) {
        signout(()=>{
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
                pathname: "/signin",
                query: {
                    message: "Your session is expired. Please signin"
                }
            });
        });
    }
};
const preSignup = (user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/pre-signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const signup = (user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const signin = (user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const signout = (next)=>{
    removeCookie("token");
    removeLocalStorage("user");
    next();
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/signout`, {
        method: "GET"
    }).then((response)=>{
        console.log("signout success");
    }).catch((err)=>console.log(err));
};
// set cookie
const setCookie = (key, value)=>{
    if (false) {}
};
const removeCookie = (key)=>{
    if (false) {}
};
// get cookie
const getCookie = (key)=>{
    if (false) {}
};
// localstorage
const setLocalStorage = (key, value)=>{
    if (false) {}
};
const removeLocalStorage = (key)=>{
    if (false) {}
};
// autheticate user by pass data to cookie and localstorage
const authenticate = (data, next)=>{
    setCookie("token", data.token);
    setLocalStorage("user", data.user);
    next();
};
const isAuth = ()=>{
    if (false) {}
};
const updateUser = (user, next)=>{
    if (false) {}
};
const forgotPassword = (email)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/forgot-password`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const resetPassword = (resetInfo)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/reset-password`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resetInfo)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const loginWithGoogle = (user)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .API */ .bl}/google-login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};


/***/ }),

/***/ 7283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ch": () => (/* binding */ singleBlog),
/* harmony export */   "FH": () => (/* binding */ listBlogsWithCategoriesAndTags),
/* harmony export */   "T7": () => (/* binding */ removeBlog),
/* harmony export */   "Vh": () => (/* binding */ createBlog),
/* harmony export */   "W1": () => (/* binding */ listRelated),
/* harmony export */   "mx": () => (/* binding */ listSearch),
/* harmony export */   "pb": () => (/* binding */ list),
/* harmony export */   "zZ": () => (/* binding */ updateBlog)
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6583);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4865);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1445);




const createBlog = (blog, token)=>{
    let createBlogEndpoint;
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 1) {
        createBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blog`;
    } else if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 0) {
        createBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/user/blog`;
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${createBlogEndpoint}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: blog
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response); //
        return response.json();
    }).catch((err)=>console.log(err));
};
const listBlogsWithCategoriesAndTags = (skip, limit)=>{
    const data = {
        limit,
        skip
    };
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blogs-categories-tags`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response); //
        return response.json();
    }).catch((err)=>console.log(err));
};
const singleBlog = (slug)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blog/${slug}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const listRelated = (blog)=>{
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blogs/related`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const list = (username)=>{
    let listBlogsEndpoint;
    if (username) {
        listBlogsEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/${username}/blogs`;
    } else {
        listBlogsEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blogs`;
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${listBlogsEndpoint}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};
const removeBlog = (slug, token)=>{
    let deleteBlogEndpoint;
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 1) {
        deleteBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blog/${slug}`;
    } else if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 0) {
        deleteBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/user/blog/${slug}`;
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${deleteBlogEndpoint}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response); //
        return response.json();
    }).catch((err)=>console.log(err));
};
const updateBlog = (blog, token, slug)=>{
    let updateBlogEndpoint;
    if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 1) {
        updateBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blog/${slug}`;
    } else if ((0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)() && (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .isAuth */ .$D)().role === 0) {
        updateBlogEndpoint = `${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/user/blog/${slug}`;
    }
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${updateBlogEndpoint}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: blog
    }).then((response)=>{
        (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .handleResponse */ ._y)(response); //
        return response.json();
    }).catch((err)=>console.log(err));
};
const listSearch = (params)=>{
    // console.log('search params', params);
    let query = query_string__WEBPACK_IMPORTED_MODULE_2___default().stringify(params);
    // console.log('query params', query);
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .API */ .bl}/blogs/search?${query}`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err));
};


/***/ }),

/***/ 9282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4865);
// EXTERNAL MODULE: ./actions/auth.js
var auth = __webpack_require__(1445);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: external "react-render-html"
var external_react_render_html_ = __webpack_require__(3677);
// EXTERNAL MODULE: ./actions/blog.js
var blog = __webpack_require__(7283);
;// CONCATENATED MODULE: ./components/blog/Search.js





const Search = ()=>{
    const [values, setValues] = (0,external_react_.useState)({
        search: undefined,
        results: [],
        searched: false,
        message: ""
    });
    const { search , results , searched , message  } = values;
    const searchSubmit = (e)=>{
        e.preventDefault();
        (0,blog/* listSearch */.mx)({
            search
        }).then((data)=>{
            setValues({
                ...values,
                results: data,
                searched: true,
                message: `${data.length} blogs found`
            });
        });
    };
    const handleChange = (e)=>{
        // console.log(e.target.value);
        setValues({
            ...values,
            search: e.target.value,
            searched: false,
            results: []
        });
    };
    const searchedBlogs = (results = [])=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-6 bg-light",
            children: [
                message && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "pt-5 text-muted font-italic",
                    children: message
                }),
                results.map((blog, i)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/blogs/${blog.slug}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "text-primary",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        class: "bi bi-arrow-right-short"
                                    }),
                                    " ",
                                    blog.title
                                ]
                            })
                        })
                    }, i);
                })
            ]
        });
    };
    const searchForm = ()=>/*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: searchSubmit,
            className: "d-flex",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "input-group",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "search",
                        className: "form-control me-1",
                        placeholder: "Search",
                        "aria-label": "Search",
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-outline-secondary",
                        type: "submit",
                        children: " Search  "
                    })
                ]
            })
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            zIndex: 4000
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-1",
                children: searchForm()
            }),
            searched && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    padding: "0px"
                },
                children: searchedBlogs(results)
            })
        ]
    });
};
/* harmony default export */ const blog_Search = (Search);

;// CONCATENATED MODULE: ./components/Header.js









(router_default()).onRouteChangeStart = (url)=>external_nprogress_default().start();
(router_default()).onRouteChangeComplete = (url)=>external_nprogress_default().done();
(router_default()).onRouteChangeError = (url)=>external_nprogress_default().done();
const Header = ()=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pb-1",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Navbar, {
                color: "light",
                light: true,
                expand: "md",
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "typewriter",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pt-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.NavbarBrand, {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: `${config/* DOMAIN */.yK}/images/logo.png`,
                                            height: "25",
                                            class: "d-inline-block align-text-top"
                                        }),
                                        config/* APP_NAME */.iC
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavbarToggler, {
                        onClick: toggle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Collapse, {
                        isOpen: isOpen,
                        navbar: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Nav, {
                                className: "me-auto",
                                navbar: true,
                                style: {
                                    marginTop: "0px",
                                    marginBottom: "0px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blogs",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: "Blogs"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: "Contact"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(blog_Search, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                                className: "ms-auto",
                                navbar: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/user/crud/blog",
                                            className: "btn btn-outline-primary mb-1",
                                            children: "Write a blog"
                                        })
                                    }),
                                    (0,auth/* isAuth */.$D)() && (0,auth/* isAuth */.$D)().role === 0 && /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/user",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: `${(0,auth/* isAuth */.$D)().name}'s Dashboard`
                                            })
                                        })
                                    }),
                                    (0,auth/* isAuth */.$D)() && (0,auth/* isAuth */.$D)().role === 1 && /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/admin",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: `${(0,auth/* isAuth */.$D)().name}'s Dashboard`
                                            })
                                        })
                                    }),
                                    !(0,auth/* isAuth */.$D)() && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/signin",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        children: "Signin"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/signup",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        children: "Signup"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0,auth/* isAuth */.$D)() && /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.NavLink, {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            onClick: ()=>(0,auth/* signout */.uf)(()=>router_default().replace(`/signin`)),
                                            children: [
                                                "Signout ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    class: "bi bi-box-arrow-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./components/Layout.js





const { publicRuntimeConfig  } = config_default()();
const Layout = ({ children  })=>{
    const setGoogleTags = ()=>{
        if (publicRuntimeConfig.PRODUCTION) {
            return {
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '259605935');
            `
            };
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=259605935"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            dangerouslySetInnerHTML: setGoogleTags()
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 4865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* binding */ DISQUS_SHORTNAME),
/* harmony export */   "bl": () => (/* binding */ API),
/* harmony export */   "f6": () => (/* binding */ FB_APP_ID),
/* harmony export */   "iC": () => (/* binding */ APP_NAME),
/* harmony export */   "wL": () => (/* binding */ GOOGLE_CLIENT_ID),
/* harmony export */   "yK": () => (/* binding */ DOMAIN)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
const APP_NAME = publicRuntimeConfig.APP_NAME;
const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
const GOOGLE_CLIENT_ID = publicRuntimeConfig.GOOGLE_CLIENT_ID;


/***/ })

};
;
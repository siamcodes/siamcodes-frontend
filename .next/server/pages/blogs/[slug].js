"use strict";
(() => {
var exports = {};
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 4388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(9282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./actions/blog.js
var actions_blog = __webpack_require__(7283);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4865);
// EXTERNAL MODULE: external "react-render-html"
var external_react_render_html_ = __webpack_require__(3677);
var external_react_render_html_default = /*#__PURE__*/__webpack_require__.n(external_react_render_html_);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/blog/SmallCard.js





const SmallCard = ({ blog  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/blogs/${blog.slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "img img-fluid",
                            style: {
                                maxHeight: "auto",
                                width: "100%"
                            },
                            src: `${config/* API */.bl}/blog/photo/${blog.slug}`,
                            alt: blog.title
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-body",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/blogs/${blog.slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "card-title",
                                    children: blog.title
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "card-text",
                            children: external_react_render_html_default()(blog.excerpt)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-body",
                children: [
                    "Posted ",
                    external_moment_default()(blog.updatedAt).fromNow(),
                    " by",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/profile/${blog.postedBy.username}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: blog.postedBy.name
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const blog_SmallCard = (SmallCard);

;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./components/DisqusThread.js




const SHORTNAME = config/* DISQUS_SHORTNAME */.CT;
const WEBSITE_URL = config/* DOMAIN */.yK;
function renderDisqus() {
    if (window.DISQUS === undefined) {
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://" + SHORTNAME + ".disqus.com/embed.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        window.DISQUS.reset({
            reload: true
        });
    }
}
class DisqusThread extends (external_react_default()).Component {
    static{
        this.propTypes = {
            id: (external_prop_types_default()).string.isRequired,
            title: (external_prop_types_default()).string.isRequired,
            path: (external_prop_types_default()).string.isRequired
        };
    }
    shouldComponentUpdate(nextProps) {
        return this.props.id !== nextProps.id || this.props.title !== nextProps.title || this.props.path !== nextProps.path;
    }
    componentDidMount() {
        renderDisqus();
    }
    componentDidUpdate() {
        renderDisqus();
    }
    render() {
        let { id , title , path , ...other } = this.props;
        if (process.env.BROWSER) {
            window.disqus_shortname = SHORTNAME;
            window.disqus_identifier = id;
            window.disqus_title = title;
            window.disqus_url = WEBSITE_URL + path;
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...other,
            id: "disqus_thread"
        });
    }
}
/* harmony default export */ const components_DisqusThread = (DisqusThread);

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__(6158);
;// CONCATENATED MODULE: ./pages/blogs/[slug].js












const SingleBlog = ({ blog , query  })=>{
    const shareUrl = `${config/* DOMAIN */.yK}/blogs/${query.slug}`; //
    const [related, setRelated] = (0,external_react_.useState)([]);
    const loadRelated = ()=>{
        (0,actions_blog/* listRelated */.W1)({
            blog
        }).then((data)=>{
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };
    (0,external_react_.useEffect)(()=>{
        loadRelated();
    }, []);
    const head = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    "data-ad-client": "ca-pub-3283607139562325",
                    async: true,
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        blog.title,
                        " | ",
                        config/* APP_NAME */.iC
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    charset: "UTF-8"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "description",
                    content: blog.mdesc
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "canonical",
                    href: `${config/* DOMAIN */.yK}/blogs/${query.slug}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:title",
                    content: `${blog.title}| ${config/* APP_NAME */.iC}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:description",
                    content: blog.mdesc
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:type",
                    content: "website"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:url",
                    content: `${config/* DOMAIN */.yK}/blogs/${query.slug}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:site_name",
                    content: `${config/* APP_NAME */.iC}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:image",
                    content: `${config/* API */.bl}/blog/photo/${blog.slug}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:image:secure_url",
                    content: `${config/* API */.bl}/blog/photo/${blog.slug}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:image:type",
                    content: "image/jpg"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "fb:app_id",
                    content: `${config/* FB_APP_ID */.f6}`
                })
            ]
        });
    const showBlogCategories = (blog)=>blog.categories.map((c, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/categories/${c.slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn btn-secondary btn-sm mt-2",
                            children: c.name
                        })
                    }, i),
                    " "
                ]
            }));
    const showBlogTags = (blog)=>blog.tags.map((t, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/tags/${t.slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn btn-outline-secondary btn-sm mt-2",
                            children: t.name
                        })
                    }, i),
                    " "
                ]
            }));
    const showRelatedBlog = ()=>{
        return related.map((blog, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(blog_SmallCard, {
                        blog: blog
                    })
                })
            }, i));
    };
    const showComments = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_DisqusThread, {
                id: blog.id,
                title: blog.title,
                path: `/blog/${blog.slug}`
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            head(),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    style: {
                                        marginTop: "-50px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${config/* API */.bl}/blog/photo/${blog.slug}`,
                                        alt: blog.title,
                                        className: "img img-fluid featured-image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "container-fluid",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "display-3 pb-3 pt-3 text-center font-weight-bold text-shadow",
                                        children: blog.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                        className: "mark",
                                        children: [
                                            "Written by",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/profile/${blog.postedBy.username}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: blog.postedBy.name
                                                })
                                            }),
                                            " ",
                                            "| Published ",
                                            external_moment_default()(blog.updatedAt).fromNow()
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-fluid",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-9 imgs",
                                            children: external_react_render_html_default()(blog.body)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "pb-3",
                                                    children: [
                                                        showBlogCategories(blog),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        showBlogTags(blog)
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookShareButton, {
                                                    url: shareUrl,
                                                    media: `${config/* API */.bl}/blog/photo/${blog.slug}`,
                                                    quote: blog.title,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookShareCount, {
                                                    url: shareUrl,
                                                    children: (shareCount)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: shareCount
                                                        })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.LineShareButton, {
                                                    url: shareUrl,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.LineIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.EmailShareButton, {
                                                    url: shareUrl,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.EmailIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookMessengerShareButton, {
                                                    url: shareUrl,
                                                    appId: `${config/* FB_APP_ID */.f6}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookMessengerIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TwitterShareButton, {
                                                    url: shareUrl,
                                                    title: blog.title,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TwitterIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TelegramShareButton, {
                                                    url: shareUrl,
                                                    title: blog.title,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TelegramIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.LinkedinShareButton, {
                                                    url: shareUrl,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.LinkedinIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.PinterestShareButton, {
                                                    url: shareUrl,
                                                    media: `${config/* API */.bl}/blog/photo/${blog.slug}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.PinterestIcon, {
                                                        size: 40,
                                                        round: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.PinterestShareCount, {
                                                    url: shareUrl
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-fluid",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "display-4 text-center pt-2 pb-2 text-shadow",
                                        children: "Related blogs"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: showRelatedBlog()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-fluid pt-5 pb-5",
                                children: showComments()
                            })
                        ]
                    })
                })
            })
        ]
    });
};
SingleBlog.getInitialProps = ({ query  })=>{
    return (0,actions_blog/* singleBlog */.Ch)(query.slug).then((data)=>{
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return {
                blog: data,
                query
            };
        }
    });
};
/* harmony default export */ const _slug_ = (SingleBlog);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,282], () => (__webpack_exec__(4388)));
module.exports = __webpack_exports__;

})();
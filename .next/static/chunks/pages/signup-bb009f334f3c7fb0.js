(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8588:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(4002)}])},7214:function(e,t,n){"use strict";var o=n(5893);n(1664),n(7294);var r=n(1163),i=n.n(r),a=n(3645),c=n.n(a),s=n(1445),l=n(5844);let u=()=>{let e=e=>{console.log(e);let t=e.tokenId;(0,s.Cb)({tokenId:t}).then(e=>{e.error?console.log(e.error):(0,s.YR)(e,()=>{(0,s.$D)()&&1===(0,s.$D)().role?i().push("/admin"):i().push("/user")})})};return(0,o.jsx)("div",{className:"d-grid pb-3",children:(0,o.jsx)(c(),{clientId:"".concat(l.wL),buttonText:"Login with Google",onSuccess:e,onFailure:e,theme:"dark"})})};t.Z=u},4002:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(5893),r=n(9282),i=n(7294),a=n(1445),c=n(1163),s=n.n(c),l=n(1664),u=n.n(l),d=n(7214);let f=()=>{let[e,t]=(0,i.useState)({name:"",email:"",password:"",error:"",loading:!1,message:"",showForm:!0}),{name:n,email:r,password:c,error:l,loading:f,message:p,showForm:g}=e;(0,i.useEffect)(()=>{(0,a.$D)()&&s().push("/")},[]);let m=o=>{o.preventDefault(),t({...e,loading:!0,error:!1}),(0,a.q)({name:n,email:r,password:c}).then(n=>{n.error?t({...e,error:n.error,loading:!1}):t({...e,name:"",email:"",password:"",error:"",loading:!1,message:n.message,showForm:!1})})},y=n=>o=>{t({...e,error:!1,[n]:o.target.value})};return(0,o.jsxs)(i.Fragment,{children:[l?(0,o.jsx)("div",{className:"alert alert-danger row",children:l}):"",f?(0,o.jsx)("div",{className:"alert alert-info row",children:"Loading..."}):"",p?(0,o.jsx)("div",{className:"alert alert-info row",children:p}):"",(0,o.jsx)(d.Z,{}),(0,o.jsx)("hr",{}),g&&(0,o.jsxs)("form",{onSubmit:m,children:[(0,o.jsx)("div",{className:"mb-3 ",children:(0,o.jsx)("input",{value:n,onChange:y("name"),type:"text",className:"form-control",placeholder:"Type your name"})}),(0,o.jsx)("div",{className:"mb-3 ",children:(0,o.jsx)("input",{value:r,onChange:y("email"),type:"email",className:"form-control",placeholder:"Type your email"})}),(0,o.jsx)("div",{className:"mb-3 ",children:(0,o.jsx)("input",{value:c,onChange:y("password"),type:"password",className:"form-control",placeholder:"Type your password"})}),(0,o.jsx)("div",{className:"mb-3 d-grid",children:(0,o.jsx)("button",{className:"btn btn-primary",children:"Signup"})})]}),(0,o.jsx)("br",{}),(0,o.jsx)(u(),{href:"/auth/password/forgot",children:(0,o.jsx)("a",{className:"btn btn-outline-danger btn-sm",children:"Forgot password"})})]})},p=()=>(0,o.jsx)(r.Z,{children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h2",{className:"text-center pt-4 pb-4",children:"Signup"}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-4 offset-md-4",children:(0,o.jsx)(f,{})})})]})});var g=p},3645:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t,n;return n={},o.m=t=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t,n,o,r,i){var a=e.getElementsByTagName(t)[0],c=a;(c=e.createElement(t)).id=n,c.src=o,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onerror=i,c.onload=r}function u(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function d(e){return m.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function f(e){return m.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},m.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("g",{fill:"#000",fillRule:"evenodd"},m.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),m.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),m.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),m.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),m.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function p(e){var t=r(Object(g.useState)(!1),2),n=t[0],o=t[1],i=r(Object(g.useState)(!1),2),a=i[0],c=i[1],s=e.tag,l=e.type,u=e.className,p=e.disabledStyle,h=e.buttonText,b=e.children,v=e.render,j=e.theme,S=e.icon,x=e.disabled,w=y({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),O=w.signIn,_=x||!w.loaded;if(v)return v({onClick:O,disabled:_});var k={backgroundColor:"dark"===j?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===j?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},I=_?Object.assign({},k,p):a?Object.assign({},k,{cursor:"pointer",backgroundColor:"dark"===j?"#3367D6":"#eee",color:"dark"===j?"#fff":"rgba(0, 0, 0, .54)",opacity:1}):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return m.a.createElement(s,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:O,style:I,type:l,disabled:_,className:u},[S&&m.a.createElement(f,{key:1,active:a}),m.a.createElement(d,{icon:S,key:2},b||h)])}n.r(t),n.d(t,"default",function(){return b}),n.d(t,"GoogleLogin",function(){return b}),n.d(t,"GoogleLogout",function(){return j}),n.d(t,"useGoogleLogin",function(){return y}),n.d(t,"useGoogleLogout",function(){return v});var g=n(0),m=n.n(g),y=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},a(e)}function n(e){if(e&&e.preventDefault(),C){var n=window.gapi.auth2.getAuthInstance(),o={prompt:L};m(),"code"===T?n.grantOfflineAccess(o).then(function(e){return a(e)},function(e){return f(e)}):n.signIn(o).then(function(e){return t(e)},function(e){return f(e)})}}var r,i=e.onSuccess,a=void 0===i?function(){}:i,c=e.onAutoLoadFinished,s=void 0===c?function(){}:c,d=e.onFailure,f=void 0===d?function(){}:d,p=e.onRequest,m=void 0===p?function(){}:p,y=e.onScriptLoadFailure,h=e.clientId,b=e.cookiePolicy,v=e.loginHint,j=e.hostedDomain,S=e.autoLoad,x=e.isSignedIn,w=e.fetchBasicProfile,O=e.redirectUri,_=e.discoveryDocs,k=e.uxMode,I=e.scope,E=e.accessType,T=e.responseType,A=e.jsSrc,N=void 0===A?"https://apis.google.com/js/api.js":A,L=e.prompt,P=function(e){if(Array.isArray(e))return e}(r=Object(g.useState)(!1))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(r,2)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),C=P[0],M=P[1];return Object(g.useEffect)(function(){var e=!1,n=y||f;return l(document,"script","google-login",N,function(){var o={client_id:h,cookie_policy:b,login_hint:v,hosted_domain:j,fetch_basic_profile:w,discoveryDocs:_,ux_mode:k,redirect_uri:O,scope:I,access_type:E};"code"===T&&(o.access_type="offline"),window.gapi.load("auth2",function(){var r=window.gapi.auth2.getAuthInstance();r?r.then(function(){e||(x&&r.isSignedIn.get()?(M(!0),s(!0),t(r.currentUser.get())):(M(!0),s(!1)))},function(e){f(e)}):window.gapi.auth2.init(o).then(function(n){if(!e){M(!0);var o=x&&n.isSignedIn.get();s(o),o&&t(n.currentUser.get())}},function(e){M(!0),s(!1),n(e)})})},function(e){n(e)}),function(){e=!0,u(document,"google-login")}},[]),Object(g.useEffect)(function(){S&&n()},[C]),{signIn:n,loaded:C}});function h(e){var t=c(Object(g.useState)(!1),2),n=t[0],o=t[1],r=c(Object(g.useState)(!1),2),i=r[0],a=r[1],s=e.tag,l=e.type,u=e.className,p=e.disabledStyle,y=e.buttonText,h=e.children,b=e.render,j=e.theme,S=e.icon,x=e.disabled,w=v({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),O=w.signOut,_=x||!w.loaded;if(b)return b({onClick:O,disabled:_});var k={backgroundColor:"dark"===j?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===j?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},I=_?Object.assign({},k,p):i?Object.assign({},k,{cursor:"pointer",backgroundColor:"dark"===j?"#3367D6":"#eee",color:"dark"===j?"#fff":"rgba(0, 0, 0, .54)",opacity:1}):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return m.a.createElement(s,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:O,style:I,type:l,disabled:_,className:u},[S&&m.a.createElement(f,{key:1,active:i}),m.a.createElement(d,{icon:S,key:2},h||y)])}p.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var b=p,v=function(e){var t,n=e.jsSrc,o=void 0===n?"https://apis.google.com/js/api.js":n,r=e.onFailure,i=e.onScriptLoadFailure,c=e.clientId,s=e.cookiePolicy,d=e.loginHint,f=e.hostedDomain,p=e.fetchBasicProfile,m=e.discoveryDocs,y=e.uxMode,h=e.redirectUri,b=e.scope,v=e.accessType,j=e.onLogoutSuccess,S=function(e){if(Array.isArray(e))return e}(t=Object(g.useState)(!1))||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(t,2)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=S[0],w=S[1],O=Object(g.useCallback)(function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then(function(){e.signOut().then(function(){e.disconnect(),j()})},function(e){return r(e)})}},[j]);return Object(g.useEffect)(function(){var e=i||r;return l(document,"script","google-login",o,function(){var t={client_id:c,cookie_policy:s,login_hint:d,hosted_domain:f,fetch_basic_profile:p,discoveryDocs:m,ux_mode:y,redirect_uri:h,scope:b,access_type:v};window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()?w(!0):window.gapi.auth2.init(t).then(function(){return w(!0)},function(t){return e(t)})})},function(t){e(t)}),function(){u(document,"google-login")}},[]),{signOut:O,loaded:x}};h.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var j=h}],o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,(function(t){return e[t]}).bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4);function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}}(n(7294))}},function(e){e.O(0,[849,978,282,774,888,179],function(){return e(e.s=8588)}),_N_E=e.O()}]);
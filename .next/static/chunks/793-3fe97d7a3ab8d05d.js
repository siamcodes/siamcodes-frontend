(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{9049:function(e,t,l){"use strict";l.d(t,{CP:function(){return i},Ue:function(){return s},sT:function(){return d},ui:function(){return c}});var r=l(4301),o=l.n(r),a=l(5844),n=l(1445);let s=(e,t)=>o()("".concat(a.bl,"/category"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e)),i=()=>o()("".concat(a.bl,"/categories"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),c=e=>o()("".concat(a.bl,"/category/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),d=(e,t)=>o()("".concat(a.bl,"/category/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e))},9242:function(e,t,l){"use strict";l.d(t,{NJ:function(){return i},Ue:function(){return s},tc:function(){return d},xn:function(){return c}});var r=l(4301),o=l.n(r),a=l(5844),n=l(1445);let s=(e,t)=>o()("".concat(a.bl,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e)),i=()=>o()("".concat(a.bl,"/tags"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),c=e=>o()("".concat(a.bl,"/tag/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),d=(e,t)=>o()("".concat(a.bl,"/tag/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e))},6793:function(e,t,l){"use strict";var r=l(5893);l(1664);var o=l(7294),a=l(1163),n=l.n(a),s=l(5152),i=l.n(s),c=l(1445),d=l(9049),u=l(9242),h=l(7283),p=l(3847),m=l(5844);let f=i()(()=>Promise.all([l.e(774),l.e(937),l.e(167)]).then(l.t.bind(l,1167,23)),{loadableGenerated:{webpack:()=>[1167]},ssr:!1}),b=e=>{let{router:t}=e,[l,a]=(0,o.useState)(""),[s,i]=(0,o.useState)([]),[b,g]=(0,o.useState)([]),[y,j]=(0,o.useState)([]),[_,x]=(0,o.useState)([]),[v,N]=(0,o.useState)({title:"",error:"",success:"",formData:"",title:"",body:""}),{error:k,success:C,formData:T,title:w}=v,E=(0,c.ej)("token");(0,o.useEffect)(()=>{N({...v,formData:new FormData}),O(),P(),A()},[t]);let O=()=>{t.query.slug&&(0,h.Ch)(t.query.slug).then(e=>{e.error?console.log(e.error):(N({...v,title:e.title}),a(e.body),D(e.categories),S(e.tags))})},D=e=>{let t=[];e.map((e,l)=>{t.push(e._id)}),j(t)},S=e=>{let t=[];e.map((e,l)=>{t.push(e._id)}),x(t)},P=()=>{(0,d.CP)().then(e=>{e.error?N({...v,error:e.error}):i(e)})},A=()=>{(0,u.NJ)().then(e=>{e.error?N({...v,error:e.error}):g(e)})},z=e=>()=>{N({...v,error:""});let t=y.indexOf(e),l=[...y];-1===t?l.push(e):l.splice(t,1),console.log(l),j(l),T.set("categories",l)},G=e=>()=>{N({...v,error:""});let t=_.indexOf(e),l=[..._];-1===t?l.push(e):l.splice(t,1),console.log(l),x(l),T.set("tags",l)},L=e=>{let t=y.indexOf(e);return -1!==t},M=e=>{let t=_.indexOf(e);return -1!==t},R=e=>t=>{let l="photo"===e?t.target.files[0]:t.target.value;T.set(e,l),N({...v,[e]:l,formData:T,error:""})},Z=e=>{a(e),T.set("body",e)},q=e=>{console.log("update blog"),e.preventDefault(),(0,h.zZ)(T,E,t.query.slug).then(e=>{e.error?N({...v,error:e.error}):(N({...v,title:"",success:'Blog titled "'.concat(e.title,'" is successfully updated')}),(0,c.$D)()&&1===(0,c.$D)().role?n().replace("/admin"):(0,c.$D)()&&0===(0,c.$D)().role&&n().replace("/user"))})};return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-8",children:[(0,r.jsxs)("form",{onSubmit:q,children:[(0,r.jsxs)("div",{className:"mb-2",children:[(0,r.jsx)("label",{className:"text-muted",children:"Title"}),(0,r.jsx)("input",{type:"text",className:"form-control",value:w,onChange:R("title")})]}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(f,{modules:p.J,formats:p.$,value:l,placeholder:"Write something amazing...",onChange:Z})}),(0,r.jsx)("div",{className:"d-grid",children:(0,r.jsx)("button",{type:"submit",className:"btn btn-lg btn-primary",children:"Update"})})]}),(0,r.jsxs)("div",{className:"pt-3",children:[(0,r.jsx)("div",{className:"alert alert-success",style:{display:C?"":"none"},children:C}),(0,r.jsx)("div",{className:"alert alert-danger",style:{display:k?"":"none"},children:k})]})]}),(0,r.jsxs)("div",{className:"col-md-4",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"form-group pb-2",children:[(0,r.jsx)("h5",{children:"Featured image"}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("small",{className:"text-muted",children:"Max size: 1 Mb"})," ",(0,r.jsxs)("label",{className:"btn btn-lg btn-outline-info",children:["Upload featured image",(0,r.jsx)("input",{onChange:R("photo"),type:"file",accept:"image/*",hidden:!0})]})]}),(0,r.jsx)("div",{className:"col",children:l&&(0,r.jsx)("img",{src:"".concat(m.bl,"/blog/photo/").concat(t.query.slug),alt:w,style:{width:"100%"}})})]})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Categories"}),(0,r.jsx)("hr",{}),(0,r.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:s&&s.map((e,t)=>(0,r.jsxs)("li",{className:"list-unstyled",children:[(0,r.jsx)("input",{onChange:z(e._id),checked:L(e._id),type:"checkbox",className:"mr-2"})," ",(0,r.jsx)("label",{className:"form-check-label",children:e.name})]},t))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Tags"}),(0,r.jsx)("hr",{}),(0,r.jsx)("ul",{style:{maxHeight:"300px",overflowY:"scroll"},children:b&&b.map((e,t)=>(0,r.jsxs)("li",{className:"list-unstyled",children:[(0,r.jsx)("input",{onChange:G(e._id),checked:M(e._id),type:"checkbox",className:"mr-2"})," ",(0,r.jsx)("label",{className:"form-check-label",children:e.name})]},t))})]})]})]})};t.Z=(0,a.withRouter)(b)},3847:function(e,t,l){"use strict";l.d(t,{$:function(){return o},J:function(){return r}});let r={toolbar:[[{header:"1"},{header:"2"},{header:[3,4,5,6]},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{color:[]},{background:[]}],[{align:[]}],[{script:"super"},{script:"sub"}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["code-block"],["clean"]]},o=["header","font","size","bold","italic","underline","strike","blockquote","color","background","align","script","list","bullet","indent","link","image","video","code-block"]},5677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=a.default,o={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),o=r({},o,t);let i=o.loader,c=()=>null!=i?i().then(n):Promise.resolve(n(()=>null));return(o.loadableGenerated&&(o=r({},o,o.loadableGenerated),delete o.loadableGenerated),"boolean"!=typeof o.ssr||o.ssr)?l(r({},o,{loader:c})):(delete o.webpack,delete o.modules,s(l,o))},t.noSSR=s;var r=l(6495).Z,o=l(2648).Z,a=(o(l(7294)),o(l(8976)));function n(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,l(2648).Z)(l(7294));let o=r.default.createContext(null);t.LoadableContext=o},8976:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(6495).Z,o=(0,l(2648).Z)(l(7294)),a=l(2254);let n=[],s=[],i=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function n(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let e=l.webpack?l.webpack():l.modules;e&&s.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return n()})}function c(e,t){!function(){n();let e=o.default.useContext(a.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let s=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>{var t;return s.loading||s.error?o.default.createElement(l.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?o.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return c.preload=()=>n(),c.displayName="LoadableComponent",o.default.forwardRef(c)}(c,e)}function h(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(n).then(e,t)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(i=!0,t());h(s,e).then(l,l)})},window.__NEXT_PRELOADREADY=u.preloadReady,t.default=u},5152:function(e,t,l){e.exports=l(5677)}}]);
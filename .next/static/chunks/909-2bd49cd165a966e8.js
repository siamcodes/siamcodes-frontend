(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{9049:function(e,t,l){"use strict";l.d(t,{CP:function(){return i},Ue:function(){return s},sT:function(){return d},ui:function(){return c}});var o=l(4301),r=l.n(o),a=l(5844),n=l(1445);let s=(e,t)=>r()("".concat(a.bl,"/category"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e)),i=()=>r()("".concat(a.bl,"/categories"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),c=e=>r()("".concat(a.bl,"/category/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),d=(e,t)=>r()("".concat(a.bl,"/category/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e))},9242:function(e,t,l){"use strict";l.d(t,{NJ:function(){return i},Ue:function(){return s},tc:function(){return d},xn:function(){return c}});var o=l(4301),r=l.n(o),a=l(5844),n=l(1445);let s=(e,t)=>r()("".concat(a.bl,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e)),i=()=>r()("".concat(a.bl,"/tags"),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),c=e=>r()("".concat(a.bl,"/tag/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e)),d=(e,t)=>r()("".concat(a.bl,"/tag/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(e=>((0,n._y)(e),e.json())).catch(e=>console.log(e))},8909:function(e,t,l){"use strict";var o=l(5893);l(1664);var r=l(7294),a=l(1163),n=l(5152),s=l.n(n),i=l(1445),c=l(9049),d=l(9242),u=l(7283),h=l(3847);let p=s()(()=>Promise.all([l.e(774),l.e(937),l.e(167)]).then(l.t.bind(l,1167,23)),{loadableGenerated:{webpack:()=>[1167]},ssr:!1}),m=e=>{let{router:t}=e,[l,a]=(0,r.useState)([]),[n,s]=(0,r.useState)([]),[m,f]=(0,r.useState)([]),[b,g]=(0,r.useState)([]),[y,j]=(0,r.useState)(!!localStorage.getItem("blog")&&JSON.parse(localStorage.getItem("blog"))),[_,x]=(0,r.useState)({error:"",sizeError:"",success:"",formData:"",title:"",hidePublishButton:!1}),{error:v,sizeError:k,success:N,formData:C,title:T,hidePublishButton:w}=_,E=(0,i.ej)("token");(0,r.useEffect)(()=>{x({..._,formData:new FormData}),S(),O()},[t]);let S=()=>{(0,c.CP)().then(e=>{e.error?x({..._,error:e.error}):a(e)})},O=()=>{(0,d.NJ)().then(e=>{e.error?x({..._,error:e.error}):s(e)})},P=e=>{e.preventDefault(),console.log("ready to publishBlog"),(0,u.Vh)(C,E).then(e=>{e.error?x({..._,error:e.error,success:!1}):(x({..._,title:"",error:"",success:'A new blog titled "'.concat(e.title,'" is created')}),j(""),a([]),s([]))})},A=e=>t=>{let l="photo"===e?t.target.files[0]:t.target.value;C.set(e,l),x({..._,[e]:l,formData:C,error:""})},D=e=>{j(e),C.set("body",e),localStorage.setItem("blog",JSON.stringify(e))},z=e=>()=>{x({..._,error:""});let t=m.indexOf(e),l=[...m];-1===t?l.push(e):l.splice(t,1),console.log(l),f(l),C.set("categories",l)},G=e=>()=>{x({..._,error:""});let t=m.indexOf(e),l=[...b];-1===t?l.push(e):l.splice(t,1),console.log(l),g(l),C.set("tags",l)};return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-md-8",children:[(0,o.jsxs)("form",{onSubmit:P,children:[(0,o.jsxs)("div",{className:"mb-2",children:[(0,o.jsx)("label",{className:"form-label",children:"Title"}),(0,o.jsx)("input",{type:"text",className:"form-control",value:T,onChange:A("title")})]}),(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)(p,{modules:h.J,formats:h.$,value:y,placeholder:"Write something amazing...",onChange:D})}),(0,o.jsx)("div",{className:"d-grid",children:(0,o.jsx)("button",{type:"submit",className:"btn btn-lg btn-primary",children:"Publish"})})]}),(0,o.jsxs)("div",{className:"pt-3",children:[(0,o.jsx)("div",{className:"alert alert-danger",style:{display:v?"":"none"},children:v}),(0,o.jsx)("div",{className:"alert alert-success",style:{display:N?"":"none"},children:N})]})]}),(0,o.jsxs)("div",{className:"col-md-4",children:[(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"form-group pb-2",children:[(0,o.jsx)("h5",{children:"Featured image"}),(0,o.jsx)("hr",{}),(0,o.jsx)("small",{className:"text-muted",children:"Max size: 1 Mb"})," ",(0,o.jsxs)("label",{className:"btn btn-lg btn-outline-info",children:["Upload featured image",(0,o.jsx)("input",{onChange:A("photo"),type:"file",accept:"image/*",hidden:!0})]})]})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h5",{children:"Categories"}),(0,o.jsx)("hr",{}),(0,o.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:l&&l.map((e,t)=>(0,o.jsxs)("li",{className:"list-unstyled",children:[(0,o.jsx)("input",{onChange:z(e._id),type:"checkbox",className:"form-check-input"})," ",(0,o.jsx)("label",{className:"form-check-label",children:e.name})]},t))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h5",{children:"Tags"}),(0,o.jsx)("hr",{}),(0,o.jsx)("ul",{style:{maxHeight:"300px",overflowY:"scroll"},children:n&&n.map((e,t)=>(0,o.jsxs)("li",{className:"list-unstyled",children:[(0,o.jsx)("input",{onChange:G(e._id),type:"checkbox",className:"form-check-input"})," ",(0,o.jsx)("label",{className:"form-check-label",children:e.name})]},t))})]})]})]})};t.Z=(0,a.withRouter)(m)},3847:function(e,t,l){"use strict";l.d(t,{$:function(){return r},J:function(){return o}});let o={toolbar:[[{header:"1"},{header:"2"},{header:[3,4,5,6]},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{color:[]},{background:[]}],[{align:[]}],[{script:"super"},{script:"sub"}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["code-block"],["clean"]]},r=["header","font","size","bold","italic","underline","strike","blockquote","color","background","align","script","list","bullet","indent","link","image","video","code-block"]},5677:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=a.default,r={loading:e=>{let{error:t,isLoading:l,pastDelay:o}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=o({},r,e)),r=o({},r,t);let i=r.loader,c=()=>null!=i?i().then(n):Promise.resolve(n(()=>null));return(r.loadableGenerated&&(r=o({},r,r.loadableGenerated),delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?l(o({},r,{loader:c})):(delete r.webpack,delete r.modules,s(l,r))},t.noSSR=s;var o=l(6495).Z,r=l(2648).Z,a=(r(l(7294)),r(l(8976)));function n(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=(0,l(2648).Z)(l(7294));let r=o.default.createContext(null);t.LoadableContext=r},8976:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(6495).Z,r=(0,l(2648).Z)(l(7294)),a=l(2254);let n=[],s=[],i=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function n(){if(!o){let t=new d(e,l);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!i){let e=l.webpack?l.webpack():l.modules;e&&s.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return n()})}function c(e,t){!function(){n();let e=r.default.useContext(a.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let s=r.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),r.default.useMemo(()=>{var t;return s.loading||s.error?r.default.createElement(l.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:o.retry}):s.loaded?r.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return c.preload=()=>n(),c.displayName="LoadableComponent",r.default.forwardRef(c)}(c,e)}function h(e,t){let l=[];for(;e.length;){let o=e.pop();l.push(o(t))}return Promise.all(l).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(n).then(e,t)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(i=!0,t());h(s,e).then(l,l)})},window.__NEXT_PRELOADREADY=u.preloadReady,t.default=u},5152:function(e,t,l){e.exports=l(5677)}}]);
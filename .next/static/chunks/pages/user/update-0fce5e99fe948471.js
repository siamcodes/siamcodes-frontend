(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{8498:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/update",function(){return s(2452)}])},5822:function(e,a,s){"use strict";s.d(a,{Ai:function(){return c},Vx:function(){return i},bn:function(){return o}});var n=s(4301),r=s.n(n),t=s(5844),l=s(1445);let o=e=>r()("".concat(t.bl,"/user/").concat(e),{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.json()).catch(e=>console.log(e)),c=e=>r()("".concat(t.bl,"/user/profile"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then(e=>e.json()).catch(e=>console.log(e)),i=(e,a)=>r()("".concat(t.bl,"/user/update"),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)},body:a}).then(e=>((0,l._y)(e),e.json())).catch(e=>console.log(e))},469:function(e,a,s){"use strict";var n=s(5893),r=s(7294),t=s(1163),l=s.n(t),o=s(1445);let c=e=>{let{children:a}=e;return(0,r.useEffect)(()=>{(0,o.$D)()||l().push("/signin")},[]),(0,n.jsx)(r.Fragment,{children:a})};a.Z=c},2452:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return u}});var n=s(5893),r=s(9282),t=s(469);s(1664);var l=s(7294);s(1163);var o=s(1445),c=s(5822),i=s(5844);let d=()=>{let[e,a]=(0,l.useState)({username:"",username_for_photo:"",name:"",email:"",about:"",password:"",error:!1,success:!1,loading:!1,photo:"",userData:new FormData}),s=(0,o.ej)("token"),{username:r,username_for_photo:t,name:d,email:m,about:u,password:h,error:p,success:x,loading:j,photo:b,userData:f}=e,N=()=>{(0,c.Ai)(s).then(s=>{s.error?a({...e,error:s.error}):a({...e,username:s.username,username_for_photo:s.username,name:s.name,email:s.email,about:s.about})})};(0,l.useEffect)(()=>{N(),a({...e,userData:new FormData})},[]);let v=s=>n=>{let r="photo"===s?n.target.files[0]:n.target.value;f.set(s,r),console.log(...f),a({...e,[s]:r,userData:f,error:!1,success:!1})},g=n=>{n.preventDefault(),a({...e,loading:!0}),(0,c.Vx)(s,f).then(s=>{s.error?(console.log("data.error",s.error),a({...e,error:s.error,loading:!1})):(0,o.Nq)(s,()=>{a({...e,username:s.username,name:s.name,email:s.email,about:s.about,password:"",success:!0,loading:!1})})})};return(0,n.jsx)(l.Fragment,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)("img",{src:"".concat(i.bl,"/user/photo/").concat(r),className:"img img-fluid img-thumbnail mb-3",style:{maxHeight:"auto",maxWidth:"100%"},alt:"user profile"})}),(0,n.jsx)("div",{className:"col-md-8 mb-5",children:(0,n.jsxs)("form",{onSubmit:g,children:[(0,n.jsx)("div",{className:"mb-3",children:(0,n.jsxs)("label",{className:"btn btn-outline-info",children:["Profile photo",(0,n.jsx)("input",{onChange:v("photo"),type:"file",accept:"image/*",hidden:!0})]})}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:"Username"}),(0,n.jsx)("input",{onChange:v("username"),type:"text",value:r,className:"form-control"})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:"Name"}),(0,n.jsx)("input",{onChange:v("name"),type:"text",value:d,className:"form-control"})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:"About"}),(0,n.jsx)("textarea",{onChange:v("about"),type:"text",value:u,className:"form-control"})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{className:"form-label",children:"Password"}),(0,n.jsx)("input",{onChange:v("password"),type:"password",value:h,className:"form-control"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"alert alert-success",style:{display:x?"":"none"},children:"Profile updated"}),(0,n.jsx)("div",{className:"alert alert-danger",style:{display:p?"":"none"},children:p}),(0,n.jsx)("div",{className:"alert alert-info",style:{display:j?"":"none"},children:"Loading..."})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:!r||!d||!m,children:"Update"})})]})})]})})})},m=()=>(0,n.jsx)(r.Z,{children:(0,n.jsx)(t.Z,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(d,{})})})})});var u=m}},function(e){e.O(0,[849,978,282,774,888,179],function(){return e(e.s=8498)}),_N_E=e.O()}]);
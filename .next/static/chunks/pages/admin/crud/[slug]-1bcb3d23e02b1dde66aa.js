_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{AhMt:function(e,t,c){"use strict";var r=c("nKUr"),n=c("KQm4"),s=c("rePB"),a=(c("YFqc"),c("q1tI")),i=c("20a2"),l=c.n(i),o=c("Vvt1"),j=c.n(o),u=c("iuBY"),b=c("abxw"),d=c("SMr6"),O=c("zycw"),h=(c("91UR"),c("//g3")),f=c("WjD0");function m(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function p(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?m(Object(c),!0).forEach((function(t){Object(s.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var x=j()((function(){return Promise.all([c.e(0),c.e(11),c.e(6),c.e(12)]).then(c.t.bind(null,"rmP6",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["rmP6"]},modules:["react-quill"]}});t.a=Object(i.withRouter)((function(e){var t,c=e.router,i=Object(a.useState)(""),o=i[0],j=i[1],m=Object(a.useState)([]),g=m[0],v=m[1],y=Object(a.useState)([]),w=y[0],N=y[1],_=Object(a.useState)([]),P=_[0],D=_[1],k=Object(a.useState)([]),S=k[0],q=k[1],E=Object(a.useState)((t={title:"",error:"",success:"",formData:new f},Object(s.a)(t,"title",""),Object(s.a)(t,"body",""),t)),C=E[0],U=E[1],M=C.error,T=C.success,Y=C.formData,F=C.title,B=Object(u.c)("token");Object(a.useEffect)((function(){U(p(p({},C),{},{formData:new f})),K(),I(),W()}),[c]);var K=function(){c.query.slug&&Object(O.f)(c.query.slug).then((function(e){e.error?console.log(e.error):(U(p(p({},C),{},{title:e.title})),j(e.body),z(e.categories),G(e.tags))}))},z=function(e){var t=[];e.map((function(e,c){t.push(e._id)})),D(t)},G=function(e){var t=[];e.map((function(e,c){t.push(e._id)})),q(t)},I=function(){Object(b.b)().then((function(e){e.error?U(p(p({},C),{},{error:e.error})):v(e)}))},W=function(){Object(d.b)().then((function(e){e.error?U(p(p({},C),{},{error:e.error})):N(e)}))},A=function(e){return function(){U(p(p({},C),{},{error:""}));var t=P.indexOf(e),c=Object(n.a)(P);-1===t?c.push(e):c.splice(t,1),console.log(c),D(c),Y.set("categories",c)}},H=function(e){return function(){U(p(p({},C),{},{error:""}));var t=S.indexOf(e),c=Object(n.a)(S);-1===t?c.push(e):c.splice(t,1),console.log(c),q(c),Y.set("tags",c)}},J=function(e){return-1!==P.indexOf(e)},R=function(e){return-1!==S.indexOf(e)},X=function(e){return function(t){var c,r="photo"===e?t.target.files[0]:t.target.value;Y.set(e,r),U(p(p({},C),{},(c={},Object(s.a)(c,e,r),Object(s.a)(c,"formData",Y),Object(s.a)(c,"error",""),c)))}},Q=function(e){j(e),Y.set("body",e)},V=function(e){e.preventDefault(),Object(O.g)(Y,B,c.query.slug).then((function(e){e.error?U(p(p({},C),{},{error:e.error})):(U(p(p({},C),{},{title:"",success:'Blog titled "'.concat(e.title,'" is successfully updated')})),Object(u.e)()&&1===Object(u.e)().role?l.a.replace("/admin"):Object(u.e)()&&0===Object(u.e)().role&&l.a.replace("/user"))}))};return Object(r.jsx)("div",{className:"container-fluid pb-5",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-md-8",children:[Object(r.jsxs)("form",{onSubmit:V,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"text-muted",children:"Title"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:F,onChange:X("title")})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)(x,{modules:h.b,formats:h.a,value:o,placeholder:"Write something amazing...",onChange:Q})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})})]}),Object(r.jsxs)("div",{className:"pt-3",children:[Object(r.jsx)("div",{className:"alert alert-success",style:{display:T?"":"none"},children:T}),Object(r.jsx)("div",{className:"alert alert-danger",style:{display:M?"":"none"},children:M})]}),o&&Object(r.jsx)("img",{src:"".concat("https://arcane-shelf-33075.herokuapp.com/api","/blog/photo/").concat(c.query.slug),alt:F,style:{width:"100%"}})]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"form-group pb-2",children:[Object(r.jsx)("h5",{children:"Featured image"}),Object(r.jsx)("hr",{}),Object(r.jsx)("small",{className:"text-muted",children:"Max size: 1mb"}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{className:"btn btn-outline-info",children:["Upload featured image",Object(r.jsx)("input",{onChange:X("photo"),type:"file",accept:"image/*",hidden:!0})]})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Categories"}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:g&&g.map((function(e,t){return Object(r.jsxs)("li",{className:"list-unstyled",children:[Object(r.jsx)("input",{onChange:A(e._id),checked:J(e._id),type:"checkbox",className:"mr-2"}),Object(r.jsx)("label",{className:"form-check-label",children:e.name})]},t)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Tags"}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:w&&w.map((function(e,t){return Object(r.jsxs)("li",{className:"list-unstyled",children:[Object(r.jsx)("input",{onChange:H(e._id),checked:R(e._id),type:"checkbox",className:"mr-2"}),Object(r.jsx)("label",{className:"form-check-label",children:e.name})]},t)}))})]})]})]})})}))},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},iT7G:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/[slug]",function(){return c("we8M")}])},vC6e:function(e,t,c){"use strict";var r=c("nKUr"),n=c("q1tI"),s=c("20a2"),a=c.n(s),i=c("iuBY");t.a=function(e){var t=e.children;return Object(n.useEffect)((function(){Object(i.e)()?1!==Object(i.e)().role&&a.a.push("/"):a.a.push("/signin")}),[]),Object(r.jsx)(r.Fragment,{children:t})}},we8M:function(e,t,c){"use strict";c.r(t);var r=c("nKUr"),n=c("5Yp1"),s=c("vC6e"),a=c("AhMt");c("q1tI");t.default=function(){return Object(r.jsx)(n.a,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-12 pt-5 pb-5",children:Object(r.jsx)("h2",{children:"Update blog"})}),Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsx)(a.a,{})})]})})})})}}},[["iT7G",1,0,2,3,8,9]]]);
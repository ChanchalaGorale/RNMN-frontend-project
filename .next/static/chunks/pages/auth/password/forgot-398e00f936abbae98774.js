_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"4UE9":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/password/forgot",function(){return t("6Em+")}])},"6Em+":function(e,r,t){"use strict";t.r(r);var s=t("nKUr"),n=t("rePB"),o=t("q1tI"),c=t("5Yp1"),a=t("iuBY");function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=function(){var e=Object(o.useState)({newpassword:"",message:"",error:"",showForm:!0}),r=e[0],t=e[1],i=r.newpassword,j=r.message,u=r.error,b=r.showForm,l=function(e){e.preventDefault(),t(p(p({},r),{},{message:"",error:""})),Object(a.b)({newpassword:i}).then((function(e){e?e.error?t(p(p({},r),{},{error:e.error})):t(p(p({},r),{},{message:e.message,newpassword:"",showForm:!1})):console.log("no data recieved")}))};return Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Forgot password"}),Object(s.jsx)("hr",{}),u?Object(s.jsx)("div",{className:"alert alert-danger",children:u}):"",j?Object(s.jsx)("div",{className:"alert alert-success",children:j}):"",b&&Object(s.jsxs)("form",{onSubmit:l,children:[Object(s.jsx)("div",{className:"form-group pt-5",children:Object(s.jsx)("input",{type:"password",onChange:function(e){t(p(p({},r),{},Object(n.a)({message:"",error:""},i,e.target.value)))},className:"form-control",value:i,placeholder:"Type your new password",required:!0})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"btn btn-primary",children:"Change password"})})]})]})})}}},[["4UE9",1,0,2,3]]]);
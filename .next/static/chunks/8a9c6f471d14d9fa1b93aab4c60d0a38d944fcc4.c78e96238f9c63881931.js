(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"1w3K":function(e,t,n){"use strict";var r=s(n("Si88")),o=s(n("PAGr")),i=s(n("UnXY")),a=s(n("S3Uj"));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:a.default,TransitionGroup:i.default,ReplaceTransition:o.default,CSSTransition:r.default}},"20a2":function(e,t,n){e.exports=n("nOHt")},"5Yp1":function(e,t,n){"use strict";var r=n("nKUr"),o=n("q1tI"),i=n.n(o),a=n("YFqc"),s=n.n(a),c=n("Mj6V"),l=n.n(c),u=(n("pdi6"),n("iuBY"));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f,d=n("zLVn"),h=n("17x9"),v=n.n(h),g=n("TSYQ"),m=n.n(g);function b(e,t){return void 0===e&&(e=""),void 0===t&&(t=f),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var y="object"===typeof window&&window.Element||function(){};v.a.oneOfType([v.a.string,v.a.func,function(e,t,n){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},v.a.shape({current:v.a.any})]);var E=v.a.oneOfType([v.a.func,v.a.string,v.a.shape({$$typeof:v.a.symbol,render:v.a.func}),v.a.arrayOf(v.a.oneOfType([v.a.func,v.a.string,v.a.shape({$$typeof:v.a.symbol,render:v.a.func})]))]),x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O="entering",j="entered",C="exiting",N="exited";"undefined"===typeof window||!window.document||window.document.createElement;var S={light:v.a.bool,dark:v.a.bool,full:v.a.bool,fixed:v.a.string,sticky:v.a.string,color:v.a.string,role:v.a.string,tag:E,className:v.a.string,cssModule:v.a.object,expand:v.a.oneOfType([v.a.bool,v.a.string])},w=function(e){var t,n=e.expand,r=e.className,o=e.cssModule,a=e.light,s=e.dark,c=e.fixed,l=e.sticky,u=e.color,f=e.tag,h=Object(d.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),v=b(m()(r,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":a,"navbar-dark":s})["bg-"+u]=u,t["fixed-"+c]=c,t["sticky-"+l]=l,t)),o);return i.a.createElement(f,p({},h,{className:v}))};w.propTypes=S,w.defaultProps={tag:"nav",expand:!1};var k=w,_=n("JX7q");function T(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var M={tag:E,innerRef:v.a.oneOfType([v.a.object,v.a.func,v.a.string]),disabled:v.a.bool,active:v.a.bool,className:v.a.string,cssModule:v.a.object,onClick:v.a.func,href:v.a.any},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(_.a)(n)),n}T(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.active,o=e.tag,a=e.innerRef,s=Object(d.a)(e,["className","cssModule","active","tag","innerRef"]),c=b(m()(t,"nav-link",{disabled:s.disabled,active:r}),n);return i.a.createElement(o,p({},s,{ref:a,onClick:this.onClick,className:c}))},t}(i.a.Component);P.propTypes=M,P.defaultProps={tag:"a"};var U=P,D={tag:E,type:v.a.string,className:v.a.string,cssModule:v.a.object,children:v.a.node},R=function(e){var t=e.className,n=e.cssModule,r=e.children,o=e.tag,a=Object(d.a)(e,["className","cssModule","children","tag"]),s=b(m()(t,"navbar-toggler"),n);return i.a.createElement(o,p({"aria-label":"Toggle navigation"},a,{className:s}),r||i.a.createElement("span",{className:b("navbar-toggler-icon",n)}))};R.propTypes=D,R.defaultProps={tag:"button",type:"button"};var I,A=R,L=n("rePB"),F=n("1w3K");function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=q(q({},F.Transition.propTypes),{},{isOpen:v.a.bool,children:v.a.oneOfType([v.a.arrayOf(v.a.node),v.a.node]),tag:E,className:v.a.node,navbar:v.a.bool,cssModule:v.a.object,innerRef:v.a.oneOfType([v.a.func,v.a.string,v.a.object])}),G=q(q({},F.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:350}),V=((I={})[O]="collapsing",I[j]="collapse show",I[C]="collapsing",I[N]="collapse",I);function J(e){return e.scrollHeight}var z=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(Object(_.a)(n))})),n}T(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:J(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:J(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,r=t.isOpen,o=t.className,a=t.navbar,s=t.cssModule,c=t.children,l=(t.innerRef,Object(d.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),u=this.state.height,f=function(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,i={};o>0;)i[n=r[o-=1]]=e[n];return i}(l,x),h=function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}(l,x);return i.a.createElement(F.Transition,p({},f,{in:r,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var r=function(e){return V[e]||"collapse"}(t),l=b(m()(o,r,a&&"navbar-collapse"),s),f=null===u?null:{height:u};return i.a.createElement(n,p({},h,{style:q(q({},h.style),f),className:l,ref:e.props.innerRef}),c)}))},t}(o.Component);z.propTypes=B,z.defaultProps=G;var Y=z,X={tabs:v.a.bool,pills:v.a.bool,vertical:v.a.oneOfType([v.a.bool,v.a.string]),horizontal:v.a.string,justified:v.a.bool,fill:v.a.bool,navbar:v.a.bool,card:v.a.bool,tag:E,className:v.a.string,cssModule:v.a.object},H=function(e){var t=e.className,n=e.cssModule,r=e.tabs,o=e.pills,a=e.vertical,s=e.horizontal,c=e.justified,l=e.fill,u=e.navbar,f=e.card,h=e.tag,v=Object(d.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=b(m()(t,u?"navbar-nav":"nav",!!s&&"justify-content-"+s,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(a),{"nav-tabs":r,"card-header-tabs":f&&r,"nav-pills":o,"card-header-pills":f&&o,"nav-justified":c,"nav-fill":l}),n);return i.a.createElement(h,p({},v,{className:g}))};H.propTypes=X,H.defaultProps={tag:"ul",vertical:!1};var K=H,$={tag:E,active:v.a.bool,className:v.a.string,cssModule:v.a.object},Q=function(e){var t=e.className,n=e.cssModule,r=e.active,o=e.tag,a=Object(d.a)(e,["className","cssModule","active","tag"]),s=b(m()(t,"nav-item",!!r&&"active"),n);return i.a.createElement(o,p({},a,{className:s}))};Q.propTypes=$,Q.defaultProps={tag:"li"};var Z=Q,ee=n("20a2"),te=n.n(ee);te.a.onRouteChangeStart=function(e){return l.a.start()},te.a.onRouteChangeComplete=function(e){return l.a.done()},te.a.onRouteChangeError=function(e){return l.a.done()};var ne=function(e){var t=Object(o.useState)(!1),n=t[0],i=t[1];return Object(r.jsx)("div",{children:Object(r.jsxs)(k,{expand:"md",style:{backgroundColor:"#0c3c60 !important",color:"white",padding:"10px"},children:[Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)(U,{className:"font-weight-bold pointer ",style:{cursor:"pointer"},children:Object(r.jsx)("h3",{children:"ProgramO9"})})}),Object(r.jsx)(A,{onClick:function(){return i(!n)}}),Object(r.jsx)(Y,{isOpen:n,navbar:!0,children:Object(r.jsx)("div",{children:Object(r.jsxs)(K,{className:"ml-auto",navbar:!0,children:[Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Z,{children:Object(r.jsx)(s.a,{href:"/blogs",children:Object(r.jsx)(U,{style:{cursor:"pointer"},children:"Blogs"})})})}),!Object(u.e)()&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Z,{children:Object(r.jsx)(s.a,{href:"/signin",children:Object(r.jsx)(U,{style:{cursor:"pointer"},children:"Signin"})})}),Object(r.jsx)(Z,{children:Object(r.jsx)(s.a,{href:"/signup",children:Object(r.jsx)(U,{style:{cursor:"pointer"},children:"Signup"})})})]}),Object(u.e)()&&0===Object(u.e)().role&&Object(r.jsx)(Z,{children:Object(r.jsx)(s.a,{href:"/user",children:Object(r.jsx)(U,{style:{cursor:"pointer"},children:"".concat(Object(u.e)().name,"'s Dashboard")})})}),Object(u.e)()&&1===Object(u.e)().role&&Object(r.jsx)(Z,{children:Object(r.jsx)(s.a,{href:"/admin",children:Object(r.jsx)(U,{style:{cursor:"pointer"},children:"".concat(Object(u.e)().name,"'s Dashboard")})})}),Object(u.e)()&&Object(r.jsx)(Z,{children:Object(r.jsx)(U,{style:{cursor:"pointer"},onClick:function(){return Object(u.g)((function(){return te.a.replace("/signin")}))},children:"Signout"})}),Object(r.jsx)(Z,{children:Object(r.jsx)("a",{href:"/user/crud/blog",className:"btn btn-primary ",children:"Write a blog"})})]})})})]})})};var re=function(){return Object(r.jsx)("div",{className:"fixed-bottom",style:{textAlign:"center",fontSize:"15px",backgroundColor:"#0c3c60",color:"white"},children:Object(r.jsx)("p",{style:{fontStyle:"italic",padding:"5px"},children:"Copyright \xa9 2021, Program-O-9. All rights reserved."})})};t.a=function(e){var t=e.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ne,{}),t,Object(r.jsx)(re,{})]})}},"8PcY":function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return o(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:a(n,"appear",e),enter:a(n,"enter",e),exit:a(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=o(e.children),c=i(t,s);return Object.keys(c).forEach((function(o){var i=c[o];if((0,r.isValidElement)(i)){var l=o in t,u=o in s,p=t[o],f=(0,r.isValidElement)(p)&&!p.props.in;!u||l&&!f?u||!l||f?u&&l&&(0,r.isValidElement)(p)&&(c[o]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:p.props.in,exit:a(i,"exit",e),enter:a(i,"enter",e)})):c[o]=(0,r.cloneElement)(i,{in:!1}):c[o]=(0,r.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:a(i,"exit",e),enter:a(i,"enter",e)})}})),c};var r=n("q1tI");function o(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var s={};for(var c in t){if(o[c])for(r=0;r<o[c].length;r++){var l=o[c][r];s[o[c][r]]=n(l)}s[c]=n(c)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}function a(e,t,n){return null!=n[t]?n[t]:e.props[t]}},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},K64n:function(e,t,n){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},LpSC:function(e,t,n){n("K64n"),e.exports=self.fetch.bind(self)},Mj6V:function(e,t,n){var r,o;void 0===(o="function"===typeof(r=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}function o(e,n,o){var i;return(i="translate3d"===t.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+n+"ms "+o,i}e.configure=function(e){var n,r;for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&(t[n]=r);return this},e.status=null,e.set=function(r){var s=e.isStarted();r=n(r,t.minimum,1),e.status=1===r?null:r;var c=e.render(!s),l=c.querySelector(t.barSelector),u=t.speed,p=t.easing;return c.offsetWidth,i((function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),a(l,o(r,u,p)),1===r?(a(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){a(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),u)}),u)):setTimeout(n,u)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout((function(){e.status&&(e.trickle(),n())}),t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var r=e.status;return r?("number"!==typeof t&&(t=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+t,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always((function(){0===--n?(t=0,e.done()):e.set((t-n)/t)})),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var i,s=o.querySelector(t.barSelector),l=n?"-100":r(e.status||0),u=document.querySelector(t.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),t.showSpinner||(i=o.querySelector(t.spinnerSelector))&&p(i),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(o),o},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function r(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+i)in n)return r;return t}function o(e){return e=n(e),t[e]||(t[e]=r(e))}function i(e,t,n){t=o(t),e.style[t]=n}return function(e,t){var n,r,o=arguments;if(2==o.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&i(e,n,r);else i(e,o[1],o[2])}}();function s(e,t){return("string"==typeof e?e:u(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=u(e),r=n+t;s(n,t)||(e.className=r.substring(1))}function l(e,t){var n,r=u(e);s(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?r.call(t,n,t,e):r)||(e.exports=o)},PAGr:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;a(n("17x9"));var r=a(n("q1tI")),o=n("i8i4"),i=a(n("UnXY"));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.handleLifecycle=function(e,t,n){var i,a=this.props.children,s=r.default.Children.toArray(a)[t];s.props[e]&&(i=s.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,o.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","in"]),a=r.default.Children.toArray(t),s=a[0],c=a[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,r.default.createElement(i.default,o,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(c,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},a}(r.default.Component);s.propTypes={};var c=s;t.default=c,e.exports=t.default},S3Uj:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("17x9")),o=s(n("q1tI")),i=s(n("i8i4")),a=n("VCL8");n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}var c="unmounted";t.UNMOUNTED=c;var l="exited";t.EXITED=l;var u="entering";t.ENTERING=u;var p="entered";t.ENTERED=p;var f="exiting";t.EXITING=f;var d=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,i=n.transitionGroup,a=i&&!i.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=l,r.appearStatus=u):o=p:o=t.unmountOnExit||t.mountOnEnter?c:l,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===c?{status:l}:null},a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==u&&n!==p&&(t=u):n!==u&&n!==p||(t=f)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===u?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:c})},a.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),a=o?i.appear:i.enter;t||r?(this.props.onEnter(e,o),this.safeSetState({status:u},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,a,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(e,o)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(e)}))},a.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:f},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(e)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===c)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return n(e,r);var i=o.default.Children.only(n);return o.default.cloneElement(i,r)},r}(o.default.Component);function h(){}d.contextTypes={transitionGroup:r.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var v=(0,a.polyfill)(d);t.default=v},Si88:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n("17x9"));var r=s(n("ycFn")),o=s(n("VOcB")),i=s(n("q1tI")),a=s(n("S3Uj"));n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),l(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,i=n?r+" "+o:o;t.removeClasses(e,n?"appear":"enter"),l(e,i),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),l(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),l(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"===typeof n,o=r?(r&&n?n+"-":"")+e:n[e];return{className:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,o=n.activeClassName,i=n.doneClassName;r&&u(e,r),o&&u(e,o),i&&u(e,i)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,l(e,t))},o.render=function(){var e=c({},this.props);return delete e.classNames,i.default.createElement(a.default,c({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(i.default.Component);p.defaultProps={classNames:""},p.propTypes={};var f=p;t.default=f,e.exports=t.default},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UnXY:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n("17x9")),o=s(n("q1tI")),i=n("VCL8"),a=n("8PcY");function s(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){var t,n;function r(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(l(l(r)));return r.state={handleExited:o,firstRender:!0},r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,a.getInitialChildMapping)(e,r):(0,a.getNextChildMapping)(e,n,r),firstRender:!1}},i.handleExited=function(e,t){var n=(0,a.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=c({},t.children);return delete n[e.key],{children:n}})))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["component","childFactory"]),i=u(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i:o.default.createElement(t,r,i)},r}(o.default.Component);p.childContextTypes={transitionGroup:r.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var f=(0,i.polyfill)(p);t.default=f,e.exports=t.default},VCL8:function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var c=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return a})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},VOcB:function(e,t,n){"use strict";function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),s=n("nOHt"),c=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",p=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),f=p.href,d=p.as,h=e.children,v=e.replace,g=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=i.Children.only(h),E=y&&"object"===typeof y&&y.ref,x=(0,c.useIntersection)({rootMargin:"200px"}),O=r(x,2),j=O[0],C=O[1],N=i.default.useCallback((function(e){j(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,j]);(0,i.useEffect)((function(){var e=C&&t&&(0,a.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,o=l[f+"%"+d+(r?"%"+r:"")];e&&!o&&u(n,f,d,{locale:r})}),[d,f,C,b,t,n]);var S={ref:N,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,f,d,v,g,m,b)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var w="undefined"!==typeof b?b:n&&n.locale,k=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,w,n&&n.locales,n&&n.domainLocales);S.href=k||(0,a.addBasePath)((0,a.addLocale)(d,w,n&&n.defaultLocale))}return i.default.cloneElement(y,S)};t.default=p},iuBY:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n("LpSC"),o=n.n(r),i=n("p46w"),a=n.n(i),s="https://arcane-shelf-33075.herokuapp.com",c=function(e){401===e.status&&p((function(){Router.push({pathname:"/api/signin",query:{message:"Your session is expired. Please signin"}})}))},l=function(e){return o()("".concat(s,"/api/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=function(e){return o()("".concat(s,"/api/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},p=function(e){return f("token"),h("user"),e(),o()("".concat(s,"/api/signout"),{method:"GET"}).then((function(e){console.log("signout success")})).catch((function(e){return console.log(e)}))},f=function(e){a.a.remove(e,{expires:1})},d=function(e){return a.a.get(e)},h=function(e){localStorage.removeItem(e)},v=function(e,t){var n,r;n="token",r=e.token,a.a.set(n,r,{expires:1}),function(e,t){localStorage.setItem(e,JSON.stringify(t))}("user",e.user),t()},g=function(){if(d("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},m=function(e,t){if(localStorage.getItem("user")){var n=JSON.parse(localStorage.getItem("user"));n=e,localStorage.setItem("user",JSON.stringify(n)),t()}},b=function(e){return o()("".concat(s,"/api/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},p46w:function(e,t,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=a,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(l){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+s}}function a(e,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var s=i[a].split("="),c=s.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var l=t(s[0]);if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(u){}if(o[l]=c,e===l)break}catch(u){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},pdi6:function(e,t,n){},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),p=u[0],f=u[1],d=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||p||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,p]);return(0,o.useEffect)((function(){if(!a&&!p){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[p]),[d,p]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var s=new Map},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var r;(r=n("17x9"))&&r.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=r(n("yD6e"));e.exports=t.default},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))}}]);
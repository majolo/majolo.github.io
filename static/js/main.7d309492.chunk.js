(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=(n(11),n(12),n(5)),u=n(1),i=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],c=n[1];return r.a.createElement("form",{onSubmit:function(t){e.pushItemFunc(l),c(""),t.preventDefault()}},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:l,onChange:function(e){c(e.target.value)}})))},m=function(e){var t,n=atob(window.location.pathname.slice(1)),l=[n],c=Object(a.useState)(l),m=Object(u.a)(c,2),p=m[0],h=m[1],f=[],v=Object(o.a)(p);try{for(v.s();!(t=v.n()).done;){var d=t.value;d!=n?f.push(r.a.createElement(s,{ListItem:d})):f.push(r.a.createElement(i,{pushItemFunc:E}))}}catch(b){v.e(b)}finally{v.f()}function E(e){e==n&&alert("Congratulations you got it with "+p.length+" attempts!");var t=p.slice();t.push(e),t.sort(),t=t.filter((function(e,t,n){return t===n.indexOf(e)})),h(t)}return r.a.createElement("div",null,f)},s=function(e){return r.a.createElement("div",null,e.ListItem)},p=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){s("Share this link: "+window.location+btoa(l)),e.preventDefault()}},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:l,onChange:function(e){c(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Create Game"})),m)};var h=function(){var e=window.location.pathname.slice(1);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"The Word Game"),e.length>0&&r.a.createElement(m,null),e.length<1&&r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.7d309492.chunk.js.map
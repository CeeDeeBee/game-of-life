(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(6),r=n.n(a),l=(n(12),n(4)),i=n(1);n(13),n(14);var u=function(){var e=Object(o.useRef)(null),t=Math.floor(.9*window.innerWidth/20),n=Math.floor(.9*window.innerHeight/20),a=20*t,r=20*n,u=Object(o.useState)(new Array(t*n).fill(!1)),f=Object(i.a)(u,2),s=f[0],b=f[1],h=Object(o.useState)(null),m=Object(i.a)(h,2),v=m[0],d=m[1],g=Object(o.useState)(0),j=Object(i.a)(g,2),O=j[0],E=j[1],w=Object(o.useState)(!1),k=Object(i.a)(w,2),p=k[0],S=k[1],F=Object(o.useState)(1e3),C=Object(i.a)(F,2),y=C[0],M=C[1],R=[-(t-1),-t,-(t+1),-1,1,t-1,t,t+1];Object(o.useEffect)((function(){d(e.current.getContext("2d"))}),[]),Object(o.useEffect)((function(){v&&I()}),[v]);var I=function(){for(var e=20;e<a;e+=20)v.beginPath(),v.moveTo(e,0),v.lineTo(e,r),v.stroke();for(e=20;e<r;e+=20)v.beginPath(),v.moveTo(0,e),v.lineTo(a,e),v.stroke()},T=function(){for(var e=0;e<s.length;e++)s[e]?v.fillStyle="#000000":v.fillStyle="#FFFFFF",v.fillRect(20*Math.floor(e%t)+1,20*Math.floor(e/t)+1,18,18)},x=function(){T();for(var e=Object(l.a)(s),t=0;t<s.length;t++){for(var n=R.map((function(e){return e+t})),o=0,c=0;c<n.length;c++)s[n[c]]&&(o+=1);s[t]?2!==o&&3!==o&&(e[t]=!1):3===o&&(e[t]=!0)}b(e),E(O+1)};return function(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){p&&x()}),y),c.a.createElement("div",{className:"App"},c.a.createElement("canvas",{className:"grid",ref:e,width:a,height:r,onClick:function(n){if(!p){var o=e.current.getBoundingClientRect(),c=Math.floor((n.clientX-o.left)/20),a=Math.floor((n.clientY-o.top)/20);!function(e,t,n){s[n]?v.fillStyle="#FFFFFF":v.fillStyle="#000000",v.fillRect(e+1,t+1,18,18);var o=Object(l.a)(s);o[n]=!o[n],b(o)}(20*c,20*a,t*a+c)}}}),c.a.createElement("p",null,"Generation: ",O),c.a.createElement("button",{onClick:function(){x(),S(!0)}},"Start"),c.a.createElement("button",{onClick:function(){S(!1)}},"Stop"),c.a.createElement("button",{onClick:x},"Next"),c.a.createElement("button",{onClick:function(){v.clearRect(0,0,a,r),b(new Array(t*n).fill(!1)),E(0),S(!1),I()}},"Clear"),c.a.createElement("button",{onClick:function(){return M(y-100)}},"Increase Speed"),c.a.createElement("button",{onClick:function(){return M(y+100)}},"Decrease Speed"),c.a.createElement("button",{onClick:function(){for(var e=Object(l.a)(s),t=0;t<e.length;t++){Math.random()>.8&&(e[t]=!0)}b(e),T()}},"Random"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.71c4a761.chunk.js.map
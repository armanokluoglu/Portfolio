(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{58:function(e,t,a){"use strict";const A="ReactSnap"===navigator.userAgent;t.a=A},59:function(e,t,a){"use strict";var A=a(0),n=a(4),c=a.n(n),s=a(20),o=a.p+"static/media/gotham-bold.73ce573b.woff2",i=(a(61),a(1));t.a=({children:e,level:t=1,as:a,align:n="auto",weight:r="medium",className:l,...g})=>{const d=Math.min(Math.max(t,0),4),p=a||`h${Math.max(d,1)}`;return Object(i.jsxs)(A.Fragment,{children:["bold"===r&&Object(i.jsxs)(s.a,{children:[Object(i.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(i.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(i.jsx)(p,{className:c()(l,"heading",`heading--align-${n}`,`heading--level-${d}`,`heading--weight-${r}`),...g,children:e})]})}},60:function(e,t,a){"use strict";var A=a(4),n=a.n(A),c=(a(63),a(1));t.a=({children:e,size:t="m",as:a="p",align:A="auto",weight:s="auto",secondary:o,className:i,...r})=>Object(c.jsx)(a,{className:n()(i,"text",`text--align-${A}`,`text--size-${t}`,`text--weight-${s}`,{"text--secondary":o}),...r,children:e})},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";var A=a(0),n=a(4),c=a.n(n),s=a(10),o=a(68),i=a(23),r=a(58),l=(a(65),a(1));const g=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],d="glyph",p="value";const h=({text:e,start:t=!0,delay:a=0,className:n,...h})=>{const j=Object(A.useRef)([{type:d,value:""}]),u=Object(A.useRef)(),m=Object(s.g)();return Object(A.useEffect)((()=>{const A=u.current,n=e.split("");let c;const s=()=>{const e=j.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));A.innerHTML=e.join("")},i=Object(o.d)(0,(e=>{j.current=function(e,t,a){return e.map(((e,A)=>{if(A<a)return{type:p,value:e};if(a%1<.5){const e=Math.floor(Math.random()*g.length);return{type:d,value:g[e]}}return{type:d,value:t[A].value}}))}(n,j.current,e),s()}));return!t||c||m||r.a||(c=Object(o.a)(Object(o.b)(a),Object(o.c)({from:0,to:n.length,stiffness:8,damping:5})).start(i)),m&&(j.current=n.map(((e,t)=>({type:p,value:n[t]}))),s()),()=>{c&&c.stop()}}),[m,t,a,e]),Object(l.jsxs)("span",{className:c()("decoder-text",n),...h,children:[Object(l.jsx)(i.a,{className:"decoder-text__label",children:e}),Object(l.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:u})]})};t.a=Object(A.memo)(h)},65:function(e,t,a){},82:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a(4),c=a.n(n),s=a(57),o=a(20),i=a(22),r=a(64),l=a(59),g=a(60),d=a(21),p=a.p+"static/media/notfound.ced869d1.mp4",h=(a(82),a(1));t.default=()=>Object(h.jsxs)("section",{className:"page-404",children:[Object(h.jsxs)(o.a,{children:[Object(h.jsx)("title",{tag:"title",children:"404 | Not Found"}),Object(h.jsx)("meta",{name:"description",content:"404 page not found. This page doesn't exist"})]}),Object(h.jsx)(s.a,{appear:!0,in:!0,timeout:0,onEnter:d.b,children:e=>Object(h.jsxs)(A.Fragment,{children:[Object(h.jsx)("div",{className:"page-404__details",children:Object(h.jsxs)("div",{className:"page-404__text",children:[Object(h.jsx)(l.a,{className:c()("page-404__title",`page-404__title--${e}`),level:0,children:"404"}),Object(h.jsx)(l.a,{"aria-hidden":!0,className:c()("page-404__subheading",`page-404__subheading--${e}`),as:"h2",level:3,children:Object(h.jsx)(r.a,{text:"Error: Redacted",start:"exited"!==e,delay:300})}),Object(h.jsx)(g.a,{className:c()("page-404__description",`page-404__description--${e}`),children:"This page could not be found. It either doesn\u2019t exist or was deleted."}),Object(h.jsx)(i.a,{secondary:!0,iconHoverShift:!0,className:c()("page-404__button",`page-404__button--${e}`),href:"/",icon:"chevronRight",children:"Back to homepage"})]})}),Object(h.jsxs)("div",{className:c()("page-404__video-container",`page-404__video-container--${e}`),children:[Object(h.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:c()("page-404__video",`page-404__video--${e}`),poster:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAoADIDAREAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAAAAQFBgECAwcK/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQBAwUGAv/aAAwDAQACEAMQAAAA8/4AXvY5WLXfrGftgAAAXPV5uvI7EbQ4ABvPm97HLcUe6lmb+ZFKmNYmQuU7F3OOil364jsI0tp1MaR6euWWrtmGc9GppGlnBIH/xAApEAABAwMBCAEFAAAAAAAAAAABAgMEAAURBgcQEhMUISIyICQxQWGR/9oACAEBAAE/AN2znSNqlM9Vc0BRV6g1tFhwLfcTGhsBI/XxT2qz35EGzpKVELSPGtRXR+5yi6/9/gww9KdDDCCpROEgVozYTqLULZmThyGkpz5VcNLtW5qRFQ6FdOf7Sj1EzBT+alwkFZKDinGlNe27Tc42y5JnBAUWzmoe2qZJiGLx8A4cYFXR0vWw3ND2eYrzFSkRIX1Lae6hUmTkcwHvTrynVZVuZjdPCL5PtUV0pcNTL0UW5MVCu1SJJeh4J70VEjG//8QAIBEAAgICAQUBAAAAAAAAAAAAAQIAEQMEEgUQICFRMv/aAAgBAgEBPwDtoayMLabyoj0vlizBMUz5Dkaz4KCxoTV6Pmzjk3oR9cICPk/TRkhFdtduD8ovVWKkTIbx8/sYIvuFoTfYLSXENGNlpKELcl8P/8QAJBEAAgICAQMEAwAAAAAAAAAAAgMAAQQSEQUQMQYgIlETIUH/2gAIAQMBAT8A7dY6g8C1XOisc5Ox37n4ltyL+phIFC+B9hGIDtc6l6qw8O9A+VxGcTrErrzK+C4pl8fuCVF2zFU5Fh9w/TKgZt5mOOrvxXXiLtjORuLD+QR1rtZ7s1qGPIxWNy2yuLDVk47/AP/Z",children:Object(h.jsx)("source",{src:p,type:"video/mp4"})}),Object(h.jsx)("a",{className:c()("page-404__credit",`page-404__credit--${e}`),href:"https://twitter.com/ruinergame",target:"_blank",rel:"noopener noreferrer",children:"Animation from Ruiner"})]})]})})]})}}]);
//# sourceMappingURL=7.d9854554.chunk.js.map
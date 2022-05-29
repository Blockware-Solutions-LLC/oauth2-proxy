"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8500],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9048:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"security",title:"Security"},u=void 0,l={unversionedId:"community/security",id:"version-7.3.x/community/security",title:"Security",description:"OAuth2 Proxy is a community project.",source:"@site/versioned_docs/version-7.3.x/community/security.md",sourceDirName:"community",slug:"/community/security",permalink:"/oauth2-proxy/docs/community/security",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.3.x/community/security.md",tags:[],version:"7.3.x",frontMatter:{id:"security",title:"Security"},sidebar:"docs",previous:{title:"Endpoints",permalink:"/oauth2-proxy/docs/features/endpoints"}},c=[{value:"Security Disclosures",id:"security-disclosures",children:[{value:"How will we respond to disclosures?",id:"how-will-we-respond-to-disclosures",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"OAuth2 Proxy is a community project.\nMaintainers do not work on this project full time, and as such,\nwhile we endeavour to respond to disclosures as quickly as possible,\nthis may take longer than in projects with corporate sponsorship."))),(0,o.kt)("h2",{id:"security-disclosures"},"Security Disclosures"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you believe you have found a vulnerability within OAuth2 Proxy or any of its\ndependencies, please do NOT open an issue or PR on GitHub, please do NOT post\nany details publicly."))),(0,o.kt)("p",null,"Security disclosures MUST be done in private.\nIf you have found an issue that you would like to bring to the attention of the\nmaintenance team for OAuth2 Proxy, please compose an email and send it to the\nlist of maintainers in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy/blob/master/MAINTAINERS"},"MAINTAINERS")," file."),(0,o.kt)("p",null,"Please include as much detail as possible.\nIdeally, your disclosure should include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A reproducible case that can be used to demonstrate the exploit"),(0,o.kt)("li",{parentName:"ul"},"How you discovered this vulnerability"),(0,o.kt)("li",{parentName:"ul"},"A potential fix for the issue (if you have thought of one)"),(0,o.kt)("li",{parentName:"ul"},"Versions affected (if not present in master)"),(0,o.kt)("li",{parentName:"ul"},"Your GitHub ID")),(0,o.kt)("h3",{id:"how-will-we-respond-to-disclosures"},"How will we respond to disclosures?"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/managing-security-vulnerabilities/about-github-security-advisories"},"GitHub Security Advisories"),"\nto privately discuss fixes for disclosed vulnerabilities.\nIf you include a GitHub ID with your disclosure we will add you as a collaborator\nfor the advisory so that you can join the discussion and validate any fixes\nwe may propose."),(0,o.kt)("p",null,"For minor issues and previously disclosed vulnerabilities (typically for\ndependencies), we may use regular PRs for fixes and forego the security advisory."),(0,o.kt)("p",null,"Once a fix has been agreed upon, we will merge the fix and create a new release.\nIf we have multiple security issues in flight simultaneously, we may delay\nmerging fixes until all patches are ready.\nWe may also backport the fix to previous releases,\nbut this will be at the discretion of the maintainers."))}p.isMDXComponent=!0}}]);
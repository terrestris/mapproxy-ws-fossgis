"use strict";(self.webpackChunkmapproxy_ws=self.webpackChunkmapproxy_ws||[]).push([[152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={id:"tips",title:"Praxistipps",sidebar_position:4,sidebar_label:"Praxistipps"},o="Praxistipps",p={unversionedId:"practical_tips/tips",id:"practical_tips/tips",title:"Praxistipps",description:"1. Verwenden Sie MultiMapproxy und lagern Sie globale Konfiguration in eine base.yaml aus.",source:"@site/docs/practical_tips/README.md",sourceDirName:"practical_tips",slug:"/practical_tips/",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/practical_tips/",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"tips",title:"Praxistipps",sidebar_position:4,sidebar_label:"Praxistipps"},sidebar:"tutorialSidebar",previous:{title:"Seeding",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/exercises/seeding"}},l={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"praxistipps"},"Praxistipps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verwenden Sie ",(0,i.kt)("inlineCode",{parentName:"li"},"MultiMapproxy")," und lagern Sie globale Konfiguration in eine ",(0,i.kt)("inlineCode",{parentName:"li"},"base.yaml")," aus."),(0,i.kt)("li",{parentName:"ol"},"Verhindern Sie unn\xf6tige Reprojektionen und halten Sie den Cache nur in einer Projektion vor, dies ist meist ausreichend."),(0,i.kt)("li",{parentName:"ol"},"Richten Sie einen Test-Server ein."),(0,i.kt)("li",{parentName:"ol"},"Machen Sie sich mit den MapProxy Docker-Images vertraut."),(0,i.kt)("li",{parentName:"ol"},"Regelm\xe4\xdfige Updates."),(0,i.kt)("li",{parentName:"ol"},"Nutzen Sie ",(0,i.kt)("inlineCode",{parentName:"li"},"SQLITE")," oder andere Datenbank Cache-Formate."),(0,i.kt)("li",{parentName:"ol"},"Nutzen Sie zur Analyse f\xfcr Scales/Resolutions die debug source:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"sources:\n    debug:\n        type: debug\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Verwenden Sie entsprechende ",(0,i.kt)("inlineCode",{parentName:"li"},"cronjobs")," f\xfcr regelm\xe4\xdfige Seeding und Cleanup Tasks."),(0,i.kt)("li",{parentName:"ol"},"Bei gr\xf6\xdferen Seed Aufgaben kann ein ",(0,i.kt)("inlineCode",{parentName:"li"},"--progress-file")," von Nutzen sein.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmapproxy_ws=self.webpackChunkmapproxy_ws||[]).push([[97],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"intro",title:"Einleitung",description:"Einleitung MapProxy Workshop",sidebar_position:1,sidebar_label:"Einleitung"},o="Einleitung",l={unversionedId:"introduction/intro",id:"introduction/intro",title:"Einleitung",description:"Einleitung MapProxy Workshop",source:"@site/docs/introduction/README.md",sourceDirName:"introduction",slug:"/introduction/",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/introduction/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Einleitung",description:"Einleitung MapProxy Workshop",sidebar_position:1,sidebar_label:"Einleitung"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/MapProxy_Workshop_Praxiseinsatz/docs/introduction/installation"}},p={},u=[{value:"Was ist MapProxy?",id:"was-ist-mapproxy",level:2},{value:"Was kann MapProxy?",id:"was-kann-mapproxy",level:2},{value:"Wer entwickelt MapProxy?",id:"wer-entwickelt-mapproxy",level:2},{value:"Wie bekomme ich Support f\xfcr die Software?",id:"wie-bekomme-ich-support-f\xfcr-die-software",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"einleitung"},"Einleitung"),(0,i.kt)("h2",{id:"was-ist-mapproxy"},"Was ist MapProxy?"),(0,i.kt)("p",null,"MapProxy ist eine quelloffene, performante und funktionsreiche Software-L\xf6sung zum Beschleunigen, Cachen, Weiterleiten und Absichern von Diensten. Gestartet in 2008 von der Firma ",(0,i.kt)("a",{parentName:"p",href:"https://www.omniscale.de"},"Omniscale"),", hat sich MapProxy zu einem viel genutzten, etablierten OS Geo Tool entwickelt, das in vielen Geodateninfrastrukturen zum festen Bestandteil geworden ist. MapProxy ist in Python geschrieben und folglich OS-unabh\xe4ngig, es werden verschiedene Python-Bibliotheken ben\xf6tigt (bspw. f\xfcr die Projizierung und Bildprozessierung)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Entwickelt in"),(0,i.kt)("th",{parentName:"tr",align:null},"Python"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"L\xe4uft auf"),(0,i.kt)("td",{parentName:"tr",align:null},"Linux/Unix, Windows, Docker")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lizenz"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache Software Licence 2.0")))),(0,i.kt)("h2",{id:"was-kann-mapproxy"},"Was kann MapProxy?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vorhandene Dienste Cachen in den unterschiedlichsten Formaten"),(0,i.kt)("li",{parentName:"ul"},"Dienste kombinieren"),(0,i.kt)("li",{parentName:"ul"},"Dienste absichern"),(0,i.kt)("li",{parentName:"ul"},"Reprojizieren"),(0,i.kt)("li",{parentName:"ul"},"Ma\xdfstabskonfigurationen"),(0,i.kt)("li",{parentName:"ul"},"Clipping (Dienste auf Masken zuschneiden, Union, Difference, Intersection)"),(0,i.kt)("li",{parentName:"ul"},"Bildoptimierende Prozessierungen"),(0,i.kt)("li",{parentName:"ul"},"Wasserzeichen"),(0,i.kt)("li",{parentName:"ul"},"Kaskadieren von GetFeatureInfo-Requests"),(0,i.kt)("li",{parentName:"ul"},"Individuelles Planen/Managen Erstellen von Caches"),(0,i.kt)("li",{parentName:"ul"},"Nachtr\xe4gliche Bildbearbeitung (z.B. Kanalkombinationen, Composites, Graustufen)"),(0,i.kt)("li",{parentName:"ul"},"HQ / Retina Kacheln erzeugen")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Konfig-\xdcberblick.png",src:n(3047).Z,width:"560",height:"243"})),(0,i.kt)("h2",{id:"wer-entwickelt-mapproxy"},"Wer entwickelt MapProxy?"),(0,i.kt)("p",null,"Ein internationales Team von Entwicklern - jeder ist willkommen zur Weiterentwicklung beizutragen. Die Diskussion f\xfcr neue Features l\xe4uft \xfcber die ",(0,i.kt)("a",{parentName:"p",href:"https://mapproxy.org/support"},"Mailingliste")," und direkt im ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapproxy"},"github Repository"),"."),(0,i.kt)("h2",{id:"wie-bekomme-ich-support-f\xfcr-die-software"},"Wie bekomme ich Support f\xfcr die Software?"),(0,i.kt)("p",null,"Es gibt verschiedene Wege Support f\xfcr MapProxy zu bekommen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nutzung der Mailingliste (Archiv oder neues Problem schildern)"),(0,i.kt)("li",{parentName:"ul"},"Github"),(0,i.kt)("li",{parentName:"ul"},"Stackoverflow"),(0,i.kt)("li",{parentName:"ul"},"Support-Dienstleistung von GIS-Firma beziehen")))}m.isMDXComponent=!0},3047:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mapproxy-overview-e78345e46c3a9508f09f54c818899cef.png"}}]);
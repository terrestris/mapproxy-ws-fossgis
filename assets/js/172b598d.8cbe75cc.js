"use strict";(self.webpackChunkmapproxy_ws=self.webpackChunkmapproxy_ws||[]).push([[457],{7207:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"introduction/multimapproxy","title":"MultiMapProxy","description":"Ein MapProxy, mehrere Dienste","source":"@site/docs/introduction/multimapproxy.md","sourceDirName":"introduction","slug":"/introduction/multimapproxy","permalink":"/MapProxy_Workshop_Praxiseinsatz/docs/introduction/multimapproxy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Grids","permalink":"/MapProxy_Workshop_Praxiseinsatz/docs/introduction/grids"},"next":{"title":"Konfiguration","permalink":"/MapProxy_Workshop_Praxiseinsatz/docs/config/"}}');var o=r(4848),t=r(8453);const s={},a="MultiMapProxy",l={},p=[{value:"Ein MapProxy, mehrere Dienste",id:"ein-mapproxy-mehrere-dienste",level:2},{value:"Anwendungsfall:",id:"anwendungsfall",level:3},{value:"Vorteile:",id:"vorteile",level:3}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"multimapproxy",children:"MultiMapProxy"})}),"\n",(0,o.jsx)(n.h2,{id:"ein-mapproxy-mehrere-dienste",children:"Ein MapProxy, mehrere Dienste"}),"\n",(0,o.jsx)(n.h3,{id:"anwendungsfall",children:"Anwendungsfall:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Gro\xdfe Anzahl an Layern aus unterschiedlichen Themen (z.B. DOP, Historische Karten, Verkehr, Basemaps etc.)"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"vorteile",children:"Vorteile:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\xdcbersichtlicher (Aufteilung in mehrere Konfigurationsdateien)"}),"\n",(0,o.jsx)(n.li,{children:"Wartbarkeit"}),"\n",(0,o.jsxs)(n.li,{children:["Vererbeung von Konfigurationsbl\xf6cken (",(0,o.jsx)(n.code,{children:"globals"}),", ",(0,o.jsx)(n.code,{children:"grids"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"projects/dop.yaml \u279d mapproxy/dop/service?"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.code,{children:"projects/basiskarten.yaml \u279d mapproxy/basiskarten/service?"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"# WSGI module for use with Apache mod_wsgi or uwsgi \n# # uncomment the following lines for logging\n# # create a log.ini with `mapproxy-util create -t log-ini`\nfrom logging.config import fileConfig\nimport os.path\nfileConfig(r'/opt/mapproxy/log.ini', {'here': os.path.dirname(__file__)})\n\nfrom mapproxy.multiapp import make_wsgi_app\napplication = make_wsgi_app('/opt/mapproxy/projects', allow_listing=True)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var i=r(6540);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkmapproxy_ws=self.webpackChunkmapproxy_ws||[]).push([[747],{7895:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"exercises/setup","title":"Setup","description":"Aufgabe 1","source":"@site/docs/exercises/01-setup.md","sourceDirName":"exercises","slug":"/exercises/setup","permalink":"/mapproxy-ws-fossgis/docs/exercises/setup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\xdcbungsaufgaben","permalink":"/mapproxy-ws-fossgis/docs/exercises/"},"next":{"title":"Sources","permalink":"/mapproxy-ws-fossgis/docs/exercises/sources"}}');var s=r(4848),a=r(8453);const d={},t="Setup",l={},o=[{value:"Aufgabe 1",id:"aufgabe-1",level:2},{value:"Aufgabe 2",id:"aufgabe-2",level:2},{value:"Aufgabe 3",id:"aufgabe-3",level:2},{value:"Aufgabe 4",id:"aufgabe-4",level:2},{value:"Aufgabe 5",id:"aufgabe-5",level:2},{value:"Aufgabe 6",id:"aufgabe-6",level:2},{value:"Aufgabe 7",id:"aufgabe-7",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"setup",children:"Setup"})}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-1",children:"Aufgabe 1"}),"\n",(0,s.jsx)(n.p,{children:"\xd6ffnen Sie das Terminal (Strg+Alt+T) und \xfcberpr\xfcfen Sie ihre MapProxy-Version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mapproxy-util --version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Auf der OS Geo LIVE 15 ist MapProxy in der Version 1.15.1 installiert. Infos \xfcber neue Features oder \xc4nderungen in neuen Versionen sind im jeweiligen ",(0,s.jsx)(n.a,{href:"https://mapproxy.org/blog/new-mapproxy-1.15.1-release/",children:"Blog-Eintrag"})," oder direkt im ",(0,s.jsx)(n.a,{href:"https://github.com/mapproxy/mapproxy/blob/master/CHANGES.txt",children:"Changelog"})," zu finden."]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-2",children:"Aufgabe 2"}),"\n",(0,s.jsxs)(n.p,{children:["Erstellen Sie eine Basis-Konfiguration in dem Ordner ",(0,s.jsx)(n.code,{children:"mapproxy-ws"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mapproxy-util create -t base-config mapproxy-ws\n"})}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-3",children:"Aufgabe 3"}),"\n",(0,s.jsxs)(n.p,{children:["Navigieren Sie in den neu erstellen Ordner (",(0,s.jsx)(n.code,{children:"cd mapproxy-ws"}),") und betrachten Sie die Dateien (z.B. mit ",(0,s.jsx)(n.code,{children:"ls -lah"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["In diesem Workshop werden wir haupts\xe4chlich die Dateien ",(0,s.jsx)(n.code,{children:"mapproxy.yaml"})," und ",(0,s.jsx)(n.code,{children:"seed.yaml"})," arbeiten. Sie enthalten eine Beispiel-Konfiguration, die zun\xe4chst auf der MapProxy-Demo Seite betrachtet werden kann."]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-4",children:"Aufgabe 4"}),"\n",(0,s.jsxs)(n.p,{children:["\xd6ffnen Sie den Text-Editor FeatherPad und blenden Sie die Linenumbers ein (Strg+L). Zudem k\xf6nnen die einzelnen whitespaces eingeblendet werden, dies kann bei der Konfiguration helfen, ist aber Geschmackssache (",(0,s.jsx)(n.em,{children:"Preferences"})," -> ",(0,s.jsx)(n.em,{children:"Text"})," -> ",(0,s.jsx)(n.em,{children:"Show whitespaces"}),").",(0,s.jsx)(n.br,{}),"\n","\xd6ffnen Sie zun\xe4chst die zuvor erstellte ",(0,s.jsx)(n.code,{children:"mapproxy.yaml"})," und lassen Sie den Editor ge\xf6ffnet."]}),"\n",(0,s.jsx)(n.p,{children:"\u26a0\ufe0f Der Standard Layer muss ausgetauscht werden, damit man initial etwas sieht."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Bearbeiten Sie die ",(0,s.jsx)(n.code,{children:"mapproxy.yml"})]}),"\n",(0,s.jsxs)(n.li,{children:["Ersetzen Sie im Block ",(0,s.jsx)(n.code,{children:"sources --\x3e osm-wms --\x3e req"})," die folgenden Zeilen:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"      url: https://ows.terrestris.de/osm/service\n      layers: OSM-WMS\n"})}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-5",children:"Aufgabe 5"}),"\n",(0,s.jsx)(n.p,{children:"Starten Sie den MapProxy-Server mit dem folgenden Befehl:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mapproxy-util serve-develop -b 8081 mapproxy.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sollte der Port bereits belegt sein, \xe4ndern sie den Parameter -b (",(0,s.jsx)(n.code,{children:"--bind"}),") auf einen freien Port."]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-6",children:"Aufgabe 6"}),"\n",(0,s.jsx)(n.p,{children:"Rufe Sie die MapProxy Demo Seite anschlie\xdfend im Browser auf."}),"\n",(0,s.jsxs)(n.p,{children:["Die Demo Seite ist n\xfctzlich, um rasch \xc4nderungen in der Konfiguration zu \xfcberpr\xfcfen, ist aber nicht f\xfcr den Produktivbetrieb notwendig. Hier werden s\xe4mtliche konfigurierte Dienste und Layer des MapProxys aufgelistet.",(0,s.jsx)(n.br,{}),"\n","Deaktivieren Sie zu Demo-Zwecken die TMS und WMTS Endpunkte und \xfcberpr\xfcfen Sie das Ergebnis auf der Demo Seite."]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Tipp"}),(0,s.jsxs)(n.p,{children:["Sie k\xf6nnen die Endpunkte im ",(0,s.jsx)(n.code,{children:"services"})," Block der ",(0,s.jsx)(n.code,{children:"mapproxy.yaml"})," ausschalten."]})]}),"\n",(0,s.jsx)(n.h2,{id:"aufgabe-7",children:"Aufgabe 7"}),"\n",(0,s.jsx)(n.p,{children:"Neben der MapProxy Demo, werden wir in diesem Workshop QGIS benutzen, um uns die MapProxy Layer anzuschauen. \xd6ffnen Sie QGIS und f\xfcgen Sie den MapProxy WMS Dienst als WMS/WMTS Verbindung hinzu."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Tipp"}),(0,s.jsxs)(n.p,{children:["Datenquellenverwaltung -> Neue WMS/WMTS Quelle -> ",(0,s.jsx)(n.a,{href:"http://localhost:8081/service",children:"http://localhost:8081/service"})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var i=r(6540);const s={},a=i.createContext(s);function d(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
(this["webpackJsonpapp-fetch-data"]=this["webpackJsonpapp-fetch-data"]||[]).push([[0],{28:function(e,t,a){e.exports=a(54)},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),l=(a(33),a(34),a(6)),o=a.n(l),s=a(8),u=a(11),m=a(23),p=a(24),h=a(25),d=a.n(h),f=function(){function e(t,a){Object(m.a)(this,e),this.api_url=t,this.api_endpoint=a,this.http=d.a.create({baseURL:t})}return Object(p.a)(e,[{key:"$get",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",this.http.get(this.api_endpoint,{params:t}).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),E=a(12),v=a(7),b=a(10),w=a(9),g=a(26),y=a(27);a(53);function j(e){var t=e.users,a=e.loading,n=e.onLoadUsers;return r.a.createElement("div",{className:"App"},r.a.createElement(k,null,r.a.createElement(g.a,{className:"my-0"},r.a.createElement("h1",null,"Fetch Data From API"),r.a.createElement("p",null,"This application fetches data from a public API using axios library and displays it with React Bootstrap components."),r.a.createElement("p",null,r.a.createElement(E.a,{variant:"primary",onClick:function(){return n()}},"Reload Data")))),r.a.createElement(w.a,{className:"section"},r.a.createElement(y.a,null,a&&r.a.createElement(b.a,{xs:"12",md:"6",lg:"4"},r.a.createElement("p",null,"Loading...")),!a&&t.map((function(e){return r.a.createElement(b.a,{xs:"12",md:"6",lg:"4",key:e.id},r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,e.name),r.a.createElement(v.a.Text,null,"E-mail: ",e.email,r.a.createElement("br",null),"Catch Phrase: ",e.catchPhrase),r.a.createElement(E.a,{variant:"primary"},"Go somewhere"))))})))))}function k(e){return r.a.createElement("div",{className:"wide-section"},r.a.createElement(w.a,null,e.children))}var O=new f("https://jsonplaceholder.typicode.com","users");function x(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),l=Object(u.a)(i,2),m=l[0],p=l[1];function h(){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.t0=p,e.next=4,O.$get();case 4:e.t1=e.sent,(0,e.t0)(e.t1),c(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){h()}),[]),r.a.createElement(j,{users:m,loading:a,onLoadUsers:h})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.05c8e905.chunk.js.map
(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=n(1),u=n(5),l=n.n(u),i=n(6),m=n(9),b="https://jsonplaceholder.typicode.com",f=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/todos")).then((function(e){return e.json()}));case 2:return t=e.sent,e.next=5,fetch("".concat(b,"/users")).then((function(e){return e.json()}));case 5:return n=e.sent,a=t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:n.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=(n(16),n(2)),d=function(e){var t=e.handleSort;return r.a.createElement("div",{className:"sort-panel"},r.a.createElement("button",{type:"button",className:"waves-effect waves-light btn mgb20",onClick:function(){return t("title")}},"Sort by title"),r.a.createElement("button",{type:"button",className:"waves-effect waves-light btn mgb20",onClick:function(){return t("status")}},"Sort by status"),r.a.createElement("button",{type:"button",className:"waves-effect waves-light btn mgb20",onClick:function(){return t("name")}},"Sort by name"))},j=function(e){var t=e.todos,n=Object(a.useState)(Object(p.a)(t)),c=Object(s.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)(0),i=Object(s.a)(l,2),m=i[0],b=i[1],f=Object(a.useState)(0),j=Object(s.a)(f,2),O=j[0],h=j[1],E=Object(a.useState)(0),g=Object(s.a)(E,2),v=g[0],N=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{handleSort:function(e){"title"===e&&(1===m?(u((function(e){return Object(p.a)(e).sort((function(e,t){return t.title.localeCompare(e.title)}))})),b(0)):(u((function(e){return Object(p.a)(e).sort((function(e,t){return e.title.localeCompare(t.title)}))})),b(1))),"status"===e&&(1===v?(u((function(e){return Object(p.a)(e).sort((function(e,t){return Number(t.completed)-Number(e.completed)}))})),N(0)):(u((function(e){return Object(p.a)(e).sort((function(e,t){return Number(e.completed)-Number(t.completed)}))})),N(1))),"name"===e&&(1===O?(u((function(e){return Object(p.a)(e).sort((function(e,t){return t.user.name.localeCompare(e.user.name)}))})),h(0)):(u((function(e){return Object(p.a)(e).sort((function(e,t){return e.user.name.localeCompare(t.user.name)}))})),h(1)))}}),r.a.createElement("ul",{className:"collection"},o.map((function(e){var t=e.id,n=e.title,a=e.completed,c=e.user;return r.a.createElement("li",{key:t,className:"collection-item avatar"},r.a.createElement("img",{src:"https://materializecss.com/images/yuna.jpg",alt:"",className:"circle"}),r.a.createElement("span",{className:"title"},c.name),r.a.createElement("p",null,n),r.a.createElement("i",{className:"secondary-content"},a?r.a.createElement("i",{className:"material-icons color-green"},"Completed"):r.a.createElement("i",{className:"material-icons color-red"},"In Process")))}))))},O=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(s.a)(o,2),l=u[0],i=u[1],m=Object(a.useState)(!1),b=Object(s.a)(m,2),p=b[0],d=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Dynamic list of TODOs"),!l&&!p&&r.a.createElement("p",{className:"waves-effect waves-light btn-large mgb20",onClick:function(){i(!0),f().then((function(e){return c(e)})),i(!1),d(!0)}},"load todos"),l&&r.a.createElement("p",null,"Loading...")),p&&n.length>0&&r.a.createElement(j,{todos:n}))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.64ccac89.chunk.js.map
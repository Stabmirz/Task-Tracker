(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),d=n(2),l=n(0),u=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(l.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.showAdd,r=e.onAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{color:n?"red":"green",text:n?"Close":"Add",onClick:r})]})};b.defaultProps={title:"Task Manager"};var h=b,O=n(8);var m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text," ",Object(l.jsx)(O.a,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]}),Object(l.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(m,{task:e,onDelete:n,onToggle:r},e.id)}))})};var f=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(""),i=Object(d.a)(s,2),u=i[0],j=i[1],b=Object(r.useState)(!1),h=Object(d.a)(b,2),O=h[0],m=h[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a||alert("Please add a Task"),t({text:a,day:u,reminder:O}),o(""),j(""),m(!1)},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Add Task"}),Object(l.jsx)("input",{type:"text",placeholder:"Add task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day & Time"}),Object(l.jsx)("input",{type:"text",placeholder:"Add day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",checked:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",className:"btn btn-block",value:"Save Task"})]})};var p=function(){var e=Object(r.useState)([{id:1,text:"Food Shopping",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Cloth Shopping",day:"Feb 6th at 2:30pm",reminder:!1},{id:3,text:"Groceries Shopping",day:"Feb 7th at 2:30pm",reminder:!0}]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),o=Object(d.a)(a,2),u=o[0],j=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{title:"Task Manager",showAdd:u,onAdd:function(){return j(!u)}}),u&&Object(l.jsx)(f,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,r=Object(i.a)({id:t},e);c((function(){return[].concat(Object(s.a)(n),[r])}))}}),n.length>0?Object(l.jsx)(x,{tasks:n,onDelete:function(e){c(n.filter((function(t){return t.id!==e})))},onToggle:function(e){c(n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Task To Show"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.c3e42d08.chunk.js.map
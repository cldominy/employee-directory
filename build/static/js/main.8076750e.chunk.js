(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{49:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),r=s(18),a=s.n(r),l=s(19),i=s(20),o=s(23),j=s(22),h=s(21),b=s.n(h),d={getRandomPeople:function(){return b.a.get("https://randomuser.me/api/?results=50")}};var m=function(e){return Object(c.jsx)("div",{className:"row",style:e.style,children:e.children})};var u=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(c.jsx)("div",{className:t,children:e.children})};var O=function(e){var t=e.employees;return Object(c.jsx)(m,{children:Object(c.jsx)(u,{size:"md-12",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Picture"}),Object(c.jsx)("th",{scope:"col",children:"First"}),Object(c.jsx)("th",{scope:"col",children:"Last"}),Object(c.jsx)("th",{scope:"col",children:"Phone Number"}),Object(c.jsx)("th",{scope:"col",children:"Email"})]})}),Object(c.jsx)("tbody",{children:t.length>0?t.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:"Employee Thumbnail"})}),Object(c.jsx)("td",{children:e.name.first}),Object(c.jsx)("td",{children:e.name.last}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email})]},e.login.uuid)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",children:"1"}),Object(c.jsx)("td",{children:"Mark"}),Object(c.jsx)("td",{children:"Otto"}),Object(c.jsx)("td",{children:"@mdo"}),Object(c.jsx)("td",{children:"@mdo"})]})})]})})})};var p=function(e){var t=e.searchChange;return Object(c.jsx)(m,{children:Object(c.jsx)(u,{size:"md-6",children:Object(c.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by last name","aria-label":"Search",onChange:t})})})};var x=function(e){var t=e.searchChange;return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(c.jsx)("p",{className:"lead",children:"Filter for an employee by last name or sort through employees by alpha"}),Object(c.jsx)(p,{searchChange:t})]})})})},f=s(4),y=s(5);var v=function(e){var t=e.firstAsc,s=e.firstDesc,n=e.lastAsc,r=e.lastDesc;return Object(c.jsxs)(m,{style:{textAlign:"center",marginBottom:25},children:[Object(c.jsx)(u,{size:"md-3",children:Object(c.jsxs)("button",{onClick:t,type:"button",className:"btn btn-success primary",children:[Object(c.jsx)(f.a,{icon:y.b})," First Name"]})}),Object(c.jsx)(u,{size:"md-3",children:Object(c.jsxs)("button",{onClick:s,type:"button",className:"btn btn-danger large",children:[Object(c.jsx)(f.a,{icon:y.a})," First Name"]})}),Object(c.jsx)(u,{size:"md-3",children:Object(c.jsxs)("button",{onClick:n,type:"button",className:"btn btn-success large",children:[Object(c.jsx)(f.a,{icon:y.b})," Last Name"]})}),Object(c.jsx)(u,{size:"md-3",children:Object(c.jsxs)("button",{onClick:r,type:"button",className:"btn btn-danger large",children:[Object(c.jsx)(f.a,{icon:y.a})," Last Name"]})})]})};var g=function(e){return Object(c.jsx)("div",{className:"container",style:e.style,children:e.children})},C=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],search:""},e.searchChange=function(t){e.setState({search:t.target.value})},e.firstAsc=function(){var t=e.state.employees.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));e.setState({employees:t})},e.firstDesc=function(){var t=e.state.employees.sort((function(e,t){return t.name.first.localeCompare(e.name.first)}));e.setState({employees:t})},e.lastAsc=function(){var t=e.state.employees.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}));e.setState({employees:t})},e.lastDesc=function(){var t=e.state.employees.sort((function(e,t){return t.name.last.localeCompare(e.name.last)}));e.setState({employees:t})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;d.getRandomPeople().then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){var e=this.state,t=e.employees,s=e.search,n=t.filter((function(e){return e.name.last.toLowerCase().includes(s.toLowerCase())}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(g,{children:[Object(c.jsx)(x,{searchChange:this.searchChange}),Object(c.jsx)(v,{firstAsc:this.firstAsc,firstDesc:this.firstDesc,lastAsc:this.lastAsc,lastDesc:this.lastDesc}),Object(c.jsx)(O,{employees:n})]})})}}]),s}(n.Component),N=function(){return Object(c.jsx)(C,{})};s(49),s(50);a.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8076750e.chunk.js.map
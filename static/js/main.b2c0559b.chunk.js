(this.webpackJsonpemail_app=this.webpackJsonpemail_app||[]).push([[0],{100:function(e,t){},102:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),o=n(11),r=n.n(o),s=(n(91),n(92),n(13)),l=n(58),b=n(46),j=n(162),x=n(154),d=n(150),u=n(158),m=n(151),p=n(145),h=n(148),O=n(71),g=n.n(O),f=n(69),v=n.n(f),y=n(159),w=n(70),C=n.n(w),S=(n(95),Object(p.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),display:"flex",flexDirection:"column"},submit:{margin:e.spacing(3,0,2),backgroundColor:"#607D8B",color:"white"},subject:{minWidth:"100%"}}})));function k(){var e=S(),t=Object(a.useState)(),n=Object(b.a)(t,2),i=n[0],o=n[1];return Object(c.jsxs)(h.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)(d.a,{}),Object(c.jsxs)("div",{className:e.paper,children:[Object(c.jsx)(j.a,{className:e.avatar,children:Object(c.jsx)(g.a,{})}),Object(c.jsx)(m.a,{component:"h1",variant:"h5",children:"Send Email Web-App!"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target.name),console.log(e.target.email),console.log(e.target.phone),console.log(e.target.subject),v.a.sendForm("service_e5usrmu","template_v5wxljq",e.target,"user_xroQr6ZIIWa9kk1Frng9z").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},className:e.form,noValidate:!0,children:[Object(c.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"Name",type:"text",id:"name",autoComplete:"name",autoFocus:!0}),Object(c.jsx)(u.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",type:"email"}),Object(c.jsx)("br",{}),Object(c.jsx)(C.a,{name:"phone",placeholder:"Enter phone number",country:"in",value:i,onChange:function(e){return o(e)},autoComplete:"phone",inputStyle:{width:"100%",height:"50px"}}),Object(c.jsx)("br",{}),Object(c.jsx)(y.a,{className:e.subject,id:"combo-box-demo",options:N,getOptionLabel:function(e){return e.title},style:{width:300},renderInput:function(e){return Object(c.jsx)(u.a,Object(l.a)(Object(l.a)({name:"subject",autoComplete:"subject"},e),{},{label:"Subject",variant:"outlined"}))}}),Object(c.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,children:"Send!"})]})]})]})}var N=[{title:"Maths"},{title:"Chemistry"},{title:"Social Science"},{title:"Science"},{title:"Engineering Drawing"},{title:"Applied Statistics"},{title:"Discrete Maths"},{title:"General Knowledge"},{title:"Moral Science"},{title:"Computer Science"},{title:"Information Technology"},{title:"Digital Communication"},{title:"Computer Networks"},{title:"Principles of Management"},{title:"Operating Systems"},{title:"Database Managemnet System"},{title:"SQL"},{title:"Theory of Computation"},{title:"Physics"}];var I=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(k,{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"xxxxxxxxxxxxxxxxxxxxxx",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"xxxxxxxxxxxxxxxxxxx",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"xxxxxxxxxxxxxxxxxxxxx"]})};var D=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("strong",{children:"About!"})})},M=n(29),E=n(9);n(156),n(157),n(153),n(160),n(155),n(161),n(76),n(73),n(74),n(61),n(59),n(60),n(75),Object(p.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(M.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(M.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(M.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(M.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(M.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));n(100);var L=function(){return Object(a.useEffect)((function(){var e=function(){console.log(window.scrollY),window.scrollY>200?(document.querySelector(".navbar").className="navbar scroll",document.querySelector(".boom").className="boom"):(document.querySelector(".navbar").className="navbar",document.querySelector(".boom").className="boom hide")};e(),window.addEventListener("scroll",e)}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("button",{children:"\ud83d\udfac"}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#aboutMe",children:" About Me "})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#projects",children:" Projects "})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#cv",children:" CV "})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#contacts",children:" Contacts "})})]})}),Object(c.jsx)("div",{className:"boom",style:{top:"0",backgroundColor:"black",height:"200px",position:"fixed",width:"100%",zIndex:"10"}}),Object(c.jsxs)(s.d,{children:[Object(c.jsx)(s.b,{exact:!0,path:"/",component:I}),Object(c.jsx)(s.b,{exact:!0,path:"/about",component:D}),Object(c.jsx)(s.a,{to:"/"})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))},F=n(57);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(F.a,{children:Object(c.jsx)(L,{})})}),document.getElementById("root")),q()},91:function(e,t,n){},92:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.b2c0559b.chunk.js.map
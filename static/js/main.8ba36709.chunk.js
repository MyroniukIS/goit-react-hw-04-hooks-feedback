(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,s){e.exports={items_list:"Statistics_items_list__4p_mb",item:"Statistics_item__Tkf3c"}},function(e,t,s){e.exports={App:"App_App__3R0Ao",title:"App_title__111xq",img:"App_img__3sRQn",container:"App_container__pcMUr"}},,,function(e,t,s){e.exports={btns_box:"FeedbackOptions_btns_box__2EMiU",btn:"FeedbackOptions_btn__259OM"}},function(e,t,s){e.exports={section:"Section_section__37VD2",title_text:"Section_title_text__131Hk"}},,function(e,t,s){e.exports={mess:"Notification_mess__3b2BD"}},,,,,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(8),i=s.n(a),r=(s(14),s(4)),o=s(3),l=s.n(o),b=s(6),j=s.n(b),d=s(0);function u(e){var t=e.options,s=e.onLeaveFeedback;return Object(d.jsx)("div",{className:j.a.btns_box,children:t.map((function(e){return Object(d.jsx)("button",{type:"button",className:j.a.btn,onClick:s,name:e,children:e},e)}))})}var m=s(2),_=s.n(m);function p(e){var t=e.good,s=e.neutral,c=e.bad,n=e.total,a=e.positiveFeedback;return Object(d.jsxs)("ul",{className:_.a.items_list,children:[Object(d.jsxs)("li",{className:_.a.item,children:["Good: ",t]}),Object(d.jsxs)("li",{className:_.a.item,children:["Neutural: ",s]}),Object(d.jsxs)("li",{className:_.a.item,children:["Bad: ",c]}),Object(d.jsxs)("li",{className:_.a.item,children:["Total: ",n]}),Object(d.jsxs)("li",{className:_.a.item,children:["Positive Feedback: ",a]})]})}var x=s(7),O=s.n(x);function f(e){var t=e.title,s=e.children;return Object(d.jsxs)("section",{className:O.a.section,children:[t&&Object(d.jsx)("h2",{className:O.a.title_text,children:t}),s]})}var h=s(9),k=s.n(h);function v(e){var t=e.mess;return Object(d.jsx)("p",{className:k.a.mess,children:t})}var N=s.p+"static/media/espresso.dcdfff73.png";function g(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(0),i=Object(r.a)(a,2),o=i[0],b=i[1],j=Object(c.useState)(0),m=Object(r.a)(j,2),_=m[0],x=m[1],O=function(){return s+o+_};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:l.a.container,children:[Object(d.jsx)("img",{className:l.a.img,src:N,alt:"coffe cup"}),Object(d.jsx)("h1",{className:l.a.title,children:"EXPRESSO"})]}),Object(d.jsx)(f,{title:"Please leave feedback",children:Object(d.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.currentTarget.name){case"good":n((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),Object(d.jsx)(f,{title:"Statistics",children:O()>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{good:s,neutral:o,bad:_,total:O(),positiveFeedback:function(){var e=O();return Math.round(100*s/e,0)}()}),Object(d.jsx)(v,{mess:"Thank you for your feedback!"})]}):Object(d.jsx)(v,{mess:"No feedback given"})})]})}i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.8ba36709.chunk.js.map
(this.webpackJsonpmy_project=this.webpackJsonpmy_project||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);for(var r=n(1),c=n.n(r),i=n(3),s=n.n(i),h=(n(8),n(9),n(0)),x=[],o=0;o<20;o+=1)x.push(20+Math.floor(81*Math.random()));function l(){var e=50,t=50,n=400,r=450,c=700/x.length;return Object(h.jsxs)("div",{id:"graph",children:[Object(h.jsxs)("svg",{width:800,height:500,children:[Object(h.jsx)("line",{x1:e,y1:r,x2:750,y2:r,stroke:"grey","stroke-width":"2px"}),Object(h.jsx)("text",{x:755,y:454,children:"x"}),Object(h.jsx)("line",{x1:e,y1:t,x2:e,y2:450,stroke:"grey","stroke-width":"2px"}),Array.from({length:5}).map((function(n,r){var c=t+80*r,i=Math.round(100-20*r);return Object(h.jsxs)("g",{children:[Object(h.jsx)("line",{x1:e,y1:c,x2:45,y2:c,stroke:"grey"}),Object(h.jsx)("text",{x:45,y:c+5,textAnchor:"end",children:i})]},r)})),Object(h.jsx)("text",{x:e,y:42,textAnchor:"middle",children:"y"}),x.map((function(i,s){var o=e+s*c,l=(i-0)/100,j=t+(1-l)*n,a=l*n;return Object(h.jsxs)("g",{children:[Object(h.jsx)("rect",{class:"bar",x:o+5,y:j,width:c-10,height:a,fill:"blue"}),Object(h.jsx)("text",{x:o+c/2,y:466,textAnchor:"middle",children:s}),Object(h.jsx)("text",{x:o+c/2,y:r-4*x[s]-2,textAnchor:"middle",children:x[s]})]},s)}))]}),Object(h.jsxs)("h2",{children:["Pls click to create new random graph ",Object(h.jsx)("a",{href:"index.js",children:"Click!"})]})]})}var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};function a(){s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root"))}var d=[];a(),function(){for(var e=x.length,t=0;t<e-1;t+=1)for(var n=0;n<e-1;n++)if(x[n+1]<x[n]){var r=x[n+1];x[n+1]=x[n],x[n]=r,d.push(x.slice())}}();var u=0,b=setInterval((function(){if(u===d.length)clearInterval(b);else{for(var e=0;e<x.length;e+=1)x[e]=d[u][e];u+=1,a()}}),500);j()},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.e8400b19.chunk.js.map
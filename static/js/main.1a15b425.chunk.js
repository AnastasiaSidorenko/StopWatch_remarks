(window.webpackJsonpstopwatch=window.webpackJsonpstopwatch||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(0),l=c.n(a),s=c(6),o=c.n(s),r=(c(12),c(4)),n=c(2),k=c(14),_=c(15),m=c(16);function u(e){var t=e.interval,c=Object(k.a)(t),a=Object(_.a)(t),s=Math.floor(Object(m.a)(t)/10),o=function(e){return e<10?"0"+e:e};return l.a.createElement("div",null,o(a),":",o(c),".",o(s))}function i(e){return l.a.createElement("div",{className:"Lapse"},l.a.createElement("span",null,"# ",e.number),l.a.createElement(u,{interval:e.end_time}),l.a.createElement(u,{interval:e.duration}))}function E(e){return l.a.createElement("div",{className:"LapsesList"},e.lapses.length?l.a.createElement("div",{className:"Lapse"},l.a.createElement("span",null,e.numberHeader),l.a.createElement("span",null,e.timeHeader),l.a.createElement("span",null,e.durationHeader)):null,e.lapses.map(function(t,c){return l.a.createElement(i,{end_time:t.end_time,duration:t.duration,key:e.lapses.length-c,number:e.lapses.length-c})}))}function p(e){var t=e.interval,c=e.isStopped;return Object(a.useEffect)(function(){if(!0===c){var e=document.getElementById("style");e&&e.remove();var a=document.createElement("style");a.setAttribute("id","style");var l=6*Object(k.a)(t)+.07*Math.round(Object(m.a)(t)/10),s=6*Object(_.a)(t)+.1*Object(k.a)(t);a.innerHTML=".clock__hand--minute { transform: rotate("+s+"deg);}.clock__hand--second { transform: rotate("+l+"deg);}",document.getElementsByTagName("head")[0].appendChild(a)}if(!1===c){var o=document.getElementById("style");o&&o.remove();var r=document.createElement("style");r.setAttribute("id","style");var n=6*Object(k.a)(t)+.07*Math.round(Object(m.a)(t)/10),u=6*Object(_.a)(t)+.1*Object(k.a)(t);r.innerHTML="@keyframes clock-hand-rotate--minute { from {transform: rotate("+u+"deg)}to {transform: rotate("+(u+360)+"deg)}}@keyframes clock-hand-rotate--second {from {transform: rotate("+n+"deg)}to {transform: rotate("+(n+360)+"deg)}}.clock__hand--minute { animation: clock-hand-rotate--minute 3600s linear infinite;}.clock__hand--second {animation: clock-hand-rotate--second 59s linear infinite;}",document.getElementsByTagName("head")[0].appendChild(r)}return function(){var e=document.getElementById("style");e&&e.remove()}},[c]),l.a.createElement("div",null,l.a.createElement("time",{className:"clock"},l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--1"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--2"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--3"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--4"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--5"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--6"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--7"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--8"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--9"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--10"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--11"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--12"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--13"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--14"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--15"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--16"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--17"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--18"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--19"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--20"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--21"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--22"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--23"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--24"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--25"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--26"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--27"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--28"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--29"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--30"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--31"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--32"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--33"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--34"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--35"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--36"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--37"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--38"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--39"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--40"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--41"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--42"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--43"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--44"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--45"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--46"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--47"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--48"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--49"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--50"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--51"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--52"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--53"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--54"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--55"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--56"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--57"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--58"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--small clock__stroke--59"}),l.a.createElement("span",{className:"clock__stroke clock__stroke--60"}),l.a.createElement("span",{className:"clock__hand clock__hand--minute"}),l.a.createElement("span",{className:"clock__hand clock__hand--second"})))}var d=c(18);function N(){var e=Object(a.useState)(0),t=Object(n.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)(Object(d.a)(new Date,"HH:mm:ss")),r=Object(n.a)(o,2),k=r[0],_=r[1];return Object(a.useEffect)(function(){return s(setInterval(function(){_(Object(d.a)(new Date,"HH:mm:ss"))},100)),function(){clearInterval(c)}},[]),l.a.createElement("span",null,k)}var b=c(17);o.a.render(l.a.createElement(function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)(0),k=Object(n.a)(o,2),_=k[0],m=k[1],i=Object(a.useState)(0),d=Object(n.a)(i,2),O=d[0],j=d[1],f=Object(a.useState)(!1),v=Object(n.a)(f,2),h=v[0],S=v[1],g=Object(a.useState)(null),w=Object(n.a)(g,2),B=w[0],T=w[1],y=Object(a.useState)("START"),H=Object(n.a)(y,2),C=H[0],D=H[1],I=Object(a.useState)("LAP"),L=Object(n.a)(I,2),A=L[0],M=L[1],R=Object(a.useState)("RESET"),P=Object(n.a)(R,2),J=P[0],U=P[1],x=Object(a.useState)("STOP"),G=Object(n.a)(x,2),q=G[0],z=G[1],F=Object(a.useState)("RESUME"),K=Object(n.a)(F,2),Q=K[0],V=K[1],W=Object(a.useState)("Show / Hide current time"),X=Object(n.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)("eng"),ee=Object(n.a)($,2),te=ee[0],ce=ee[1],ae=Object(a.useState)("Duration"),le=Object(n.a)(ae,2),se=le[0],oe=le[1],re=Object(a.useState)("Number"),ne=Object(n.a)(re,2),ke=ne[0],_e=ne[1],me=Object(a.useState)("Time"),ue=Object(n.a)(me,2),ie=ue[0],Ee=ue[1],pe=Object(a.useState)(0),de=Object(n.a)(pe,2),Ne=de[0],be=de[1];Object(a.useEffect)(function(){if(Ne)clearInterval(B);else if(O>0){var e=setInterval(function(){m(Object(b.a)(new Date))},73);T(e)}else clearInterval(B);return function(){return clearInterval(B)}},[Ne]);var Oe=function(){m(0),j(0),be(0),s([])};return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"switchers_current_time"},l.a.createElement("div",{className:"lang_switcher"},l.a.createElement("button",{onClick:function(){"ru"!==te&&(D("\u0421\u0422\u0410\u0420\u0422"),M("\u041a\u0420\u0423\u0413"),U("\u0421\u0411\u0420\u041e\u0421"),z("\u0421\u0422\u041e\u041f"),V("\u041f\u0420\u041e\u0414\u041e\u041b\u0416\u0418\u0422\u042c"),oe("\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),_e("\u041d\u043e\u043c\u0435\u0440"),Ee("\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"),Z("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0421\u043a\u0440\u044b\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"),ce("ru"))}},"\u0420\u0423\u0421"),l.a.createElement("button",{onClick:function(){"eng"!==te&&(D("START"),M("LAP"),U("RESET"),z("STOP"),V("RESUME"),oe("Duration"),_e("Number"),Ee("Time"),Z("Show / Hide current time"),ce("eng"))}},"ENG")),l.a.createElement("div",{className:"current_time_block"},l.a.createElement("button",{className:"showTimeButton",onClick:function(){S(!h),Z("ru"===te?"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0441\u043a\u0440\u044b\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f":"Show / Hide current time")}},Y),h?l.a.createElement(N,null):null)),l.a.createElement("div",{className:"Timer"},l.a.createElement(u,{interval:_-O})),l.a.createElement("div",{className:"lapseTimer"},c.length>0?l.a.createElement(u,{interval:_-O-c[0].end_time}):l.a.createElement(u,{interval:_-O})),l.a.createElement("div",{className:"ClockContainer"},l.a.createElement(p,{isStopped:Ne,interval:_-O})),O>0&&!Ne?l.a.createElement("div",{className:"Buttons twoButtons"},l.a.createElement("button",{onClick:function(){return function(){var e=Object(b.a)(new Date);c.length>0?s([{end_time:e-O,duration:e-(c[0].end_time+O)}].concat(Object(r.a)(c))):s([{end_time:e-O,duration:e-O}].concat(Object(r.a)(c))),console.log(c),be(!1)}()},className:"lapButton"},A),l.a.createElement("button",{onClick:function(){be(!0)},className:"stopButton"},q)):Ne?l.a.createElement("div",{className:"Buttons twoButtons"},l.a.createElement("button",{onClick:function(){return j(Object(b.a)(new Date)-(_-O)),m(Object(b.a)(new Date)),console.log("now"),console.log(_),void be(!1)},className:"startButton"},Q),l.a.createElement("button",{onClick:function(){return Oe()},className:"resetButton"},J)):l.a.createElement("div",{className:"Buttons twoButtons"},l.a.createElement("button",{onClick:function(){return j(Object(b.a)(new Date)),m(Object(b.a)(new Date)),void be(!1)},className:"startButton"},C),l.a.createElement("button",{onClick:function(){return Oe()},className:"resetButton"},J)),l.a.createElement(E,{lapses:c,numberHeader:ke,timeHeader:ie,durationHeader:se}))},null),document.getElementById("root"))},7:function(e,t,c){e.exports=c(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1a15b425.chunk.js.map
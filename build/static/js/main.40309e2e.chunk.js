(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(10),r=t.n(o),s=(t(16),t(17),t(2)),l=t(3),c=t(6),d=t(5),u=t(4),h=t(7),m=t(1),w=t.n(m),f=(t(18),new w.a.Renderer),p=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(d.a)(n).call(this,e))).state={value:"".concat(t.props.placeholder)},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){w.a.setOptions({breaks:!0}),f.link=function(e,n,t){return'<a target="_blank" href="'+e+'" title="'+n+'">'+t+"</a>"},window.document.getElementById("preview").innerHTML=w()(this.state.value,{renderer:f})}},{key:"handleChange",value:function(e){window.document.getElementById("preview").innerHTML=w()(e.target.value,{renderer:f})}},{key:"render",value:function(){return i.a.createElement("div",{className:"editor-wrapper"},i.a.createElement("h3",null,"EDITOR"),i.a.createElement("textarea",{rows:20,cols:20,id:"editor",defaultValue:this.state.value,onChange:this.handleChange}))}}]),n}(i.a.Component),v=(t(19),function(e){function n(e){return Object(s.a)(this,n),Object(c.a)(this,Object(d.a)(n).call(this,e))}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"preview-wrapper"},i.a.createElement("h3",null,"PREV\u0130EWER"),i.a.createElement("div",{id:"preview"}))}}]),n}(i.a.Component));var b=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Welcome to  My MarkDown Previewer"),i.a.createElement(p,{placeholder:"# This is a huge h1\nJust write  whatever  you want inside the editor  and see the editor .Also you can see the **test** results from the  green menu at the left\nof the screeen..\n## This is h2 .\n### And this is h3 and other stuff:\n  \nHeres some code, `<div>dsadsadsadsadsadsadasdsad</div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nText bolder: **bold**\nItalic : _italic_.\nboth: **_both!_**\n\n\nL\u0130nks that open with a new tab: [links](https://www.freecodecamp.com), and\n> Qutotes..\n\n\n\n- Here are the list items:\n  - Some are bulleted.\n    - With different indentation levels.\n     - That look like this.\n\n\n1. now numbered lists:\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"}),i.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.40309e2e.chunk.js.map
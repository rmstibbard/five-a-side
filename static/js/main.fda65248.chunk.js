(this["webpackJsonpfive-a-side"]=this["webpackJsonpfive-a-side"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(2);a(27);var u=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Five-A-Side Footy Fun"),r.a.createElement("p",null,"by Richard Stibbard"))},m=a(1),i=a(12),h=a(13),b=a(3),d=a(15),p=a(14),o=function(e){var t=e.playersList,a=e.numbersReached;return r.a.createElement("div",null,a?r.a.createElement("h2",{className:"numbers-reached"},"Teams Complete"):r.a.createElement("h2",{className:"numbers-reached"},"Add ",10-t.length," more players"))},f=Object(s.b)((function(e){return Object(m.a)(Object(m.a)({},e),{},{numbersReached:e.playersList.length>=10})}))(o),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={playerName:e.playerName,numbersReached:e.numbersReached},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n.handleReset=n.handleReset.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({playerName:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(Object(m.a)({},this.state))}},{key:"handleReset",value:function(e){e.preventDefault(),this.props.handleReset(Object(m.a)({},this.state))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"entry-form",onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Enter a player's name",className:"player-input",type:"text",onChange:this.handleChange,disabled:this.props.numbersReached}),r.a.createElement("button",{type:"submit",className:"player-submit",disabled:this.props.numbersReached},"Add a player"),r.a.createElement("button",{type:"submit",className:"reset-teams",onClick:this.handleReset},"Reset teams"),r.a.createElement(f,null)))}}]),a}(n.Component),y=Object(s.b)((function(e){return{playerName:e.playerName,numbersReached:e.numbersReached}}),(function(e){return{handleReset:function(){return e({type:"RESET"})},handleSubmit:function(t){return e(function(e){return{type:"ADD_PLAYER",player:{name:e.playerName}}}(t))}}}))(E),j=function(e){var t=e.playersList,a=e.teamA,n=e.teamB;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game"},r.a.createElement("div",null,t.length<10?r.a.createElement("div",{className:"players-list-title"},r.a.createElement("p",null,"Players to sort"),r.a.createElement("ul",{className:"players-list"},t.length<10?t.map((function(e,t){return r.a.createElement("li",{key:t},e.name)})):null)):null,r.a.createElement("div",{className:"team-a-title"},r.a.createElement("p",null,"Team A"),r.a.createElement("ul",{className:"team-a-players"},10===t.length?a.map((function(e,t){return r.a.createElement("li",{key:t},e.name)})):r.a.createElement("p",null,"Thinking ..."))),r.a.createElement("div",null,r.a.createElement("div",{className:"team-b-title"},r.a.createElement("p",null,"Team B"),r.a.createElement("ul",{className:"team-b-players"},10===t.length?n.map((function(e,t){return r.a.createElement("li",{key:t},e.name)})):r.a.createElement("p",null,"Thinking ...")))))))},O=Object(s.b)((function(e){return{playersList:e.playersList,teamA:e.teamA,teamB:e.teamB}}))(j);var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(y,null),r.a.createElement(O,null))},R=a(5),g=a(9),N={playersList:[],shuffledList:[],teamA:[],teamB:[],numbersReached:!1},L=function(e,t){return Object(m.a)(Object(m.a)({},e),{},{playersList:[].concat(Object(g.a)(e.playersList),[t.player])})},A=function(e,t){switch(t.type){case"ADD_PLAYER":return L(e,t);case"CREATE_TEAMS":return function(e){if(e.shuffledList.length<=10){var t=e.shuffledList.filter((function(e,t){return t%2===0})),a=e.shuffledList.filter((function(e,t){return t%2!==0}));return Object(m.a)(Object(m.a)({},e),{},{teamA:t,teamB:a})}return Object(m.a)(Object(m.a)({},e),{},{numbersReached:!0})}(function(e){return Object(m.a)(Object(m.a)({},e),{},{shuffledList:Object(g.a)(e.playersList.sort((function(){return Math.random()-.5})))})}(L(e,t)));case"RESET":return Object(m.a)({},N);default:return e}},S=Object(R.b)(A,N);c.a.render(r.a.createElement(s.a,{store:S},r.a.createElement(v,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fda65248.chunk.js.map
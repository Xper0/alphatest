(this.webpackJsonpalphabank=this.webpackJsonpalphabank||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(11),i=n.n(a),o=(n(34),n(4)),s=n(6),u=(n(35),n(36),Object(r.createContext)({})),d=n(1),l=function(e){var t=e.card,n=e.favorites,c=void 0!==n&&n,a=e.removepost,i=Object(r.useState)(c),l=Object(s.a)(i,2),f=l[0],j=l[1],b=Object(r.useContext)(u),h=b.addFavorites,O=b.setAddFavorites;return Object(d.jsxs)("div",{className:"Card",children:[Object(d.jsx)("i",{className:f?"fa fa-heart fa-2x":"fa fa-heart-o fa-2x",onClick:function(){return function(e){j(!f);var t=h.find((function(t){return t===e}));O(t?function(t){return t.filter((function(t){return t!==e}))}:function(t){return[].concat(Object(o.a)(t),[e])})}(t)},"aria-hidden":"true"}),t.hasOwnProperty("image")&&t.image.hasOwnProperty("url")?Object(d.jsx)("img",{className:"Card__img",src:t.image.url,alt:"img-cat"}):"",Object(d.jsx)("h3",{className:"Card__name",children:t.name}),Object(d.jsx)("p",{className:"Card__desc",children:t.description}),Object(d.jsx)("button",{className:"Card__del",onClick:function(){return a(t)},children:Object(d.jsx)("img",{className:"img",src:"./delete.png",alt:"delete"})})]})},f=n(27),j=n(13),b=n(7),h=n.n(b),O=n(17),p=n(3),x=n(26),v=n.n(x),g="GET_CARDS",m="DELETE_CARD",y="SHOW_FAVORITE",_={cards:[]};var w=Object(j.b)((function(e){return{myCards:e.cards.cards}}),{getCards:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.thecatapi.com/v1/breeds?api_key=".concat("ecfb8665-13f7-43e1-8370-90ce3996dc51"));case 3:n=e.sent,t({type:g,payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430:"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},deleteCard:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:m,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},showFavorite:function(e){return function(t){t({type:y,payload:e})}}})((function(e){var t=e.myCards,n=e.getCards,c=e.deleteCard,a=(e.showFavorite,Object(r.useState)([])),i=Object(s.a)(a,2),j=i[0],b=i[1],h=Object(r.useState)("all"),O=Object(s.a)(h,2),p=O[0],x=O[1];return Object(r.useEffect)((function(){n()}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(u.Provider,{value:{removeCard:function(e){c(e),b((function(t){return t.filter((function(t){return t!==e}))}))},addFavorites:j,setAddFavorites:b},children:[Object(d.jsx)("div",{className:"App-controlSorting",children:Object(d.jsxs)("label",{className:"App-controlSorting__text",children:["Sorting by",Object(d.jsx)("button",{className:"App-controlSorting__select",onMouseDown:function(){x("likes")},onMouseUp:function(){x("all")},children:" Show likes"})]})}),Object(d.jsx)("div",{className:"App-content",children:t.length>1?t.filter((function(e){return"likes"===p?j.find((function(t){return t===e})):e})).map((function(e,t){return Object(d.jsx)(l,{card:e,removepost:c,favorites:j.find((function(t){return t===e}))},t)})):Object(o.a)(Array(8)).map((function(e,t){return Object(d.jsx)("div",{className:"Card-info",children:Object(d.jsxs)(f.a,{speed:2,width:300,height:400,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(d.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(d.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(d.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(d.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(d.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]})},t)}))})]})})})),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},N=n(8),S=n(28),E=n(29),k={cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case g:return Object(p.a)(Object(p.a)({},e),{},{cards:r.data});case m:return Object(p.a)(Object(p.a)({},e),{},{cards:e.cards.filter((function(e){return e!==r}))});case y:return Object(p.a)(Object(p.a)({},e),{},{cards:e.cards.filter((function(e){return r.find((function(t){return t===e}))}))});default:return e}}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object(N.d)(Object(N.b)(Object(p.a)(Object(p.a)({},k),e)),t,Object(N.c)(N.a.apply(void 0,Object(o.a)(n).concat([S.a,E.logger])),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()))}();i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j.a,{store:A,children:Object(d.jsx)(w,{})})}),document.getElementById("root")),C()}},[[62,1,2]]]);
//# sourceMappingURL=main.b047ff0f.chunk.js.map
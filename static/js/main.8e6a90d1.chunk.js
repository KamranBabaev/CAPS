(this.webpackJsonpcaps=this.webpackJsonpcaps||[]).push([[0],{17:function(e,t,c){e.exports={card:"Card_card__3JF1o",favorite:"Card_favorite__22v3j",cardBottom:"Card_cardBottom__rs96H",cardPrice:"Card_cardPrice__1KNRT",button:"Card_button__3dbYe"}},21:function(e,t,c){e.exports={emptyCart:"InfoInDrawer_emptyCart__3ehOo",iconCart:"InfoInDrawer_iconCart__lDr4l",greenBTN:"InfoInDrawer_greenBTN__32y7Z"}},22:function(e,t,c){e.exports={headerLeft:"Header_headerLeft__26g-i",headerInfo:"Header_headerInfo__2SxBc",headerRight:"Header_headerRight__2vOht"}},43:function(e,t,c){},5:function(e,t,c){e.exports={overlay:"Drawer_overlay__1pIIw",drawer:"Drawer_drawer__FkNUi",items:"Drawer_items__2cokc",cartItems:"Drawer_cartItems__1MtXu",productInCart:"Drawer_productInCart__2P-6f",item:"Drawer_item__vzABk",resultCartBlock:"Drawer_resultCartBlock__3eELy",overlayVisible:"Drawer_overlayVisible__-Wmtr",greenBTN:"Drawer_greenBTN__23YjV",removeBTN:"Drawer_removeBTN__10PoO"}},63:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(36),i=c.n(n),s=(c(43),c(12)),o=c(13),d=c(8),j=c.n(d),l=c(14),u=c(4),b=c(6),h=c.n(b),m=(c(63),c(5)),x=c.n(m),O=c(21),p=c.n(O),f=c(1),v=function(e){var t=e.title,c=e.image,a=e.description,n=Object(r.useContext)(P).setCartOpened;return Object(f.jsxs)("div",{className:p.a.emptyCart,children:[Object(f.jsx)("img",{className:p.a.iconCart,src:c,width:140,height:140,alt:""}),Object(f.jsx)("h2",{style:{marginBottom:"0px",opacity:"70%"},children:t}),Object(f.jsx)("p",{children:a}),Object(f.jsx)("button",{onClick:function(){return n(!1)},className:p.a.greenBTN,children:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})},g=function(e){return new Promise((function(t){return setTimeout(t,e)}))},_=function(e){var t=e.onClose,c=e.items,a=void 0===c?[]:c,n=e.onRemoveItemToCart,i=e.opened,s=Object(r.useContext)(P),o=s.cartItems,d=s.setCartItems,b=Object(r.useState)(null),m=Object(u.a)(b,2),O=m[0],p=m[1],_=Object(r.useState)(!1),N=Object(u.a)(_,2),C=N[0],w=N[1],k=Object(r.useState)(!1),y=Object(u.a)(k,2),I=y[0],B=y[1],T=o.reduce((function(e,t){return t.price+e}),0),D=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,h.a.post("https://60d6dc54307c300017a5f532.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,p(c.id),w(!0),d([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/cart/"+a.id);case 14:return e.next=16,g(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437! :(");case 24:B(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"".concat(x.a.overlay," ").concat(i?x.a.overlayVisible:""),children:Object(f.jsxs)("div",{className:x.a.drawer,children:[Object(f.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430:",Object(f.jsx)("img",{className:x.a.removeBTN,src:"img/cancel.png",width:18,height:18,alt:"",onClick:t})]}),a.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:x.a.items,children:a.map((function(e){return Object(f.jsxs)("div",{className:x.a.cartItems,children:[Object(f.jsx)("img",{className:x.a.productInCart,src:e.imgUrl,width:70,alt:""}),Object(f.jsxs)("div",{className:x.a.item,children:[Object(f.jsx)("p",{children:e.name}),Object(f.jsxs)("b",{children:[e.price," \u0440\u0443\u0431"]})]}),Object(f.jsx)("img",{onClick:function(){return n(e.id)},className:x.a.removeBTN,src:"img/cancel.png",width:15,height:15,alt:""})]},e.id)}))}),Object(f.jsxs)("div",{className:x.a.resultCartBlock,children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{className:x.a.total,children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[T," \u0440\u0443\u0431."]})]}),Object(f.jsxs)("li",{className:x.a.tax,children:[Object(f.jsx)("span",{children:"\u0412\u043a\u043b\u044e\u0447\u0430\u044f \u041d\u0414\u0421:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[Number(T/100*5).toFixed(2)," \u0440\u0443\u0431."]})]})]}),Object(f.jsxs)("button",{disabled:I,onClick:D,className:x.a.greenBTN,children:["\u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(f.jsx)("img",{src:"img/right-arrow.png",width:28,alt:""})]})]})]}):Object(f.jsx)(v,{title:C?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",image:C?"img/orderDone.png":"img/emptyCart.svg",description:C?"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 #".concat(O,", \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0432 \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0443\u044e \u0441\u043b\u0443\u0436\u0431\u0443!"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u0434\u0438\u043d \u0438 \u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0434\u043b\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430"})]})})},N=c(22),C=c.n(N),w=c(15),k=function(e){var t=Object(r.useContext)(P).cartItems.reduce((function(e,t){return t.price+e}),0);return Object(f.jsxs)("header",{children:[Object(f.jsx)(w.b,{to:"/",children:Object(f.jsxs)("div",{className:C.a.headerLeft,children:[Object(f.jsx)("img",{src:"img/adelie-1.svg",width:40,height:40,alt:""}),Object(f.jsxs)("div",{className:C.a.headerInfo,children:[Object(f.jsx)("h3",{children:"CAPS"}),Object(f.jsx)("p",{children:"\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u0431\u0435\u0439\u0441\u0431\u043e\u043b\u043e\u043a"})]})]})}),Object(f.jsxs)("ul",{className:C.a.headerRight,children:[Object(f.jsx)("li",{children:Object(f.jsx)(w.b,{to:"/favorites",children:Object(f.jsx)("img",{src:"img/favorite.svg",width:22,height:22,style:{opacity:"60%"}})})}),Object(f.jsx)("li",{children:Object(f.jsx)(w.b,{to:"/orders",children:Object(f.jsx)("img",{src:"img/userAcc.svg",width:22,height:22,style:{opacity:"60%"}})})}),Object(f.jsxs)("li",{onClick:e.onClickCart,children:[Object(f.jsx)("img",{src:"img/cart.svg",width:22,height:22,style:{opacity:"60%"}}),Object(f.jsxs)("span",{style:{marginRight:"35px",fontWeight:"600"},children:[t," \u0440\u0443\u0431."]})]})]})]})},y=c(2),I=c(17),B=c.n(I),T=c(38),D=function(e){var t=e.id,c=e.name,a=e.imgUrl,n=e.price,i=e.onAddToFavorite,s=e.onPlus,o=e.favorited,d=void 0!==o&&o,j=e.loading,l=void 0!==j&&j,b=Object(r.useContext)(P).isItemAdded,h=Object(r.useState)(d),m=Object(u.a)(h,2),x=m[0],O=m[1],p={id:t,parentID:t,name:c,price:n,imgUrl:a};return Object(f.jsx)("div",{className:B.a.card,children:l?Object(f.jsxs)(T.a,{speed:2,width:170,height:280,viewBox:"0 0 155 280",backgroundColor:"#848383",foregroundColor:"#c4c4c4",children:[Object(f.jsx)("rect",{x:"2",y:"199",rx:"10",ry:"10",width:"109",height:"20"}),Object(f.jsx)("rect",{x:"2",y:"168",rx:"10",ry:"10",width:"149",height:"20"}),Object(f.jsx)("rect",{x:"2",y:"3",rx:"10",ry:"10",width:"150",height:"148"}),Object(f.jsx)("rect",{x:"4",y:"244",rx:"10",ry:"10",width:"83",height:"20"}),Object(f.jsx)("rect",{x:"121",y:"233",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[d&&Object(f.jsx)("div",{className:B.a.favorite,onClick:function(){i(p),O(!x)},children:Object(f.jsx)("img",{src:x?"img/liked.svg":"img/unliked.svg",width:18,height:18,alt:""})}),Object(f.jsx)("img",{src:a,width:133,alt:""}),Object(f.jsx)("h5",{children:c}),Object(f.jsxs)("div",{className:B.a.cardBottom,children:[Object(f.jsxs)("div",{className:B.a.cardPrice,children:[Object(f.jsx)("span",{children:"\u0426\u0435\u043d\u0430:  "}),Object(f.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),s&&Object(f.jsx)("button",{className:B.a.button,onClick:function(){s(p)},children:Object(f.jsx)("img",{src:b(t)?"img/plus.svg":"img/add.png",width:20,height:20,alt:""})})]})]})})};function S(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,i=e.onAddtoCart,d=e.isLoading;return Object(f.jsxs)("div",{className:"content",children:[Object(f.jsxs)("div",{className:"contentHeader",children:[Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b: "})}),Object(f.jsxs)("div",{className:"searchBlock",children:[Object(f.jsx)("img",{src:"img/searchICON.png",width:15,height:15,alt:""}),c?Object(f.jsx)("img",{onClick:function(){return r("")},className:x.a.removeBTN,style:{boxSizing:"border-box",outline:"none",position:"absolute",right:"20px"},src:"img/cancel.png",width:12,height:12,alt:""}):null,Object(f.jsx)("input",{onChange:a,value:c,placeholder:"\u043f\u043e\u0438\u0441\u043a..."})]})]}),Object(f.jsx)("div",{className:"allCaps",children:function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return(d?Object(o.a)(Array(10)):e).map((function(e,t){return Object(f.jsx)(D,Object(s.a)({onAddToFavorite:function(e){return n(e)},onPlus:function(e){return i(e)},loading:d},e),t)}))}()})]})}function A(){var e=Object(r.useContext)(P),t=e.favorites,c=e.onAddToFavorite;return Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"contentHeader",children:Object(f.jsx)("h2",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435:"})}),Object(f.jsx)("div",{className:"allCaps",children:t.map((function(e,t){return Object(f.jsx)(D,Object(s.a)({favorited:!0,onFavorite:c},e),t)}))})]})}function F(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!0),i=Object(u.a)(n,2),d=i[0],b=i[1];return Object(r.useEffect)((function(){Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/orders");case 3:t=e.sent,c=t.data,a(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),b(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445...");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("div",{className:"contentHeader",children:Object(f.jsx)("h2",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b:"})}),Object(f.jsx)("div",{className:"allCaps",children:(d?Object(o.a)(Array(8)):c).map((function(e,t){return Object(f.jsx)(D,Object(s.a)({loading:d},e),t)}))})]})}var P=a.a.createContext({});var L=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)([]),d=Object(u.a)(i,2),b=d[0],m=d[1],x=Object(r.useState)([]),O=Object(u.a)(x,2),p=O[0],v=O[1],g=Object(r.useState)(""),N=Object(u.a)(g,2),C=N[0],w=N[1],I=Object(r.useState)(!1),B=Object(u.a)(I,2),T=B[0],D=B[1],L=Object(r.useState)(!0),V=Object(u.a)(L,2),H=V[0],R=V[1];a.a.useEffect((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,c,r,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/cart"),h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/favorites"),h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/items")]);case 3:t=e.sent,c=Object(u.a)(t,3),r=c[0],a=c[1],i=c[2],R(!1),m(r.data),v(a.data),n(i.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=b.find((function(e){return Number(e.parentID)===Number(t.id)})))){e.next=8;break}return m((function(e){return e.filter((function(e){return Number(e.parentID)!==Number(t.id)}))})),e.next=6,h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return m((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,h.a.post("https://60d6dc54307c300017a5f532.mockapi.io/cart/",t);case 11:r=e.sent,a=r.data,m((function(e){return e.map((function(e){return e.parentID===a.parentID?Object(s.a)(Object(s.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 :(");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/favorites/".concat(t.id)),v((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,h.a.post("https://60d6dc54307c300017a5f532.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,v((function(e){return[].concat(Object(o.a)(e),[r])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435..");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(P.Provider,{value:{items:c,cartItems:b,favorites:p,onAddToFavorite:U,onAddtoCart:E,setCartOpened:D,setCartItems:m,isItemAdded:function(e){return b.some((function(t){return Number(t.parentID)===Number(e)}))}},children:Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(_,{items:b,onClose:function(){return D(!1)},onRemoveItemToCart:function(e){try{h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/cart/".concat(e)),m((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b :(")}},opened:T}),Object(f.jsx)(k,{onClickCart:function(){return D(!0)}}),Object(f.jsx)(y.a,{exact:!0,path:"",children:Object(f.jsx)(S,{items:c,cartItems:b,searchValue:C,setSearchValue:w,onChangeSearchInput:function(e){var t=e.currentTarget.value;w(t)},onAddToFavorite:U,onAddtoCart:E,isLoading:H})}),Object(f.jsx)(y.a,{exact:!0,path:"favorites",children:Object(f.jsx)(A,{})}),Object(f.jsx)(y.a,{exact:!0,path:"orders",children:Object(f.jsx)(F,{})})]})})};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w.a,{children:Object(f.jsx)(L,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.8e6a90d1.chunk.js.map
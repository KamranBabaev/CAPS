(this.webpackJsonpcaps=this.webpackJsonpcaps||[]).push([[0],{17:function(e,t,a){e.exports={card:"Card_card__3JF1o",favorite:"Card_favorite__22v3j",imgItem:"Card_imgItem__3Hha3",cardBottom:"Card_cardBottom__rs96H",cardPrice:"Card_cardPrice__1KNRT",button:"Card_button__3dbYe"}},21:function(e,t,a){e.exports={emptyCart:"InfoInDrawer_emptyCart__3ehOo",iconCart:"InfoInDrawer_iconCart__lDr4l",greenBTN:"InfoInDrawer_greenBTN__32y7Z"}},22:function(e,t,a){e.exports={headerLeft:"Header_headerLeft__26g-i",headerInfo:"Header_headerInfo__2SxBc",headerRight:"Header_headerRight__2vOht"}},43:function(e,t,a){},5:function(e,t,a){e.exports={overlay:"Drawer_overlay__1pIIw",drawer:"Drawer_drawer__FkNUi",items:"Drawer_items__2cokc",cartItems:"Drawer_cartItems__1MtXu",productInCart:"Drawer_productInCart__2P-6f",item:"Drawer_item__vzABk",resultCartBlock:"Drawer_resultCartBlock__3eELy",overlayVisible:"Drawer_overlayVisible__-Wmtr",greenBTN:"Drawer_greenBTN__23YjV",removeBTN:"Drawer_removeBTN__10PoO"}},63:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(36),i=a.n(n),s=(a(43),a(12)),o=a(13),d=a(8),l=a.n(d),j=a(14),u=a(4),b=a(6),h=a.n(b),A=(a(63),a(5)),m=a.n(A),x=a(21),O=a.n(x),p=a(1),f=function(e){var t=e.title,a=e.img,r=e.description,n=Object(c.useContext)(q).setCartOpened;return Object(p.jsxs)("div",{className:O.a.emptyCart,children:[Object(p.jsx)("img",{className:O.a.iconCart,src:a,width:200,height:200,alt:""}),Object(p.jsx)("h2",{style:{marginBottom:"0px",opacity:"70%"},children:t}),Object(p.jsx)("p",{children:r}),Object(p.jsx)("button",{onClick:function(){return n(!1)},className:O.a.greenBTN,children:"\u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})},v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABFQAAARUBKX4CGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD1SURBVFiF1ZQ7DsIwDECfuGZhaacegYWRgStWMFScg7AUqUA+dmIXUalLEue9JLYBTsAEdCEEtviBAzADZ4AbEIAH0G8A7xdWWCTeBlwlIqz9a2L0lkgddL3ATSJ3y58LzSVKTxwLMJOQ5FcqsFlCmty5DaolNJVV2kgtoS1ryWnEEjU9RXqlRYnahqZJqqRESzfVZvaXRAtcLZCQaCtXbUBEoqlh7fj191dPEIGPkTGfJIzBc9VhKpCDt0qYwFskzOC1EqbwGglzuFbCBa6RcINLJVzhEgl3eEkCYPCGZyQ6gPsW8ITEBHBZJAZv+EqiB67A8QleTA2oJqi7DQAAAABJRU5ErkJggg==",g=function(e){return new Promise((function(t){return setTimeout(t,e)}))},C=function(e){var t=e.onClose,a=e.items,r=void 0===a?[]:a,n=e.onRemoveItemToCart,i=e.opened,s=Object(c.useContext)(q),o=s.cartItems,d=s.setCartItems,b=Object(c.useState)(null),A=Object(u.a)(b,2),x=A[0],O=A[1],C=Object(c.useState)(!1),w=Object(u.a)(C,2),B=w[0],N=w[1],k=Object(c.useState)(!1),I=Object(u.a)(k,2),S=I[0],y=I[1],E=o.reduce((function(e,t){return t.price+e}),0),_=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,h.a.post("https://60d6dc54307c300017a5f532.mockapi.io/orders",{items:o});case 4:t=e.sent,a=t.data,O(a.id),N(!0),d([]),c=0;case 10:if(!(c<o.length)){e.next=19;break}return r=o[c],e.next=14,h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/cart/"+r.id);case 14:return e.next=16,g(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437! :(");case 24:y(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(m.a.overlay," ").concat(i?m.a.overlayVisible:""),children:Object(p.jsxs)("div",{className:m.a.drawer,children:[Object(p.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430:",Object(p.jsx)("img",{className:m.a.removeBTN,src:v,width:18,height:18,alt:"",onClick:t})]}),r.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:m.a.items,children:r.map((function(e){return Object(p.jsxs)("div",{className:m.a.cartItems,children:[Object(p.jsx)("img",{className:m.a.productInCart,src:e.imgUrl,width:70,alt:""}),Object(p.jsxs)("div",{className:m.a.item,children:[Object(p.jsx)("p",{children:e.name}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431"]})]}),Object(p.jsx)("img",{onClick:function(){return n(e.id)},className:m.a.removeBTN,src:v,width:15,height:15,alt:""})]},e.id)}))}),Object(p.jsxs)("div",{className:m.a.resultCartBlock,children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{className:m.a.total,children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[E," \u0440\u0443\u0431."]})]}),Object(p.jsxs)("li",{className:m.a.tax,children:[Object(p.jsx)("span",{children:"\u0412\u043a\u043b\u044e\u0447\u0430\u044f \u041d\u0414\u0421:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[Number(E/100*5).toFixed(2)," \u0440\u0443\u0431."]})]})]}),Object(p.jsxs)("button",{disabled:S,onClick:_,className:m.a.greenBTN,children:["\u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAaklEQVRYw+2WsQ2AMBDEMhSE1eh+Y5INjooeFDkkcB7g3LxeTskY8xCFgp2XhCm064JRaNHBKwqtWK0YRpF7KCqt2H6qUAtBC+4oxhbEbHc0+Xym58lnB79rz7+XLXh44emIx2+HfDfmo5xbbjgHZKPBJAAAAABJRU5ErkJggg==",width:28,alt:""})]})]})]}):Object(p.jsx)(f,{title:B?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",img:B?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvqwAioorBmf6sfEGfr0wAsnq2ndmzYRHaDKSUCWqknATETFSt-t8JGSDd0XArCCUlLM&usqp=CAU":"https://image.flaticon.com/icons/png/512/2038/2038854.png",description:B?"\u041d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 #".concat(x,", \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0432 \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u0443\u044e \u0441\u043b\u0443\u0436\u0431\u0443!"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u0434\u0438\u043d \u0438 \u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0434\u043b\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430"})]})})},w=a(22),B=a.n(w),N=a(15),k=a.p+"static/media/favorite.8d60aaea.svg",I=a.p+"static/media/userAcc.a296afc6.svg",S=a.p+"static/media/cart.0f0cd44e.svg",y=function(e){var t=Object(c.useContext)(q).cartItems.reduce((function(e,t){return t.price+e}),0);return Object(p.jsxs)("header",{children:[Object(p.jsx)(N.b,{to:"/",children:Object(p.jsx)("div",{className:B.a.headerLeft,children:Object(p.jsxs)("div",{className:B.a.headerInfo,children:[Object(p.jsx)("h3",{children:"CAPSULA"}),Object(p.jsx)("p",{children:"\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u0433\u0430\u0434\u0436\u0435\u0442\u043e\u0432"})]})})}),Object(p.jsxs)("ul",{className:B.a.headerRight,children:[Object(p.jsx)("li",{children:Object(p.jsx)(N.b,{to:"favorites",children:Object(p.jsx)("img",{src:k,width:22,height:22,style:{opacity:"80%"}})})}),Object(p.jsx)("li",{children:Object(p.jsx)(N.b,{to:"orders",children:Object(p.jsx)("img",{src:I,width:22,height:22,style:{opacity:"80%"}})})}),Object(p.jsxs)("li",{onClick:e.onClickCart,children:[Object(p.jsx)("img",{src:S,width:22,height:22,style:{opacity:"80%"}}),Object(p.jsxs)("span",{style:{marginRight:"35px",fontWeight:"600",fontSize:"20px"},children:[t," \u0440\u0443\u0431."]})]})]})]})},E=a(2),_=a(17),T=a.n(_),F=a(38),R=a.p+"static/media/plus.790effbe.svg",V=a.p+"static/media/liked.6e367571.svg",L=a.p+"static/media/unliked.c31d61db.svg",D=function(e){var t=e.id,a=e.name,r=e.imgUrl,n=e.price,i=e.onAddToFavorite,s=e.onPlus,o=e.favorited,d=void 0!==o&&o,l=e.loading,j=void 0!==l&&l,b=Object(c.useContext)(q).isItemAdded,h=Object(c.useState)(d),A=Object(u.a)(h,2),m=A[0],x=A[1],O={id:t,parentID:t,name:a,price:n,imgUrl:r};return Object(p.jsx)("div",{className:T.a.card,children:j?Object(p.jsxs)(F.a,{speed:2,width:170,height:280,viewBox:"0 0 155 280",backgroundColor:"#848383",foregroundColor:"#c4c4c4",children:[Object(p.jsx)("rect",{x:"2",y:"199",rx:"10",ry:"10",width:"109",height:"20"}),Object(p.jsx)("rect",{x:"2",y:"168",rx:"10",ry:"10",width:"149",height:"20"}),Object(p.jsx)("rect",{x:"2",y:"3",rx:"10",ry:"10",width:"150",height:"148"}),Object(p.jsx)("rect",{x:"4",y:"244",rx:"10",ry:"10",width:"83",height:"20"}),Object(p.jsx)("rect",{x:"121",y:"233",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[i&&Object(p.jsx)("div",{className:T.a.favorite,onClick:function(){i(O),x(!m)},children:Object(p.jsx)("img",{src:m?V:L,width:18,height:18,alt:""})}),Object(p.jsx)("div",{className:T.a.imgItem,children:Object(p.jsx)("img",{src:r,width:140,alt:""})}),Object(p.jsx)("h5",{children:a}),Object(p.jsxs)("div",{className:T.a.cardBottom,children:[Object(p.jsxs)("div",{className:T.a.cardPrice,children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430:  "}),Object(p.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),s&&Object(p.jsx)("button",{className:T.a.button,onClick:function(){s(O)},children:Object(p.jsx)("img",{src:b(t)?R:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFdSURBVFiF7dexahRxEAbw35hLJV6XKk9gFwiC2Afskiewu0ps8xC2IgiBVGkF7XyCa0LALr5ASJEuRyoJY7FjOI6DvV09ttkPpplh/v9vdme+2ZWZuhr2cIHbsgvs9TnrmY6IiOeYY4p3ZVPMK9YNPao/xS/Eki/Kd7r1J4BXOMu6uYpInFWsE/oQeIGbNf6bim2dwH/FSGAkMBKY8CSv7zVC0jbLhxrRWcVvHEbEj5b8BS7xOTMfQrNY5nisg9eJzOpF3zLzcdkZETs4wW5L/j5m2MGb0GyyKY6X5XWbiIjAd9zTrNOjPqv0XwxHuB28CQd/BYM34SQz7yLiQDOGr202hvB1xX+CL7hqyV/gXI3hBDLzAR9bEkHN+boqd3GVmW83OecvBm/CkcBIYCTQh8BCo2ar2K/Y1glcYlZ6jidtn1WsE6Lr/qmvp5+4xqdyf8BLHJSqbo6hf8//AC+HpvLwGLCJAAAAAElFTkSuQmCC",alt:""})})]})]})})};function z(e){var t=e.items,a=e.searchValue,c=e.setSearchValue,r=e.onChangeSearchInput,n=e.onAddToFavorite,i=e.onAddtoCart,d=e.isLoading;return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsxs)("div",{className:"contentHeader",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:a?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(a,'"'):"\u0412\u0441\u0435 \u0433\u0430\u0434\u0436\u0435\u0442\u044b: "})}),Object(p.jsxs)("div",{className:"searchBlock",children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACjQAAAo0BUn0y4wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANSSURBVFiFvddNiJZVFMDx3x3t1WZMI6dZOShW5lCmOJqLMBD6oEURURmhlDBpEX1soiiCwqigTUFEUkGEu9pkJJFU2kIqR8fKRIikKDeBoRYFQZ0Wz33lzsPM+z6vZRfu4jn3nnP/5+N+PCkidGoppSGM4VrMwC8YRMIuvBYRxzoa6WR/OoCU0lpsRgtfYT8ORMTPKaXzMZr78gzzJnZFN4/qLSImdfThDRzG6vr4VB1L8RneRauJTrv31bzuwzZVmFdGxL6GThzBVdiL7SmlVtMAnE5BXvx17I6It2pgI1irCvkIvsM49kbERG3uOjyE2yPiz14AnseSiLilMNaPZ3El3lHVwWFcjFW4GT/i4Yg4Uei9hHkRcXfXEGSAOdmroSKvi3EIj6KvQ/7HMtSKQtaPI1jQtX6ywhasLwwk7MYNDYtwOSYwu5Bdja1NAb7ArEL5AbzaSzXjMbxQkx3EOV30rMFETfgN5vQIMCOHvVXI3sOt3bbhpbm42gU0Hyci4reuBTS5lv7KdpYV4n0Y7qTXhygBVFttvJfFizae9UuAvmnmngb4GycL2VycOkOAU1m//E5NAFYWsgMme9FLG8367bZKgwj8Wi4YEUdVZ8CZtFUmp3M1jncD+BDDKaUyVHtSSpt7WTmldB2OR0SZzhG83VExb5fnMFpsn3mq021hwy04F19juJAtwLamB9EifI6ZhYHrVflc1mXxxdiDjTX5+6VTHQGywg48WTPSLqonVBdQ+/JKuASPqA6tdTW9TTjYKHqF0oWqAlpRMzZLdSHtxLeqvX5U9Rx7CufV5i/AT6qL7LbGAAXETlzTIeQXdBgbxaeq430wR299Y4AC4ku8goGGRdjCVnyPywr5YI7qHY0BsuJ8vJgr+97sWas2ZyauaOcbx/D4FLbaEHc2BqhF45ls4GQO6XbVA/R3/ICnsVD1qNmNsWkc2o8NPQHUjMzAEtXzbBH6p5gzgE9wTweIjWcE0APoAD7GlqkKOO+iu84aQF6oHx/hvg4Qm84aQAGxC/dPA3EIF037a/ZftJTSuaq/pR0R8XJtbAOWdryr/22LiD9wE25MKT1YGz6F4bOWglrIZ+MD1a07hMtVL/E1/wtAhmipfmIOqrbqxojwD2K6qzRkTjBpAAAAAElFTkSuQmCC",width:17,height:17,alt:""}),a?Object(p.jsx)("img",{onClick:function(){return c("")},className:m.a.removeBTN,style:{boxSizing:"border-box",outline:"none",position:"absolute",right:"20px"},src:v,width:12,height:12,alt:""}):null,Object(p.jsx)("input",{onChange:r,value:a,placeholder:"\u043f\u043e\u0438\u0441\u043a..."})]})]}),Object(p.jsx)("div",{className:"allCaps",children:function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return(d?Object(o.a)(Array(10)):e).map((function(e,t){return Object(p.jsx)(D,Object(s.a)({onAddToFavorite:n,onPlus:function(e){return i(e)},loading:d},e),t)}))}()})]})}function U(){var e=Object(c.useContext)(q),t=e.favorites,a=e.onAddToFavorite;return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"contentHeader",children:Object(p.jsx)("h2",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435:"})}),Object(p.jsx)("div",{className:"allCaps",children:t.map((function(e,t){return Object(p.jsx)(D,Object(s.a)({favorited:!0,onAddToFavorite:a},e),t)}))})]})}function Y(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!0),i=Object(u.a)(n,2),d=i[0],b=i[1];return Object(c.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/orders");case 3:t=e.sent,a=t.data,r(a.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),b(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445...");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"contentHeader",children:Object(p.jsx)("h2",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b:"})}),Object(p.jsx)("div",{className:"allCaps",children:(d?Object(o.a)(Array(8)):a).map((function(e,t){return Object(p.jsx)(D,Object(s.a)({loading:d},e),t)}))})]})}var q=r.a.createContext({});var H=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),d=Object(u.a)(i,2),b=d[0],A=d[1],m=Object(c.useState)([]),x=Object(u.a)(m,2),O=x[0],f=x[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),w=g[0],B=g[1],N=Object(c.useState)(!1),k=Object(u.a)(N,2),I=k[0],S=k[1],_=Object(c.useState)(!0),T=Object(u.a)(_,2),F=T[0],R=T[1];r.a.useEffect((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/cart"),h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/favorites"),h.a.get("https://60d6dc54307c300017a5f532.mockapi.io/items")]);case 3:t=e.sent,a=Object(u.a)(t,3),c=a[0],r=a[1],i=a[2],R(!1),A(c.data),f(r.data),n(i.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=b.find((function(e){return Number(e.parentID)===Number(t.id)})))){e.next=8;break}return A((function(e){return e.filter((function(e){return Number(e.parentID)!==Number(t.id)}))})),e.next=6,h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/cart/".concat(a.id));case 6:e.next=14;break;case 8:return A((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,h.a.post("https://60d6dc54307c300017a5f532.mockapi.io/cart/",t);case 11:c=e.sent,r=c.data,A((function(e){return e.map((function(e){return e.parentID===r.parentID?Object(s.a)(Object(s.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 :(");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}return e.next=4,h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/favorites/".concat(t.id));case 4:f((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=12;break;case 7:return e.next=9,h.a.post("https://60d6dc54307c300017a5f532.mockapi.io/favorites",t);case 9:a=e.sent,c=a.data,f((function(e){return[].concat(Object(o.a)(e),[c])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435..");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(q.Provider,{value:{items:a,cartItems:b,favorites:O,onAddToFavorite:L,onAddtoCart:V,setCartOpened:S,setCartItems:A,isItemAdded:function(e){return b.some((function(t){return Number(t.parentID)===Number(e)}))}},children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(C,{items:b,onClose:function(){return S(!1)},onRemoveItemToCart:function(e){try{h.a.delete("https://60d6dc54307c300017a5f532.mockapi.io/cart/".concat(e)),A((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b :(")}},opened:I}),Object(p.jsx)(y,{onClickCart:function(){return S(!0)}}),Object(p.jsx)(E.a,{exact:!0,path:"/",children:Object(p.jsx)(z,{items:a,cartItems:b,searchValue:w,setSearchValue:B,onChangeSearchInput:function(e){var t=e.currentTarget.value;B(t)},onAddToFavorite:L,onAddtoCart:V,isLoading:F})}),Object(p.jsx)(E.a,{exact:!0,path:"/favorites",children:Object(p.jsx)(U,{})}),Object(p.jsx)(E.a,{exact:!0,path:"/orders",children:Object(p.jsx)(Y,{})})]})})};i.a.render(Object(p.jsx)(N.a,{children:Object(p.jsx)(E.c,{children:Object(p.jsx)(H,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.cd78e7a1.chunk.js.map
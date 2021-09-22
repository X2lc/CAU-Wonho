!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=16)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(13)},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r){e.exports={}},function(e,r){e.exports={}},function(e,r,t){"use strict";t.r(r);var n=t(2),a=t.n(n);function u(e,r,t,n,a,u,c){try{var o=e[u](c),s=o.value}catch(e){return void t(e)}o.done?r(s):Promise.resolve(s).then(n,a)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var c=e.apply(r,t);function o(e){u(c,n,a,o,s,"next",e)}function s(e){u(c,n,a,o,s,"throw",e)}o(void 0)}))}}var o=t(0),s=t.n(o),i=t(7),l=t.n(i),p=t(8),f=t.n(p),d=t(1),m=function(){return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/red"},"Red")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/blue"},"Blue")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/users"},"Users")))},E=(t(14),function(){return s.a.createElement("div",{className:"Red"},"Red")}),v=function(){return s.a.createElement(E,null)},b=(t(15),function(){return s.a.createElement("div",{className:"Blue"},"Blue")}),h=function(){return s.a.createElement(b,null)},y=function(e){var r=e.users;return r?s.a.createElement("div",null,s.a.createElement("ul",null,r.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},x=t(3);function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){S(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=t(9),_=t.n(j),w=t(4),R=a.a.mark(G),P=a.a.mark(C),k="users/GET_USER",U=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},T=function(e){return{type:k,payload:e}},q=function(e){return _.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function G(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.call)(q,e.payload);case 3:return r=t.sent,t.next=6,Object(w.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(w.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),R,null,[[0,8]])}function C(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeEvery)(k,G);case 2:case"end":return e.stop()}}),P)}var D={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return O({},e,{loading:O({},e.loading,{users:!0})});case"users/GET_USERS_SUCCESS":return O({},e,{loading:O({},e.loading,{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return O({},e,{loading:O({},e.loading,{users:!1}),error:O({},e.error,{users:r.payload})});case k:return O({},e,{loading:O({},e.loading,{user:!0}),error:O({},e.error,{user:null})});case"users/GET_USER_SUCCESS":return O({},e,{loading:O({},e.loading,{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return O({},e,{loading:O({},e.loading,{user:!1}),error:O({},e.error,{user:r.payload})});default:return e}},N=Object(o.createContext)(null),F=N,I=function(e){var r=e.resolve,t=Object(o.useContext)(N);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},M=Object(x.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=c(a.a.mark((function e(r){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,_.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(U(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return Object(o.useEffect)((function(){r||t()}),[t,r]),s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{users:r}),";",s.a.createElement(I,{resolve:t}))})),A=function(e){var r=e.user,t=r.email,n=r.name,a=r.username;return s.a.createElement("div",null,s.a.createElement("h1",null,a," (",n,")"),s.a.createElement("p",null,s.a.createElement("b",null,"e-mail:")," ",t))},B=function(e){var r=e.id,t=Object(x.useSelector)((function(e){return e.users.user})),n=Object(x.useDispatch)();return Object(o.useEffect)((function(){t&&t.id===parseInt(r,10)||n(T(r))}),[n,r,t]),t?s.a.createElement(A,{user:t}):s.a.createElement(I,{resolve:function(){return n(T(r))}})},J=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(d.Route,{path:"/users/:id",render:function(e){var r=e.match;return s.a.createElement(B,{id:r.params.id})}}))},Y=function(){return s.a.createElement("div",null,s.a.createElement(m,null),s.a.createElement("hr",null),s.a.createElement(d.Route,{path:"/red",component:v}),s.a.createElement(d.Route,{path:"/blue",component:h}),s.a.createElement(d.Route,{path:"/users",component:J}))},$=t(10),z=t.n($),H=t(11),K=t.n(H),Q=t(5),V=t(6),W=t.n(V),X=t(12),Z=t.n(X),ee=a.a.mark(re);function re(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.all)([C()]);case 2:case"end":return e.stop()}}),ee)}var te=Object(Q.combineReducers)({users:L}),ne=JSON.parse(K.a.readFileSync(z.a.resolve("./build/asset-manifest.json"),"utf8")),ae=Object.keys(ne.files).filter((function(e){return/chunk\.js$ /.exec(e)})).map((function(e){return'<script src="'.concat(ne.files[e],'"><\/script>')})).join("");function ue(e,r){return'<!DOCTYPE html>\n  <html lang="en">\n            <head>\n                <meta charset="utf-8" />\n                <link rel="shortcut icon" href="/favicon.ico" />\n                <meta\n                    name="viewport"\n                    content="width=device-width,initial-scale=1,shrink-to-fit=no"\n                />\n                <meta name="theme-color" content="#000000" />\n                <title>React App</title>\n                <link gref="'.concat(ne.files["main.css"],'" rel="stylesheet" />\n            </head>\n            <body>\n                <noscript>You need to enable JavaScript to run this app.</noscript>\n                <div id="root">\n                    ').concat(e,"\n                </div>\n                ").concat(r,'\n                <script src="').concat(ne.files["runtime~main.js"],'"><\/script>\n                ').concat(ae,'\n                <script src="').concat(ne.files["main.js"],'"><\/script>\n            </body>\n        </html>\n  ')}var ce=f()(),oe=function(){var e=c(a.a.mark((function e(r,t,n){var u,c,o,i,p,f,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},c=W()(),o=Object(Q.createStore)(te,Object(Q.applyMiddleware)(Z.a,c)),i=c.run(re).toPromise(),p={done:!1,promises:[]},f=s.a.createElement(F.Provider,{value:p},s.a.createElement(x.Provider,{store:o},s.a.createElement(d.StaticRouter,{location:r.url,context:u},s.a.createElement(Y,null)))),l.a.renderToStaticMarkup(f),o.dispatch(V.END),e.prev=8,e.next=11,i;case 11:return e.next=13,Promise.all(p.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.status(500));case 18:p.done=!0,m=l.a.renderToString(f),t.send(ue(m));case 21:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),se=f.a.static(z.a.resolve("./build"),{index:!1});ce.use(se),ce.use(oe),ce.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]); 
!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=16)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(13)},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r){e.exports={}},function(e,r){e.exports={}},function(e,r,t){"use strict";t.r(r);var n=t(2),a=t.n(n);function u(e,r,t,n,a,u,o){try{var c=e[u](o),s=c.value}catch(e){return void t(e)}c.done?r(s):Promise.resolve(s).then(n,a)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function c(e){u(o,n,a,c,s,"next",e)}function s(e){u(o,n,a,c,s,"throw",e)}c(void 0)}))}}var c=t(0),s=t.n(c),i=t(7),l=t.n(i),p=t(8),f=t.n(p),d=t(1),m=function(){return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/red"},"Red")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/blue"},"Blue")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/users"},"Users")))},E=(t(14),function(){return s.a.createElement("div",{className:"Red"},"Red")}),v=function(){return s.a.createElement(E,null)},b=(t(15),function(){return s.a.createElement("div",{className:"Blue"},"Blue")}),h=function(){return s.a.createElement(b,null)},y=function(e){var r=e.users;return r?s.a.createElement("div",null,s.a.createElement("ul",null,r.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},x=t(3);function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j=t(9),_=t.n(j),w=t(4),R=a.a.mark(G),P=a.a.mark(C),k="users/GET_USER",U=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},T=function(e){return{type:k,payload:e}},q=function(e){return _.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function G(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.call)(q,e.payload);case 3:return r=t.sent,t.next=6,Object(w.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(w.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),R,null,[[0,8]])}function C(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeEvery)(k,G);case 2:case"end":return e.stop()}}),P)}var D={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return g({},e,{loading:g({},e.loading,{users:!0})});case"users/GET_USERS_SUCCESS":return g({},e,{loading:g({},e.loading,{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return g({},e,{loading:g({},e.loading,{users:!1}),error:g({},e.error,{users:r.payload})});case k:return g({},e,{loading:g({},e.loading,{user:!0}),error:g({},e.error,{user:null})});case"users/GET_USER_SUCCESS":return g({},e,{loading:g({},e.loading,{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return g({},e,{loading:g({},e.loading,{user:!1}),error:g({},e.error,{user:r.payload})});default:return e}},N=Object(c.createContext)(null),F=N,I=function(e){var r=e.resolve,t=Object(c.useContext)(N);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},M=Object(x.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=o(a.a.mark((function e(r){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,_.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(U(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return Object(c.useEffect)((function(){r||t()}),[t,r]),s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{users:r}),";",s.a.createElement(I,{resolve:t}))})),A=function(e){var r=e.user,t=r.email,n=r.name,a=r.username;return s.a.createElement("div",null,s.a.createElement("h1",null,a," (",n,")"),s.a.createElement("p",null,s.a.createElement("b",null,"e-mail:")," ",t))},B=function(e){var r,t,n=e.id,a=Object(x.useSelector)((function(e){return e.users.user})),u=Object(x.useDispatch)();return r=function(){return u(T(n))},(t=Object(c.useContext)(N))&&!t.done&&t.promises.push(Promise.resolve(r())),Object(c.useEffect)((function(){a&&a.id===parseInt(n,10)||u(T(n))}),[u,n,a]),a?s.a.createElement(A,{user:a}):null},J=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(d.Route,{path:"/users/:id",render:function(e){var r=e.match;return s.a.createElement(B,{id:r.params.id})}}))},Y=function(){return s.a.createElement("div",null,s.a.createElement(m,null),s.a.createElement("hr",null),s.a.createElement(d.Route,{path:"/red",component:v}),s.a.createElement(d.Route,{path:"/blue",component:h}),s.a.createElement(d.Route,{path:"/users",component:J}))},$=t(10),z=t.n($),H=t(11),K=t.n(H),Q=t(5),V=t(6),W=t.n(V),X=t(12),Z=t.n(X),ee=a.a.mark(re);function re(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.all)([C()]);case 2:case"end":return e.stop()}}),ee)}var te=Object(Q.combineReducers)({users:L}),ne=JSON.parse(K.a.readFileSync(z.a.resolve("./build/asset-manifest.json"),"utf8")),ae=Object.keys(ne.files).filter((function(e){return/chunk\.js$ /.exec(e)})).map((function(e){return'<script src="'.concat(ne.files[e],'"><\/script>')})).join("");function ue(e,r){return'<!DOCTYPE html>\n  <html lang="en">\n            <head>\n                <meta charset="utf-8" />\n                <link rel="shortcut icon" href="/favicon.ico" />\n                <meta\n                    name="viewport"\n                    content="width=device-width,initial-scale=1,shrink-to-fit=no"\n                />\n                <meta name="theme-color" content="#000000" />\n                <title>React App</title>\n                <link gref="'.concat(ne.files["main.css"],'" rel="stylesheet" />\n            </head>\n            <body>\n                <noscript>You need to enable JavaScript to run this app.</noscript>\n                <div id="root">\n                    ').concat(e,"\n                </div>\n                ").concat(r,'\n                <script src="').concat(ne.files["runtime~main.js"],'"><\/script>\n                ').concat(ae,'\n                <script src="').concat(ne.files["main.js"],'"><\/script>\n            </body>\n        </html>\n  ')}var oe=f()(),ce=function(){var e=o(a.a.mark((function e(r,t,n){var u,o,c,i,p,f,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={},o=W()(),c=Object(Q.createStore)(te,Object(Q.applyMiddleware)(Z.a,o)),i=o.run(re).toPromise(),p={done:!1,promises:[]},f=s.a.createElement(F.Provider,{value:p},s.a.createElement(x.Provider,{store:c},s.a.createElement(d.StaticRouter,{location:r.url,context:u},s.a.createElement(Y,null)))),l.a.renderToStaticMarkup(f),c.dispatch(V.END),e.prev=8,e.next=11,i;case 11:return e.next=13,Promise.all(p.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.status(500));case 18:p.done=!0,m=l.a.renderToString(f),t.send(ue(m));case 21:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),se=f.a.static(z.a.resolve("./build"),{index:!1});oe.use(se),oe.use(ce),oe.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]); 
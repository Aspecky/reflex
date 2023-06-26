"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[476],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(1966),n=(r(9496),r(9613));const l={description:"API Reference for Reflex, a state management library for Roblox."},i="Reflex",o={unversionedId:"reference/reflex/index",id:"reference/reflex/index",title:"Reflex",description:"API Reference for Reflex, a state management library for Roblox.",source:"@site/docs/reference/reflex/index.md",sourceDirName:"reference/reflex",slug:"/reference/reflex/",permalink:"/reflex/docs/reference/reflex/",draft:!1,tags:[],version:"current",frontMatter:{description:"API Reference for Reflex, a state management library for Roblox."},sidebar:"referenceSidebar",next:{title:"createProducer",permalink:"/reflex/docs/reference/reflex/create-producer"}},s={},c=[{value:"Producers",id:"producers",level:2},{value:"Selectors",id:"selectors",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Server-to-client sync",id:"server-to-client-sync",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reflex"},"Reflex"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Reflex")," allow you to efficiently track and manage the state of your game. This page documents the core Reflex APIs."),(0,n.kt)("p",null,"Reflex provides these top-level exports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-producer"},(0,n.kt)("inlineCode",{parentName:"a"},"createProducer(initialState, actions)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"combine-producers"},(0,n.kt)("inlineCode",{parentName:"a"},"combineProducers(producers)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-selector"},(0,n.kt)("inlineCode",{parentName:"a"},"createSelector(dependencies, combiner)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-broadcaster"},(0,n.kt)("inlineCode",{parentName:"a"},"createBroadcaster(options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-broadcast-receiver"},(0,n.kt)("inlineCode",{parentName:"a"},"createBroadcastReceiver(options)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"middleware#loggermiddleware"},(0,n.kt)("inlineCode",{parentName:"a"},"loggerMiddleware")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/littensy/reflex"},"See the source code on GitHub \u2192")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"producers"},"Producers"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Producers")," are the state containers that control the state of your game. They are the core of Reflex and are used to listen to state changes and dispatch actions."),(0,n.kt)("p",null,"Explore how to use producers to manage your game:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-producer"},(0,n.kt)("inlineCode",{parentName:"a"},"createProducer"))," creates a producer with an initial state and a set of actions.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-producer#updating-state-with-actions"},"Updating state with actions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-producer#updating-nested-state"},"Updating nested state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-producer#importing-and-exporting-types"},"Importing and exporting types")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"producer"},"Producers")," contain your state, actions, and everything you need to manage them.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"producer#running-side-effects"},"Running side effects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"producer#waiting-for-state-changes"},"Waiting for state changes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"producer#transforming-state-with-selectors"},"Transforming state with selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"producer#using-the-observer-pattern"},"Using the observer pattern")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"combine-producers"},(0,n.kt)("inlineCode",{parentName:"a"},"combineProducers"))," lets you compose a new producer of multiple slices.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"combine-producers#using-multiple-producers"},"Using multiple producers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"combine-producers#selecting-combined-state"},"Selecting combined state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"combine-producers#dispatching-one-action-to-multiple-producers"},"Dispatching one action to multiple producers"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const producer = createProducer(0, {\n    increment: (state, value: number) => state + value,\n    decrement: (state, value: number) => state - value,\n    set: (_, value: number) => value,\n});\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"selectors"},"Selectors"),(0,n.kt)("p",null,"If your state is a complex object, you can use ",(0,n.kt)("em",{parentName:"p"},"selectors")," to extract specific parts of it. Selectors are functions that take your state and return a subset of it. Reflex offers a built-in function to write efficient selectors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-selector"},(0,n.kt)("inlineCode",{parentName:"a"},"createSelector"))," optimizes selectors to only run when state changes.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-selector#transforming-state"},"Transforming state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-selector#passing-input-parameters"},"Passing input parameters"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const selectItems = (state: State) => state.items;\n\nconst selectInStock = createSelector([selectItems], (items) => {\n    return items.filter((item) => item.stock > 0);\n});\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"middleware"},"Middleware"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Middleware")," lets you enhance actions and producers with additional functionality. You can use middleware to add logging, patch methods, cancel actions, and more."),(0,n.kt)("p",null,"Reflex provides some commonly used middleware:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"middleware#loggermiddleware"},(0,n.kt)("inlineCode",{parentName:"a"},"loggerMiddleware"))," logs all actions and state changes.")),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",{parentName:"p",href:"middleware#your-first-middleware"},"define your own middleware"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"middleware#your-first-middleware"},"Your first middleware")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"middleware#cancelling-actions"},"Cancelling actions"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"producer.applyMiddleware(loggerMiddleware, customMiddleware);\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"server-to-client-sync"},"Server-to-client sync"),(0,n.kt)("p",null,"Reflex offers a built-in solution to sync state between the server and the client with ",(0,n.kt)("em",{parentName:"p"},"broadcasters")," and ",(0,n.kt)("em",{parentName:"p"},"receivers"),". They assist the server with separating private and shared state, and they help the client with syncing state with the server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-broadcaster"},(0,n.kt)("inlineCode",{parentName:"a"},"createBroadcaster"))," creates a broadcaster that shares server state with clients."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-broadcast-receiver"},(0,n.kt)("inlineCode",{parentName:"a"},"createBroadcastReceiver"))," creates a receiver that syncs client state with the server.")),(0,n.kt)("p",null,"Explore how to use broadcasters and receivers to sync state:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-broadcaster#sending-server-state-to-clients"},"Sending server state to clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"create-broadcast-receiver#syncing-server-state-on-the-client"},"Syncing server state on the client"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Server snippet"',title:'"Server','snippet"':!0},'const broadcaster = createBroadcaster({\n    producers: sharedProducers,\n    broadcast: (players, actions) => {\n        remotes.Server.Get("broadcast").SendToPlayers(players, actions);\n    },\n});\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Client snippet"',title:'"Client','snippet"':!0},'const receiver = createBroadcastReceiver({\n    requestState: async () => {\n        const remote = await remotes.Client.WaitFor("requestState");\n        return remote.CallServerAsync();\n    },\n});\n')))}d.isMDXComponent=!0}}]);
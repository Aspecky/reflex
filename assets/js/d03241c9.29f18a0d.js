"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[871],{5483:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(9496),i=n(5924),c=n(5773),a=n(7282),s=n(3355),o=n(8367);const l={cardContainer:"cardContainer_DSRY",cardTitle:"cardTitle_z686",cardDescription:"cardDescription_gekd"};function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:c,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:c},n," ",c),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a},a))}function m(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(p,{item:e})))))}},4637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(1966),i=(n(9496),n(9613)),c=n(5483);const a={description:"Learn the fundamentals of Reflex."},s="Guides",o={unversionedId:"guides/index",id:"guides/index",title:"Guides",description:"Learn the fundamentals of Reflex.",source:"@site/docs/guides/index.md",sourceDirName:"guides",slug:"/guides/",permalink:"/reflex/docs/guides/",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn the fundamentals of Reflex."},sidebar:"learnSidebar",previous:{title:"Installation",permalink:"/reflex/docs/quick-start/installation"},next:{title:"Your First Producer",permalink:"/reflex/docs/guides/your-first-producer"}},l={},d=[],u={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guides"},"Guides"),(0,i.kt)("p",null,"Learn the fundamental concepts of Reflex."),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);
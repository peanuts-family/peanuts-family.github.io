import{d as h,o as t,b as n,g as s,S as w,n as C,i as Y,j as P,D as g,ap as B,t as j,N as m,F as p,l as $,c as b,r as S,J as L,O as T,aq as N,f as k,m as v,w as x,h as V,H as F,a1 as H,q as I}from"./app-TTBxOpEp.js";import{_ as R}from"./YunComment.vue_vue_type_style_index_0_lang-BzCeVOTY.js";import{_ as z}from"./YunSponsor.vue_vue_type_style_index_0_lang-mVdldrob.js";import{c as D}from"./index-x8TNrC4q.js";import"./index-C5okkQwF.js";const M=["href"],q=h({__name:"YunProjectLinkItem",props:{item:{}},setup(f){return(e,l)=>(t(),n("a",{class:"yun-project-link-item inline-flex items-center justify-center flex-1 p-2 h-full text-white",href:e.item.url,target:"_blank",style:C({"--c-brand":e.item.color})},[s("div",{class:w(e.item.icon)},null,2)],12,M))}}),J={key:0,class:"mt-4"},U=["href"],E={text:"lg",font:"bold",m:"2"},O=["innerHTML"],W={flex:"~ center",class:"absolute left-0 right-0 bottom-0 h-10"},A=h({__name:"YunProjectCard",props:{i:{},project:{}},setup(f){const e=f,l=Y();P(l,{initial:{opacity:0,y:50},enter:{opacity:1,y:0,transition:{delay:e.i*50,type:"spring",ease:D.easeIn,damping:8,duration:400}}});const u=g(()=>{const o={color:e.project.textColor};if(e.project.color&&(typeof e.project.gradient>"u"||e.project.gradient)){const c=new B(e.project.color);o["--un-gradient-stops"]=`${c.spin(55).toHexString()}, ${e.project.color}`,o.color||(o.color=c.isDark()?"white":"black")}else o.backgroundColor=e.project.color||"rgba(255,255,255,0.9)",o.color||(o.color="black");return o}),r=g(()=>e.project.github?`https://github.com/${e.project.github}`:`https://github.com/YunYouJun/${e.project.name}`),_=g(()=>e.project.npm?`https://www.npmjs.com/package/${e.project.npm}`:""),a=g(()=>e.project.url||r.value),d=g(()=>[{url:a.value,icon:"i-ri-global-line",color:"#6eb7f9"},{url:e.project.docs,icon:"i-ri-book-line",color:"#443ed1"},{url:r.value,icon:"i-ri-github-line",color:"black"},{url:_.value,icon:"i-ri-npmjs-line",color:"red"}]);return(o,c)=>{const i=q;return t(),n("div",{ref_key:"cardRef",ref:l,flex:"~ col center",class:"m-2 w-90 transform rounded shadow-md grayscale-30",bg:"opacity-80 gradient-to-br",p:"x-2 b-12",hover:"shadow-lg grayscale-0",style:C(u.value)},[o.project.emoji?(t(),n("div",J,j(o.project.emoji),1)):m("v-if",!0),s("a",{href:a.value,target:"_blank",class:"text-unset"},[s("h2",E,j(o.project.name||"忘记叫啥了"),1)],8,U),s("small",{class:"block",p:"2",text:"center",innerHTML:o.project.desc||"说点什么好呢"},null,8,O),s("div",W,[(t(!0),n(p,null,$(d.value,y=>(t(),n(p,{key:y.icon},[y.url?(t(),b(i,{key:0,item:y},null,8,["item"])):m("v-if",!0)],64))),128))])],4)}}}),G={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},K=h({__name:"YunProjectCollection",props:{title:{},projects:{}},setup(f){return(e,l)=>{const u=A;return t(),n(p,null,[s("div",G,j(e.title),1),(t(!0),n(p,null,$(e.projects,(r,_)=>(t(),b(u,{key:_,project:r,i:_},null,8,["project","i"]))),128))],64)}}}),Q=h({__name:"YunProjectToggleButton",props:{active:{type:Boolean}},setup(f){return(e,l)=>(t(),n("button",{class:w(["bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 gap-2 h-8",{"bg-blue-500 text-white":e.active,"hover:bg-$va-c-bg-soft":!e.active}])},[S(e.$slots,"default")],2))}}),X={flex:"~ col center"},Z={class:"mb-3 text-2xl"},ee={flex:"~ wrap",justify:"center"},te={class:"inline-flex"},oe={class:"inline-flex"},ne={flex:"~ wrap",justify:"center"},re=h({__name:"YunProjects",setup(f){const e=L(),{t:l}=T(),u=N(e.value.projects),r=Y("all");return(_,a)=>{const d=Q,o=K;return t(),n("div",X,[s("h2",Z,j(k(e).title||k(l)("title.projects")),1),s("div",ee,[v(d,{active:r.value==="all",onClick:a[0]||(a[0]=c=>r.value="all")},{default:x(()=>a[1]||(a[1]=[V(" 全部 ")])),_:1},8,["active"]),(t(!0),n(p,null,$(u,(c,i)=>(t(),b(d,{key:i,active:i===r.value,onClick:y=>r.value=i},{default:x(()=>[s("span",te,j(c.emoji),1),s("span",oe,j(c.title),1)]),_:2},1032,["active","onClick"]))),128))]),s("div",ne,[(t(!0),n(p,null,$(u,(c,i)=>(t(),n(p,{key:i},[r.value==="all"||r.value===i?(t(),b(o,{key:0,title:c.title,projects:u[i].collection},null,8,["title","projects"])):m("v-if",!0)],64))),128))])])}}}),se={flex:"~ col"},pe=h({__name:"projects",setup(f){const e=F(),l=L();return(u,r)=>{const _=re,a=z,d=R,o=H,c=I;return t(),n(p,null,[v(o,null,{default:x(()=>[s("div",se,[v(_),m(" <YunLayoutLeft /> "),m(" <RouterView /> "),m(" <YunLayoutRight /> "),v(a,{class:"mt-4"}),k(e).comment.enable&&k(l).comment!==!1?(t(),b(d,{key:0,class:"max-w-4xl m-auto"})):m("v-if",!0)])]),_:1}),v(c)],64)}}});export{pe as default};

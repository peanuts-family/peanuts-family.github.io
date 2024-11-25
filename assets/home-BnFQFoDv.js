import{d as p,o,b as r,g as a,r as C,i as f,j as Y,ac as F,a6 as H,S as y,n as I,H as A,F as $,l as L,c as b,f as l,I as N,_ as q,m as _,ad as P,t as g,N as h,ae as j,w as B,X as V,af as z,a4 as E,ag as G,ah as O,D as S,ai as W,e as X,M as J,a1 as K,q as Q}from"./app-TTBxOpEp.js";import{c as M}from"./index-x8TNrC4q.js";import{g as T}from"./animation-hEmR_two.js";const U={class:"w-full px-4 flex-center"},Z={class:"yun-notice w-full"},ee=["innerHTML"],te=p({__name:"YunNotice",props:{content:{}},setup(c){return(e,t)=>(o(),r("div",U,[a("div",Z,[a("span",{innerHTML:e.content},null,8,ee),C(e.$slots,"default")])]))}}),ne={class:"size-10 inline-flex-center"},se=["href","title"],oe=p({__name:"PrologueSocialIcon",props:{social:{},delay:{}},setup(c){const e=c,t=f();return Y(t,{initial:{scale:.8,x:0,y:20,opacity:0},enter:{scale:1,x:0,y:0,opacity:1,transition:{type:"spring",duration:2e4,damping:8,delay:e.delay}}}),(n,s)=>{const u=F("tooltip");return H((o(),r("div",ne,[a("a",{ref_key:"iconRef",ref:t,class:"prologue-social-icon inline-flex-center w-full h-full text-white bg-$c-brand hover:bg-white hover:text-$c-brand",rel:"noopener",href:n.social.link,title:n.social.name,target:"_blank",style:I(`--c-brand:${n.social.color}`)},[a("div",{class:y(["size-6",n.social.icon])},null,2)],12,se)])),[[u,n.social.name]])}}}),ae={flex:"~ wrap",class:"justify-center items-center mx-5"},re=p({__name:"PrologueSocialLinks",setup(c){const e=A();return(t,n)=>{const s=oe;return o(),r("div",ae,[(o(!0),r($,null,L(l(e).social,(u,i)=>(o(),b(s,{key:i,social:u,delay:i*50+1e3},null,8,["social","delay"]))),128))])}}}),ie=p({__name:"YunAERect",setup(c){const e=f(),t=f(),n=f(),s=f(),u=f(),i={type:"tween",duration:600,ease:M.easeIn};return Y(e,{initial:{backgroundColor:"rgba(255, 255, 255, 0)"},enter:{backgroundColor:"rgba(255, 255, 255, 0.05)",transition:{type:"keyframes",duration:1e3,ease:M.easeIn}}}),Y(t,{initial:{x:"-100%"},enter:{x:"0%",transition:i}}),Y(n,{initial:{y:"-100%"},enter:{y:"0%",transition:i}}),Y(s,{initial:{x:"100%"},enter:{x:"0%",transition:i}}),Y(u,{initial:{y:"100%"},enter:{y:"0%",transition:i}}),(m,d)=>(o(),r("div",{ref_key:"rectRef",ref:e,class:"absolute ae-rect"},[a("div",{ref_key:"tRef",ref:t},null,512),a("div",{ref_key:"lRef",ref:n},null,512),a("div",{ref_key:"bRef",ref:s},null,512),a("div",{ref_key:"rRef",ref:u},null,512)],512))}}),ce=p({__name:"YunAEFrame",setup(c){const e=f(!1);return N(()=>{e.value=!0}),(t,n)=>(o(),r("div",{class:y(["yun-ae-frame",{play:e.value}])},n[0]||(n[0]=[a("div",{class:"tl absolute"},null,-1),a("div",{class:"tr absolute"},null,-1),a("div",{class:"bl absolute"},null,-1),a("div",{class:"br absolute"},null,-1)]),2))}}),le={},ue={class:"grid-bg"},_e={flex:"~ col",class:"justify-center items-center absolute bottom-$rect-margin left-0 right-0"};function pe(c,e){const t=ce,n=ie,s=re;return o(),r("div",ue,[_(t),_(n),a("div",_e,[_(s)])])}const fe=q(le,[["render",pe]]),me={class:"say"},de={key:0,class:"say-content animate-fade-in animate-iteration-1"},ve={key:1,class:"say-author"},he={key:2,class:"say-from"},ye=p({__name:"YunSay",setup(c){const e=P(),t=f(""),n=f(""),s=f("");function u(){const i=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;i&&fetch(i).then(m=>{if(m.ok)m.json().then(d=>{if(e.value.say.hitokoto.enable)t.value=d.hitokoto,n.value=d.from_who,s.value=d.from;else{const v=d[Math.floor(Math.random()*d.length)];v.content?(t.value=v.content,n.value=v.author,s.value=v.from):t.value=v}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${m.status}`)}).catch(m=>{console.error(m.message)})}return N(()=>{u()}),(i,m)=>(o(),r("div",me,[t.value?(o(),r("span",de,g(t.value),1)):h("v-if",!0),n.value?(o(),r("span",ve,g(n.value),1)):h("v-if",!0),s.value?(o(),r("span",he,g(s.value),1)):h("v-if",!0)]))}}),be=p({__name:"YunGoDown",setup(c){return(e,t)=>(o(),r("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:t[0]||(t[0]=(...n)=>l(T)&&l(T)(...n))},t[1]||(t[1]=[a("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}}),ge=p({__name:"YunSiteLinkItem",props:{page:{}},setup(c){const e=j();return(t,n)=>{const s=V;return o(),b(s,{class:"link-item inline-flex-center gap-2 transition rounded text-base p-1 md:text-xl md:p-3 text-$va-c-text","inline-flex":"",to:t.page.url,title:t.page.name,style:I(`color:${t.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:n[0]||(n[0]=u=>l(e).fullscreenMenu.isOpen=!1)},{default:B(()=>[a("div",{class:y([t.page.icon,"icon"])},null,2),a("span",null,g(t.page.name),1)]),_:1},8,["to","title","style"])}}}),$e={key:0,class:"site-description text-$va-c-text text-sm"},ke=p({__name:"YunSiteDescription",setup(c){const e=A();return(t,n)=>l(e).description?(o(),r("div",$e,g(l(e).description),1)):h("v-if",!0)}}),xe={key:0,class:"site-subtitle block text-$va-c-text op-80",text:"sm"},we=p({__name:"YunSiteSubtitle",setup(c){const e=A();return(t,n)=>l(e).subtitle?(o(),r("h4",xe,g(l(e).subtitle),1)):h("v-if",!0)}}),Ye={key:0,class:"site-author-intro",m:"t-0 b-4"},Se=p({__name:"YunAuthorIntro",setup(c){const e=A();return(t,n)=>l(e).author.intro?(o(),r("div",Ye,g(l(e).author.intro),1)):h("v-if",!0)}}),Ce=["src"],Ae=p({__name:"YunAuthorAvatar",setup(c){const e=A();return(t,n)=>(o(),r("img",{class:"rounded-full size-full",src:l(e).author.avatar,alt:"avatar"},null,8,Ce))}}),Re={key:0,class:"line-burst-effects absolute"},Be=p({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(c){const e=c,t=f(!0);return N(async()=>{await z(e.delay),t.value=!1,await z(e.duration),t.value=!0}),(n,s)=>t.value?h("v-if",!0):(o(),r("div",Re,[(o(),r($,null,L(8,u=>a("div",{key:u,class:"line"},s[0]||(s[0]=[a("div",null,[a("span")],-1)]))),64))]))}}),ze={flex:"~ col",class:"yun-square-container items-center justify-center text-center size-$total-char-height"},Ie={flex:"~ col",class:"absolute yun-square bg-$va-c-text square-rotate z-1"},Le={flex:"~ col",class:"gap-2 items-center justify-center","my-4":"","md:my-6":"","py-4":"","md:py-6":"",border:"t-1px b-1px black/60 dark:white/60"},Ne={class:"mt-4 flex-center w-64 md:w-100 m-auto gap-2",flex:"~ wrap",p:"x-$rect-margin"},Pe=p({__name:"YunPrologueSquare",setup(c){const e=P(),t=f(!1);return(n,s)=>{const u=Be,i=Ae,m=G,d=Se,v=O,R=we,k=ke,x=ge;return o(),r("div",ze,[C(n.$slots,"default",{},void 0,!0),a("div",{flex:"~ col center",class:y(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:t.value}])},[_(E,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:s[0]||(s[0]=w=>t.value=!0)},{default:B(()=>[a("div",Ie,[_(u,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),_(E,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:B(()=>[_(i)]),_:1})])]),_:1}),a("div",{class:y(["info",{show:t.value}])},[_(m,{class:"mt-3"}),_(d),a("div",Le,[_(v),_(R),_(k)]),a("div",Ne,[_(x,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),C(n.$slots,"default",{},void 0,!0),(o(!0),r($,null,L(l(e).pages,(w,D)=>(o(),b(x,{key:D,page:w},null,8,["page"]))),128))])],2)],2)])}}}),De=q(Pe,[["__scopeId","data-v-77442496"]]),je={class:"banner-char-container"},Ee={class:"char"},Me=p({__name:"YunBannerCharContainer",props:{title:{},chars:{}},setup(c){return(e,t)=>(o(),r("div",je,[(o(!0),r($,null,L(e.title,(n,s)=>(o(),r("div",{key:s,class:"char-box"},[a("span",{class:y([s%2!==0?"char-right":"char-left"]),style:I({"--banner-char-size":`${e.chars[s]}rem`})},[a("span",Ee,g(n),1)],6)]))),128))]))}});function Te(c){const e=S(()=>{const n=[];for(let s=0;s<c.title.length;s++){const u=W(1.5,3.5);n.push(u)}return n}),t=S(()=>e.value.reduce((n,s)=>n+s,0));return{chars:e,totalCharHeight:t}}const qe={class:"banner-line-container"},Fe={class:"banner-line-container bottom"},He=p({__name:"YunBanner",setup(c){const e=j(),t=P(),{totalCharHeight:n,chars:s}=Te(t.value.banner),u=S(()=>{const v={"--total-char-height":`${n.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${n.value/2}rem)`,"justify-content":"space-between"};return e.isStrato&&(v.borderBottom="1px solid var(--banner-line-color)"),v}),i=f("enter"),m=S(()=>i.value),d=f("banner");return N(async()=>{await z(500),i.value="active",e.isNimbo&&(await z(500),i.value="exit",d.value="prologue")}),(v,R)=>{const k=Me,x=De,w=be;return o(),r("div",{id:"yun-banner",style:I(u.value)},[a("div",qe,[a("div",{class:y(["banner-line vertical-line-top",m.value])},null,2)]),l(e).isNimbo?(o(),r($,{key:0},[d.value==="banner"?(o(),b(k,{key:0,title:l(t).banner.title,chars:l(s)},null,8,["title","chars"])):(o(),b(x,{key:1,class:"z-1"}))],64)):h("v-if",!0),l(e).isStrato?(o(),b(k,{key:1,title:l(t).banner.title,chars:l(s)},null,8,["title","chars"])):h("v-if",!0),a("div",Fe,[a("div",{class:y(["banner-line vertical-line-bottom",m.value])},null,2)]),_(w)],4)}}}),We=p({__name:"home",setup(c){const e=j(),t=X(),n=P(),s=S(()=>t.path.startsWith("/page")),u=S(()=>{const i=n.value.notice;return i.enable&&(s.value?!i.hideInPages:!0)});return(i,m)=>{const d=He,v=ye,R=fe,k=te,x=J("RouterView"),w=K,D=Q;return o(),r($,null,[_(w,{class:y(["items-center flex-col",{"mt-0!":!s.value}])},{default:B(()=>[s.value?h("v-if",!0):(o(),r($,{key:0},[_(d),l(n).say.enable?(o(),b(v,{key:0,w:"full"})):h("v-if",!0),l(e).isNimbo?(o(),b(R,{key:1,class:"absolute left-0 top-0 right-0 bottom-0"})):h("v-if",!0)],64)),u.value?(o(),b(k,{key:1,class:y(["mb-2 md:mb-6",{"mt-4":!s.value}]),content:l(n).notice.content},null,8,["class","content"])):h("v-if",!0),C(i.$slots,"board"),C(i.$slots,"default",{},()=>[_(x)])]),_:3},8,["class"]),_(D)],64)}}});export{We as default};

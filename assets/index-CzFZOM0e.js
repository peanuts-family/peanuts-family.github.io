import{_ as v}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BtOKunsR.js";import{d as k,i as $,j as w,o as m,b as u,g as a,t as f,n as b,k as j,F as I,l as B,f as y,c as _,w as t,e as Y,p,m as L,r as s}from"./app-TTBxOpEp.js";import{o as z}from"./index-DLgQzN8-.js";import"./YunComment.vue_vue_type_style_index_0_lang-BzCeVOTY.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQyX6r0U.js";import"./post-DVpstWuT.js";import"./animation-hEmR_two.js";const D=["href","title"],R={class:"yun-link-left"},S={class:"yun-link-avatar size-16 overflow-hidden flex-center"},C=["src","alt"],E={class:"yun-link-info",m:"l-2"},N={class:"yun-link-blog",font:"serif black"},V={class:"yun-link-desc"},F=k({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(c){const o=c;function r(n){z(n,o.errorImg)}const i=$();return w(i,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:o.i*50}}}),(n,l)=>(m(),u("li",{ref_key:"itemRef",ref:i,class:"yun-link-item inline-flex",style:b({"--primary-color":n.link.color})},[a("a",{class:"yun-link-url",p:"x-4 y-2",href:n.link.url,title:n.link.name,alt:"portrait",rel:"friend",target:"_blank"},[a("div",R,[a("div",S,[a("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:n.link.avatar,alt:n.link.name,onError:r},null,40,C)])]),a("div",E,[a("div",N,f(n.link.blog),1),a("div",V,f(n.link.desc),1)])],8,D)],4))}}),M={class:"yun-links"},O={class:"yun-link-items",flex:"center wrap"},U=k({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(c){const o=c,{data:r}=j(o.links,o.random);return(i,n)=>{const l=F;return m(),u("div",M,[a("ul",O,[(m(!0),u(I,null,B(y(r),(e,d)=>(m(),_(l,{key:d,i:d,link:e,"error-img":i.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),Q={__name:"index",setup(c,{expose:o}){const r=JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"C:/Users/28373/Documents/Blog/peanuts-family/pages/links/index.md","lastUpdated":null}'),i=Y(),n=r.frontmatter||{};i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},r.frontmatter||{}),p("pageData",r),p("valaxy:frontmatter",n),globalThis.$frontmatter=n;const l={title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",links:"https://www.yunyoujun.cn/friends/links.json",random:!0};return o({frontmatter:l}),(e,d)=>{const h=U,g=v;return m(),_(g,{frontmatter:y(n)},{"main-content-md":t(()=>[L(h,{links:l.links,random:l.random},null,8,["links","random"])]),"main-header":t(()=>[s(e.$slots,"main-header")]),"main-header-after":t(()=>[s(e.$slots,"main-header-after")]),"main-nav":t(()=>[s(e.$slots,"main-nav")]),"main-content":t(()=>[s(e.$slots,"main-content")]),"main-content-after":t(()=>[s(e.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(e.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(e.$slots,"main-nav-after")]),comment:t(()=>[s(e.$slots,"comment")]),footer:t(()=>[s(e.$slots,"footer")]),aside:t(()=>[s(e.$slots,"aside")]),"aside-custom":t(()=>[s(e.$slots,"aside-custom")]),default:t(()=>[s(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Q as default};

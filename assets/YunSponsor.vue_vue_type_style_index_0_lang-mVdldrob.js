import{d as f,O as m,H as _,i as v,D as x,o as n,b as r,g as e,f as i,t as y,N as g,F as h,l as b,S as c,n as k}from"./app-TTBxOpEp.js";const C={class:"yun-sponsor-container flex-center flex-col"},w=["title"],S={key:0,class:"sponsor-description",mb:"4",text:"sm"},B={class:"flex justify-around"},z=["href"],N=["src","title"],F=f({__name:"YunSponsor",setup(q){const{t:d}=m(),o=_(),l=v(!1),u=x(()=>{var a;return((a=o.value.sponsor)==null?void 0:a.title)??d("reward.donate")});return(a,t)=>(n(),r("div",C,[e("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=s=>l.value=!l.value)},t[1]||(t[1]=[e("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),e("div",{class:c(["qrcode-container qrcode flex-center flex-col",l.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(n(),r("div",S,y(i(o).sponsor.description),1)):g("v-if",!0),e("div",B,[(n(!0),r(h,null,b(i(o).sponsor.methods,(s,p)=>(n(),r("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:s.url,target:"_blank",style:k(`color:${s.color}`)},[e("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:s.url,title:s.name},null,8,N),e("div",{text:"xl",m:"2",class:c(s.icon)},null,2)],12,z))),128))])],2)]))}});export{F as _};

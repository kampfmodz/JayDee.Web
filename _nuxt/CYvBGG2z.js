const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cm-UdSUi.js","./R8PE7jSV.js","./U_Wif0QI.js","./BWzi_iwq.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{s as f,S as p,_ as v,a as g,Q as d,R as l,q as h,G as _,I as r}from"./R8PE7jSV.js";import{u as y}from"./BZac_rdP.js";import{q as C,w as m,e as w,s as P,j as $,u as N}from"./U_Wif0QI.js";import{u as j}from"./BWzi_iwq.js";import{_ as T}from"./D2BJjld4.js";const D=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./Cm-UdSUi.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),L=E;export{L as default};

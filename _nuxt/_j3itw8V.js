import{d,U as l,V as f,m as v,W as p,X as m,J as g,Y as h,L as s}from"./Nj6r3imd.js";import{u as _}from"./70TBz4VI.js";import{_ as y}from"./Cp_V6pte.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await _(`content-navigation-${m(n.value)}`,()=>h(n.value));return{navigation:o}},render(i){const t=g(),{navigation:n}=i,o=e=>s(y,{to:e._path},()=>e.title),a=(e,u)=>s("ul",u?{"data-level":u}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,u+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};

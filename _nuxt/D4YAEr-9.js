import{_ as i}from"./Bf3kN88l.js";import{d as n,c as r,e as c,f as t,t as a,i as l}from"./x3oC36eM.js";import"./CdPpc3c9.js";const s={class:"flex bg-gray-200 w-2/3 mx-auto rounded-lg overflow-hidden my-6 max-sm:flex-wrap"},d=["src"],m={class:"mt-4"},f={class:"flex items-center max-md:flex-wrap"},u={class:"text-5xl font-semibold mr-4"},y=n({__name:"TeamMember",props:{name:{type:String,default:"Gabriel"},avatar:{type:String,default:"https://cdn.discordapp.com/avatars/605731050823614504/d83b2a3e2d9d1ffa48d7808f9e0a9607.png?size=512"},discord_name:{type:String,default:"Gabriel"},description:{type:String,default:"Servus! Ich bin Gabriel"},role_text:{type:String,default:"Technik"},role_icon:{type:String,default:"fluent-emoji:technologist-light"},role_color:{type:String,default:"red"}},setup(e){return(x,_)=>{const o=i;return r(),c("div",s,[t("img",{src:e.avatar,class:"h-full w-72 max-h-60"},null,8,d),t("div",m,[t("div",f,[t("h1",u,a(e.name),1),l(o,{text:e.role_text,color:e.role_color,icon:e.role_icon},null,8,["text","color","icon"]),l(o,{text:e.discord_name,color:"discord",icon:"skill-icons:discord"},null,8,["text"])]),t("p",null,a(e.description),1)])])}}});export{y as default};

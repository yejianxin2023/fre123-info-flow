import{d as f,e as m,f as d,g as a,o as x,c as _,h as v}from"./entry.HEvRTU0Z.js";import{r as I,_ as g}from"./_plugin-vue_export-helper.wFPdmEV4.js";const z=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){m(e=>({efdb04fa:p.value}));const t=d(),s=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),c=a(()=>I(l.value)),p=a(()=>{var o,r;const e=(r=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,o,r;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),_("span",{style:v({width:i.value,height:i.value})},null,4))}}),C=g(z,[["__scopeId","data-v-41e8d397"]]);export{C as default};

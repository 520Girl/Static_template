import{t as a}from"./toast-chunk.js";async function e(o){if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),a.open({type:"positive",message:"Copied to clipboard!"}),!0}catch(r){return console.warn("Copy failed",r),!1}}export{e as c};
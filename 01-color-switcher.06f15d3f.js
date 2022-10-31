const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let n=null;t.addEventListener("click",(()=>{n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;r.style.background=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.06f15d3f.js.map

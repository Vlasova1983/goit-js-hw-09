!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),c=null;t.addEventListener("click",(function(){c=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.background=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(c)}))}();
//# sourceMappingURL=01-color-switcher.89d7428b.js.map
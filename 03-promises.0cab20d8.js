!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u={form:document.querySelector(".form"),delay:document.querySelector('[name ="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}u.form.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(u.amount.value),t=Number(u.delay.value),r=Number(u.step.value),l=t,c=1;c<o+1;c+=1)a(c,l).then((function(n){var o=n.position,t=n.delay;e(i).Notify.info("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.info("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),l+=r}))}();
//# sourceMappingURL=03-promises.0cab20d8.js.map
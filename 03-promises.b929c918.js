function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l={form:document.querySelector(".form"),delay:document.querySelector('[name ="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function u(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}l.form.addEventListener("submit",(function(o){o.preventDefault();const t=Number(l.amount.value),n=Number(l.delay.value),r=Number(l.step.value);let a=n;for(let o=1;o<t+1;o+=1)u(o,a).then((({position:o,delay:t})=>{e(i).Notify.info(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.info(`❌ Rejected promise ${o} in ${t}ms`)})),a+=r}));
//# sourceMappingURL=03-promises.b929c918.js.map
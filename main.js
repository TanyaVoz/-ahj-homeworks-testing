(()=>{"use strict";const e=document.querySelector('[data-widget="card-num-form-widget"]'),t=e.querySelector('[data-id="card-num-input"]'),a=e.querySelector('[data-id="card-num-submit"]'),s=document.querySelector(".message"),c=document.querySelectorAll(".card");a.addEventListener("click",(a=>{a.preventDefault(),[...c].forEach((e=>{e.classList.contains("card-active")&&e.classList.remove("card-active")}));const r=function(e){if(/[^0-9-\s]+/.test(e)||e.length<13)return!1;let t=0;for(let a=0;a<e.length;a++){let s=parseInt(e[a],10);(e.length-a)%2==0&&(s*=2,s>9&&(s-=9)),t+=s}return 0!==t&&t%10==0}(t.value);if(r){s.classList.add("hidden"),t.classList.remove("invalid"),t.classList.add("valid");const a=(d=t.value,/^4/.test(d)?".card-visa":/^5[1-5]/.test(d)?".card-master":/^3[47]/.test(d)?".card-american":/^2/.test(d)?".card-mir":null),c=document.querySelector(a);c?(c.classList.add("card-active"),e.reset()):s.classList.remove("hidden")}else s.classList.remove("hidden"),t.classList.remove("valid"),t.classList.add("invalid");var d}))})();
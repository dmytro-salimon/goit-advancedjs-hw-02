import"./assets/styles-DD3qoKza.js";import{i}from"./assets/vendor-Dov3POoy.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".form");s.addEventListener("submit",r=>{r.preventDefault();const o=s.elements.delay,n=s.elements.state.value,e=parseInt(o.value,10);if(o.value="",isNaN(e)||e<0){i.error({title:"Error",message:"Please enter a valid delay in milliseconds.",position:"topRight"});return}new Promise((t,l)=>{setTimeout(()=>{n==="fulfilled"?t(e):l(e)},e)}).then(t=>{i.success({title:"✅ Success",message:`Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{i.error({title:"❌ Error",message:`Rejected promise in ${t}ms`,position:"topRight"})})})});
//# sourceMappingURL=2-snackbar.js.map

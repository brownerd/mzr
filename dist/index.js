module.exports=(()=>{const t=document.querySelector("[data-mzr]");if(null!=t){const e=t.textContent.split("");t.dataset.mzr.split("/").reverse().forEach(t=>{e.splice(t,0,"|")});const o=e.join("").split("|"),n=o.map((t,e)=>`<span style="background-color: hsl(${(e+1)/o.length*360+240}, 100%, 50%); color: black;">${t}</span>`).join("");t.innerHTML=n}});
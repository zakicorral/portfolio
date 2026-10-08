document.addEventListener("DOMContentLoaded",()=>{
const body=document.body,gateway=document.getElementById("gateway"),note=document.getElementById("route-note");
body.classList.add("lock");
const routes={
hire:{label:"PROFILE MODE / HIRING",hero:"Skills, experience and the person behind the CV.",focus:["about","skills","experience","focus","contact"]},
collab:{label:"PROFILE MODE / COLLABORATION",hero:"Creative work, communication and practical problem-solving.",focus:["about","skills","experience","focus","contact"]},
curious:{label:"PROFILE MODE / PERSONAL",hero:"The professional profile — with some of the person left in it.",focus:["about","focus","personality","principles","contact"]},
explore:{label:"PROFILE MODE / COMPLETE VIEW",hero:"The complete profile.",focus:["about","skills","experience","focus","personality","principles","contact"]}
};
document.querySelectorAll(".routes button").forEach(btn=>btn.addEventListener("click",()=>openRoute(btn.dataset.route)));
document.getElementById("skip").addEventListener("click",()=>openRoute("explore"));
function openRoute(key){
const r=routes[key]||routes.explore;
gateway.classList.add("done");body.classList.remove("lock");note.textContent=r.label;
document.querySelector(".hero h1").innerHTML=r.hero;
setTimeout(()=>gateway.remove(),750);
}
const reveal=document.querySelectorAll(".skill-grid article,.timeline article,.facts div,.focus-copy,.focus-console,.principles-grid article");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
reveal.forEach((el,i)=>{el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .65s ease "+i*35+"ms,transform .65s ease "+i*35+"ms";io.observe(el)});
const s=document.createElement("style");s.textContent=".show{opacity:1!important;transform:none!important}";document.head.appendChild(s);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
});
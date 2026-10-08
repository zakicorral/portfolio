document.addEventListener("DOMContentLoaded",()=>{
const body=document.body,gateway=document.getElementById("gateway"),mode=document.getElementById("mode-chip"),label=document.getElementById("mode-label"),title=document.getElementById("hero-title"),intro=document.getElementById("hero-intro");
const routes={
 hire:{cls:"mode-hire",mode:"HIRING VIEW",label:"Built for recruiters & employers",title:"A flexible<br><em>problem-solver.</em>",intro:"Digital design, video, communication, adaptability and practical experience — with a CV ready when you want the full picture."},
 collab:{cls:"mode-collab",mode:"COLLAB VIEW",label:"Built for people with ideas",title:"Bring an idea.<br><em>Let's build it.</em>",intro:"Creative work, communication and a practical mindset. If there is a useful idea to make real, that's where I want to start."},
 curious:{cls:"mode-curious",mode:"PERSONAL VIEW",label:"Built for the curious",title:"There's more<br><em>than the CV.</em>",intro:"Languages, military interests, games, cultures, sport, films, horse riding — and a naturally random way of thinking."},
 explore:{cls:"mode-explore",mode:"COMPLETE VIEW",label:"Full profile / Spain",title:"People first.<br><em>Ideas second.</em><br>Make it real.",intro:"I'm Zaki Corral — multilingual, adaptable and creative, working across digital design, video, communication, coordination and technology."}
};
document.querySelectorAll(".routes button").forEach(b=>b.addEventListener("click",()=>open(b.dataset.route)));
function open(key){
const r=routes[key]||routes.explore;
body.classList.remove("mode-hire","mode-collab","mode-curious","mode-explore");body.classList.add(r.cls);
mode.textContent=r.mode;label.textContent=r.label;title.innerHTML=r.title;intro.textContent=r.intro;
gateway.classList.add("done");body.classList.remove("lock");
setTimeout(()=>gateway.remove(),750);
}
const reveal=document.querySelectorAll(".visual-tile,.experience-cards article,.about-visual,.radar,.interest-cloud span,.principle-strip div");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
reveal.forEach((el,i)=>{el.style.opacity="0";el.style.transform="translateY(20px)";el.style.transition="opacity .55s ease "+i*35+"ms,transform .55s ease "+i*35+"ms";io.observe(el)});
const st=document.createElement("style");st.textContent=".show{opacity:1!important;transform:none!important}";document.head.appendChild(st);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
});
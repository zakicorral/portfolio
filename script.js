document.addEventListener("DOMContentLoaded",()=>{
const body=document.body,gateway=document.getElementById("gateway"),mode=document.getElementById("mode-chip"),label=document.getElementById("mode-label"),title=document.getElementById("hero-title"),intro=document.getElementById("hero-intro"),dockTitle=document.getElementById("dock-title"),dockCopy=document.getElementById("dock-copy"),dockLinks=document.getElementById("dock-links");
const routes={
 hire:{cls:"mode-hire",mode:"HIRING VIEW",label:"Built for recruiters & employers",title:"A flexible<br><em>problem-solver.</em>",intro:"Digital design, video, communication, adaptability and practical experience — with the CV and professional links one click away.",dock:"Recruiter access",dockCopy:"CV, professional profile, creative strengths and direct links.",links:["<a href=\"CV.pdf\" target=\"_blank\">CV ↗</a>","<a href=\"https://www.linkedin.com/in/zakicorral/\" target=\"_blank\" rel=\"noopener\">LinkedIn ↗</a>","<a href=\"https://www.instagram.com/zaa__k.i/?__d=1%2F\" target=\"_blank\" rel=\"noopener\">Instagram ↗</a>"],word:"READY",sub:"cv · skills · links",code:"RECRUIT / 01",cta:"See my profile ↓"},
 collab:{cls:"mode-collab",mode:"COLLAB VIEW",label:"Built for people with ideas",title:"Bring an idea.<br><em>Let's build it.</em>",intro:"Creative work, communication and a practical mindset. If there is a useful idea to make real, this route shows what I can bring.",dock:"Creative access",dockCopy:"What I make, how I work and where collaboration starts.",links:["<a href=\"https://www.instagram.com/zaa__k.i/?__d=1%2F\" target=\"_blank\" rel=\"noopener\">Instagram ↗</a>","<a href=\"https://www.linkedin.com/in/zakicorral/\" target=\"_blank\" rel=\"noopener\">LinkedIn ↗</a>","<a href=\"CV.pdf\" target=\"_blank\">CV ↗</a>"],word:"MAKE",sub:"ideas · media · people",code:"COLLAB / 02",cta:"See what I bring ↓"},
 curious:{cls:"mode-curious",mode:"PERSONAL VIEW",label:"Built for the curious",title:"There's more<br><em>than the CV.</em>",intro:"Languages, military interests, games, cultures, sport, films, horse riding — and a naturally random way of thinking.",dock:"Personal access",dockCopy:"Interests, principles, learning goals and the person behind the work.",links:["<a href=\"https://www.instagram.com/zaa__k.i/?__d=1%2F\" target=\"_blank\" rel=\"noopener\">Instagram ↗</a>","<a href=\"https://www.linkedin.com/in/zakicorral/\" target=\"_blank\" rel=\"noopener\">LinkedIn ↗</a>"],word:"PERSON",sub:"interests · mindset · life",code:"PERSON / 03",cta:"Get to know me ↓"},
 explore:{cls:"mode-explore",mode:"COMPLETE VIEW",label:"Full profile / Spain",title:"People first.<br><em>Ideas second.</em><br>Make it real.",intro:"I'm Zaki Corral — multilingual, adaptable and creative, working across digital design, video, communication, coordination and technology.",dock:"Complete access",dockCopy:"The full portfolio: professional, creative and personal.",links:["<a href=\"CV.pdf\" target=\"_blank\">CV ↗</a>","<a href=\"https://www.linkedin.com/in/zakicorral/\" target=\"_blank\" rel=\"noopener\">LinkedIn ↗</a>","<a href=\"https://www.instagram.com/zaa__k.i/?__d=1%2F\" target=\"_blank\" rel=\"noopener\">Instagram ↗</a>"],word:"ADAPT",sub:"learn · create · solve",code:"PROFILE / 01",cta:"Explore everything ↓"}
};
document.querySelectorAll(".routes button").forEach(b=>b.addEventListener("click",()=>open(b.dataset.route)));
function open(key){
const r=routes[key]||routes.explore;
body.classList.remove("mode-hire","mode-collab","mode-curious","mode-explore");body.classList.add(r.cls);
mode.textContent=r.mode;label.textContent=r.label;title.innerHTML=r.title;intro.textContent=r.intro;dockTitle.textContent=r.dock;dockCopy.textContent=r.dockCopy;dockLinks.innerHTML=r.links.join("");window.scrollTo({top:0,behavior:"instant"});
gateway.classList.add("done");body.classList.remove("lock");document.documentElement.classList.add("route-active");
setTimeout(()=>gateway.remove(),750);
}
const reveal=document.querySelectorAll(".visual-tile,.experience-cards article,.about-visual,.radar,.interest-cloud span,.principle-strip div,.social-card,.route-dock");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
reveal.forEach((el,i)=>{el.style.opacity="0";el.style.transform="translateY(20px)";el.style.transition="opacity .55s ease "+i*35+"ms,transform .55s ease "+i*35+"ms";io.observe(el)});
const st=document.createElement("style");st.textContent=".show{opacity:1!important;transform:none!important}";document.head.appendChild(st);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
});
document.querySelectorAll(".nav a[href^=\"#\"],.actions a[href^=\"#\"],.contact-action[href^=\"#\"]").forEach(a=>{
 a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href"));
  if(!target)return;
  e.preventDefault();
  target.scrollIntoView({behavior:"smooth",block:"start"});
 });
});

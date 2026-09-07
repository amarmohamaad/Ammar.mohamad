const certificates=[
["01","Microsoft","Introduction to C++ Programming","Professional Certificate","https://coursera.org/verify/professional-cert/LP6PXRP69JLV"],
["02","Microsoft / C++","Programming in C++","Certificate","https://coursera.org/verify/8ZB8B46F6HM6"],
["03","Google","AI Fundamentals","Specialization","https://coursera.org/verify/specialization/6N4CO3G4ZUU7"],
["04","Google","Accelerate Your Job Search with AI","Certificate","https://coursera.org/verify/C3BL4TP5OIQZ"],
["05","Microsoft","Success at Work · AI Skills Festival 2026","LinkedIn verification","https://www.linkedin.com/in/%D8%B9%D9%85%D8%A7%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-ba4823394"],
["06","Edraak","Introduction to AI & Generative AI","Certificate","https://programs.edraak.org/learn/verify-certificate/ab69051cb62640199b3689cd9fb1f045/?lang=ar"],
["07","DeepLearning.AI","AI for Everyone","LinkedIn verification","https://www.linkedin.com/in/%D8%B9%D9%85%D8%A7%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-ba4823394"],
["08","Dubai AI","One Million AI Experts","Certificate","https://omp.dub.ai/certificate/IIHDEru4NE"]
];
const grid=document.getElementById("certGrid");
grid.innerHTML=certificates.map(c=>`<article class="cert-card reveal"><span class="num">${c[0]}</span><span class="provider">${c[1]}</span><h3>${c[2]}</h3><p>${c[3]}</p><a class="verify" target="_blank" rel="noopener" href="${c[4]}">تحقق من الشهادة <b>↗</b></a></article>`).join("");

const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),700));

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

const roles=["Engineering","Programming","IT","Artificial Intelligence"];
let ri=0; const role=document.getElementById("rotatingRole");
setInterval(()=>{role.style.opacity=0;setTimeout(()=>{ri=(ri+1)%roles.length;role.textContent=roles[ri];role.style.opacity=1},180)},2300);

const menuBtn=document.getElementById("menuBtn"), mobile=document.getElementById("mobileMenu");
menuBtn.addEventListener("click",()=>mobile.classList.toggle("open"));
mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));

const translations={
nav:["About","Skills","Certificates","Work","Contact"],
title:"Ammar Mohammad",
role:"Communications & Electronics Engineering Student",
aboutTitle:"Who am I?",
aboutText:"I am Ammar Mohammad, a Communications and Electronics Engineering student passionate about technology, programming and artificial intelligence. I continuously develop my academic and practical knowledge while turning knowledge into valuable digital projects, initiatives and experiments.",
skillsTitle:"What do I build?",
certTitle:"08 Verified Credentials",
workTitle:"My Work",
contactTitle:"Let's build something valuable."
};
let en=false;
document.getElementById("langBtn").addEventListener("click",()=>{
  en=!en;
  document.documentElement.lang=en?"en":"ar";
  document.documentElement.dir=en?"ltr":"rtl";
  document.getElementById("langBtn").textContent=en?"AR":"EN";
  if(en){
    document.querySelectorAll(".nav-links a").forEach((a,i)=>a.textContent=translations.nav[i]);
    document.querySelectorAll(".mobile-menu a").forEach((a,i)=>a.textContent=translations.nav[i]);
    document.querySelector("h1").innerHTML="Ammar <span>Mohammad</span>";
    document.querySelector(".role-line>span").textContent=translations.role;
    document.querySelector(".hero-text").textContent="I turn technical knowledge into valuable projects and digital experiences, building my path at the intersection of engineering, programming, IT and artificial intelligence.";
    document.querySelector("#about h2").textContent=translations.aboutTitle;
    document.querySelector(".about-main p").textContent=translations.aboutText;
    document.querySelector("#skills h2").textContent=translations.skillsTitle;
    document.querySelector("#certificates h2").textContent=translations.certTitle;
    document.querySelector("#work h2").textContent=translations.workTitle;
    document.querySelector("#contact h2").innerHTML="Let’s build something<br><span>valuable.</span>";
  }else location.reload();
});

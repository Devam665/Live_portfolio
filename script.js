/* =========================================================
   DEVAMJITSINH BHATI — PORTFOLIO MAIN SCRIPT
   Clean rewrite — no apostrophes in strings, safe regex
   ========================================================= */

// ── CURSOR ──
(function(){
  var cursor = document.getElementById("cursor");
  var trail  = document.getElementById("trail");
  if(!cursor) return;
  var mx=0,my=0,tx=0,ty=0;
  document.addEventListener("mousemove",function(e){
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+"px"; cursor.style.top=my+"px";
  });
  setInterval(function(){
    tx+=(mx-tx)*.15; ty+=(my-ty)*.15;
    trail.style.left=tx+"px"; trail.style.top=ty+"px";
  },16);
  document.querySelectorAll("a,.comp-pill,.chip,.social-pill,.cert-item").forEach(function(el){
    el.addEventListener("mouseenter",function(){ cursor.style.transform="translate(-50%,-50%) scale(2.5)"; trail.style.transform="translate(-50%,-50%) scale(1.6)"; });
    el.addEventListener("mouseleave",function(){ cursor.style.transform="translate(-50%,-50%) scale(1)"; trail.style.transform="translate(-50%,-50%) scale(1)"; });
  });
})();

// ── SCROLL PROGRESS ──
(function(){
  var pbar = document.getElementById("pbar");
  if(!pbar) return;
  window.addEventListener("scroll",function(){
    var pct = window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;
    pbar.style.width = pct+"%";
  },{passive:true});
})();

// ── MARQUEE ──
(function(){
  var track = document.getElementById("marquee");
  if(!track) return;
  var items=["Power BI","Python","SQL","DAX","EDA","Data Modelling","Power Query","Pandas","NumPy","MySQL","ETL Pipelines","KPI Design","Statistical Analysis","Correlation","Jupyter","VS Code","Git","Excel","Seaborn"];
  items.concat(items).forEach(function(t){
    var d=document.createElement("div");
    d.className="marquee-item";
    d.innerHTML='<span class="m-dot"></span>'+t;
    track.appendChild(d);
  });
})();

// ── HEATMAP ──
(function(){
  var wrap=document.getElementById("heatmapGrid");
  if(!wrap) return;
  var months=[["Jul",0],["Aug",4],["Sep",8],["Oct",13],["Nov",17],["Dec",21],["Jan",26],["Feb",30],["Mar",34],["Apr",38],["May",43],["Jun",47]];
  var dayLabels=["","Mon","","Wed","","Fri",""];
  var CELL=11,GAP=3;
  var dots={9:{1:4},33:{1:4},34:{1:4,3:3},38:{5:2},43:{3:3},47:{1:4},48:{5:3}};
  var inner=document.createElement("div"); inner.className="hm-inner";
  // Month row
  var mRow=document.createElement("div"); mRow.className="hm-month-row";
  months.forEach(function(m){
    var s=document.createElement("span"); s.className="hm-month-lbl";
    s.textContent=m[0]; s.style.width=(4*(CELL+GAP))+"px"; s.style.display="inline-block";
    mRow.appendChild(s);
  });
  inner.appendChild(mRow);
  // Grid
  var gridRow=document.createElement("div"); gridRow.className="hm-grid-row";
  var dayCol=document.createElement("div"); dayCol.className="hm-day-col";
  dayLabels.forEach(function(d){ var s=document.createElement("span"); s.textContent=d; dayCol.appendChild(s); });
  gridRow.appendChild(dayCol);
  var weeksDiv=document.createElement("div"); weeksDiv.className="hm-weeks-grid";
  for(var w=0;w<52;w++){
    var col=document.createElement("div"); col.className="hm-week";
    for(var d=0;d<7;d++){
      var cell=document.createElement("div");
      var lvl=(dots[w]&&dots[w][d])||0;
      cell.className="hm-cell hm-"+lvl;
      cell.title=lvl===0?"No contributions":lvl+" contribution"+(lvl>1?"s":"");
      col.appendChild(cell);
    }
    weeksDiv.appendChild(col);
  }
  gridRow.appendChild(weeksDiv);
  inner.appendChild(gridRow);
  // Footer
  var footer=document.createElement("div"); footer.className="hm-footer";
  footer.innerHTML='<a href="https://github.com/Devam665" target="_blank" class="hm-learn">Learn how we count contributions</a><div class="hm-legend"><span class="hm-leg-label">Less</span><div class="hm-cell hm-0"></div><div class="hm-cell hm-1"></div><div class="hm-cell hm-2"></div><div class="hm-cell hm-3"></div><div class="hm-cell hm-4"></div><span class="hm-leg-label">More</span></div>';
  inner.appendChild(footer);
  wrap.appendChild(inner);
})();

// ── ORB BARS (hero visual) ──
(function(){
  var ob=document.getElementById("orbBars");
  if(!ob) return;
  [30,55,42,70,58,90,68,100,76,48].forEach(function(h,i){
    var d=document.createElement("div");
    d.style.height=h+"%"; d.style.animationDelay=(i*.06)+"s";
    ob.appendChild(d);
  });
})();

// ── NAVIGATION ──
function navTo(id){
  var el=document.getElementById(id);
  if(!el) return;
  var nav=document.querySelector("nav");
  var navH=nav?nav.offsetHeight:64;
  var top=el.getBoundingClientRect().top+window.pageYOffset-navH-8;
  window.scrollTo({top:top,behavior:"smooth"});
}
(function(){
  function bind(){
    document.querySelectorAll("[data-nav]").forEach(function(link){
      link.addEventListener("click",function(e){ e.preventDefault(); navTo(link.getAttribute("data-nav")); });
    });
  }
  if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded",bind); } else { bind(); }
})();

// ── THEME TOGGLE ──
(function(){
  var tb=document.getElementById("themeToggle");
  if(!tb) return;
  tb.addEventListener("click",function(){
    document.body.classList.toggle("light");
    tb.textContent=document.body.classList.contains("light")?"🌙":"☀";
  });
})();

// ── TOAST ──
function showToast(msg){
  var t=document.getElementById("toast");
  if(!t) return;
  t.textContent=msg;
  t.classList.add("show");
  setTimeout(function(){ t.classList.remove("show"); },2800);
}

// ── COPY EMAIL ──
function copyEmail(){
  navigator.clipboard.writeText("bhatidevamjit1776@gmail.com").then(function(){
    showToast("Email copied to clipboard!");
  }).catch(function(){ showToast("bhatidevamjit1776@gmail.com"); });
}

// ── SECTION SIDEBAR ──
(function(){
  var sections=["hero","about","services","skills","timeline","projects","github","education","contact"];
  var dots=document.querySelectorAll(".sn-dot");
  if(!dots.length) return;
  function update(){
    var scrollY=window.scrollY+window.innerHeight/2;
    var active="hero";
    sections.forEach(function(id){ var el=document.getElementById(id); if(el&&el.offsetTop<=scrollY) active=id; });
    dots.forEach(function(d){ d.classList.toggle("active",d.getAttribute("data-section")===active); });
  }
  window.addEventListener("scroll",update,{passive:true});
  update();
  dots.forEach(function(d){ d.addEventListener("click",function(){ navTo(d.getAttribute("data-section")); }); });
})();

// ── REVEAL ON SCROLL ──
(function(){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add("in"); });
  },{threshold:0.12});
  document.querySelectorAll(".reveal,.reveal-stagger,.about-visual").forEach(function(el){ io.observe(el); });
})();

// ── COUNTER ANIMATION ──
(function(){
  var cio=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target, target=+el.dataset.target;
      var start=0,dur=1800,step=16;
      var t=setInterval(function(){
        start+=target/(dur/step);
        el.textContent=Math.min(Math.floor(start),target);
        if(start>=target){ el.textContent=target; clearInterval(t); }
      },step);
      cio.unobserve(el);
    });
  },{threshold:0.5});
  document.querySelectorAll(".counter").forEach(function(el){ cio.observe(el); });
})();

// ── TYPEWRITER ──
(function(){
  var roles=["Data Analyst","Power BI Expert","Python Developer","SQL Specialist","BI Dashboard Builder","DAX Engineer","Data Storyteller","ETL Pipeline Builder","Excel Power User","Business Intelligence Pro"];
  var TYPE=85,DEL=42,PAUSE=1800;
  var ri=0,ci=0,deleting=false,paused=false;
  function run(){
    var el=document.getElementById("typedRole");
    if(!el){ setTimeout(run,200); return; }
    if(paused) return;
    var cur=roles[ri];
    if(!deleting){
      ci++; el.textContent=cur.slice(0,ci);
      if(ci===cur.length){ paused=true; setTimeout(function(){ paused=false; deleting=true; setTimeout(run,300); },PAUSE); return; }
      setTimeout(run,TYPE+Math.random()*25);
    } else {
      ci--; el.textContent=cur.slice(0,ci);
      if(ci===0){ deleting=false; ri=(ri+1)%roles.length; setTimeout(run,380); return; }
      setTimeout(run,DEL);
    }
  }
  if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded",function(){ setTimeout(run,800); }); }
  else { setTimeout(run,800); }
})();

// ── RADAR CHART ──
(function(){
  var svg=document.getElementById("radarSvg");
  if(!svg) return;
  var NS="http://www.w3.org/2000/svg";
  var cx=160,cy=160,r=114;
  var skills=[
    {label:"Power BI",   val:0.92},{label:"DAX",          val:0.88},
    {label:"Power Query",val:0.85},{label:"Python",        val:0.88},
    {label:"Pandas",     val:0.86},{label:"SQL",           val:0.85},
    {label:"Data Model", val:0.83},{label:"ETL",           val:0.82},
    {label:"Excel",      val:0.87},{label:"Statistics",    val:0.80}
  ];
  var n=skills.length;
  function pt(i,radius){
    var a=(2*Math.PI*i/n)-Math.PI/2;
    return {x:cx+radius*Math.cos(a),y:cy+radius*Math.sin(a)};
  }
  function pStr(radius){
    return skills.map(function(_,i){ var p=pt(i,radius); return p.x.toFixed(2)+","+p.y.toFixed(2); }).join(" ");
  }
  // Rings
  [0.25,0.5,0.75,1].forEach(function(f){
    var p=document.createElementNS(NS,"polygon");
    p.setAttribute("points",pStr(r*f)); p.setAttribute("fill","none");
    p.setAttribute("stroke","rgba(38,45,56,1)"); p.setAttribute("stroke-width","1");
    svg.appendChild(p);
  });
  // Axes
  skills.forEach(function(_,i){
    var pt2=pt(i,r);
    var l=document.createElementNS(NS,"line");
    l.setAttribute("x1",cx); l.setAttribute("y1",cy);
    l.setAttribute("x2",pt2.x.toFixed(2)); l.setAttribute("y2",pt2.y.toFixed(2));
    l.setAttribute("stroke","rgba(38,45,56,1)"); l.setAttribute("stroke-width","1");
    svg.appendChild(l);
  });
  // Filled area
  var area=document.createElementNS(NS,"polygon");
  area.setAttribute("points",pStr(0));
  area.setAttribute("fill","rgba(43,168,154,0.18)");
  area.setAttribute("stroke","#2BA89A"); area.setAttribute("stroke-width","1.5");
  svg.appendChild(area);
  // Dots
  var circArr=skills.map(function(_,i){
    var p=pt(i,0);
    var c=document.createElementNS(NS,"circle");
    c.setAttribute("cx",p.x.toFixed(2)); c.setAttribute("cy",p.y.toFixed(2));
    c.setAttribute("r","5"); c.setAttribute("fill","#E8A33D");
    c.setAttribute("stroke","#0A0D13"); c.setAttribute("stroke-width","2");
    svg.appendChild(c);
    return c;
  });
  // Labels
  skills.forEach(function(s,i){
    var p=pt(i,r+24);
    var txt=document.createElementNS(NS,"text");
    txt.setAttribute("x",p.x.toFixed(2)); txt.setAttribute("y",(p.y+4).toFixed(2));
    txt.setAttribute("text-anchor","middle");
    txt.setAttribute("font-family","JetBrains Mono,monospace");
    txt.setAttribute("font-size","10"); txt.setAttribute("fill","#7A869C");
    txt.textContent=s.label;
    svg.appendChild(txt);
  });
  // Animate with JS (not CSS transition — SVG polygon points not animatable via CSS)
  var animated=false;
  function animateRadar(){
    if(animated) return; animated=true;
    var steps=60, step=0;
    var finalPts=skills.map(function(s,i){ return pt(i,r*s.val); });
    var timer=setInterval(function(){
      step++;
      var progress=step/steps;
      // ease out cubic
      var ease=1-Math.pow(1-progress,3);
      var pts=finalPts.map(function(fp,i){
        var sp=pt(i,0);
        var x=sp.x+(fp.x-sp.x)*ease;
        var y=sp.y+(fp.y-sp.y)*ease;
        circArr[i].setAttribute("cx",x.toFixed(2));
        circArr[i].setAttribute("cy",y.toFixed(2));
        return x.toFixed(2)+","+y.toFixed(2);
      }).join(" ");
      area.setAttribute("points",pts);
      if(step>=steps) clearInterval(timer);
    },16);
  }
  var rio=new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){ animateRadar(); rio.disconnect(); }
  },{threshold:0.3});
  var sec=document.getElementById("radar");
  if(sec) rio.observe(sec); else animateRadar();
})();

// ── PROJECT FILTER ──
function filterProjects(tag,btn){
  document.querySelectorAll(".fbtn").forEach(function(b){ b.classList.remove("active"); });
  btn.classList.add("active");
  document.querySelectorAll(".project[data-tags]").forEach(function(p){
    p.classList.toggle("hidden",tag!=="all"&&p.dataset.tags.indexOf(tag)===-1);
  });
}

// ── HIRE FORM — Validate then native POST to FormSubmit.co ──
function validateForm(e){
  var form = document.getElementById("hireForm");
  var name    = form.querySelector("[name=Name]").value.trim();
  var email   = form.querySelector("[name=Email]").value.trim();
  var message = form.querySelector("[name=Message]").value.trim();

  if(!name){
    showToast("Please enter your name.");
    e.preventDefault(); return false;
  }
  if(!email || email.indexOf("@") < 1){
    showToast("Please enter a valid email address.");
    e.preventDefault(); return false;
  }
  if(!message){
    showToast("Please write a message.");
    e.preventDefault(); return false;
  }
  // Validation passed — show sending state and let form POST natively
  var btn = document.getElementById("formBtn");
  var txt = document.getElementById("formBtnText");
  if(btn){ btn.disabled=true; btn.style.opacity="0.75"; }
  if(txt){ txt.textContent="Sending..."; }
  // Form will naturally POST to FormSubmit.co and redirect
  return true;
}



// ── CERT MODAL ──
(function(){
  // certs object is defined in the head script (base64 data)
  // This just wires up the modal UI
  window.openCert=function(id){
    var c=window.certs&&window.certs[id];
    if(!c) return;
    document.getElementById("certModalImg").src=c.src;
    document.getElementById("certModalTitle").textContent=c.title;
    document.getElementById("certModalSub").textContent=c.sub;
    document.getElementById("certBadge").textContent=c.badge;
    document.getElementById("certVerifyLink").textContent="Roll No: "+c.roll+" ";
    document.getElementById("certModal").classList.add("open");
    document.body.style.overflow="hidden";
  };
  window.closeCert=function(){
    document.getElementById("certModal").classList.remove("open");
    document.body.style.overflow="";
  };
  window.closeCertIfOverlay=function(e){ if(e.target.id==="certModal") closeCert(); };
  document.addEventListener("keydown",function(e){ if(e.key==="Escape") closeCert(); });
})();

// ── DATA PARTICLE CURSOR ──
(function(){
  if(window.matchMedia("(hover:none)").matches) return;
  var syms=["01","{}","->","%","#","()","[]","//","∑","↗"];
  document.addEventListener("mousemove",function(e){
    if(Math.random()>0.12) return;
    var s=document.createElement("span");
    s.textContent=syms[Math.floor(Math.random()*syms.length)];
    s.style.position="fixed";
    s.style.left=e.clientX+"px";
    s.style.top=e.clientY+"px";
    s.style.pointerEvents="none";
    s.style.zIndex="9997";
    s.style.fontFamily="monospace";
    s.style.fontSize="11px";
    s.style.color="#E8A33D";
    s.style.opacity=".7";
    s.style.transition="opacity 1s,transform 1s";
    s.style.userSelect="none";
    document.body.appendChild(s);
    setTimeout(function(){ s.style.opacity="0"; s.style.transform="translateY(-28px)"; },50);
    setTimeout(function(){ if(s.parentNode) s.parentNode.removeChild(s); },1100);
  });
})();

// ── AI CHATBOT ──
(function(){
  var btn=document.getElementById("aiChatBtn");
  var overlay=document.getElementById("chatOverlay");
  var closeBtn=document.getElementById("chatClose");
  var input=document.getElementById("chatInput");
  var sendBtn=document.getElementById("chatSend");
  var msgBox=document.getElementById("chatMessages");
  if(!btn||!overlay) return;

  // Knowledge base — double quotes only, no apostrophes
  var KB=[
    {k:["project","built","work","dashboard","ipl","job market","restaurant","portfolio"],
     a:"He has 3 projects:\n\n1. IPL Auction Intelligence Dashboard — 14 seasons, 1300+ records, Python cleaning pipeline, Power BI multi-page dashboard, custom DAX Value Index\n\n2. Job Market Intelligence Dashboard — star-schema model, 8+ DAX measures, 10+ industries\n\n3. Responsive Restaurant Website — HTML, CSS, JavaScript"},
    {k:["skill","know","tech","stack","language","tool","expert","proficient"],
     a:"Core skills:\n\nBI Tools: Power BI, DAX, Power Query, Data Modelling\nPython: Pandas, NumPy, Matplotlib, Seaborn\nDatabase: SQL, MySQL, MongoDB basics\nTools: Excel Advanced, Jupyter, VS Code, Git\nWeb: HTML, CSS, JavaScript"},
    {k:["certif","nptel","microsoft","hackerrank","course","qualification"],
     a:"4 Certifications:\n\nPython for Data Science — NPTEL, IIT Madras (Score 55%)\nPower BI for Business Apps — Microsoft Elevate (Jan 2026)\nIntro to MS Excel — Microsoft Learn (May 2026)\nSQL Intermediate — HackerRank (Jun 2026)"},
    {k:["hire","avail","job","opportunit","intern","full time","recruit","open to work"],
     a:"Yes! Devamjitsinh is actively available for internships and full-time Data Analyst or BI Developer roles. Based in Gandhinagar, Gujarat. Open to remote too. Response within 24 hours."},
    {k:["email","contact","reach","phone","linkedin","github","connect"],
     a:"Contact details:\n\nEmail: bhatidevamjit1776@gmail.com\nPhone: +91 94282 80080\nLinkedIn: bhati-devamjitsinh-karmjitsinh\nGitHub: github.com/Devam665"},
    {k:["education","university","college","degree","cgpa","grade","silver oak","bsc"],
     a:"B.Sc. IT (Computer Science)\nSilver Oak University, Ahmedabad\n2024 to 2027 — CGPA 8.5 out of 10\nClass XII: 79%, Class X: 68%\nNo active backlogs"},
    {k:["power bi","dax","bi tool","business intel","kpi","visual","report"],
     a:"Power BI is his strongest tool. He builds multi-page interactive dashboards, custom DAX measures including the Value Index, star-schema data models via Power Query, and self-service BI tools. Certified by Microsoft Elevate."},
    {k:["python","pandas","numpy","matplotlib","seaborn","eda","cleaning","analysis"],
     a:"Python skills include Pandas for data cleaning and transformation, NumPy for computation, Matplotlib and Seaborn for visualisation, and EDA including correlation and distribution analysis. Certified by NPTEL, IIT Madras."},
    {k:["sql","mysql","query","database","join","aggregate","subquery"],
     a:"SQL skills: complex joins, subqueries, window functions, aggregations, and MySQL management. HackerRank SQL Intermediate certified June 2026."},
    {k:["excel","spreadsheet","vlookup","pivot","xlookup"],
     a:"Advanced Excel skills: Pivot Tables, VLOOKUP, XLOOKUP, conditional formatting, data validation and dashboards. Microsoft Learn Excel certified May 2026."},
    {k:["ipl","cricket","auction","franchise","team","player","value index"],
     a:"IPL Auction Dashboard covers 14 seasons (2013 to 2026) with 1300+ records. Features a Pandas cleaning pipeline, Power BI dashboard with 10+ visuals, custom DAX Value Index for player valuation, and correlation analysis to find undervalued players."},
    {k:["location","where","city","state","india","remote","gandhinagar","gujarat","ahmedabad"],
     a:"Based in Gandhinagar, Gujarat, India. Open to on-site roles in India, remote opportunities worldwide, and hybrid arrangements."},
    {k:["hello","hi","hey","namaste","greet","start","help","what can"],
     a:"Hi there! I am the AI assistant for Devamjitsinh Bhati, a Data Analyst from Gujarat. Ask me about his projects, skills, certifications, availability, or how to contact him!"},
    {k:["experience","year","junior","fresher","entry","background"],
     a:"Devamjitsinh is a fresher-level Data Analyst with hands-on project experience since 2024, 4 professional certifications, and a CGPA of 8.5 out of 10 at Silver Oak University, Ahmedabad."},
    {k:["resume","cv","download"],
     a:"You can download the resume using the Download Resume button in the hero section at the top of this page, or in the Contact section at the bottom."}
  ];

  function getReply(text){
    var tl=text.toLowerCase();
    var best=null,score=0;
    KB.forEach(function(item){
      var s=0;
      item.k.forEach(function(k){ if(tl.indexOf(k)>-1) s++; });
      if(s>score){ score=s; best=item; }
    });
    if(best&&score>0) return best.a;
    return "Please reach out directly at bhatidevamjit1776@gmail.com or +91 94282 80080. Devamjitsinh responds within 24 hours!";
  }

  function addMsg(text,isUser){
    var div=document.createElement("div");
    div.className="chat-msg "+(isUser?"user":"bot");
    div.style.whiteSpace="pre-wrap";
    div.textContent=text;
    msgBox.appendChild(div);
    msgBox.scrollTop=msgBox.scrollHeight;
  }
  function showTyping(){
    var d=document.createElement("div");
    d.className="chat-typing"; d.id="chatTyping";
    d.innerHTML="<span></span><span></span><span></span>";
    msgBox.appendChild(d); msgBox.scrollTop=msgBox.scrollHeight;
  }
  function removeTyping(){ var t=document.getElementById("chatTyping"); if(t) t.remove(); }

  var isOpen=false;
  btn.addEventListener("click",function(){
    isOpen=!isOpen;
    overlay.classList.toggle("open",isOpen);
    if(isOpen&&input) setTimeout(function(){ input.focus(); },300);
  });
  if(closeBtn) closeBtn.addEventListener("click",function(){ isOpen=false; overlay.classList.remove("open"); });

  function sendMsg(text){
    text=text.trim(); if(!text) return;
    if(input) input.value="";
    addMsg(text,true);
    var q=document.getElementById("chatQuick"); if(q) q.style.display="none";
    showTyping();
    setTimeout(function(){ removeTyping(); addMsg(getReply(text),false); },500+Math.random()*500);
  }

  if(sendBtn) sendBtn.addEventListener("click",function(){ sendMsg(input?input.value:""); });
  if(input){
    input.addEventListener("keydown",function(e){
      if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); sendMsg(input.value); }
    });
    input.addEventListener("input",function(){ input.style.height="auto"; input.style.height=Math.min(input.scrollHeight,80)+"px"; });
  }
  window.askQuick=function(q){ sendMsg(q); };
})();

// ── ANALYTICS TRACKER ──
(function(){
  var KEY_V="devam_pf_views", KEY_U="devam_pf_unique", KEY_S="devam_pf_session";
  var KEY_T="devam_pf_today", KEY_D="devam_pf_date";
  var today=new Date().toISOString().slice(0,10);
  var views=parseInt(localStorage.getItem(KEY_V)||"0")+1;
  localStorage.setItem(KEY_V,views);
  var unique=parseInt(localStorage.getItem(KEY_U)||"0");
  if(!localStorage.getItem(KEY_S)){ unique++; localStorage.setItem(KEY_U,unique); localStorage.setItem(KEY_S,"1"); }
  var todayV=localStorage.getItem(KEY_D)!==today?0:parseInt(localStorage.getItem(KEY_T)||"0");
  todayV++;
  localStorage.setItem(KEY_T,todayV); localStorage.setItem(KEY_D,today);
  function animN(el,target){
    if(!el) return;
    var start=0,inc=target/75;
    var t=setInterval(function(){
      start=Math.min(start+inc,target);
      el.textContent=Math.floor(start);
      if(start>=target){ el.textContent=target; clearInterval(t); }
    },16);
  }
  var fio=new IntersectionObserver(function(entries){
    if(!entries[0].isIntersecting) return;
    animN(document.getElementById("an-total"),views);
    animN(document.getElementById("an-unique"),unique);
    animN(document.getElementById("an-today"),todayV);
    fio.disconnect();
  },{threshold:0.5});
  var footer=document.querySelector("footer");
  if(footer) fio.observe(footer);
  // Live counter flicker
  var liveEl=document.getElementById("an-live");
  if(liveEl){
    var base=1;
    setInterval(function(){ var r=Math.random(); if(r>.88) base=Math.min(base+1,3); else if(r<.08&&base>1) base--; liveEl.textContent=base; },8000);
  }
})();


// ── HIRE FORM — Web3Forms (free, no confirmation needed) ──
// Get your free access key: https://web3forms.com → enter bhatidevamjit1776@gmail.com → Copy key
var W3F_KEY = "YOUR_WEB3FORMS_KEY"; // ← replace after getting key from web3forms.com

function submitHireForm(e) {
  e.preventDefault();

  var name    = document.getElementById("f_name")    ? document.getElementById("f_name").value.trim()    : "";
  var email   = document.getElementById("f_email")   ? document.getElementById("f_email").value.trim()   : "";
  var company = document.getElementById("f_company") ? document.getElementById("f_company").value.trim() : "";
  var type    = document.getElementById("f_type")    ? document.getElementById("f_type").value            : "Other";
  var message = document.getElementById("f_message") ? document.getElementById("f_message").value.trim() : "";

  var success = document.getElementById("formSuccess");
  var error   = document.getElementById("formError");
  var btn     = document.getElementById("formBtn");
  var txt     = document.getElementById("formBtnText");

  // Hide banners
  if(success) success.style.display = "none";
  if(error)   error.style.display   = "none";

  // Validate
  if(!name)    { showToast("Please enter your name.");          return; }
  if(!email || email.indexOf("@") < 1) { showToast("Please enter a valid email."); return; }
  if(!message) { showToast("Please write a message.");          return; }

  // Show loading
  if(btn) btn.disabled = true;
  if(txt) txt.textContent = "Sending...";

  // Web3Forms API (no confirmation email needed)
  var data = {
    access_key:       W3F_KEY,
    subject:          "Portfolio Enquiry: " + type + " from " + name,
    from_name:        "Portfolio Contact Form",
    name:             name,
    email:            email,
    company:          company || "Not provided",
    opportunity_type: type,
    message:          message,
    botcheck:         ""
  };

  if(W3F_KEY === "YOUR_WEB3FORMS_KEY") {
    // Key not set yet — use mailto fallback
    var sub  = encodeURIComponent("Portfolio Enquiry from " + name);
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nCompany: " + company + "\nType: " + type + "\n\nMessage:\n" + message);
    window.open("mailto:bhatidevamjit1776@gmail.com?subject=" + sub + "&body=" + body, "_blank");
    if(btn) btn.disabled = false;
    if(txt) txt.textContent = "Send Message ✉";
    showToast("Opening your email app...");
    return;
  }

  fetch("https://api.web3forms.com/submit", {
    method:  "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body:    JSON.stringify(data)
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if(res.success) {
      if(success) { success.style.display = "flex"; }
      if(btn) { btn.style.background = "#22c55e"; }
      if(txt) { txt.textContent = "Sent!"; }
      showToast("Message sent! Devamjitsinh will reply within 24 hrs.");
      document.getElementById("hireForm").reset();
      setTimeout(function() {
        if(btn) { btn.disabled = false; btn.style.background = ""; }
        if(txt) { txt.textContent = "Send Message ✉"; }
        if(success) success.style.display = "none";
      }, 5000);
    } else {
      throw new Error("Web3Forms error");
    }
  })
  .catch(function() {
    if(error)   error.style.display   = "flex";
    if(btn)   { btn.disabled = false; }
    if(txt)   { txt.textContent = "Send Message ✉"; }
    showToast("Failed to send. Please email directly.");
  });
}
import { useEffect, useRef, useState } from "react";

// ══════════════════════════════════════════════════════════
//  ✦  RESUME DATA
// ══════════════════════════════════════════════════════════
const DATA = {
  name:         "Rohit Rathaur",
  role:         "Frontend Developer",
  tagline:      "React.js Specialist & Smart City Engineer",
  location:     "Greater Noida, India",
  email:        "rohitrathaur72@gmail.com",
  phone:        "+91-9650528875",
  linkedin:     "linkedin.com/in/rohit-r-844971235",
  github:       "github.com/RohitRathaur123",
  linkedinHref: "https://www.linkedin.com/in/rohit-r-844971235/",
  githubHref:   "https://github.com/RohitRathaur123",
  summary:
    "Frontend Developer with 2+ years specialising in React.js and modern JavaScript frameworks. IBM Certified Full Stack Developer building high-performance Smart City platforms, real-time dashboards, and geospatial UIs serving 5,000+ daily users. Adept at performance optimisation and Agile delivery.",

  stats: [
    { val:"2+",   label:"Years Experience" },
    { val:"5K+",  label:"Daily Active Users" },
    { val:"40%",  label:"API Speed Boost" },
    { val:"100+", label:"Concurrent Streams" },
  ],

  skills: [
    { cat:"Frontend & UI",  icon:"⚛", items:["React.js","JavaScript ES6","HTML5","CSS3","Tailwind CSS","Bootstrap","Material UI","D3.js"] },
    { cat:"3D & Creative",  icon:"🎲", items:["Three.js","WebGL","3D Modelling","Wireframe Rendering","Particle Systems","GSAP Animations","Canvas API","Interactive Scenes"] },
    { cat:"Backend & APIs", icon:"⚙", items:["Node.js","Express.js","REST APIs","Axios","Django","Python","Java"] },
    { cat:"Cloud & DevOps", icon:"☁", items:["Docker","Kubernetes","OpenShift","CI/CD","Git","GitHub","Microservices","Serverless"] },
    { cat:"Databases",      icon:"🗄", items:["MongoDB","SQL","NoSQL","Django ORM"] },
    { cat:"Data Viz",       icon:"📊", items:["D3.js","Leaflet.js","Geospatial","Real-time Charts"] },
    { cat:"Architecture",   icon:"🏗", items:["Context API","Lazy Loading","Code Splitting","SaaS","Agile"] },
  ],

  experience: [
    {
      period:"Jan 2025 — Present", company:"Ajeevi Technologies Pvt Ltd",
      badge:"Full-Time", badgeColor:"#0ea5e9", location:"Noida, India",
      role:"Junior Software Engineer",
      projects:[
        { name:"SwachhAJV & ParkAJV — Smart City Platforms", bullets:[
          "Engineered React.js Smart City platforms with REST APIs, Tailwind CSS & Context API serving <b>5,000+ daily users</b>",
          "Redesigned <b>10+ interfaces</b> with UI/UX teams, boosting user satisfaction by <b>25%</b>",
          "Enabled <b>10% revenue growth</b> via e-commerce features & cross-browser compatibility",
        ]},
        { name:"Open Source VMS Dashboard", bullets:[
          "Built live VMS with ANPR & alerts supporting <b>100+ concurrent streams</b> at &lt;2s latency",
          "Decreased API response time by <b>40%</b> via debouncing, memoization & code reviews",
          "Refactored architecture with lazy loading supporting <b>3× concurrent user growth</b>",
          "Created <b>5+ D3.js dashboards</b> accelerating stakeholder decision-making",
        ]},
      ],
    },
    {
      period:"Jul 2024 — Jan 2025", company:"Ajeevi Technologies Pvt Ltd",
      badge:"Internship", badgeColor:"#06b6d4", location:"Noida, India",
      role:"Frontend Developer Intern",
      projects:[
        { name:"Smart Waste Management Portal — Government", bullets:[
          "Deployed frontend for <b>Chennai, Karimnagar & Warangal</b> tracking <b>200+ vehicles</b> & <b>1,000+ smart bins</b>",
          "Improved waste collection efficiency by <b>30%</b> through real-time geospatial tracking",
          "Built reusable UI library reducing dev time by <b>20%</b> across <b>4 projects</b>",
          "Empowered <b>30+ team members</b> with integrated real-time analytics dashboards",
        ]},
      ],
    },
    {
      period:"Jul 2023 — Jul 2024", company:"Aqua Mech",
      badge:"Trainee", badgeColor:"#38bdf8", location:"India",
      role:"Software Developer Trainee",
      projects:[
        { name:"", bullets:[
          "Accelerated page load times by <b>35%</b> via optimised client-side rendering in React.js",
          "Integrated Leaflet.js for <b>real-time geospatial visualisation</b> across multiple projects",
          "Eliminated integration bugs by <b>15%</b> collaborating with backend team on REST API integration",
        ]},
      ],
    },
  ],

  projects:[
    { num:"01", icon:"🖥", name:"DCIM — Data Center Infrastructure Management",
      desc:"Enterprise-grade Data Center Infrastructure Management platform built with React.js and Three.js. Features live 3D rack visualisation, real-time power & cooling monitoring, asset tracking, and interactive floor-plan management for data center operations.",
      tags:["React.js","Three.js","3D Visualisation","Real-time","REST APIs","Dashboard"],
      live:"https://dcim-react-web.netlify.app", github:"https://github.com/RohitRathaur123", featured:true },
    { num:"02", icon:"🏙", name:"SwachhAJV & ParkAJV",
      desc:"Smart City waste management and parking platforms serving 5,000+ daily users with real-time tracking, e-commerce, and government compliance reporting.",
      tags:["React.js","Tailwind CSS","Context API","REST APIs","D3.js"], live:"#", github:"#", featured:false },
    { num:"03", icon:"📹", name:"VMS Dashboard",
      desc:"Open-source Video Management System with live feed, ANPR, and real-time alerts supporting 100+ concurrent streams at under 2 seconds latency.",
      tags:["React.js","WebSockets","D3.js","Lazy Loading"], live:"#", github:"#", featured:false },
    { num:"04", icon:"🗺", name:"Smart Waste Portal",
      desc:"Multi-city government portal tracking 200+ vehicles and 1,000+ smart bins across Chennai, Karimnagar & Warangal with real-time analytics.",
      tags:["React.js","Leaflet.js","Geospatial","Analytics"], live:"#", github:"#", featured:false },
  ],

  certifications:[
    { icon:"🏅", name:"IBM Full Stack Software Developer", issuer:"Coursera", date:"Feb 2026",
      desc:"15 courses: HTML, CSS, JavaScript, Node.js, React, Python, Django, Docker, Kubernetes, OpenShift, CI/CD, Microservices, Serverless, App Security & Generative AI.",
      link:"https://coursera.org/verify/professional-cert/BG7600W3CWAC" },
    { icon:"🏅", name:"IBM Full Stack JavaScript Developer", issuer:"Coursera", date:"Jan 2026",
      desc:"12 courses: HTML, CSS, JavaScript, Git, GitHub, React, Node.js, Express, MongoDB, DevOps, Agile, CI/CD, Docker, Kubernetes, OpenShift & Microservices.",
      link:"https://coursera.org/verify/professional-cert/01A3WZ4C855Z" },
    { icon:"🚀", name:"Agile Methodology Virtual Experience Program", issuer:"Cognizant", date:"Oct 2022",
      desc:"Hands-on virtual experience covering Agile methodology, scrum ceremonies, sprint planning, backlog grooming, and iterative software delivery practices.",
      link:null },
    { icon:"🔐", name:"Computer System Security", issuer:"ICT Academy, IIT Kanpur", date:"Mar 2021",
      desc:"Comprehensive course on computer system security fundamentals, cybersecurity principles, threat analysis, and secure system design from IIT Kanpur.",
      link:null },
    { icon:"🐍", name:"Python Programming — A Practical Approach", issuer:"ICT Academy, IIT Kanpur", date:"Aug 2021",
      desc:"Practical Python programming covering core syntax, data structures, OOP concepts, file handling, and real-world application development from IIT Kanpur.",
      link:null },
    { icon:"🎓", name:"DCA — Diploma in Computer Applications", issuer:"Computer Applications", date:"Completed",
      desc:"Foundation in computer applications, software tools, office productivity, and fundamental programming concepts.",
      link:null },
  ],

  education:{
    degree:"Bachelor of Technology", field:"Computer Science & Engineering",
    college:"Accurate Institute of Management and Technology",
    location:"Greater Noida", cgpa:"8.4", year:"2019 – 2023",
  },

  navItems:["about","skills","experience","projects","certifications","education","contact"],
  ticker:["React.js","Three.js","WebGL","GSAP","Node.js","Docker","Kubernetes","D3.js","Leaflet.js","Tailwind CSS","MongoDB","OpenShift","CI/CD","Microservices","REST APIs","IBM Certified","Cognizant","IIT Kanpur","Smart City","DCIM"],
};

// ══════════════════════════════════════════════════════════
//  CSS — DARK THEME (unchanged)
// ══════════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{
  --bg:#050d1a; --bg2:#07111f; --bg3:#091628;
  --border:rgba(14,165,233,.12); --border2:rgba(14,165,233,.28);
  --ink:#e2f0ff; --ink2:#a8c8e0; --muted:#5a80a0;
  --accent:#0ea5e9; --cyan:#06b6d4; --neon:#22d3ee; --green:#34d399;
  --sh:0 4px 32px rgba(14,165,233,.12); --sh2:0 8px 56px rgba(14,165,233,.2);
}
body{background:var(--bg);color:var(--ink);font-family:'Outfit',sans-serif;overflow-x:hidden;cursor:none!important;font-size:16px}
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:rgba(14,165,233,.3);border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:var(--accent)}

/* ── CURSOR ── */
#cur{position:fixed;pointer-events:none;z-index:9999;width:11px;height:11px;border-radius:50%;background:var(--neon);transform:translate(-50%,-50%);box-shadow:0 0 18px var(--neon),0 0 36px rgba(34,211,238,.4);mix-blend-mode:screen;transition:width .15s,height .15s}
#cur-ring{position:fixed;pointer-events:none;z-index:9998;width:36px;height:36px;border-radius:50%;border:1.5px solid rgba(14,165,233,.4);transform:translate(-50%,-50%);transition:all .22s cubic-bezier(.16,1,.3,1)}
body.hovering #cur{width:22px;height:22px}
body.hovering #cur-ring{width:58px;height:58px;border-color:rgba(14,165,233,.6)}

/* ── THREE CANVAS ── */
#cv3{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.92}

/* ── LAYOUT ── */
.layout{display:grid;grid-template-columns:390px 1fr;min-height:100vh;max-width:1440px;margin:0 auto;position:relative;z-index:1}

/* ── SIDEBAR ── */
.sidebar{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;padding:4rem 3rem;overflow:hidden;z-index:10}
.sidebar::after{content:'';position:absolute;right:0;top:8%;bottom:8%;width:1px;background:linear-gradient(to bottom,transparent,var(--border2),transparent)}
.sb-top{flex:1;min-height:0;overflow:hidden}
.sb-status{display:inline-flex;align-items:center;gap:9px;padding:.38rem 1rem;background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.22);border-radius:100px;font-size:.75rem;font-weight:700;color:var(--green);letter-spacing:.12em;text-transform:uppercase;margin-bottom:1.8rem}
.sb-dot{width:7px;height:7px;background:var(--green);border-radius:50%;box-shadow:0 0 8px var(--green);animation:sbpulse 2s infinite}
@keyframes sbpulse{0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.5)}50%{box-shadow:0 0 0 7px rgba(52,211,153,0)}}
.sb-name{font-size:clamp(2.5rem,3.8vw,3.4rem);font-weight:900;line-height:.93;letter-spacing:-.03em;color:var(--ink);margin-bottom:.65rem}
.sb-name-grad{display:block;background:linear-gradient(135deg,var(--accent),var(--neon));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 24px rgba(14,165,233,.35))}
.sb-role{font-size:.82rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:.55rem}
.sb-tagline{font-size:1rem;line-height:1.75;color:var(--ink2);margin-bottom:2.2rem;max-width:280px}
.sb-nav{display:flex;flex-direction:column;gap:.22rem;margin-bottom:2.8rem}
.sb-nav a{display:flex;align-items:center;gap:14px;padding:.52rem 0;font-size:.78rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s,gap .25s}
.sb-nav a::before{content:'';width:28px;height:1px;background:var(--muted);transition:width .3s,background .3s;flex-shrink:0}
.sb-nav a:hover,.sb-nav a.active{color:var(--ink);gap:22px}
.sb-nav a:hover::before,.sb-nav a.active::before{width:54px;background:var(--accent)}
.sb-socials{display:flex;gap:.85rem;flex-wrap:wrap}
.sb-soc{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:9px;background:rgba(14,165,233,.06);border:1px solid var(--border);color:var(--muted);text-decoration:none;font-size:.95rem;transition:all .2s}
.sb-soc:hover{background:rgba(14,165,233,.14);border-color:var(--border2);color:var(--accent);transform:translateY(-2px)}

/* ── MAIN ── */
.main{padding:0 4rem 7rem 4rem;display:flex;flex-direction:column}

/* ── SECTION ── */
.sec{padding:6rem 0;border-bottom:1px solid var(--border);opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.sec.visible{opacity:1;transform:translateY(0)}
.sec:last-child{border-bottom:none}
.sec-label{display:inline-flex;align-items:center;gap:11px;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:.95rem}
.sec-label::before{content:'';width:34px;height:1px;background:linear-gradient(90deg,var(--accent),var(--neon))}
.sec-title{font-size:clamp(2.2rem,3.8vw,3rem);font-weight:900;letter-spacing:-.025em;color:var(--ink);line-height:1;margin-bottom:2.5rem}

/* ── ABOUT ── */
.about-text{font-size:1.06rem;line-height:1.95;color:var(--ink2);margin-bottom:1.8rem}
.about-text b{color:var(--accent)}
.about-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.2rem}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:14px;overflow:hidden}
.stat{background:var(--bg3);padding:1.6rem 1rem;text-align:center;transition:background .2s}
.stat:hover{background:rgba(14,165,233,.06)}
.stat-val{font-family:'JetBrains Mono',monospace;font-size:2rem;font-weight:700;background:linear-gradient(135deg,var(--accent),var(--neon));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:.38rem}
.stat-lbl{font-size:.68rem;font-weight:700;letter-spacing:.1em;color:var(--muted);text-transform:uppercase}

/* ── SKILLS ── */
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
.skill-card{background:var(--bg3);border:1px solid var(--border);border-radius:13px;padding:1.65rem;position:relative;overflow:hidden;transition:border-color .3s,transform .3s,box-shadow .3s}
.skill-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--neon));transform:scaleX(0);transform-origin:left;transition:transform .4s}
.skill-card:hover{border-color:var(--border2);transform:translateY(-5px);box-shadow:var(--sh2)}
.skill-card:hover::before{transform:scaleX(1)}
.skill-card.skill-3d{border-color:rgba(14,165,233,.28);background:linear-gradient(135deg,rgba(14,165,233,.08) 0%,var(--bg3) 60%);box-shadow:0 0 35px rgba(14,165,233,.1),inset 0 1px 0 rgba(14,165,233,.14)}
.skill-card.skill-3d::before{transform:scaleX(1);background:linear-gradient(90deg,var(--accent),var(--neon),var(--cyan))}
.skill-card.skill-3d .skill-icon{background:linear-gradient(135deg,rgba(14,165,233,.18),rgba(6,182,212,.1));border-color:rgba(14,165,233,.32);box-shadow:0 0 14px rgba(14,165,233,.22)}
.skill-card.skill-3d .skill-name{color:var(--neon)}
.skill-card.skill-3d .stag{background:rgba(14,165,233,.1);border-color:rgba(14,165,233,.28);color:var(--accent)}
.skill-cat{display:flex;align-items:center;gap:.85rem;margin-bottom:1.2rem}
.skill-icon{width:40px;height:40px;border-radius:9px;background:rgba(14,165,233,.08);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.1rem}
.skill-name{font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2)}
.skill-tags{display:flex;flex-wrap:wrap;gap:.45rem}
.stag{padding:.26rem .72rem;background:rgba(14,165,233,.06);border:1px solid var(--border);border-radius:5px;font-size:.74rem;font-weight:500;color:var(--ink2);transition:all .2s;cursor:default}
.stag:hover{background:rgba(14,165,233,.12);border-color:rgba(14,165,233,.3);color:var(--accent);transform:translateY(-1px)}

/* ── EXPERIENCE ── */
.exp-list{display:flex;flex-direction:column;gap:1.4rem}
.exp-card{background:var(--bg3);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:border-color .3s,transform .3s,box-shadow .3s}
.exp-card:hover{border-color:var(--border2);transform:translateY(-3px);box-shadow:var(--sh2)}
.exp-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1.7rem 1.9rem 1rem;gap:1rem}
.exp-period{font-family:'JetBrains Mono',monospace;font-size:.72rem;font-weight:600;letter-spacing:.1em;color:var(--accent);margin-bottom:.4rem}
.exp-company{font-size:1.2rem;font-weight:800;color:var(--ink);margin-bottom:.35rem}
.exp-role{font-size:.95rem;color:var(--ink2);font-weight:500}
.exp-meta{display:flex;flex-direction:column;align-items:flex-end;gap:.4rem;flex-shrink:0}
.exp-badge{padding:.25rem .75rem;border-radius:5px;font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
.exp-loc{font-size:.7rem;color:var(--muted);text-align:right}
.exp-body{padding:.5rem 1.9rem 1.7rem}
.exp-proj{margin-top:1rem}
.exp-proj-name{font-family:'JetBrains Mono',monospace;font-size:.68rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:.65rem;display:flex;align-items:center;gap:9px}
.exp-proj-name::before{content:'';width:13px;height:1px;background:var(--cyan)}
.exp-bullets{list-style:none;display:flex;flex-direction:column;gap:.55rem}
.exp-bullets li{display:flex;gap:11px;font-size:.96rem;line-height:1.8;color:var(--ink2)}
.exp-bullets li::before{content:'▸';color:var(--accent);font-size:.8rem;line-height:1.95;flex-shrink:0}
.exp-proj+.exp-proj{margin-top:1.2rem;padding-top:1.2rem;border-top:1px dashed var(--border)}

/* ── PROJECTS ── */
.proj-grid{display:flex;flex-direction:column;gap:1.2rem}
.proj-card{display:grid;grid-template-columns:64px 1fr 48px;align-items:center;gap:1.5rem;background:var(--bg3);border:1px solid var(--border);border-radius:14px;padding:1.7rem 1.9rem;transition:border-color .3s,transform .3s,box-shadow .3s;position:relative;overflow:hidden}
.proj-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(14,165,233,.05),transparent 60%);opacity:0;transition:opacity .3s;pointer-events:none}
.proj-card:hover{border-color:var(--border2);transform:translateX(7px);box-shadow:var(--sh2)}
.proj-card:hover::after{opacity:1}
.proj-card.featured{border-color:rgba(14,165,233,.32);background:linear-gradient(135deg,rgba(14,165,233,.07) 0%,var(--bg3) 60%);box-shadow:0 0 45px rgba(14,165,233,.12),inset 0 1px 0 rgba(14,165,233,.16)}
.proj-card.featured::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--neon),var(--cyan))}
.proj-card.featured:hover{border-color:rgba(14,165,233,.55);transform:translateX(9px);box-shadow:0 0 65px rgba(14,165,233,.22)}
.proj-featured-badge{display:inline-flex;align-items:center;gap:5px;padding:.2rem .7rem;background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;border-radius:100px;font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.55rem;box-shadow:0 0 14px rgba(14,165,233,.38)}
.proj-num{font-family:'JetBrains Mono',monospace;font-size:2.2rem;font-weight:800;color:rgba(14,165,233,.13);line-height:1;user-select:none}
.proj-card.featured .proj-num{color:rgba(14,165,233,.24)}
.proj-name{font-size:1.08rem;font-weight:800;color:var(--ink);margin-bottom:.42rem}
.proj-card.featured .proj-name{font-size:1.12rem;background:linear-gradient(135deg,var(--ink),var(--neon));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.proj-desc{font-size:.92rem;line-height:1.8;color:var(--muted);margin-bottom:.9rem}
.proj-tags{display:flex;flex-wrap:wrap;gap:.38rem}
.ptag{padding:.22rem .65rem;border-radius:5px;font-size:.7rem;font-weight:600;letter-spacing:.05em;background:rgba(14,165,233,.08);color:var(--accent);border:1px solid rgba(14,165,233,.2)}
.proj-links{display:flex;flex-direction:column;gap:.55rem}
.proj-link{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:9px;background:rgba(14,165,233,.06);border:1px solid var(--border);color:var(--muted);text-decoration:none;font-size:.9rem;transition:all .2s}
.proj-link:hover{background:rgba(14,165,233,.15);border-color:var(--border2);color:var(--accent);transform:scale(1.12)}
.proj-link.live-link{background:linear-gradient(135deg,rgba(14,165,233,.16),rgba(6,182,212,.1));border-color:rgba(14,165,233,.32);color:var(--accent)}
.proj-link.live-link:hover{background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;box-shadow:0 0 18px rgba(14,165,233,.45)}

/* ── CERTIFICATIONS ── */
.cert-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.1rem}
.cert-card{background:var(--bg3);border:1px solid var(--border);border-radius:13px;padding:1.7rem;display:flex;flex-direction:column;gap:.9rem;position:relative;overflow:hidden;transition:border-color .3s,transform .3s,box-shadow .3s}
.cert-card::before{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--neon));transform:scaleX(0);transform-origin:left;transition:transform .4s}
.cert-card:hover{border-color:var(--border2);transform:translateY(-5px);box-shadow:var(--sh2)}
.cert-card:hover::before{transform:scaleX(1)}
.cert-top{display:flex;align-items:center;justify-content:space-between}
.cert-icon{width:46px;height:46px;border-radius:11px;background:rgba(14,165,233,.08);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.35rem}
.cert-badge{padding:.28rem .8rem;background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;border-radius:100px;font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;box-shadow:0 0 12px rgba(14,165,233,.28)}
.cert-name{font-size:1rem;font-weight:700;color:var(--ink);line-height:1.3}
.cert-by{font-size:.74rem;color:var(--muted)}
.cert-desc{font-size:.86rem;line-height:1.85;color:var(--ink2)}
.cert-link{display:inline-flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:.68rem;font-weight:600;letter-spacing:.08em;color:var(--accent);text-decoration:none;margin-top:auto;padding-top:.9rem;border-top:1px solid var(--border);transition:gap .2s,color .2s}
.cert-link:hover{gap:13px;color:var(--neon)}

/* ── EDUCATION ── */
.edu-card{background:var(--bg3);border:1px solid var(--border);border-radius:14px;overflow:hidden;display:grid;grid-template-columns:1fr 160px;transition:border-color .3s,box-shadow .3s}
.edu-card:hover{border-color:var(--border2);box-shadow:var(--sh2)}
.edu-body{padding:2.2rem}
.edu-degree{font-size:1.45rem;font-weight:900;color:var(--ink);line-height:1.2;margin-bottom:.35rem}
.edu-field{font-size:1.05rem;font-weight:600;color:var(--accent);margin-bottom:.6rem}
.edu-inst{font-size:.92rem;color:var(--muted);margin-bottom:1.5rem;line-height:1.55}
.edu-chips{display:flex;gap:.8rem;flex-wrap:wrap}
.edu-chip{display:inline-flex;align-items:center;gap:6px;padding:.4rem .95rem;border-radius:8px;font-size:.75rem;font-weight:700;letter-spacing:.06em}
.ec-cgpa{background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;box-shadow:0 0 16px rgba(14,165,233,.24)}
.ec-year{background:rgba(14,165,233,.08);border:1px solid var(--border2);color:var(--accent)}
.edu-stat{background:linear-gradient(135deg,#0284c7,#0ea5e9,#06b6d4);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden}
.edu-stat::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.08),transparent)}
.edu-num{font-family:'JetBrains Mono',monospace;font-size:4.5rem;font-weight:700;color:#fff;line-height:1;text-shadow:0 0 32px rgba(255,255,255,.25)}
.edu-sub{font-size:.62rem;font-weight:700;letter-spacing:.16em;color:rgba(255,255,255,.5);text-transform:uppercase;margin-top:.4rem;text-align:center;padding:0 .6rem}

/* ── CONTACT ── */
.contact-split{display:grid;grid-template-columns:1fr 1fr;gap:2.8rem;align-items:start}
.contact-head{font-size:clamp(2rem,3.2vw,3rem);font-weight:900;color:var(--ink);line-height:1.05;margin-bottom:1rem}
.contact-head span{background:linear-gradient(135deg,var(--accent),var(--neon));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.contact-sub{font-size:.98rem;line-height:1.9;color:var(--muted)}
.contact-links{display:flex;flex-direction:column;gap:.8rem}
.clink{display:flex;align-items:center;gap:1rem;padding:1.05rem 1.25rem;background:var(--bg3);border:1px solid var(--border);border-radius:11px;text-decoration:none;color:var(--ink);transition:all .25s}
.clink:hover{border-color:var(--border2);background:rgba(14,165,233,.04);transform:translateX(7px);box-shadow:var(--sh)}
.clink-icon{width:42px;height:42px;border-radius:9px;background:rgba(14,165,233,.08);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.05rem;flex-shrink:0}
.clink-lbl{font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:.13rem}
.clink-val{font-size:.9rem;font-weight:600;color:var(--ink)}
.clink-arr{margin-left:auto;color:var(--muted);transition:transform .2s,color .2s}
.clink:hover .clink-arr{transform:translateX(5px);color:var(--accent)}

/* ── TICKER ── */
.ticker-wrap{background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);height:44px;overflow:hidden;display:flex;align-items:center;position:relative;z-index:2}
.ticker-wrap::before,.ticker-wrap::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:3}
.ticker-wrap::before{left:0;background:linear-gradient(90deg,var(--bg2),transparent)}
.ticker-wrap::after{right:0;background:linear-gradient(-90deg,var(--bg2),transparent)}
.ticker-track{display:flex;animation:tick 28s linear infinite;white-space:nowrap}
.t-item{display:inline-flex;align-items:center;gap:.5rem;padding:0 1.4rem;font-family:'JetBrains Mono',monospace;font-size:.66rem;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.t-sep{color:var(--accent);font-size:.42rem}
@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* ── CTAs ── */
.cta-main{display:inline-flex;align-items:center;gap:9px;padding:.8rem 1.7rem;background:linear-gradient(135deg,var(--accent),var(--cyan));color:#fff;font-size:.85rem;font-weight:700;letter-spacing:.07em;border-radius:9px;text-decoration:none;box-shadow:0 0 24px rgba(14,165,233,.32);transition:transform .2s,box-shadow .2s}
.cta-main:hover{transform:translateY(-2px);box-shadow:0 0 42px rgba(14,165,233,.52)}
.cta-ghost{display:inline-flex;align-items:center;gap:9px;padding:.8rem 1.7rem;background:transparent;color:var(--accent);font-size:.85rem;font-weight:700;letter-spacing:.07em;border-radius:9px;text-decoration:none;border:1px solid var(--border2);transition:all .2s}
.cta-ghost:hover{background:rgba(14,165,233,.07);transform:translateY(-2px)}

/* ── FOOTER ── */
footer{background:var(--bg2);border-top:1px solid var(--border);padding:1.8rem 4rem;display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2}
footer::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--accent),var(--neon),transparent);opacity:.32}
.ft-name{font-family:'JetBrains Mono',monospace;font-size:.82rem;font-weight:600;letter-spacing:.12em;background:linear-gradient(135deg,var(--accent),var(--neon));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ft-copy{font-size:.7rem;color:var(--muted);letter-spacing:.1em}

/* ── RESPONSIVE ── */
@media(max-width:1100px){
  .layout{grid-template-columns:310px 1fr}
  .sidebar{padding:3rem 2.2rem}
  .main{padding:0 2.5rem 5rem}
  .contact-split{grid-template-columns:1fr}
  .cert-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:820px){
  .layout{grid-template-columns:1fr}
  .sidebar{position:relative;height:auto;padding:5rem 2rem 2rem}
  .sidebar::after{display:none}
  .sb-nav{display:none}
  .main{padding:0 2rem 4rem}
  .stats-row{grid-template-columns:1fr 1fr}
  .skills-grid,.cert-grid{grid-template-columns:1fr}
  .edu-card{grid-template-columns:1fr}
  .edu-stat{padding:2rem;min-height:120px}
  footer{flex-direction:column;gap:.5rem;text-align:center;padding:1.5rem 2rem}
}
@media(max-width:520px){
  .proj-card{grid-template-columns:auto 1fr}
  .proj-links{grid-column:span 2;flex-direction:row;justify-content:flex-start}
}
`;

// ══════════════════════════════════════════════════════════
//  COMPONENT
// ══════════════════════════════════════════════════════════
export default function Portfolio() {
  const canvasRef  = useRef(null);
  const curRef     = useRef(null);
  const ringRef    = useRef(null);
  const scrollYRef = useRef(0);
  const cx = useRef(0), cy = useRef(0);
  const tx = useRef(0), ty = useRef(0);
  const [activeSection, setActiveSection] = useState("about");
  const [ready, setReady] = useState(false);

  // ══════════════════════════════════════════════════════
  //  FIX 1 — Robust sequential CDN loader with polling
  //  • Checks window.THREE/gsap directly (not just script tag)
  //  • Retries once on network error
  //  • Polls every 50 ms until libs are truly assigned
  //  • 5-second safety timeout so UI never hangs
  // ══════════════════════════════════════════════════════
  useEffect(() => {
    // Already available from a previous navigation? Skip loading.
    if (window.THREE && window.gsap && window.ScrollTrigger) {
      setReady(true);
      return;
    }

    const loadScript = (src) =>
      new Promise((resolve) => {
        // If the tag already exists, just poll for the global
        if (document.querySelector(`script[src="${src}"]`)) {
          const poll = setInterval(() => {
            const ok = src.includes("three")          ? !!window.THREE
                     : src.includes("ScrollTrigger")  ? !!window.ScrollTrigger
                     : !!window.gsap;
            if (ok) { clearInterval(poll); resolve(); }
          }, 50);
          setTimeout(() => { clearInterval(poll); resolve(); }, 5000);
          return;
        }

        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.crossOrigin = "anonymous";
        s.onload = () => resolve();
        s.onerror = () => {
          // Single retry
          const r = document.createElement("script");
          r.src = src; r.async = true; r.crossOrigin = "anonymous";
          r.onload = () => resolve();
          r.onerror = () => resolve(); // give up gracefully
          document.head.appendChild(r);
        };
        document.head.appendChild(s);
      });

    // Sequential load: Three → GSAP → ScrollTrigger
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js")
      .then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"))
      .then(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"))
      .then(() => {
        // Poll until globals are actually assigned on window
        let attempts = 0;
        const check = setInterval(() => {
          attempts++;
          if (window.THREE && window.gsap) {
            clearInterval(check);
            setReady(true);
          }
          if (attempts > 100) { clearInterval(check); setReady(true); }
        }, 50);
      });
  }, []);

  // ══════════════════════════════════════════════════════
  //  FIX 2 — Three.js scene
  //  • Canvas null guard
  //  • Explicit transparent clear colour
  //  • isRunning flag so cleanup is instant
  //  • visibilitychange listener resumes loop on tab focus
  // ══════════════════════════════════════════════════════
  useEffect(() => {
    if (!ready || !window.THREE) return;

    const canvas = canvasRef.current;
    if (!canvas) return; // guard: canvas must be mounted

    const THREE = window.THREE;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // explicit transparent background

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55, window.innerWidth / window.innerHeight, 0.1, 800
    );
    camera.position.z = 30;

    // ── Model helper
    const addModel = (geo, hex, pos, wOp = 0.14, sOp = 0.04) => {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: hex, transparent: true, opacity: sOp })));
      g.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: hex, wireframe: true, transparent: true, opacity: wOp })));
      g.position.set(...pos);
      scene.add(g);
      return g;
    };

    const models = [
      addModel(new THREE.IcosahedronGeometry(5, 1),          0x0ea5e9, [15, 3, -8],    0.15, 0.05),
      addModel(new THREE.TorusGeometry(3.5, 0.75, 16, 60),   0x06b6d4, [-15, -3, -10], 0.14, 0.04),
      addModel(new THREE.OctahedronGeometry(2.8, 0),         0x38bdf8, [-5, 10, -6],   0.17, 0.05),
      addModel(new THREE.TetrahedronGeometry(2.4, 0),        0x22d3ee, [10, -9, -5],   0.19, 0.06),
      addModel(new THREE.DodecahedronGeometry(2.2, 0),       0x3b82f6, [3, -7, -4],    0.15, 0.04),
      addModel(new THREE.TorusKnotGeometry(2.5, 0.55, 100, 16), 0x0ea5e9, [-11, 5, -14], 0.10, 0.02),
    ];

    const initPos    = models.map(m => ({ x: m.position.x, y: m.position.y, z: m.position.z }));
    const rotSpeeds  = [0.22, 0.18, 0.28, 0.32, 0.20, 0.13];
    const bobSpeeds  = [0.50, 0.45, 0.60, 0.55, 0.40, 0.35];

    // ── Particles
    const N = 350;
    const ppos = new Float32Array(N * 3);
    const pcol = new Float32Array(N * 3);
    const pal  = [0x0ea5e9, 0x06b6d4, 0x38bdf8, 0x22d3ee].map(h => new THREE.Color(h));
    for (let i = 0; i < N; i++) {
      ppos[i*3]   = (Math.random() - 0.5) * 100;
      ppos[i*3+1] = (Math.random() - 0.5) * 70;
      ppos[i*3+2] = (Math.random() - 0.5) * 50;
      const c = pal[i % 4];
      pcol[i*3] = c.r; pcol[i*3+1] = c.g; pcol[i*3+2] = c.b;
    }
    const pgeo = new THREE.BufferGeometry();
    pgeo.setAttribute("position", new THREE.BufferAttribute(ppos, 3));
    pgeo.setAttribute("color",    new THREE.BufferAttribute(pcol, 3));
    const pts = new THREE.Points(pgeo, new THREE.PointsMaterial({
      size: 0.28, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true,
    }));
    scene.add(pts);

    // ── Connection lines
    const lm = new THREE.LineBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.045 });
    for (let i = 0; i < 60; i++) {
      const x = (Math.random() - 0.5) * 85;
      const y = (Math.random() - 0.5) * 65;
      const lg = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, y, (Math.random() - 0.5) * 14),
        new THREE.Vector3(x + (Math.random() - 0.5) * 24, y + (Math.random() - 0.5) * 24, (Math.random() - 0.5) * 9),
      ]);
      scene.add(new THREE.Line(lg, lm));
    }

    // ── Scroll-reactive rings (fade in as you scroll)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(8, 0.06, 8, 80),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0 })
    );
    ring.rotation.x = Math.PI / 2.5;
    ring.position.set(0, 0, -12);
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(12, 0.04, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0 })
    );
    ring2.rotation.x = -Math.PI / 3;
    ring2.position.set(0, 0, -18);
    scene.add(ring2);

    // ── Mouse & scroll handlers
    let mx = 0, my = 0;
    const onM = e => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onS = () => { scrollYRef.current = window.scrollY; };
    const onR = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("mousemove", onM);
    window.addEventListener("scroll",    onS);
    window.addEventListener("resize",    onR);

    // ── Animation loop
    const clock = new THREE.Clock();
    let raf = null;
    let isRunning = true;

    const loop = () => {
      if (!isRunning) return;
      raf = requestAnimationFrame(loop);

      const t   = clock.getElapsedTime();
      const sy  = scrollYRef.current;
      const doc = document.documentElement.scrollHeight - window.innerHeight || 1;
      const sf  = sy / doc;       // 0 → 1 over full page
      const sn  = sy / 1000;      // raw scroll units

      models.forEach((m, i) => {
        m.rotation.y += rotSpeeds[i] * 0.016;
        m.rotation.x += rotSpeeds[i] * 0.009;
        m.position.y  = initPos[i].y + Math.sin(t * bobSpeeds[i] + i) * 0.9;

        const angle  = sn * (i % 2 === 0 ? 1 : -1) * 0.35 + (i * Math.PI * 2 / models.length);
        const radius = 1.5 + sf * 4;
        m.position.x = initPos[i].x + Math.cos(angle) * radius * 0.6;
        m.position.z = initPos[i].z + Math.sin(angle) * radius * 0.4;
        m.rotation.z = sn * rotSpeeds[i] * 0.5;

        m.children.forEach(child => {
          if (child.material) {
            const base = child.material.wireframe ? 0.14 : 0.04;
            child.material.opacity = base + sf * 0.08;
          }
        });
      });

      pts.rotation.y = t * 0.03 + mx * 0.06 + sn * 0.08;
      pts.rotation.x = my * 0.025 + sn * 0.04;
      pts.scale.setScalar(1 + sf * 0.5);

      ring.material.opacity  = Math.min(sf * 1.6, 0.18);
      ring2.material.opacity = Math.min(sf * 1.2, 0.12);
      ring.rotation.z  =  t * 0.05  + sn * 0.12;
      ring2.rotation.z = -t * 0.035 + sn * 0.08;
      ring.rotation.y  = sn * 0.2;
      ring2.rotation.x = -Math.PI / 3 + sn * 0.15;

      camera.position.x += (mx * 1.6 - camera.position.x) * 0.025;
      camera.position.y += (-my * 1.6 - camera.position.y) * 0.025;
      camera.position.z  = 30 - sy * 0.008;

      renderer.render(scene, camera);
    };

    // FIX 3 — Resume loop when tab becomes visible again
    const onVisibility = () => {
      if (document.visibilityState === "visible" && isRunning) {
        cancelAnimationFrame(raf);
        clock.start();
        loop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    loop(); // kick off

    return () => {
      isRunning = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onM);
      window.removeEventListener("scroll",    onS);
      window.removeEventListener("resize",    onR);
      document.removeEventListener("visibilitychange", onVisibility);
      renderer.dispose();
    };
  }, [ready]);

  // ── Smooth cursor ─────────────────────────────────────
  useEffect(() => {
    const onMove = e => { cx.current = e.clientX; cy.current = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      tx.current += (cx.current - tx.current) * 0.11;
      ty.current += (cy.current - ty.current) * 0.11;
      if (curRef.current)  { curRef.current.style.left  = cx.current + "px"; curRef.current.style.top  = cy.current + "px"; }
      if (ringRef.current) { ringRef.current.style.left = tx.current + "px"; ringRef.current.style.top = ty.current + "px"; }
    };
    loop();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // ── GSAP + scroll active-nav ──────────────────────────
  useEffect(() => {
    if (!ready) return;
    const tid = setTimeout(() => {
      if (!window.gsap || !window.ScrollTrigger) return;
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".sb-status",  { opacity:0, y:20,  duration:.75, delay:.2,  ease:"back.out(2)" });
      gsap.from(".sb-name",    { opacity:0, y:32,  duration:.95, delay:.35, ease:"power4.out" });
      gsap.from(".sb-role",    { opacity:0, y:18,  duration:.8,  delay:.52, ease:"power3.out" });
      gsap.from(".sb-tagline", { opacity:0, y:18,  duration:.8,  delay:.65, ease:"power3.out" });
      gsap.from(".sb-nav a",   { opacity:0, x:-20, duration:.65, stagger:.09, delay:.8,  ease:"power3.out" });
      gsap.from(".sb-soc",     { opacity:0, y:12,  duration:.5,  stagger:.07, delay:1.15, ease:"power3.out" });

      const io = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.08 }
      );
      document.querySelectorAll(".sec").forEach(s => io.observe(s));

      const onScr = () => {
        let cur = "about";
        document.querySelectorAll("[data-sec]").forEach(s => {
          if (window.scrollY >= s.offsetTop - 170) cur = s.dataset.sec;
        });
        setActiveSection(cur);
      };
      window.addEventListener("scroll", onScr);

      document.querySelectorAll(".cta-main,.cta-ghost").forEach(btn => {
        btn.addEventListener("mousemove", e => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, { x:(e.clientX-r.left-r.width/2)*0.3, y:(e.clientY-r.top-r.height/2)*0.3, duration:0.3, ease:"power2.out" });
        });
        btn.addEventListener("mouseleave", () => gsap.to(btn, { x:0, y:0, duration:0.55, ease:"elastic.out(1,.4)" }));
      });

      document.querySelectorAll(".skill-card,.proj-card,.cert-card,.exp-card,.edu-card").forEach(el => {
        el.addEventListener("mousemove", e => {
          const r = el.getBoundingClientRect();
          gsap.to(el, { rotateY:(e.clientX-r.left)/r.width*9-4.5, rotateX:-((e.clientY-r.top)/r.height*9-4.5), transformPerspective:950, duration:0.4, ease:"power2.out" });
        });
        el.addEventListener("mouseleave", () => gsap.to(el, { rotateY:0, rotateX:0, duration:0.6, ease:"power3.out" }));
      });

      return () => window.removeEventListener("scroll", onScr);
    }, 260);
    return () => clearTimeout(tid);
  }, [ready]);

  const hi = () => document.body.classList.add("hovering");
  const ho = () => document.body.classList.remove("hovering");

  // ════════════════════════════════════════════════════════
  return (
    <>
      <style>{CSS}</style>
      <canvas ref={canvasRef} id="cv3" />
      <div ref={curRef}  id="cur" />
      <div ref={ringRef} id="cur-ring" />

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...DATA.ticker, ...DATA.ticker].map((t, i) => (
            <div className="t-item" key={i}>{t}<span className="t-sep">◆</span></div>
          ))}
        </div>
      </div>

      {/* ══ LAYOUT ══ */}
      <div className="layout">

        {/* ─── SIDEBAR ─── */}
        <aside className="sidebar">
          <div className="sb-top">
            <div className="sb-status"><span className="sb-dot" />Available for work</div>
            <div className="sb-name">
              <span>Rohit</span>
              <span className="sb-name-grad">Rathaur</span>
            </div>
            <div className="sb-role">{DATA.role}</div>
            <div className="sb-tagline">{DATA.tagline}</div>
            <nav className="sb-nav">
              {DATA.navItems.map(id => (
                <a key={id} href={`#${id}`}
                   className={activeSection === id ? "active" : ""}
                   onMouseEnter={hi} onMouseLeave={ho}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </nav>
          </div>
          <div className="sb-socials">
            {[
              { icon:"📧", href:`mailto:${DATA.email}`,  title:"Email" },
              { icon:"💼", href:DATA.linkedinHref,        title:"LinkedIn" },
              { icon:"🐙", href:DATA.githubHref,          title:"GitHub" },
              { icon:"📱", href:`tel:${DATA.phone}`,      title:"Phone" },
            ].map((s, i) => (
              <a key={i} className="sb-soc" href={s.href} title={s.title}
                 target={s.href.startsWith("http") ? "_blank" : undefined}
                 rel="noreferrer" onMouseEnter={hi} onMouseLeave={ho}>
                {s.icon}
              </a>
            ))}
          </div>
        </aside>

        {/* ─── MAIN ─── */}
        <main className="main">

          {/* ABOUT */}
          <section className="sec" id="about" data-sec="about">
            <div className="sec-label">Introduction</div>
            <h1 className="sec-title">About Me</h1>
            <p className="about-text">{DATA.summary}</p>
            <div className="about-btns">
              <a href={`mailto:${DATA.email}`} className="cta-main" onMouseEnter={hi} onMouseLeave={ho}>Get In Touch →</a>
              <a href="#experience" className="cta-ghost" onMouseEnter={hi} onMouseLeave={ho}>View Work ↓</a>
            </div>
            <div className="stats-row">
              {DATA.stats.map((s, i) => (
                <div className="stat" key={i} onMouseEnter={hi} onMouseLeave={ho}>
                  <div className="stat-val">{s.val}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="sec" id="skills" data-sec="skills">
            <div className="sec-label">Technical Stack</div>
            <h2 className="sec-title">Skills</h2>
            <div className="skills-grid">
              {DATA.skills.map((s, i) => (
                <div className={`skill-card${s.cat === "3D & Creative" ? " skill-3d" : ""}`} key={i} onMouseEnter={hi} onMouseLeave={ho}>
                  <div className="skill-cat">
                    <div className="skill-icon">{s.icon}</div>
                    <div className="skill-name">{s.cat}</div>
                  </div>
                  <div className="skill-tags">
                    {s.items.map((t, j) => <span className="stag" key={j}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="sec" id="experience" data-sec="experience">
            <div className="sec-label">Career Journey</div>
            <h2 className="sec-title">Work Experience</h2>
            <div className="exp-list">
              {DATA.experience.map((e, i) => (
                <div className="exp-card" key={i} onMouseEnter={hi} onMouseLeave={ho}>
                  <div className="exp-header">
                    <div>
                      <div className="exp-period">{e.period}</div>
                      <div className="exp-company">{e.company}</div>
                      <div className="exp-role">{e.role}</div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-badge"
                        style={{ background:`${e.badgeColor}18`, border:`1px solid ${e.badgeColor}38`, color:e.badgeColor }}>
                        {e.badge}
                      </span>
                      <div className="exp-loc">📍 {e.location}</div>
                    </div>
                  </div>
                  <div className="exp-body">
                    {e.projects.map((p, j) => (
                      <div className="exp-proj" key={j}>
                        {p.name && <div className="exp-proj-name">{p.name}</div>}
                        <ul className="exp-bullets">
                          {p.bullets.map((b, k) => (
                            <li key={k} dangerouslySetInnerHTML={{ __html: b }} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="sec" id="projects" data-sec="projects">
            <div className="sec-label">Featured Work</div>
            <h2 className="sec-title">Key Projects</h2>
            <div className="proj-grid">
              {DATA.projects.map((p, i) => (
                <div className={`proj-card${p.featured ? " featured" : ""}`} key={i} onMouseEnter={hi} onMouseLeave={ho}>
                  <div className="proj-num">{p.num}</div>
                  <div>
                    {p.featured && <div className="proj-featured-badge">⚡ Featured Project</div>}
                    <div className="proj-name">{p.icon} {p.name}</div>
                    <div className="proj-desc">{p.desc}</div>
                    <div className="proj-tags">
                      {p.tags.map((t, j) => <span className="ptag" key={j}>{t}</span>)}
                    </div>
                  </div>
                  <div className="proj-links">
                    <a className={`proj-link${p.live !== "#" ? " live-link" : ""}`}
                       href={p.live} title="Live Demo"
                       target={p.live !== "#" ? "_blank" : undefined}
                       rel="noreferrer" onMouseEnter={hi} onMouseLeave={ho}>↗</a>
                    <a className="proj-link"
                       href={p.github} title="GitHub"
                       target={p.github !== "#" ? "_blank" : undefined}
                       rel="noreferrer" onMouseEnter={hi} onMouseLeave={ho}>⌥</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="sec" id="certifications" data-sec="certifications">
            <div className="sec-label">Credentials</div>
            <h2 className="sec-title">Certifications</h2>
            <div className="cert-grid">
              {DATA.certifications.map((c, i) => (
                <div className="cert-card" key={i} onMouseEnter={hi} onMouseLeave={ho}>
                  <div className="cert-top">
                    <div className="cert-icon">{c.icon}</div>
                    <div className="cert-badge">{c.issuer}</div>
                  </div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-by">{c.issuer} · {c.date}</div>
                  <div className="cert-desc">{c.desc}</div>
                  {c.link && (
                    <a className="cert-link" href={c.link} target="_blank" rel="noreferrer"
                       onMouseEnter={hi} onMouseLeave={ho}>Verify Certificate →</a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="sec" id="education" data-sec="education">
            <div className="sec-label">Academic Background</div>
            <h2 className="sec-title">Education</h2>
            <div className="edu-card" onMouseEnter={hi} onMouseLeave={ho}>
              <div className="edu-body">
                <div className="edu-degree">{DATA.education.degree}</div>
                <div className="edu-field">{DATA.education.field}</div>
                <div className="edu-inst">{DATA.education.college}, {DATA.education.location}</div>
                <div className="edu-chips">
                  <div className="edu-chip ec-cgpa">🎯 CGPA: {DATA.education.cgpa} / 10</div>
                  <div className="edu-chip ec-year">📅 {DATA.education.year}</div>
                </div>
              </div>
              <div className="edu-stat">
                <div className="edu-num">{DATA.education.cgpa}</div>
                <div className="edu-sub">CGPA · B.Tech CSE</div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="sec" id="contact" data-sec="contact">
            <div className="sec-label">Let's Connect</div>
            <h2 className="sec-title">Get In Touch</h2>
            <div className="contact-split">
              <div>
                <div className="contact-head">Let's Build<br /><span>Something</span><br />Amazing.</div>
                <p className="contact-sub">
                  Frontend Developer based in Greater Noida, India. Open to challenging roles
                  in product engineering, smart city systems, or enterprise SaaS platforms.
                </p>
              </div>
              <div className="contact-links">
                {[
                  { icon:"📧", label:"Email",    val:DATA.email,    href:`mailto:${DATA.email}` },
                  { icon:"📱", label:"Phone",    val:DATA.phone,    href:`tel:${DATA.phone}` },
                  { icon:"💼", label:"LinkedIn", val:DATA.linkedin, href:DATA.linkedinHref },
                  { icon:"🐙", label:"GitHub",   val:DATA.github,   href:DATA.githubHref },
                ].map((c, i) => (
                  <a className="clink" href={c.href} key={i}
                     target={c.href.startsWith("http") ? "_blank" : undefined}
                     rel="noreferrer" onMouseEnter={hi} onMouseLeave={ho}>
                    <div className="clink-icon">{c.icon}</div>
                    <div>
                      <div className="clink-lbl">{c.label}</div>
                      <div className="clink-val">{c.val}</div>
                    </div>
                    <div className="clink-arr">→</div>
                  </a>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="ft-name">ROHIT RATHAUR · FRONTEND DEVELOPER</div>
        <div className="ft-copy">© 2026 · GREATER NOIDA, INDIA · IBM CERTIFIED</div>
      </footer>
    </>
  );
}
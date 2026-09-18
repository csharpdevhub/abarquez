

const tickerData=[


];


const track=document.getElementById('tickerTrack');
[...tickerData,...tickerData].forEach(t=>{
  const el=document.createElement('div');
  el.className='ticker-item';
  el.innerHTML=`<span class="ticker-sym">${t.sym}</span><span class="ticker-price">${t.price}</span><span class="${t.up?'ticker-up':'ticker-dn'}">${t.chg}</span>`;
  track.appendChild(el);
});

const logos=[ ".NET",
  "C#",
  "Blazor",
  "WinForms",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Git"];

  
const lt=document.getElementById('logosTrack');
[...logos,...logos].forEach(l=>{
  const el=document.createElement('div');
  el.className='logo-item';
  el.textContent=l;
  lt.appendChild(el);
});

const nav=document.getElementById('mainNav');
const ticker=document.querySelector('.ticker');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>10);
});
window.addEventListener('load',()=>{
  document.querySelectorAll('.hero-content,.hero-visual').forEach((el,i)=>{
    setTimeout(()=>el.classList.add('visible'),i*150+100);
  });
});

const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
let scrollY=0;
hamburger.addEventListener('click',()=>{
  const open=mobileMenu.classList.contains('open');
  if(open){
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    document.body.style.position='';
    document.body.style.top='';
    window.scrollTo({top:scrollY,behavior:'instant'});
  } else {
    scrollY=window.scrollY;
    document.body.style.position='fixed';
    document.body.style.top=`-${scrollY}px`;
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded','true');
  }
});
mobileMenu.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click',()=>{
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    document.body.style.position='';
    document.body.style.top='';
    window.scrollTo({top:scrollY,behavior:'instant'});
  });
});


function switchPeriod(btn,period){
  document.querySelectorAll('.dp-period-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const configs={
    '7d':{val:'$284,920',change:'▲ +$12,840 (4.72%) today'},
    '1m':{val:'$284,920',change:'▲ +$74,920 (35.7%) month'},
    '3m':{val:'$284,920',change:'▲ +$104,920 (58.3%) quarter'},
    '1y':{val:'$284,920',change:'▲ +$164,920 (137.4%) year'},
  };
  const c=configs[period];
  document.getElementById('dpChartVal').textContent=c.val;
  document.getElementById('dpChartChange').textContent=c.change;
}

const sparkBars=[60,75,50,90,65,85,70,95];
document.getElementById('sparkline').innerHTML=sparkBars.map(h=>`<div class="pm-spark-bar" style="height:${h}%"></div>`).join('');

const stickyCards=document.querySelectorAll('.sticky-card');
const panelViews=document.querySelectorAll('.panel-view');
const panelLabel=document.getElementById('panelLabel');
const panelLabels=['Transfers','Analytics','Multi-currency','Security'];
stickyCards.forEach((card,i)=>{
  card.addEventListener('click',()=>{
    stickyCards.forEach(c=>c.classList.remove('active'));
    panelViews.forEach(p=>p.classList.remove('active'));
    card.classList.add('active');
    document.getElementById('panel-'+i).classList.add('active');
    panelLabel.textContent=panelLabels[i];
  });
});

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      stickyCards.forEach((card,i)=>{
        const rect=card.getBoundingClientRect();
        const viewH=window.innerHeight;
        if(rect.top<viewH*0.6&&rect.bottom>viewH*0.3){
          stickyCards.forEach(c=>c.classList.remove('active'));
          panelViews.forEach(p=>p.classList.remove('active'));
          card.classList.add('active');
          document.getElementById('panel-'+i).classList.add('active');
          panelLabel.textContent=panelLabels[i];
        }
      });
    }
  });
},{threshold:0.3});
stickyCards.forEach(c=>observer.observe(c));

const statNums=document.querySelectorAll('.stat-num[data-target]');
const statsObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target;
      const target=parseFloat(el.dataset.target);
      const suffix=el.dataset.suffix||'';
      const decimal=parseInt(el.dataset.decimal)||0;
      const prefix=el.dataset.prefix||'';
      let start=0,duration=1800,startTime=null;
      function animate(ts){
        if(!startTime)startTime=ts;
        const progress=Math.min((ts-startTime)/duration,1);
        const ease=1-Math.pow(1-progress,3);
        const val=start+(target-start)*ease;
        el.textContent=prefix+(decimal?val.toFixed(decimal):Math.round(val))+suffix;
        if(progress<1)requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
      const bar=el.closest('.stat-block').querySelector('.stat-bar');
      if(bar){setTimeout(()=>{bar.style.width=bar.dataset.width;},200);}
      statsObs.unobserve(el);
    }
  });
},{threshold:0.5});
statNums.forEach(el=>statsObs.observe(el));

let isAnnual=false;
function togglePricing(){
  isAnnual=!isAnnual;
  document.getElementById('pricingToggle').classList.toggle('on',isAnnual);
  document.querySelectorAll('.price-num').forEach(el=>{
    el.textContent=isAnnual?el.dataset.annual:el.dataset.monthly;
  });
  document.querySelectorAll('.period-label').forEach(el=>{
    el.textContent=isAnnual?'annually':'monthly';
  });
  document.querySelectorAll('.price-alt-monthly').forEach(el=>{
    el.style.display=isAnnual?'none':'inline';
  });
  document.querySelectorAll('.price-alt-annual').forEach(el=>{
    el.style.display=isAnnual?'inline':'none';
  });
}

const faqs = [
  {
    q: "What IT services do you provide?",
    a: "I provide flexible IT and development services including IT support, technical support, troubleshooting, web development, custom software development, cloud infrastructure, cybersecurity, monitoring, and technology solutions."
  },
  {
    q: "Do you provide custom software development?",
    a: "Yes. I develop custom software and applications based on the requirements, workflow, and goals of each project."
  },
  {
    q: "Do you provide technical support?",
    a: "Yes. I provide practical technical support, troubleshooting, maintenance, software assistance, and help with IT-related issues."
  },
  {
    q: "What technologies do you work with?",
    a: "My current technology focus includes Blazor, .NET, WinForms, and web development. The technology used for a project can be selected according to its requirements."
  },
  {
    q: "Do you offer flexible IT services?",
    a: "Yes. Services can be tailored to the project's requirements, priorities, workflow, budget, and technical needs."
  }
];



const faqList=document.getElementById('faqList');
faqs.forEach((f,i)=>{
  const item=document.createElement('div');
  item.className='faq-item';
  item.innerHTML=`<div class="faq-q"><span class="faq-q-text">${f.q}</span><svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6,9 12,15 18,9"/></svg></div><div class="faq-a">${f.a}</div>`;
  item.querySelector('.faq-q').addEventListener('click',()=>{
    item.classList.toggle('open');
  });
  faqList.appendChild(item);
});

let allExpanded=false;
function toggleAllFaq(){
  allExpanded=!allExpanded;
  document.querySelectorAll('.faq-item').forEach(el=>{
    allExpanded?el.classList.add('open'):el.classList.remove('open');
  });
  document.getElementById('faqToggleLabel').textContent=allExpanded?'Collapse all':'Expand all';
  const icon=document.getElementById('faqToggleIcon');
  icon.innerHTML=allExpanded
    ?'<line x1="5" y1="12" x2="19" y2="12"/>'
    :'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>';
}

const testimonials=[
  {q:'Portfolio cut our international settlement time from 3 days to under 2 seconds. It completely changed how we operate.',name:'Sarah Kim',role:'CFO at Hive Commerce',init:'SK'},
  {q:"The multi-currency accounts saved us over $40K in FX fees last year. The rate transparency alone is worth it.",name:'James Adler',role:'Finance Director, Nomad Labs',init:'JA'},
  {q:'Finally a fintech platform that doesn\'t feel like it was built in 2015. The dashboard is genuinely beautiful and fast.',name:'Priya Mehta',role:'Head of Ops, Stackflow',init:'PM'},
  {q:'Migrated from our bank\'s business account in a weekend. The API docs are exceptional — engineers loved it.',name:'Tom Brennan',role:'CTO at Vaulted',init:'TB'},
  {q:'The fraud detection caught three suspicious transactions before they hit our account. Incredible peace of mind.',name:'Liu Wei',role:'Founder, CloudMint',init:'LW'},
  {q:'Our accountants love the automated reconciliation. What took 8 hours a month now takes 20 minutes.',name:'Amara Osei',role:'Controller, Drift Studio',init:'AO'},
];
const tt=document.getElementById('testiTrack');
[...testimonials,...testimonials].forEach(t=>{
  const el=document.createElement('div');
  el.className='testi-card';
  el.innerHTML=`<div class="testi-stars">${[...Array(5)].map(()=>'<svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>').join('')}</div><p class="testi-quote">"${t.q}"</p><div class="testi-author"><div class="testi-avatar">${t.init}</div><div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div></div>`;
  tt.appendChild(el);
});

let testiPaused=false;
function toggleTestimonials(){
  testiPaused=!testiPaused;
  tt.style.animationPlayState=testiPaused?'paused':'running';
  const icon=document.getElementById('testiIcon');
  const label=document.getElementById('testiLabel');
  const btn=document.getElementById('testiToggle');
  if(testiPaused){
    icon.innerHTML='<polygon points="6,4 20,12 6,20"/>';
    label.textContent='Play';
    btn.setAttribute('aria-label','Play testimonials');
  } else {
    icon.innerHTML='<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>';
    label.textContent='Pause';
    btn.setAttribute('aria-label','Pause testimonials');
  }
}

document.getElementById('testiToggle').addEventListener('mouseenter',function(){
  this.style.borderColor='var(--sky)';
  this.style.color='var(--sky)';
});
document.getElementById('testiToggle').addEventListener('mouseleave',function(){
  this.style.borderColor='var(--border2)';
  this.style.color='var(--text2)';
});


document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href==='#')return;
    e.preventDefault();
    const target=document.querySelector(href);
    if(target)target.scrollIntoView({behavior:'smooth'});
  });
});


const statBlocks=document.querySelectorAll('.stat-block');
statBlocks.forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateY(20px)';
  el.style.transition=`opacity .8s var(--silk) ${i*0.1}s, transform .8s var(--silk) ${i*0.1}s, border-color .6s var(--silk), box-shadow .6s var(--silk)`;
});
const statObs2=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
      statObs2.unobserve(e.target);
    }
  });
},{threshold:0.2});
statBlocks.forEach(el=>statObs2.observe(el));

const sectionHeaders=document.querySelectorAll('.section-title,.section-tag,.section-sub');
sectionHeaders.forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(16px)';
  el.style.transition='opacity .8s var(--silk), transform .8s var(--silk)';
});
const headerObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
      headerObs.unobserve(e.target);
    }
  });
},{threshold:0.3});
sectionHeaders.forEach(el=>headerObs.observe(el));

const phoneFrame=document.getElementById('phoneFrame');
if(phoneFrame){
  let targetX=0,targetY=0,currentX=0,currentY=0,rafId=null,running=false;
  const MAX_TILT=16;
  function animate(){
    currentX+=(targetX-currentX)*.06;
    currentY+=(targetY-currentY)*.06;
    phoneFrame.style.transform=`rotateX(${currentY}deg) rotateY(${currentX}deg) translateZ(0)`;
    if(Math.abs(targetX-currentX)>.02||Math.abs(targetY-currentY)>.02){
      rafId=requestAnimationFrame(animate);
    } else {
      rafId=null;
      running=false;
    }
  }
  function kick(){
    if(!rafId){running=true;rafId=requestAnimationFrame(animate);}
  }
  window.addEventListener('mousemove',e=>{
    const x=e.clientX/window.innerWidth-.5;
    const y=e.clientY/window.innerHeight-.5;
    targetX=x*MAX_TILT*4;
    targetY=-y*MAX_TILT*2;
    kick();
  });
  window.addEventListener('mouseleave',()=>{
    targetX=0;targetY=0;
    kick();
  });
}

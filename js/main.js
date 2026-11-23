const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const bg=$('.burger'),nv=$('#nav');
bg.addEventListener('click',()=>bg.setAttribute('aria-expanded',nv.classList.toggle('open')));
$$('#nav a').forEach(a=>a.addEventListener('click',()=>nv.classList.remove('open')));
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{$$('[data-filter]').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('[data-cat]').forEach(i=>i.hidden=!(b.dataset.filter=='all'||i.dataset.cat==b.dataset.filter))}));
$$('form[data-mail]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const t=[...new FormData(f)].map(([k,v])=>k+' : '+v).join('\n');$('.ok',f).hidden=false;location.href='mailto:'+f.dataset.mail+'?subject='+encodeURIComponent(f.dataset.subject)+'&body='+encodeURIComponent(t)}));
const lb=$('#lb');if(lb){$$('.art').forEach(a=>a.addEventListener('click',()=>{$('img',lb).src=$('img',a).src;$('p',lb).textContent=a.dataset.t;lb.showModal()}));lb.addEventListener('click',()=>lb.close())}

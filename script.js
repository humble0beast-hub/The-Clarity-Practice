const toggle=document.querySelector('.menu-toggle');
const nav=document.createElement('nav');nav.className='menu-panel';nav.innerHTML='<a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#testimonials">Testimonials</a><a href="#contact">Contact</a><a href="#contact">Book a Session →</a>';document.querySelector('.site-header').appendChild(nav);
toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelector('.contact-form').addEventListener('submit',e=>{e.preventDefault();const note=document.querySelector('.form-note');note.textContent='Thanks for reaching out. This demo form is ready to connect to your preferred email or booking service.';});

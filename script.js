document.addEventListener('DOMContentLoaded', () => {

  // GSAP Animations for Intro
  gsap.from('.hero .profile-pic', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power3.out'
  });

  gsap.from('.hero h1', {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
  });

  gsap.from('.hero h2', {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
  });

  gsap.from('.hero .tagline', {
    duration: 1,
    delay: 0.7,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
  });

  gsap.from('.about', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out'
  });

  gsap.from('.projects .project-item', {
    scrollTrigger: {
      trigger: '.projects',
      start: 'top 80%',
      toggleActions: 'play none none none',
      markers: false,
    },
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.contact', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out'
  });

  // ScrollReveal alternative (in case GSAP plugins are not available)
  if(typeof ScrollReveal !== 'undefined'){
    ScrollReveal().reveal('.about', { delay: 400, distance: '50px', origin: 'bottom', duration: 800, easing: 'ease-out', reset:false});
    ScrollReveal().reveal('.project-item', { interval: 150, distance: '20px', origin: 'bottom', duration: 600, easing: 'ease-out', reset:false});
    ScrollReveal().reveal('.contact', { delay: 300, distance: '30px', origin: 'bottom', duration: 700, easing: 'ease-out', reset:false});
  }

  // Copy Email Button
  const copyBtn = document.getElementById('copyEmail');
  const emailSpan = document.getElementById('email');
  const toast = document.getElementById('toast');

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailSpan.textContent)
      .then(() => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2000);
      })
      .catch(() => {
        alert('Copy email gagal, silakan salin secara manual.');
      });
  });
});

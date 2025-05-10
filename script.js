document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations for Scroll
    gsap.registerPlugin(ScrollTrigger);

    // Animasi untuk profil
    gsap.from('.profile-card', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.profile-card',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });

    // Animasi untuk section tentang saya
    gsap.from('.about', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });

    // Animasi untuk section proyek
    gsap.from('.projects', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });

    // Animasi untuk section kontak
    gsap.from('.contact', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });

    // Mengatur opacity ke 1 saat halaman dimuat
    gsap.to('.contact', {
        opacity: 1,
        duration: 0.5,
        delay: 0.5 // Delay untuk memastikan elemen muncul setelah halaman dimuat
    });
});

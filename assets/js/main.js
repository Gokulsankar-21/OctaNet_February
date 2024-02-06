// Interactive Design

// DOM El 
const toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close'),
    navMenu = document.getElementById('nav-menu');

console.log(toggleMenu, closeMenu, navMenu);


// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

/* ==== MOUSEMOVE HOME IMG ==== */

document.addEventListener('mousemove', move);

console.log(this);

document.querySelector
// MOVE FUNCTION
function move(e) {
    // console.log(e);
    // console.log(this);
    // console.log(window.innerWidth);
    // console.log(e.pageX);

    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        // console.log(speed);

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    });
}

// GSAP - GreenSock Animation Platform

gsap.from('.nav__logo,.nav__toggle, .nav__close', { opacity: 0, duration: 1, delay: 1.5, y: 10 });
gsap.from('.nav__item',{opacity:0, duration:1, delay:1.2, y:10, stagger:0.2});

gsap.from('.home-title',{opacity:0,duration:1,delay:1.2, y:30});
gsap.from('.home-description',{opacity:0,duration:1,delay:1.8, y:30});
gsap.from('.home-button',{opacity:0,duration:1,delay:2.1, y:30});
gsap.from('.home__imgs',{opacity:0,duration:1,delay:1.3, y:30});

// DONE


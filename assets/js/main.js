// Interactive Design

// DOM El 
const toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close'),
    navMenu = document.getElementById('nav-menu');

console.log(toggleMenu, closeMenu, navMenu);


// SHOW
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show-menu');
});

// HIDDEN
closeMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show-menu');
});

// 
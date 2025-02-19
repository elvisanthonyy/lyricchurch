const ham = document.getElementById('menu');
const cancel = document.querySelector('.menu');
const menu = document.querySelector('.nav-menu');
const overlay = document.getElementById('overlay') ;
const listItem =  document.querySelector('.item-list');
const leader = document.getElementById('meet-leader');
const navBar = document.getElementById('homee');
const body = document.querySelector('body');
const cancelHam = document.querySelector('.cancel');
 

function toggleMenu () {
    menu.classList.toggle('active');
    cancel.classList.toggle('active');
    body.classList.toggle('active');
};

function removeMenu () {
    menu.classList.remove('active');
    body.classList.remove('active');
    cancel.classList.remove('active');
};


//Toggle hamburger menu
ham.addEventListener('click', () => {
    
    toggleMenu();
});

//Tapping anywhere removes menu
overlay.addEventListener('click', ()=> {
    removeMenu();
});

//remove menu when link is clicked
items.addEventListener('click', e => {
    if(e.target.matches('a')) {
        removeMenu();
    }
});

const ham = document.getElementById('menu')
const items = document.getElementById('items')
const cancel = document.querySelector('.menu')
const overlay = document.getElementById('overlay')
const listItem =  document.querySelector('.item-list')

//Toggle hamburger menu
ham.addEventListener('click', () => {
    items.classList.toggle('active')
    cancel.classList.toggle('close')
    overlay.classList.toggle('active')
})

//Tapping anywhere removes menu
overlay.addEventListener('click', ()=> {
    items.classList.remove('active')
    cancel.classList.remove('close')
    overlay.classList.remove('active')
})

//remove menu when link is clicked
function item () {
    items.classList.remove('active')
    cancel.classList.remove('close')
    overlay.classList.remove('active')
}


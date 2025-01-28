const ham = document.getElementById('menu')
const items = document.getElementById('items')
const cancel = document.querySelector('.menu')
const tap = document.querySelector('#main')
const overlay = document.getElementById('overlay')


ham.addEventListener('click', () => {
    items.classList.toggle('active')
    cancel.classList.toggle('close')
    tap.classList.toggle('dim')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', ()=> {
    items.classList.remove('active')
    cancel.classList.remove('close')
    overlay.classList.remove('active')
})


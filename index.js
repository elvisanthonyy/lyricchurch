const ham = document.getElementById('menu');
const items = document.querySelector('.items');
const cancel = document.querySelector('.menu') ;
const overlay = document.getElementById('overlay') ;
const listItem =  document.querySelector('.item-list')
const leader = document.getElementById('meet-leader')
const navBar = document.getElementById('homee')
const body = document.querySelector('body')

function remove() {
    items.classList.remove('active')
    cancel.classList.remove('close')
    overlay.classList.remove('active')
}

//Toggle hamburger menu
ham.addEventListener('click', () => {
    items.classList.toggle('active')
    cancel.classList.toggle('close')
    overlay.classList.toggle('active')
    body.classList.toggle('active')
})

//Tapping anywhere removes menu
overlay.addEventListener('click', ()=> {
    remove()
    body.classList.remove('active')
})

//remove menu when link is clicked
items.addEventListener('click', e => {
    if(e.target.matches('a')) {
        remove()
    }
})


/*window.onscroll = () => {
    let navHeight = 150
    let leaderPosition = leader.getBoundingClientRect()
    if(leaderPosition.y < navHeight) {
        navBar.classList.add('active')
       //alert(alert(leaderPosition.y))
    } else if (leaderPosition.y == 0) {
        leader.classList.add('active')
        
    }  else {
        navBar.classList.remove('active')
        leader.classList.remove('active')
    }

}*/

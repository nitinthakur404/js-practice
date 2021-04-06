let media = window.matchMedia('(max-width:788px )')
let navbar = document.getElementById('navbar')
let humbergerMenu = document.getElementById('humbergerMenu')
let btn = document.getElementById('humbergerMenu')
let thiredphasehum = document.getElementById('thiredphasehum')
thiredphasehum.style.display = 'none'

function mediaQueryHandler(e) {
    if (e.matches) {
        navbar.style.display = 'none'
        humbergerMenu.style.display = ''
        console.log("query match")
    }
    else {
        navbar.style.display = ''
        humbergerMenu.style.display = 'none'
    }
}

btn.addEventListener('click', function () {
    if (btn.classList[1] == "extended") {
        thiredphasehum.style.display = 'block'
    } else {
        thiredphasehum.style.display = 'none'
    }
})
function myFunction(e) {
    e.classList.toggle("change");
    btn.classList.toggle('extended')
}
media.addListener(mediaQueryHandler)
mediaQueryHandler(media)
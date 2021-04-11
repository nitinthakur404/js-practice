let divbox = document.querySelector('#test')
divbox.style.left = "0px"
let btn = document.getElementById('btn')
let openbutton = document.getElementById('humbergermenu')
let style = getComputedStyle(divbox)
let symbol
openbutton.addEventListener('click', function () {
    divbox.style.left = '-0px'
})
btn.addEventListener('click', function () {
    divbox.style.left = '-210px'
})



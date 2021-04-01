import color from './module.js'
console.log(color)
let show = ''
function randomeno() {
    let no = Math.floor(Math.random() * (0 - 6)) + 6;
    return no
}

function backgroundocolor() {
    let random = randomeno()
    let bgcolor = color[random].background
    let textcolor = color[random].text
    
    document.getElementById('backcolor').style.backgroundColor = bgcolor
    document.getElementById('container').style.color = textcolor
    show = ` <h1 id="fonbgtcolor" id="same">Background color:${bgcolor}</h1>
             <h1 id="fonttextcolor" id="same">text color:${textcolor}</h1>`
    document.getElementById('container').innerHTML = show

}
document.getElementById("btn").addEventListener('click', function () {
    backgroundocolor()
})

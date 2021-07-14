import dataOfEmploy from './datamodule.js'
let count = 0
let card = ""

let btn = document.querySelectorAll('.btn')
btn.forEach(function (e) {

    e.addEventListener('click', function (e) {
        let counter = e.currentTarget.classList

        if (counter.contains('left')) {
            if(count < dataOfEmploy.length-1){

            count++
            }
            else{
                count=0
            }

        }
        else if (counter.contains('right')) {
            console.log('Right side')
            if (count != 0) {
                console.log(count)
                count--
            }
            else {
               count=4
            }

        } showDetails(count)
    })
})


function showDetails(value) {
    console.log()
    card = `<div id="imgSet">
    <div id="imgSrc2"></div>
    <img id="imgSrc" src=${dataOfEmploy[value].image}>
</div>
<div id="employDetails">
    <p id="name">${dataOfEmploy[value].Name}</p>
    <h4 id="occuipation">${dataOfEmploy[value].job}</h4>
    <p id="workDetails">${dataOfEmploy[value].jobDetails}</p>
</div>`
    console.log(value, 'show')
document.getElementById('container2').innerHTML=card
}

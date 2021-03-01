console.log("enter the value of the input box")
let btn = document.getElementById('btn')

function moneyConverter() {
    let rupees = document.getElementById('moneyInput').value
    let converter = document.getElementById("converter").value
    if (converter == "0") {
        alert("please provide some value")
    }
    else {
        converter = Number(converter)
        return rupees / converter
    }

}
btn.addEventListener('click', function () {
    let test = moneyConverter()
    let converter = document.getElementById("converter").value
    let text=``
})
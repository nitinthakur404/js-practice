console.log("enter the value of the input box")
let btn = document.getElementById('btn')

function moneyConverter() {
    let rupees = document.getElementById('moneyInput').value
    let converter = document.getElementById("converter").value
    if (converter == "0" || rupees == "") {
        alert("please provide some value")
    }
    else {
        converter = Number(converter)
        return rupees / converter
    }

}
btn.addEventListener('click', function () {
    let test = moneyConverter()
    if (test == undefined) {
        alert("sorry please fill Amount input box")
    }
    else {

        console.log(test)
        document.getElementById('textShowid').innerHTML = test
    }
})
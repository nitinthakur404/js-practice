document.write('this is the console.log')

function firstname(lastName) {
    Firstname = "Nitin"
    console.log(Firstname + lastName())
}
function lastname() {
    return 'Kumar'
}

firstname(lastname)
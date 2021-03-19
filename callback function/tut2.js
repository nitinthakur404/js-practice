function fun1(value) {
    return new Promise(function (resolve, reject) {
        let error = value

        if (error !== false) {
            console.log('your api fatch')
            resolve()
        }
        else {

            console.log("your api not fatch and create some error ss")
            reject()
        }
    })
}
fun1(false).then(function () {
    let tat = "we get data successfully and"
    document.getElementById('tat1').innerHTML = tat



}).catch(function () {
    let tat = "we did not receive the data"
    document.getElementById('tat1').innerHTML = tat
})
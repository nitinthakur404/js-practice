
function bill_amount() {
    let input = document.getElementById('input').value
    input = Number(input)
    return input
}

function services_fun() {
    let services = document.getElementById('service').value
    if (services == 'null') {

        alert("please give us feedba")
    }
    else {
        services = Number(services)
    }
    return services
}



function no_people() {
    let people = document.getElementById('no_people').value
    people = Number(people)
    return people
}
function tip() {
    document.getElementById('btn').addEventListener('click', function () {
        // let time1 = bill_amount()
        let time2 = services_fun()
        let time3 = no_people()
        function percentage() {
            let percentageget = (services_fun() / 100) * bill_amount()
            return percentageget
        }
        function totalBill() {
            let time1 = percentage() + bill_amount()
            return (Math.floor(time1))
        }
        function partOfBill() {
            let show = totalBill() / no_people()
            return (`${show} Rupees Amount of per head`)
        }
        let SHOW = partOfBill()
        document.getElementById('billShow').innerHTML = SHOW

    })
}
tip()
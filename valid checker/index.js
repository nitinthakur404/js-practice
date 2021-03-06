let arr = [
    {
        coupan: "10", valid: "  expire",
    },
    {
        coupan: "11", valid: "expire",
    },
    {
        coupan: "12", valid: "not expire",
    },
    {
        coupan: "#12ab13", valid: "not expire",
    },
    {
        coupan: "#12ab14", valid: "not expire",
    },
    {
        coupan: "#12ab15", valid: "not expire",
    },
]

function coupanChaker() {
    let inputchack = document.getElementById('inputBox').value
    if (inputchack == "") {
        alert("please enter the Coupan ID")
    }
    else {
        return inputchack
    }
}

function handleIndex() {
    document.getElementById('btn').addEventListener('click', function () {
        let test1 = coupanChaker()
        let test2 = arr.findIndex(element => element.coupan === test1)

        if (arr[test2].valid == "not expire") {
            alert("your coupan are attached  successfully ")
            arr[test2].valid = 'expire'
        }
        else {
            alert("sorry your coupan are expire")
            console.log(arr[test2].valid, "else")
        }
    })
}
handleIndex()
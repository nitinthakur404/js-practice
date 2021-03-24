let test = ""
let test1 = ""
let pricedisplay = ""
let priceOfAmount = Number()
let cartItemShow = ""
var itemarray = []
let cartitem = [
    {
        keyid: 1,
        itemName: 'Think Grow and Rich',
        price: 10,

    },
    {
        keyid: 2,
        itemName: 'positive thingking',
        price: 10,

    },
    { keyid: 3, itemName: 'how to win', price: 150 },
    { keyid: 4, itemName: 'power of mind', price: 170 },
]

function handleAddItem(itemId) {

    let findtest = itemarray.find((data) => data.keyid == itemId)
    let obj1 = cartitem.find((value) => value.keyid == itemId)

    if (findtest == undefined) {
        let usepush = itemarray.push(obj1)
        cartdetails()
        showCartDetails()
        test = ''
        amount()

    } else {
        alert('this item already in your cart')
    }

}

function amount() {

    itemarray.forEach((value) => {

        priceOfAmount = value.price + priceOfAmount
    })
    pricedisplay = `
    <ul class="nav navbar-nav navbar-right">
    <li  class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
        aria-expanded="false">Amount: ${priceOfAmount}<span class="caret"></span></a>
</li> </ul>`
    // console.log(priceOfAmount)
    document.getElementById('amountshow').innerHTML = pricedisplay
    priceOfAmount = 0

}

function cartdetails() {
    let itemlength = itemarray.length
    // console.log(itemlength)

    cartItemShow = ` 
    <ul class="nav navbar-nav navbar-right">
    <li id="cartitem"><a href="#" color="red">your cart:${itemlength}</a></li> </ul>`
    document.getElementById('cartitem').innerHTML = cartItemShow

}


function showItem() {
    cartitem.forEach((value) => {
        test = test + ` <div id='card'>
        <p>item name:${value.itemName}</p>
        <p>price :${value.price}</p>
        <button  id='btn' class="btn btn-primary btn-sm " role="button" aria-disabled="true" onclick= 'handleAddItem(${value.keyid})' >add</button>
        </div>`
    })
    document.getElementById('container').innerHTML = test
    itemarray = []
}

showItem()

function showCartDetails() {

    itemarray.map((value, index) => {
        test1 = test1 + ` <div id='card2'>
        <p id="cardItemName">Item name:-${value.itemName}</p>
        <p id="cardItemPrice">Price :-${value.price}</p>
        <button id="removebtn"onclick= itemremove(${index})>remove</button>
        </div>`

    })
    document.getElementById('cartdetails').innerHTML = test1
    test1 = ''

    // console.log(itemarray)
}

function itemremove(removekeyid) {
    itemarray.splice(removekeyid, 1)

    console.log(itemarray)
    cartdetails()
    showCartDetails()
    amount()
}




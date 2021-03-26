let coffeeOnSaleList = [
    {
        image: "",
        name: "Kayo Sungai P",
        price: 100000,

        quantity: 20,
        description: "good",
        id: 0,
    },
    {
        image: "",
        name: "Matchlock Bld",
        price: 120000,
        quantity: 20,
        description: "enak",
        id: 1,
    },
    {
        image: "",
        name: "Jakarta Coffee",
        price: 150000,
        quantity: 20,
        description: "deliciousooooo",
        id: 2,
    },
    {
        image: "",
        name: "Bali Coffee",
        price: 130000,
        quantity: 20,
        description: "fancy",
        id: 3,
    },
    {
        image: "",
        name: "Aceh Coffee",
        price: 170000,
        quantity: 20,
        description: "delicious",
        id: 4,
    },
    {
        image: "",
        name: "Batavia Coffee",
        price: 120000,
        quantity: 12,
        description: "Strong",
    },
    {
        image: "",
        name: "Bali Tri Coffee",
        price: 120000,
        quantity: 1,
        description: "Soury",
    },
    {
        image: "",
        name: "Aceh rr Coffee",
        price: 120000,
        quantity: 20,
        description: "Delicious",
    },
]

let cart = []

// selectors
let mainBar = document.getElementById("cardContainer")
let cartContainer = document.getElementById("cartContainer")
let payButton = document.getElementById("payButton")
let totalPriceText = document.getElementById("totalPriceItems")

//addeventlistener
mainBar.addEventListener('click', addToCart)
payButton.addEventListener('click', pay)
cartContainer.addEventListener('click', deleteCartItem)
cartContainer.addEventListener('click', decreseCartItem)



function pay(event) {
    event.preventDefault()
    for (let i = 0; i < cart.length; i++) {
        // find item with name of item in cart and subtract quantity
        coffeeOnSaleList.find(x => x.name === cart[i].name).quantity -= cart[i].checkoutQuantity
    }
    cart = []
    clearCart()
    clearCards()
    generateCard(coffeeOnSaleList)
}

function deleteCartItem(event) {
    event.preventDefault()
    const idx = Number(event.target.attributes.value.value)

    // delete item with index from button value
    cart.splice(idx, 1)
    clearCart()
    generateCart(cart)
}

function decreseCartItem(event) {
    event.preventDefault()
    const idx = Number(event.target.attributes.value.value)
    console.log(idx)

    console.log(cart,"decrease cart")
    // decrese item with index from button value
    if (cart) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === idx) {
                cart[i].checkoutQuantity -= 1
            } 
        }
    }
    clearCart()
    generateCart(cart)
}

function addToCart(event) {
    event.preventDefault()
    const idx = Number(event.target.attributes.value.value)
    let itemDoesntExist = true

    // check if cart has selected coffee
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === coffeeOnSaleList[idx].name) {
            itemDoesntExist = false
        }
    }

    // if not make new item in cart with one checkout quantity
    if (itemDoesntExist) {
        let newItem = coffeeOnSaleList[idx]
        newItem["checkoutQuantity"] = 1
        cart.push(newItem)
    } else { // else if it exist add the quantity by 1
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === coffeeOnSaleList[idx].name) {
                if(cart[i]["checkoutQuantity"] < coffeeOnSaleList[idx].quantity){
                    cart[i]["checkoutQuantity"] += 1
                }
            }
        }
    }
    clearCart()
    generateCart(cart)
}

function generateCart(cart) {
    // currency formatter
    let currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    });
    // price array to store the price to sum
    let prices = []
    console.log(cart)

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].checkoutQuantity > 0){

        let newCard = document.createElement('div')
        newCard.classList.add('titleID') // please change to styling proper spacing
        
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete'
        deleteButton.setAttribute('type', 'submit')
        deleteButton.setAttribute('value', i)
        newCard.appendChild(deleteButton)

        let itemName = document.createElement('p1')
        itemName.innerHTML = cart[i].name
        newCard.appendChild(itemName)

        let itemPrice = document.createElement('p2')
        itemPrice.innerHTML = currencyFormatter.format(cart[i].price)
        newCard.appendChild(itemPrice)

        let itemQuantity = document.createElement('p3')
        itemQuantity.innerHTML = cart[i].checkoutQuantity
        newCard.appendChild(itemQuantity)

        let itemTotal = document.createElement('p')
        // itemTotal.innerHTML = currencyFormatter.format(cart[i].checkoutQuantity * cart[i].price)
        prices.push(cart[i].checkoutQuantity * cart[i].price)
        newCard.appendChild(itemTotal)


        let decreaseButton = document.createElement('button')
        decreaseButton.innerHTML = '-'
        decreaseButton.setAttribute('type', 'submit')
        decreaseButton.setAttribute('value', cart[i].id)
        newCard.appendChild(decreaseButton)

        cartContainer.appendChild(newCard)
    }
    // calculate total price with reduce function
    totalPriceText.innerHTML = currencyFormatter.format(prices.reduce(sum))
    }
}

function sum(total, num) {
    return total + num;
}

function clearCart() {
    cartContainer.innerHTML = ''
    totalPriceText.innerHTML = 'IDR 0.00'
}

function clearCards() {
    mainBar.innerHTML = ''
}

function generateCard(coffeeOnSaleList) {
    let numberOfRows = Math.ceil(coffeeOnSaleList.length/4)
    let maxNumberOfColumn = 4

    for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {
        let newRow = document.createElement('div')
        newRow.classList.add('row')
        for (let currentColumn = 0; currentColumn < maxNumberOfColumn; currentColumn++) {
            // add bracket if error
            let currentIndex = ((currentRow*maxNumberOfColumn) + currentColumn)
            if ( currentIndex > coffeeOnSaleList.length - 1) {
                break;
            }
            let column = document.createElement('div')
            column.classList.add('col')
            newRow.appendChild(column)

            let cardContainer = document.createElement('div')
            cardContainer.classList.add('card')

            let itemName = document.createElement('h4')
            itemName.classList.add('namaBarang')
            itemName.innerHTML = coffeeOnSaleList[currentIndex].name
            cardContainer.appendChild(itemName)

            let itemImage = document.createElement('img')
            itemImage.classList.add('gambar1')
            itemImage.setAttribute('src', `./asset/img/br ${currentIndex+1}.jpg`)
            cardContainer.appendChild(itemImage)

            let itemPrice = document.createElement('h3')
            itemPrice.classList.add('harga')
            // itemName.innerHTML = coffeeOnSaleList[currentIndex].price
            cardContainer.appendChild(itemPrice)

            let itemQuant = document.createElement('h3')
            itemQuant.classList.add('quantity')
            itemQuant.innerHTML = coffeeOnSaleList[currentIndex].quantity
            cardContainer.appendChild(itemQuant)

            let itemDescription = document.createElement('p')
            itemDescription.classList.add('cardText')
            itemDescription.innerHTML = coffeeOnSaleList[currentIndex].description
            cardContainer.appendChild(itemDescription)

            let addToCartButton = document.createElement('button')
            addToCartButton.innerHTML = 'Add To Cart'
            addToCartButton.setAttribute('type', 'submit')
            addToCartButton.setAttribute('value', currentIndex)
            // disable button if quantity 0
            if(coffeeOnSaleList[currentIndex].quantity === 0) {
                addToCartButton.disabled = true
            }
            cardContainer.appendChild(addToCartButton)

            column.appendChild(cardContainer)
            newRow.appendChild(column)
        }
        mainBar.appendChild(newRow)
    }
}  

generateCard(coffeeOnSaleList)
// /*
// 1. have the database
// 2. CRUD - create, update, delete
// 3. 3 function
//     1. create  - if the person wants to make more list?
//     2. update - if wanna update the available supply or price
//     3. delete - if don't wanna sell it anymore
//     4. main function
// */

// let coffeeOnSaleList = [
//     {
//         name: "Kayo Sungai Penuh",
//         price: 100000,
//         quantity: 20,
//         region: "Jambi",
//     },
//     {
//         name: "Matchlock Blend",
//         price: 120000,
//         quantity: 20,
//         region: "Toraja",
//     },
//     {
//         name: "Aceh Coffee",
//         price: 120000,
//         quantity: 20,
//         region: "Aceh",
//     },
// ]


// //=========================================



// function addNewCoffee(coffeeList, coffeeToAdd) {
//     // let coffeeToAdd = {
//     //     name: "Columbia Coffee",
//     //     price: 100000,
//     //     region: "Lampung",
//     // }

//     // console.log(coffeeList)
//     let coffeeExist = false
//     //make everything lower case
//     let lowerCaseCoffeeList = coffeeList.map(function (element) {return element.name.toLowerCase()})
//     let lowerCaseCoffeeToAdd = coffeeToAdd.map(function (element) {return element.name.toLowerCase()})
//     // console.log(lowerCoffeeList)

//     for (let i = 0; i < lowerCaseCoffeeList.length; i++) {
//         if (lowerCaseCoffeeList[i] === lowerCaseCoffeeToAdd) {
//             coffeeExist = true
//             return `Coffee Already Exist`
//         } 
//     }

//     // console.log(coffeeExist)
//     if (coffeeExist === false) {
//         coffeeList.push(coffeeToAdd)
//     }
    
//     return coffeeList
// }

// let coffeeToAdd = [{
//     name: "Aceh Coffee",
//     price: 100000,
//     quantity: 20,
//     region: "Lampung",
// }
// ]

// console.log(addNewCoffee(coffeeOnSaleList, coffeeToAdd))


// //=========================================


// function updateCoffeeInformation (coffeeList,itemName,toUpdate,newInformation) {
//    for (let i = 0; i < coffeeList.length; i++) {
//        if (toUpdate ===  "price") {
//            if (coffeeList[i].name === itemName) {
//             coffeeList[i].price = newInformation
//            }
//        } else if (toUpdate ===  "quantity") {
//             if (coffeeList[i].name === itemName) {
//             coffeeList[i].quantity = newInformation
//            }
//        } else if (toUpdate ===  "region"){
//         if (coffeeList[i].name === itemName) {
//             coffeeList[i].region = newInformation
//            }
//        }
//    }
//    return coffeeList
// }

// let itemName = "Matchlock Blend"
// let toUpdate = "region"
// let newInformation = "Aceh"

// // console.log(updateCoffeeInformation(coffeeOnSaleList,itemName,toUpdate,newInformation))

// //=========================================

// function deleteCoffeeFromList(coffeeList,itemNameToDelete) {
//     for (let i = 0; i < coffeeList.length; i++) {
//         if (coffeeList[i].name === itemNameToDelete) {
//             coffeeList.splice(i,1)
//         }
//     }
//     return coffeeList
// }

// let itemToDelete = "Matchlock Blend"

// // console.log(deleteCoffeeFromList(coffeeOnSaleList,itemToDelete))
// //=========================================

// function generateCard() {

// }


// //=========================================


let coffeeOnSaleList = [
    {
        image: "./asset/img/br 1.jpg",
        name: "Kayo Sungai Penuh",
        price: 100000,
        quantity: 20,
        description: "delicious",
    },
    {
        image: "",
        name: "Matchlock Blend",
        price: 120000,
        quantity: 20,
        description: "delicious",
    },
    {
        image: "",
        name: "Aceh Coffee",
        price: 120000,
        quantity: 20,
        description: "delicious",
    },
    {
        image: "",
        name: "Aceh Coffee",
        price: 120000,
        quantity: 20,
        description: "delicious",
    },
    {
        image: "",
        name: "Aceh Coffee",
        price: 120000,
        quantity: 20,
        description: "delicious",
    },
]

let cart = []

// selectors
let mainBar = document.getElementById("cardContainer")

//addeventlistener
mainBars.addEventListener('click', addToCart)

function addToCart(event) {
    event.preventDefault()
    const idx = Number(event.target.attributes.value.index)
    coffeeOnSaleList[idx]
    cart.push(coffeeOnSaleList[idx])
    // clearCard()
    // generateCard(pokemons)
    // // console.log(event.target.attributes.value.value)
}

function generateCard(coffeeOnSaleList) {
    let numberOfRows = Math.ceil(coffeeOnSaleList.length/4)
    let maxNumberOfColumn = 4

    for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {
        let newRow = document.createElement('div')
        newRow.classList.add('row')
        for (let currentColumn = 0; currentColumn < maxNumberOfColumn; currentColumn++) {
            if ((currentRow*maxNumberOfColumn) + currentColumn > coffeeOnSaleList.length - 1) {
                break;
            }
            let column = document.createElement('div')
            column.classList.add('col')
            newRow.appendChild(column)

            let cardContainer = document.createElement('div')
            cardContainer.classList.add('card')

            let itemName = document.createElement('h4')
            itemName.classList.add('namaBarang')
            itemName.innerHTML = coffeeOnSaleList[(currentRow*maxNumberOfColumn) + currentColumn].name
            cardContainer.appendChild(itemName)

            let itemImage = document.createElement('img')
            itemImage.classList.add('gambar')
            itemImage.setAttribute('src', coffeeOnSaleList[(currentRow*maxNumberOfColumn) + currentColumn].image)
            cardContainer.appendChild(itemImage)

            let itemPrice = document.createElement('h3')
            itemPrice.classList.add('harga')
            itemName.innerHTML = coffeeOnSaleList[(currentRow*maxNumberOfColumn) + currentColumn].price
            cardContainer.appendChild(itemPrice)

            let itemQuant = document.createElement('h3')
            itemQuant.classList.add('quantity')
            itemQuant.innerHTML = coffeeOnSaleList[(currentRow*maxNumberOfColumn) + currentColumn].quantity
            cardContainer.appendChild(itemQuant)

            let itemDescription = document.createElement('p')
            itemDescription.classList.add('cardText')
            itemDescription.innerHTML = coffeeOnSaleList[(currentRow*maxNumberOfColumn) + currentColumn].description
            cardContainer.appendChild(itemDescription)

            let addToCartButton = document.createElement('button')
            addToCartButton.innerHTML = 'Add To Cart'
            addToCartButton.setAttribute('type', 'submit')
            addToCartButton.setAttribute('value', (currentRow*maxNumberOfColumn) + currentColumn)
            cardContainer.appendChild(addToCartButton)

            column.appendChild(cardContainer)
        }
        mainBar.appendChild(newRow)
    }
}  

generateCard(coffeeOnSaleList)


/* <div class="card">
    <div class="namaBarang">
        <h4>Nama Barang</h4>
    </div>
    <div class="gambar">
        <img src="./asset/img/test.jpg" alt="">
    </div>
    <div class="harga">
        <h3>Rp 10.000</h3>
    </div>
    <div class="quantity">
        <h3>10 Box</h3>
    </div>
    <div class="cardText">
        <p>
            Ini kopi jawana paling enak dan paling ngaco
            siapa yang mau silahkan diambil mumpung murah
        </p>
    </div>
    <div class="addBasket">
        <form action="">
            <input type="submit" value="Add To Cart">
        </form>
    </div>
</div> */
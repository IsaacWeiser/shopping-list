// create an array of objects as a shopping list

const shoppingList = [
    {
        id: 1,
        price: 12,
        name: "Milk",
    }, {
        id: 2,
        price: 4,
        name: "Eggs"
    }, {
        id: 3,
        price: 8,
        name: "Pizza Rolls"
    }, {
        id: 4,
        price: 23.99,
        name: "Organic Chicken"
    }, {
        id: 5,
        price: 5,
        name: "Mango"
    }, {
        id: 6,
        price: 3,
        name: "Sandwhich Buns"
    }, {
        id: 7,
        price: 6,
        name: "Mayo"
    }]

    for (const item of shoppingList) {
        console.log(item)
    }

    //create a function that adds grocery items to the list takes an id as an argument and adds the date
    //re write to make the id auto generate

function addToList (nameOfProd, priceOf) {
   const idnum = shoppingList.length+1
   const initArrLength = shoppingList.length
    const d= new Date()
    shoppingList.push({
        id: idnum,
        name: nameOfProd,
        price: priceOf,
        date: d
    })
    for (const item of shoppingList)
    {
        if (initArrLength-1 < shoppingList.indexOf(item))
        {
            console.log("A new item is: ")
            console.log(item)
        }
    }
}

addToList('Cheerios', 6)
addToList('Corn', 2.50)
addToList('beef', 12)
addToList('Soda', 8)
addToList('Bleach', 16)

for (const item of shoppingList){
    if (item.price >= 8) {
        console.log("expensive item:")
        console.log(item)
    }
}
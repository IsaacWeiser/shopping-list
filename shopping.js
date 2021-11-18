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
function addToList (idnum, nameOfProd, priceOf) {
   const d= new Date()
    shoppingList.push({
        id: idnum,
        name: nameOfProd,
        price: priceOf,
        date: d
    })
    for (const item of shoppingList)
    {
        if (idnum === item.id)
        {
            console.log(item)
        }
    }
}

addToList(8, 'Cheerios', 6)
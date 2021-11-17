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
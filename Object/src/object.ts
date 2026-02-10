type cup = {size: string}

let smallCup: cup = {

    size: "200ml"
}

let bigCup= {

    size: "500ml",
    material: "steel"
}

// MORE APPROACHES

// Good practices.
type Item = {itemName: string, itemNumber: number}
type Address = {stree: string, pin: number}


type order = {

    orderNumber: number,
    item: Item,
    address: Address
}

// PARTIAL AND REQUIRED

// Partial

type coffee = {

    name: string,
    quantity: number
}

const coffeePartial = (order: Partial<coffee>) =>{

    console.log("Coffee is serverd", order);
}

coffeePartial({name: "Simple macha"});  //we can pass one value or two or null anything.


// Required

type coffeeAnother = {

    name?: string,
    quantity?: number   // Let's say this is optional value.
}

function coffeeRequired(order: Required<coffeeAnother>){        // Now i need to pass the values at any cost otherwise it will through the error.

    console.log("I'm inside the Coffee Required function");
}

coffeeRequired({name: "Simple Coffee", quantity: 1})



// FUNCTION TYPE

// Like we can define some function like this too.

const fun = ( order: {
    type: string,
    size: "small"| "big"| "medium",
    suger: number

}):number =>{

    return 0;

}
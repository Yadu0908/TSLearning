
type SimpleCoffee = {name: "Simple Coffee"; hardLevel: number};
type Cappuccino = {name: "Cappuccino Coffee"; type: number};
type Latte= {name: "latte"; hardLevel: number; milktype: string};


type coffee = SimpleCoffee | Cappuccino | Latte ;

function makeCoffee (order: coffee){

    switch (order.name){

        case "Simple Coffee":
            return `Simple coffee with basic milk`
            break;

        case "Cappuccino Coffee":
            return `Cappuccino coffee with extra cream ${order.type}`
            break;

        case "latte":
            return `Latte with almond milk. ${order.milktype = "Almond milk"}`

            break;
    }
}


function anotherCoffee (order: coffee){

    if("type" in order){

        return `Cappuccino`
    }

    if("milktype" in order){

        return "Latte"
    }

    return "Simple coffee"
}


//! Basic class decleration.

class chai {

    flavor: string
    amount: number

    constructor(flavor: string, amount: number) {

        this.flavor = flavor;
        this.amount = amount;
    }
}

// The above code is the best practices to declaring the class in TS.

const c1 = new chai("Masala", 3);        // Object defined.

c1.amount = 3;           // manual values changed with object.


//! Public, Private and Protected.

class Human {

    public name: string = "Yadu"

    private id: number = 1;

    // Or we can define it like....

    #number : number = 8973565276

    fun() {
        return this.id;
    }

    protected email: string = "whatever@kuchbhi.com"        // For accessing we need to create an inhariting class.

}

const h1 = new Human();

h1.name         // we can access name but can't access directly id.

h1.fun();       // This is how we can access id.

class person extends Human {

    anything() {

        return this.email           // Yeah so here i can use the parents class var.
    }

}


//! Getter and Setter methods.

class Monitor{

    private _name: string = "Ankit"         // Convention way to define private values/ variables

    get naam(){             // This is getter method.

        return this._name
    }

    set naam(value: string){    // This is setter method.

        this._name = value;

    }
}


const M1 = new Monitor();

M1.naam= "Sanchit"          // replacing the name of Monitor
console.log(M1.naam);



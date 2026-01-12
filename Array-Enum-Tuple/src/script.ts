let array1: string[]  = ["Apple", 'Banana', 'Orange', 'Graphes'];

let usdPrice: Array<number> = [2, 1.3, 2, 3]


//array of object.

type veggies = {

  name: string,
  price: number
}

let person : veggies[] = [

  { 
    name: "Potato",
    price: 30,
  }

]


const player: readonly string[] = ["Virat", "Rohit", "Sanju", "Jassi"];

// player.push("Gill");             //we will get the error here.



//! Tuples


let arr1: number[] = [1,2,3,233];       // array defined

let tup1: [number, string]  = [1, "Hello"];  // Tuple defined

// tup1 = [2, "Yadu"];

console.log(typeof tup1);


let location: readonly [string, number, boolean?] = ["Hello", 2, true]


let players: [position: number, name: string] = [1, "Rohit"];


//! Enum

enum e1 {
  pending,
  shipped,
  ordered,
  cancelled
}



enum days {

  Monday= 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


console.log(days.Wednesday);

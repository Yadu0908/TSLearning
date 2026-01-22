let response: any = "hello";

console.log(typeof response);       //Its string but not fully know that its string type


let responseNext: string= (response as String).toUpperCase()


//! This is where assertion works

let anotherVar: Number= (response as String).length

console.log(typeof anotherVar);



//* Same goes with document.getElementById object.

let inputID= document.getElementById("nameInput") as HTMLInputElement  //Forcefully assertion.

let score: any = 10;

let newScore: String = (score as String).toUpperCase();

// console.log(newScore);



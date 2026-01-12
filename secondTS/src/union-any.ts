//union logic...
let money: number | string = 10;

money = "10k";

//any logic...

let randomarray: any = ["12", "14", 23, "Hello", 3.45];     //This is any logic.
let secondArray;

for (let random of randomarray) {

  let rmath = Math.floor(Math.random() * randomarray.length);
  secondArray = randomarray[rmath];


  if (random === 23) {
    console.log(random);
    break;
  }

}

console.log("Found", secondArray);


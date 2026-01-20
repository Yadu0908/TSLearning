// union


let id: String | number;

// Now this variable can hold both number and string both.

id = 2;

id = "Yadu";


//Question 1.

let result: string | null;

result = "Hello";

console.log(result?.length);

//* When a variable is string | null, you cannot directly access properties like .length.
//* Solution: Use Optional Chaining (variable?.property) or Truthiness check (if (variable) { ... }).



//Question 2.

function f1(id: string | string[]) {

  if (Array.isArray(id)) {

    console.log(id.join("Hello"));

  }

  else {

    console.log(id.toUpperCase());
  }

}


// f1(["World"])

// f1("hello")



function printId(id: number | string) {

  if (typeof id === "string") {

    console.log(id?.toUpperCase());
  }

  else {
    console.log(id);

  }
}


let anyVar: any = "12"

anyVar = 2;

anyVar = true;


let justAnother: any;


// console.log(typeof justAnother);



function narrowingEx(name: string, std: string | number) {
  if (typeof std === "number") {
    return "my name is: " + name + " and i'm in " + std + "th";
  }

  return "my name is: " + name + " and i'm in " + std;
}

console.log(narrowingEx("Yadu", 6));

console.log(narrowingEx("Uday", "8th"));

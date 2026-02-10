//How we can define the type, custom type.

type orderChai = {
    name: string,
    sugar: number,
    strong: boolean
}

function chaiOne( order: orderChai){

    console.log(order);

}

chaiOne({name: "GingerTea",sugar: 2, strong: true});



//let define the Interface
//class ke liye mostly try to use interface.

interface sample  {
    size : "small" | "large"
}

class classSomething implements sample{

    size: "small" | "large" = "large";

}


// --------- other type defination

type user = {

    username: string,
    bio?: string            // Now here bio is optional
}

function userFun (c: user){

    c.username = "Hello"        //otherwise we have to use c.bio too, now here we can use username indipendantly.

}


// Readonly

type config  = {

    readonly appname: string,
    version: number
}

let cfg : config = {

    appname: "somethingUnique",
    version: 0.1
}

//! For using the readonly we need to first define it otherwise it will not work obeviously 🤡

// cfg.appname= "NewOne";       //we can't use it directly.
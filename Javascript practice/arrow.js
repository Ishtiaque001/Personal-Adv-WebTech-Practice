let add = (a, b) => {
    return a + b;
};


//more shorter version

let addShort = (a, b) => a + b;
console.log("Sum is: " + addShort(10,5));

let greet = (name) => {
    return "hello" + ", " + name + "!";
}
console.log (greet("Alice"));

//more shorter version

let  greetshorter = (name) =>"hello" + ", " + name + "!";
      console.log(greetshorter("Bob"));
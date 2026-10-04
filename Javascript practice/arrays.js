
//normal array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]  
console.log(fruits[0]); // Output: "apple"
console.log(fruits.length); // Output: 3


//adding an element to the array
fruits.push("date");
console.log("After push: " + fruits); // Output: ["apple", "banana", "cherry", "date"]    

//removing the last element from the array
fruits.pop();
console.log("After pop: " + fruits); // Output: ["apple", "banana", "cherry"]

//manipulating array elements
console.log("to print in uppercase: ");
for(let fruit  of fruits) {
console.log(  fruit.toUpperCase()); // Output: "BANANA"
}

let numbers = [1, 2, 3, 4, 5];
console.log("numbers: " + numbers); // Output: [1, 2, 3, 4, 5]
 function sumArray() {
    let sum = 0;
    for (num of numbers){
        sum += num;
    }
    return sum;
}
console.log("sum of numbers: " + sumArray());

//using foreach to iterate over the array
 let Numbers = [2, 4, 6, 8, 10,11];
 Numbers.forEach(function(number) {
    console.log(number*2);
 });

//using arrow function to iterate over the array
let nums = [1, 3, 5, 7, 9];
nums.forEach((num) => {
    console.log(num * 3);
});

let names = ["Alice", "Bob", "Charlie"];
 names.forEach((name) => {
    console.log("Hello, " + name.toUpperCase() + "!");
 });
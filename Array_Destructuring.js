// Destructure an array
// Allocating one array elements to another

let a = 5;
let b = 6;

[a,b] = [b,a];

console.log(a,b);

let words = "My name is Aditya Raj vlog".split(' ');
// 3 dots means rest of the elements
let [v,w,...z] = words;
console.log(words);
console.log(z);

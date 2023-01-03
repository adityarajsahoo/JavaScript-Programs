// Treating functions as expressions
// Expression -> Evaluate -> Assigned
// JS treats functions as objects
// Functions is an object type

let add = function(num1, num2) // Assigning function to add variable
{
    return num1 + num2;
}

let sum = add;
let result = add(5,6);

console.log(result);
console.log(sum);
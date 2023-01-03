let user = "Aditya"; // Global variable

// Local variable cannot be printed outside
function greet(u) // Local variable ( u variable created inside)
{
    return `Hello ${u}!`;
}


let str = greet(user); // Passing a value
console.log(str);
// console.log(u); (gives error as local variable cannot be printed outside)
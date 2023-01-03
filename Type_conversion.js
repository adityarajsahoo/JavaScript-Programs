// let num = 6
// console.log(num, typeof num)

// let num1 = String(6)            // number is stored in string format
// console.log(num1, typeof num1)

// let num2 = Number("123")
// console.log(num2, typeof num2)  // So far it is explicit conversion     

let x
console.log(x, typeof x)

let x1 = 8
console.log(x1, typeof x1)

x1 = x1 + ""                 // Coercion (str1 + str2 = str)
console.log(x1, typeof x1)

x1 = x1 - 2                  // Based on the requirement Js will change for you
console.log(x1, typeof x1)

x1 = !x1                     // Initially x was true
console.log(x1, typeof x1)

// Converting number to boolean (all numbers are true, but 0,null is false)
console.log(Boolean(7)) // Truthy and Falsy values (Objects, Functions are also Truthy)
console.log(Boolean(-7))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean("Aditya"))

let n = "123 Aditya"
console.log(n)

n = Number("123 Aditya")
console.log(n)

n = parseInt("123 Aditya")        // Will extract number
console.log(n)

n = parseInt("N123 Aditya")       // parseInt works only when it starts with number
console.log(n)
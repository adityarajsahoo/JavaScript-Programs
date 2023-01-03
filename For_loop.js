// When we know the starting point, the ending point, iteration we go for, for loop
// Eg - Print numbers 1 to 100
for(let i = 1; i<=5; i++)
{
    console.log("Hi",i);
}

// Print numbers from 1 to 100 which are divisible by 3
for(let j = 1; j<=100; j++)
{
    if(j%3 == 0)
    {
        console.log(j);
    }
}

// While loop is better to use when we know the condition of when to stop
let num = 56743;

// while(num > 0)
// {
//     console.log(num%10);
//     num = parseInt(num/10);
// }

let num2 = "0"
while(num > 0)
{
    let remainder = num % 10;
    num2 = num2 * 10 + remainder;
    num = parseInt(num/10);
}
console.log(num2);
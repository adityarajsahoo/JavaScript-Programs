let nums = [1,2,3,4,5,6];

// Filtering out odd, even values
let result = nums.filter(n => n%2 === 0)
    .map( n => n*2)
    .reduce((a,b) => a + b); // reduce is a fn that runs across all elements

console.log(result);
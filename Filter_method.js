let nums = [42, 51, 24, 65, 12];

// Filtering out odd, even values
nums.filter(n => n%2 === 0)
    .map( n => n*2)
    .forEach(n => {
        console.log(n);
    });
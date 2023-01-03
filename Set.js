// Set is an unordered list
// i.e it will not maintain any sequence of adding the elements
// In set we can fetch the values using index values
// Set is a class, we have to use a constructor to access it
// In set we don't have repeated values

let nums = new Set();
nums.add(3);
nums.add(4);
nums.add("Aditya");
nums.add(3);
nums.add("Navin");
console.log(nums);

// Iterate on set
nums.forEach(value => {
    console.log(value);
});

// To search an element in set we use has method
// String is case sensitive
console.log(nums.has(3));
console.log(nums.has("aditya"));
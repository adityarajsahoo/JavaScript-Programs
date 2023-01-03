let nums = [];

nums[0] = 5;
nums[99] = 9;

console.log(nums);

// To print all elements one by one we use for-of loop
console.log(nums.length);
for(let n of nums){
    console.log(n);
}

// for in loop will fetch the properties of the key
for(let key in nums){
    console.log(key); // 0 99
}

for(let key in nums){
    console.log(nums[key]); // 5 9
}

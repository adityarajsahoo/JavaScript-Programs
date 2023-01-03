let values = [5,8,9,7,4,3];
// let values = [];  empty array
console.log(values);
console.log(values[2]); // fetching values
console.log(values[3]);
console.log(values.length);

values.push(7);
console.log(values.push(7));
values.pop();
console.log(values.pop());
// Shift will shift the values of array to left and unshift to right
console.log(values.shift());
console.log(values.unshift(2));
console.log(values);
// Splice method is used to remove element from between
console.log(values.splice(2,1,6)); // In (2,1) - 2 is the index, 1 is the number of values we want to remove, 6 element to be inserted
console.log(values);

let names = ['Navin','aditya'];
names[2] = 'Ravi';
console.log(names);

let data = ["Aditya",3,{tech:'JS'},
function(){console.log("Hello World");}];
console.log(data);
data[3]();



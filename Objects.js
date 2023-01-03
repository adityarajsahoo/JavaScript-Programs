// Object : Key and Value Pair
// Whatever is not primitive is an object
// To fetch a value of an object, we use dot operator or []

let input = 'name';
let alien = {
    name: 'Aditya',
    tech: 'JS',
    'work exp': 4,
}
console.log(alien.name);
console.log(alien);
console.log(alien.tech); 

console.log(alien['tech']);
console.log(alien['work exp']);
console.log(alien[input]);
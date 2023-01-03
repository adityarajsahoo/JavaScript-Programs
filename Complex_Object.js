// Having an object inside an object is complex object

let alien = {
    name : 'Aditya',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand1 : 'Asus'
    }
}

// ? is used to check if that's available or not
console.log(alien);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand?.length);

// For deleting a property we use delete keyword
delete alien.laptop;
console.log(alien);

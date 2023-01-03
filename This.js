// This represents the current object
// To access any properties of an object it is better to use this keyword

// Inside a method there can be a functions

let laptop1 = {
    cpu : 'i7',
    ram : 16,
    brand : 'HP',

    getConfig: function(){
        console.log(this.cpu);
    }
}

let laptop2 = {
    cpu : 'i9',
    ram : 16,
    brand : 'HP',

    getConfig: function(){
        console.log(this.cpu);
    }
}

laptop1.getConfig();
laptop2.getConfig();
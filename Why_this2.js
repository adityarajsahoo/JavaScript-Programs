// Laptop is comparing with another laptop
let laptop1 = {
    cpu : 'i7',
    ram : 16,
    brand : 'HP',

    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
    },

    getConfig: function(){
        console.log(this.cpu);
    }
}

let laptop2 = {
    cpu : 'i5',
    ram : 15,
    brand : 'APPLE',

    getConfig: function(){
        console.log(this.cpu);
    }
}

laptop1.compare(laptop2);
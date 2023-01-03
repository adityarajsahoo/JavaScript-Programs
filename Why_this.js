// Third party comparison
function getFastLaptop()
{
    if(laptop1.cpu > laptop2.cpu)
        console.log(laptop1);
    else
        console.log(laptop2);
}

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

getFastLaptop(laptop1, laptop2);
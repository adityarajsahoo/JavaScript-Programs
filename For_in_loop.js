let alien = {
    name : 'Aditya',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand1 : 'Asus'
    }
}

for(let key in alien.laptop)
{
    console.log(key,alien.laptop[key]);
}
function Alien(name, tech)
{
    this.name = name;
    this.tech = tech;
    
    // Adding method to a constructor fn
    this.work = function(){
        console.log("solving bugs");
    }
}


// constructor function because we are using a new keyword
// new keyword creates a new object everytime
// when we create an object we get this keyword
let alien1 = new Alien('Aditya','JS');
let alien2 = new Alien('Ravi','Java');

alien1.tech = 'Blockchain';

console.log(alien1);
console.log(alien2);
alien1.work();
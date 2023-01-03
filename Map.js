// In map there has to be a key (need not be a number)
// Map is a collection of Key Value Pair
// Object is a collection of Key Value Pair
// For a collection of objects map is used
// Powerful tool

let map = new Map();
// Adding a value in map
map.set("Aditya","JS");
map.set("Navin","SQL");
map.set("Ravi","Git");
map.set("Navin","Blockchain");
// we are set because it updates the values
// in java set is put

console.log(map.keys());
console.log(map.values());
console.log(map.has("Aditya"));
console.log(map.get("Aditya"));

// Print all the values (map)
for(let [k,v] of map)
{
    console.log(k," : ", v);
}

// ForEach Syntax - value, key 
map.forEach((v, k) => {
    console.log(k, " : ", v);
});
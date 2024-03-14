
// Create Set
const nameSet = new Set([
    'Alice',
    'Anna',
    'Lilith',
    'Alice'
]);
console.log(nameSet);

// Add new item to the set
nameSet.add('Miri');
console.log(nameSet);

// Check for values
console.log(nameSet.has('Anna'));

// Get Size
console.log(nameSet.size);

// Get for values
console.log(nameSet.values());


// Convert to array

/* const namesArray = [];

for (const user of nameSet){
    namesArray.push(user);
}
console.log(namesArray); */

const namesArray = [...nameSet];
console.log(namesArray);

// Clear the set
nameSet.clear();
console.log(nameSet);
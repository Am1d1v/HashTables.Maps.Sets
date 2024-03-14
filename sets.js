
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

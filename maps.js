


const namedMap = new Map([
    [1, 'Alice'],
    [2, 'Anna'],
    [3, 'Jill']
]);



const myFN = () => {
    return 'MyFn'
}

const myObj = {
    objName: 'My Object'
}

const map2 = new Map([
    ['name', 'SomeName'],
    [1, 'number one'],
    [true, 'really true'],
    [null, 'null'],
    [myFN, 'myFn'],
    [myObj, 'myObj']
]);


// Get valueas
//console.log(map2.get(myFN));


// Set Values
map2.set(2, 'number two');
//console.log(map2);

namedMap.set(4, 'Sara');
//console.log(namedMap);


// Check Values
//console.log(namedMap.has(4));
//console.log(namedMap.has(10));


// Remove Values
namedMap.delete(4);
//console.log(namedMap);


// Get Size
//console.log(namedMap.size);


// Iterating over a map
for (let [key, value] of namedMap) {
    //console.log(`${key} has value: ${value}`);
}

namedMap.forEach((key, value) => {
    console.log(value, key);
})


// Get Keys
console.log(namedMap.keys());

// Get Values
console.log(namedMap.values());

// Clear Map
namedMap.clear();
console.log(namedMap);
console.log(namedMap.size);
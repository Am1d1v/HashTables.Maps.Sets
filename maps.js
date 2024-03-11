


const namedMap = new Map([
    [1, 'Alice'],
    [2, 'Anna'],
    [3, 'Jill']
]);
//console.log(namedMap);


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
console.log(map2);
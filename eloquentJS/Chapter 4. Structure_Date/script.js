// Сумма диапозона

function range(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr
}

function sum(arr) {
    let count = 0;
    for (let value of arr) {
        count += value
    }
    return count;
}

console.log(range(0, 10));
console.log(sum(range(0, 10)));

// Массив в обратном порядке

function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr) { 
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = old
    }
    return arr;
}
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Список 

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    return list
}

console.log(arrayToList([10, 20]))

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list) {
    return {value, rest: list}
}

console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));

// Глубокое сравнение 

function deepEqual(a, b) {
    if(a === b) return true;
    if (a == null || typeof a != 'object' || b == null || typeof b != 'object') return false;

    let keysA = Object.keys(a),
        keysB = Object.keys(b);
    
    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

let obj = {here: {is: 'an'}, object: 2};

console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

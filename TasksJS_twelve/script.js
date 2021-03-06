// Task 1.
// Создайте массив a. Выведите его на страницу. 
// Элементы внутри вложенных массивов разделяйте пробелом, 
// между вложенными массивами - перенос строки!

let div1 = document.querySelector('.out-1');
const a = [
    [1,2,3],
    ['a','b','c'],
    [ 4,5,6],
    ['d','e','f'],
    [ 7,8,9],
];

for (let i = 0; i < a.length; i++) {
    div1.innerHTML += a[i] + ' ' + "<br>";
}

// Task 2.
// Выведите на страницу символ 3 из массива a.

let div2 = document.querySelector('.out-2');

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (a[i][k] == 3) {
            div2.innerHTML += a[i][k];
        }
    }
}

// Task 3.
// Выведите на страницу символ e из массива a.

let div3 = document.querySelector('.out-3');

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (a[i][k] == 'e') {
            div3.innerHTML += a[i][k];
        }
    }
}

// Task 4.
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

let div4 = document.querySelector('.out-4');

for (let i = 0; i < a.length; i++) {
    div4.innerHTML = a[2];
}

// Task 5.
// Выведите на страницу только первые элементы вложенных массивов массива a.

let div5 = document.querySelector('.out-5');

for (let i = 0; i < a.length; i++) {
    div5.innerHTML = a[0];
}

// Task 6.
// Выведите на страницу только четные вложенные массивы массива a.

let div6 = document.querySelector('.out-6');

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++ ) {
        if (a[i][k] % 2 == 0) {
            div6.innerHTML += a[i][k];
        }
    }
}

// Task 7.
// Выведите на страницу только числа из массива a.

let div7 = document.querySelector('.out-7');

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if(typeof a[i][k] == 'number') {
            div7.innerHTML += a[i][k];
        }
    }
}

// Task 8.
// Выведите на страницу длины вложенных массивов в массив a.

let div8 = document.querySelector('.out-8');

for (let i = 0; i < a.length; i++) {
    div8.innerHTML += a[i].length + '<br>';
}

// Task 9.
// Выведите на страницу элементы массива a в обратном порядке, т.е.

// 9 8 7 f e ...

let div9 = document.querySelector('.out-9');

for (let i = a.length - 1; i >= 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
        div9.innerHTML += a[i][k] + ' ';
    }
}

// Task 10.
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:

// 3 2 1
// c b a
// 6 5 4

let div10 = document.querySelector('.out-10');

for (let i = 0; i < a.length; i++) {
    for (let k = a[i].length - 1; k >= 0; k--) {
        div10.innerHTML += a[i][k];
    }
    div10.innerHTML += '<br>';
}

// Task 11.
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

let div11 = document.querySelector('.out-11');
let arr = [];
let number = 0;
for ( let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++) {
        if(i % 2 == 0) {
            if(k % 2 == 0) {
                arr.push(0);
            } else {
                arr.push(1);
            }
        }
        if(i % 2 !== 0) {
            if(k % 2 !== 0) {
                arr.push(0);
            } else {
                arr.push(1);
            }
        }
        div11.innerHTML += arr[k];
    }
    if(i % number.length == 0 ) {
        arr.reverse();
        
    } else {
        arr.reverse();
    }
    number++;
    div11.innerHTML += '<br>';
}

// Task 12.
// Создайте массив шахматную доску. Белые - 0, черные - 1. 
// Напишите функцию, которая выводит данный массив в виде 
// шахматной доски - блоки div в нужном порядке, закранные цветом.

let div12 = document.querySelector('.out-12');

let arr12 = [];
let out = '';
let num12 = 0;

function chess() {
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (i % 2 == 0) {
                if (k % 2 == 0) {
                    arr12.push('<div class="black"></div>');
                } else {
                    arr12.push('<div class="white"></div>');
                }
            }
            if (i % 2 !== 0) {
                if (k % 2 !== 0) {
                    arr12.push('<div class="black"></div>');
                } else {
                    arr12.push('<div class="white"></div>');
                }
            }
            div12.innerHTML += arr12[k]; 
        }
        if (num12 % 2 == 0) {
            arr12.reverse();
        } else {
            arr12.reverse();
        }
        num12++;
        div12.innerHTML += '<br>';
    }
    
}

chess();

// Task 13.
// Создайте массив, который подходит под следующие условия:

// b[0][1] == 4;
// b[3][2] == 5;

let b = [[0, 4],[0],[0],[0,0,5]];


// Task 14.
// Создайте массив, который подходит под следующие условия:

// c[0][1] == 4;
// c[2] == 5

let c = [[0, 4], 0, 2];



// Task 15.
// Создайте массив, который подходит под следующие условия:

// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

let d = [[0, 4], [0], [0, 0, 5, 5], 0, 0, 0, 6];



// Task 16.
// Создайте массив, который подходит под следующие условия:

// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

let e = [[0, 4], 
        [0], 
        [0, 0, 0, 5], 
        [0], 
        [0], 
        [0], 
        [[0, 6]]];

// Task 17.
// Создайте массив, который подходит под следующие условия:

let f = [
    [[0], [0, 0, 0, 4]],
    [0],
    [[0], [0, 5]],
    [0],
    [0],
    [0],
    [[0, 6]]];

// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;

// Task 18.
// Создайте массив, который подходит под следующие условия:

// g[0][1][3] == 4;
// g[2][1][3] == 5;
// g[6][0][1] = 6;
// g[3] == g[5];

let g = [
    [[0], [0, 0, 0, 4]],
    [0],
    [[0], [0, 0, 0, 5]],
    [5],
    [0],
    [0],
    [[0, 6]]];

console.log(g[0][1][3]);
console.log(g[2][1][3]);
console.log(g[6][0][1]);
console.log(g[3]);

// Task 19.
// Выведите на страницу сумму элементов массива a (только чисел).

let div19 = document.querySelector('.out-19');
let sum19 = 0;
for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (typeof(a[i][k]) == 'number') {
            div19.innerHTML = sum19 += a[i][k];
        }
    }
}

// Task 20.
// Создайте массив, который эмулирует доску для крестиков - ноликов, 
// напишите все возможные выиграшные комбинации, т.е. a[0][0], a[0][1], 
// a[0][2] - занята первая линия, и т.д.

let arr20 = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]];

// a[0][0]; a[0][0]; a[0][0]; a[0][1]; a[0][2]; a[0][2]; a[1][0]; a[2][0];
// a[0][1]; a[1][0]; a[1][1]; a[1][1]; a[1][2]; a[1][1]; a[1][1]; a[2][1];
// a[0][2]; a[2][0]; a[2][2]; a[2][1]; a[2][2]; a[2][0]; a[1][2]; a[2][2];



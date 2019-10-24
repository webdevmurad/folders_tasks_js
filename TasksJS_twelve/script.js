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

let div12 = document.querySelector('.out-12'),
    d = document.createElement("div"),
    w = document.createElement("div");


function chess() {
    let b = 0;
    let a = [];
    let out = '';
        for (let i = 0; i < 8; i++) {
            let c = [];
            for (let k = 0; k < 8; k++ ) {
                if (b % 2 == 0) {
                    out +='<div class="black"></div>';
                }else {
                    out +='<div class="white"></div>';
                }
            b++;
            }
            a[i] = c;
            div12.innerHTML = '<br>';
        }
        
    console.log(a);
    div12.innerHTML = out;
}

chess();






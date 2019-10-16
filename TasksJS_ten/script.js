// Task 1.
// Создайте массив содержащий строки, числа, 
// булевы значения. Выведите его в консоль.

let a = ['Строка', 2, true, false]; 
console.log(a);

// Task 2.
// Создайте массив содержащий строки, числа, 
// булевы значения. Выведите его в div. Совет. 
// Попробуйте синтаксиc elem.innerHTML = ваш_массив.


let task2 = document.querySelector('.task2');
let b = ['Строка', 1, 4, true, false];

task2.innerHTML = b;

// Task 3.
// Создайте массив a. Выведите длину массива a.
// const a = [2, 'hello', 17, 34, 'privet']

const c = [2, 'hello', 17, 34, 'privet'];
console.log(c.length);

// // Task 4.
// // Создайте массив a. Выведите нулевой, третий, восьмой 
// элемент массива a в консоль. 
// Сделайте вывод о 8-м элементе.

// // const a = [2, 'hello', 17, 34, 'privet']

const d = [2, 'hello', 17, 34, 'privet'];
console.log(d[0]);
console.log(d[2]);
console.log(d[8]);

// Task 5.
// Создайте массив a. Выведите сумму нулевого, 
// второго и третьего элементов массива.

// const a = [2, 'hello', 17, 34, 'privet']

const e = [2, 'hello', 17, 34, 'privet'];

console.log(e[0] + e[2] + e[3]);

// Task 6.
// Создайте массив, который содержит ваше имя, 
// знак зодиака, день рождения и месяц рождения. 
// Выведите массив на страницу в div.

const task6 = document.querySelector('.task6');
const me = ["Murad", 25, 09];

task6.innerHTML = me;

// Task 7.
// Создайте массив b. Добавьте в него значения 'hi', 'foo', 'bar'. 
// Вывести массив на страницу в элемент div.

// let b = ['one', 1, 2, 'two'];

const task7 = document.querySelector('.task7');
let f = ['one', 1, 2, 'two'];
f.push('hi, foo, bar');
task7.innerHTML = f;

// Task 8.
// Создайте массив b. Добавьте в него третий элемент 
// равный 3.14, 4 элемент равный 17, 6 элемент равный 5. 
// Выведите массив и в консоль и на страницу. 
// Обратите внимание, как выводятся элементы значения 
// которых не заданы. Также выведите значение длины массива.

// let b = ['one', 1, 2, 'two'];

const task8 = document.querySelector('.task8');
let g = ['one', 1, 2, 'two'];
g.push (g[3] = 3.14, g[4] = 17, g[6] = 5);
task8.innerHTML = g;
console.log(g.length);

// Task 9.
// Создайте массив, который содержит 10 значений. 
// Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.

const task9 = document.querySelector('.task9');
let h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
task9.innerHTML = h[3] + " " + [7];
console.log(h);

// Task 10.
// Создайте массив содержащий только 1-й, 5-й и 10 элемент. 
// Выведите его в консоль. Выведите его в div. 
// Выведите длину данного массива.

const task10 = document.querySelector('.task10');
arr = [];
arr.push(arr[1] = 'первый', arr[5] = 'пятый', arr[10] = 'десятый');
task10.innerHTML = arr;
console.log(arr);

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
g.slice(g[3] = 3.14, g[4] = 17, g[6] = 5);
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
arr.slice(arr[1] = 'первый', arr[5] = 'пятый', arr[10] = 'десятый');
task10.innerHTML = arr;
console.log(arr);

// Task 11.
// Создайте массив с, напишите функцию которая по 
// клику на кнопке меняет первый и третий элемент местами. 
// Под сменой мест понимается, что данные элементы поменяют значения - первый 
// станет равный третьему, а третий - первому.

// const c = [77, 88, 99, 66];

const task11 = document.querySelector('.task11');
const btn11 = document.querySelector('.btn11');
const k = [77, 88, 99, 66];

btn11.onclick = () => {
    k.slice(k[0] = 99, k[2] = 77);
    task11.textContent = k;
}

// Task 12.
// Напишите функцию, которая получает в качестве аргумента массив, 
// и меняет нулевой и последний элемент массива местами. 
// После чего выводит массив в консоль. Длина переданного массива может меняться. 
// Небольшая подсказка - нам не нужно знать длину массива, поскольку 
// мы можем ее посчитать через length.

const task12 = document.querySelector('.task12');
const l = [1, 2, 3, 4, 5];

[l[0], l[4]] = [l[4], l[0]];

task12.textContent = l;

// Task 13.
// Используя цикл выведите элемента 
// массива d на страницу. Разделитель - пробел.

// d = ['y', 4, 22, 'o'];

const task13 = document.querySelector('.task13');
let m = ['y', 4, 22, 'o'];

for (let i = 0; i < m.length; i++) {
    task13.textContent += m[i] + ' ';
}

// Task 14.
// Используя цикл выведите на страницу массив e в обратном порядке. 
// Разделитель - пробел.

// e = [1, 2, 3, 'hello', 66];

const task14 = document.querySelector('.task14');
let n = [1, 2, 3, 'hello', 66];

for (let z = n.length - 1; z >= 0; z--) {
    task14.innerHTML += n[z] + ' ';
}

// Task 15.
// Используя цикл выведите на страницу элементы массива d, которые больше нуля. 
// Разделитель - пробел.

// d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
 
const task15 = document.querySelector('.task15');
let o = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

for (let i = 0; i < o.length; i++) {
    if (o[i] > 0) {
        task15.innerHTML += o[i] + ' ';
    }
}

// Task 16.
// Выполните перебор массива d из предыдущей задачи. 
// Четные элементы добавьте в массив a1, нечетные в a2. 
// Выведите полученные массивы a1 и a2 на страницу.

const task16 = document.querySelector('.task16');
let a1 = [];
let a2 = [];

o.forEach(function(i) {
    if(i % 2 == 0) {
        a1.push(i);
        task16.innerHTML += a1;
        
    }
    
    if (i % 2 !== 0 ) {
        a2.push(i);
        task16.innerHTML = a2;
        task16.innerHTML += '<br>';
        console.log(a2);
    }
});

// Task 17.
// Создайте массив e. Используя цикл и переменную счетчик - выведите 
// количество элементов массива равных нулю.

// let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

const task17 = document.querySelector('.task17');
let y = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0]; 
y.forEach(function(i) {
    if(i == 0) {
        task17.innerHTML += i;
    }
});

// Task 18.
// Используя предыдущий массив e и цикл - выведите 
// максимальное значение из массива.

const task18 = document.querySelector('.task18');
let summ = 0;
for (let i = 0; i < y.length; i++) {
    task18.innerHTML = summ += y[i];
}

// Task 19.
// Создайте массив f. С помощью цикла найдите индекс 
// элемента с максимальным значением.

// let f = [-3, 0, 45, 22, 123, -485, 98, 34];

const task19 = document.querySelector('.task19');
let p = [-3, 0, 45, 22, 123, -485, 98, 34];

for(let i = 0; i < p.length; i++) {
    task19.innerHTML = p[p.length - 1];
}

// Task 20.
// Используйте массив f. Используя цикл, 
// посчитайте сумму элементов массива.

const task20 = document.querySelector('.task20');
let summm = 0;
for (let i = 0; i < p.length; i++) {
    task20.innerHTML = summm += p[i];
}
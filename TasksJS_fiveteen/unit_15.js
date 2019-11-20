// Task 1
// Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.

let a = new Set();
a.add(1);
a.add(2);
a.add('Hey');

document.querySelector('.b-1').onclick = () => {
    console.log(a);
}

// Task 2.
// Создайте input куда пользователь может вводить элементы и кнопку. 
// По нажатию на кнопку значение из input добавляется в set. 
// Set выводится в консоль.

let inp2 = document.querySelector('.i-2');
let b = new Set();

document.querySelector('.b-2').onclick = () => {
    i2 = inp2.value;
    b.add(i2);
    console.log(b);
}


// Task 3

// Добавьте к предыдущему заданию кнопку удалить. 
// При нажатии кнопки читаете содержимое input и удаляете его
// из Set. Если input пустой - выводите ошибку (alert).

let inp3 = document.querySelector('.i-3');

document.querySelector('.b-3').onclick = () => {
    
    i3 = inp3.value;

    for (let i of b) {
        if (i3 == i) {
            b.clear();
        }
    }
    if (inp3.value === '') {
        alert('Пустой input');
    }
    console.log(b);
}

// Task 4

// Добавьте к предыдущему заданию кнопку проверить. 
// При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. 
// Функция должна возвращать true или false.
// Действия запускаются при вызове функции t4.


let inp4 = document.querySelector('.i-4');

document.querySelector('.b-4').onclick = function t4() {
    i4 = inp4.value;
    console.log(b.has(i4))
};

// Task 5.
// Выведите размер полученного в результате предыдущих операций Set. 
// Выводить на страницу и возвращать в функции. 
// Действия должны запускаться при вызове функции t5.

let out5 = document.querySelector('.out-5');

document.querySelector('.b-5').onclick = function t5() {
    out5.innerHTML = b.size;
}

// Task 6

// Есть массив a6 = [3,4,3,2,4,56,1,23]. 
// Напишите функцию, которая возвращает и выводит на страницу количество 
// уникальных элементов в массиве a6. Решение должно использовать set. 
// Действия должны запускаться при вызове функции t6.

a6 = [3,4,3,2,4,56,1,23];

document.querySelector('.b-6').onclick = function t6() {
    let b6 = new Set(a6);
    console.log(b6);
}

// Task 7

// Создайте input куда пользователь может ввести пароль и кнопку - проверить. 
// Проверяйте с помощью Set, чтобы пользователь использовал в пароле только 
// не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем 
// ее в массив (arr.split('')). Считаем длину массива. 
// На основе массива создаем Set. Сравниваем размеры массива и Set. 
// Функция должна возвращать true или false.

let pas = document.querySelector('.pass'),
    out7 = document.querySelector('.out-7');

document.querySelector('.b-7').onclick = function t7() {
    pasV = pas.value;
    pasV2 = new Set(pas.value);
    pasSize = pasV2.size;
    if(pasV.length == pasSize) {
        out7.textContent = 'Все четко';
    } else {
        out7.textContent = 'Введите уникальные данные';
    }
    if(pas.value === '') {
        out7.textContent = 'Введите пароль';
    }
    
}

// Task 8

// Создайте набор set a8. Напишите функцию, которая принимает set в качестве 
// параметра и четные элементы из набора добавляет в массив a8_res. 
// После завершения операции - выводит a8_res на страницу. 
// Запуск - по нажатию кнопки b-8.

let out8 = document.querySelector('.out-8');

function t8(a8) {
    for (let k of a8) {
        if(k % 2 == 0) {
            let a8_res = [];
            a8_res.push(k);
            out8.innerHTML += a8_res;
        }
    }
}
document.querySelector('.b-8').onclick = function () {
    let a8 = new Set();
    a8.add(1);
    a8.add(2);
    a8.add(3);
    a8.add(4);
    a8.add(5);
    a8.add(6);
    t8(a8);
}

// Task 9

// Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра 
// присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на 
// страницу. Действия должны запускаться при вызове функции t9.

let out9 = document.querySelector('.out-9');

function t9(a9) {
    let a9_res = Array.from(a9);
    a9_res.reverse();
    out9.innerHTML = a9_res;
}

document.querySelector('.b-9').onclick = function () {
    let a9 = new Set();
    a9.add(1);
    a9.add(2);
    a9.add(3);
    a9.add(4);
    a9.add(5);
    a9.add(6);
    t9(a9);
}

// Task 10

// Сложная задача!!! Самая сложная задача за урок. 
// Если ее решите - то массивов вы больше не испугаетесь. 
// Задачу Можно пропустить. Создайте массив элементов a10. 
// Посчитайте, сколько раз встречается каждый из элементов в массиве. 
// Результат присвойте массиву a10_res. Логика решения: создайте на основе массива - набор. 
// Потом запустите перебор набора и внутри цикла перебора запустите 
// еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает 
// с элементом набора - то плюсуете счетчик. 
// После прохода внутреннего цикла добавляете в a20_res запись 
// в виде элемент набора - счетчик. a10_res = { "3" : 5, "1" : 1, }

let a10 = [5, 7, 9, 11, 13, 15, 5, 7, 5, 2, 3, 7, 13],
    out10 = document.querySelector('.out-10');

function t10(a10) {

    let res = {};
    let a10S = new Set(a10);
    for (let num of a10S) {
        res[num] = 0;
        for(let i = 0; i < a10.length; i++) {
            if (num == a10[i]) {
                res[num]++;
            }
        }
    }
    console.log(res);
}

document.querySelector('.b-10').onclick = function () {
    t10(a10);
}

// Task 11

// Эмулируем работу set. Пользователь может ввести значение в i-11. 
// Напишите функцию, которая по нажатию b-11 запускает функцию t11. 
// Функция получает введенное значение и добавляет его в массив a11_res. 
// Добавление происхдит если такого значения в массиве нет. 
// После каждой операции выводите a11_res на страницу.

let inp11 = document.querySelector('.i-11'),
    out11 = document.querySelector('.out-11');
let a11_res = [];
function t11() {
    i11 = inp11.value;
    a11_res.push(i11);
    for (let i in a11_res) {
        if(i == i11) {
            a11_res.pop();
        }
    }
    out11.textContent = a11_res;
}

document.querySelector('.b-11').onclick = function () {
    t11();
}

// Task 12.
// Напишите функцию, которая принимает в качестве параметра набор set и преобразует 
// его в массив, результат выводит на страницу и присваивает a12_res. 
// Действия должны запускаться при вызове функции t12.

let out12 = document.querySelector('.out-12');

function t12(a12) {
    let a12_res = Array.from(a12);
    out12.innerHTML = a12_res;

}

document.querySelector('.b-12').onclick = function () {
    let a12 = new Set();
    a12.add(1);
    a12.add(2);
    a12.add(3);
    a12.add(4);
    a12.add(5);
    a12.add(6);
    t12(a12);
}

// Task 13.

// Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. 
// Элемент задавать как второй параметр. Действия должны запускаться при вызове функции t13.



function t13(a13, out13) {
    let a13_res = Array.from(a13);
    out13.innerHTML = a13_res;
    console.log(out13);
}

document.querySelector('.b-13').onclick = function () {
    let a13 = new Set();
    let out13 = document.querySelector('.out-13');
    a13.add(1);
    a13.add(2);
    a13.add(3);
    a13.add(4);
    a13.add(5);
    a13.add(6);
    t13(a13, out13);
}

// Task 14

// Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. 
// Элемент задавать как второй параметр. 
// Третий параметр - разделитель.
// Действия должны запускаться при вызове функции t14.
// Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).

function t14(a14, out14, ras) {
    let a14_res = Array.from(a14);
    for (let i in a14_res) {
        out14.innerHTML += a14_res[i] + ras;
    }
}

document.querySelector('.b-14').onclick = () => {
    let out14 = document.querySelector('.out-14');
    let ras = '-';
    let a14 = new Set();
    a14.add(1);
    a14.add(2);
    a14.add(3);
    a14.add(4);
    a14.add(5);
    a14.add(6);
    t14(a14, out14, ras);
}

// Task 15

// Дан массив arr15 = [
//     [1,0],
//     [1,0],
//     [2,0]
//     ] . 
//     Добавьте вложенные в него массивы в набор. 
//     Изучите результат. Результирующий набор a15_res выведите на страницу. 
//     Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. 
//     Результат операции запишите в a15_res.

let a15_res = new Set();

function t15(arr15) {

    for (let i in arr15) {
        a15_res.add(arr15[i]);  

    }
    console.log(a15_res)
    
}

document.querySelector('.b-15').onclick = () => {
    arr15 = [ [1,0], [1,0], [2,0] ];
    t15(arr15, out15);
}

// Task 16.

// Дан массив a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]. 
// Добавьте вложенные в него массивы в набор. Изучите результат. 
// Результирующий набор выведите в консоль. Добавление сделайте через цикл. 
// Действия должны запускаться при вызове функции t16. 
// Результат операции запишите в a16_res.

let a16_res = new Set();

function t16(a16) {
    for (let i = 0; i < a16.length; i++) {
        a16_res.add(a16[i]);
    }
    console.log(a16_res);
    
}

document.querySelector('.b-16').onclick = () => {
    let a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]
    t16(a16);
}

// Task 17

// Создайте строку u17 = 'Primer'. Создайте новый набор с Set(u17). 
// Выведите в консоль. Изучите результат. 
// Действия должны запускаться при вызове функции t17.

let a17_res = new Set();

function t17(u17) {
    a17_res.add(u17);
    console.log(a17_res);
}

document.querySelector('.b-17').onclick = () => {
    let u17 = 'Primer';
    t17(u17);
}

// Task 18.

// Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. 
// Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). 
// В конце строки - br. Результирующую строку присвойте a18_res. 
// Действия должны запускаться при вызове функции t18.

let score = 0;

function t18(a18, out18, ras) {
    let a18_res = '';
    console.log(Object.keys(a18));
    for (let value of a18) {
        a18_res += score + ras + value + '<br>' ;
        score++;
    }
    out18.innerHTML += a18_res;
    
}   

document.querySelector('.b-18').onclick = () => {
    let a18 = [5, 7, 9, 11, 13, 15];
    let out18 = document.querySelector('.out-18');
    let ras = '-';
    t18(a18, out18, ras);
}

// Task 19

// Создайте набор a19 и добавьте в него значения. 
// Выведите на страницу каждый второй по счету элемент набора. 
// Действия должны запускаться при вызове функции t19.

function t19(a19, out19) {
    let che = 0
    for (let index of a19) {
        che++;
        if (che % 2 == 0) {
            out19.innerHTML += index + ' '
        }
    }
    
}

document.querySelector('.b-19').onclick = () => {
    let out19 = document.querySelector('.out-19');
    let a19 = new Set();
    a19.add(1);
    a19.add(3);
    a19.add(5);
    a19.add(9);
    a19.add(8);
    a19.add(2);
    t19(a19, out19);
}

// Task 20

// Создайте функцию, которая принимает массив и четные по индексу элементы 
// добавляет в набор s20_res в нечетные в набор s21_res. 
// Выводите данные наборы в консоль.
let s20_res = '';
let s21_res = '';
let index = 0;
function t20(a20, out20) {
    for (let value of a20) {
        index++;
        if (index % 2 == 0) {
            s20_res += value;
        } else {
            s21_res += value;
        }
    }
    out20.innerHTML += s20_res + ' ';
    out20.innerHTML += '<br>';
    out20.innerHTML += s21_res + ' ';
}

document.querySelector('.b-20').onclick = () => {
    let out20 = document.querySelector('.out-20');
    let a20 = [2, 7, 9, 8, 6, 15];
    t20(a20, out20);
}
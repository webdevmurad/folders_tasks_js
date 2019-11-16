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
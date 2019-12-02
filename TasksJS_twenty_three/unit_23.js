
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

let btn1 = document.querySelector('.b-1');

btn1.onclick = () => {
    t1();
}

function t1() {
    localStorage.setItem(5, 11);
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

let btn2 = document.querySelector('.b-2');
let a2 = [7, 6, 5];

btn2.onclick = () => {
    t2();
}

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

let btn3 = document.querySelector('.b-3'),
    out3 = document.querySelector('.out-3');

btn3.onclick = () => {
    t3();
}

function t3() {
    let b = localStorage.getItem('a2');
    b = JSON.parse(b);
    console.log(b)
    for (let arr in b) {
        out3.innerHTML += arr + ' ' + b[arr] + '<br>';
    }
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let btn4 = document.querySelector('.b-4'),
    a4 = {
        hello: "world", 
        hi: "mahai"
    };

btn4.onclick = () => {
    t4();
}

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

let btn5 = document.querySelector('.b-5'),
    out5 = document.querySelector('.out-5');

btn5.onclick = () => {
    t5();
}

function t5() {

    let c = localStorage.getItem('a4');
    c = JSON.parse(c);
    console.log(c);
    for (let i in c) {
        out5.innerHTML += i + ' ' + c[i] + '<br>';
    }
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

let btn6 = document.querySelector('.b-6');

btn6.onclick = () => {
    t6();
}

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let btn7 = document.querySelector('.b-7'),
    i7 = document.querySelector('.i-7'),
    a7 = [];

btn7.onclick = () => {
    t7();
}

function t7() {
    inp7 = i7.value;
    a7.push(inp7);
    localStorage.setItem('a7', JSON.stringify(a7));
}

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

let btn8 = document.querySelector('.b-8');

btn8.onclick = () => {
    t8();
}

function t8() {
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

let rBtn = document.querySelectorAll('.rb-9');
let field = document.querySelector('fieldset');


for(let i = 0; i < rBtn.length; i++) {
    rBtn[i].onclick = () => {
        let color = rBtn[i].value;
        t9(color);
    }
}

function t9(color) {
    let arr = {
        'bg' : color
    }
    localStorage.setItem('arr', JSON.stringify(arr));
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/
let click = document.querySelector('.click');
let cart = {
    'apple': 3,
    'grape': 2
};

click.onclick = () => {
    t10();
    
}

function t10() {
    localStorage.setItem('cart', JSON.stringify(cart));
    t11();
}

function t11() {

}




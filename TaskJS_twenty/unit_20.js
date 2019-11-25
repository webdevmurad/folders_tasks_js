
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

let inp1 = document.querySelector('.i-1'),
    out1 = document.querySelector('.out-1');

inp1.onkeypress = function(event) {
    t1(event);
}

function t1(event) {
    out1.innerHTML += event.key;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

let inp2 = document.querySelector('.i-2'),
    out2 = document.querySelector('.out-2');

inp2.onkeypress = function(event) {
    t2(event);
}

function t2(event) {
    out2.innerHTML += event.code;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

let inp3 = document.querySelector('.i-3'),
    out3 = document.querySelector('.out-3');

inp3.onkeypress = function(event) {
    t3(event);
}

function t3(event) {
    console.log(typeof event.keyCode);
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

let inp4 = document.querySelector('.i-4'),
    out4 = document.querySelector('.out-4');

inp4.onkeypress = function(event) {
    t4(event);
}

function t4() {
    out4.innerHTML += event.key.toLowerCase();
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let inp5 = document.querySelector('.i-5'),
    out5 = document.querySelector('.out-5');

inp5.onkeypress = function(event) {
    t5(event);
}

function t5() {
    out5.innerHTML += event.key.toUpperCase();
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let inp6 = document.querySelector('.i-6'),
    out6 = document.querySelector('.out-6');

inp6.onkeypress = function(event) {
    t6(event);
}

function t6() {
    let str = inp6.value;
    let res = str.toLowerCase();
    inp6.value = res;
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
let inp7 = document.querySelector('.i-7'),
    out7 = document.querySelector('.out-7');
let a7 = [];
inp7.onkeypress = function (event) {
    t7(event);
}
function t7(event) {
    a7.push(event.key);
    let rand = Math.floor(Math.random() * a7.length);
    out7.innerHTML += a7[rand];
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let inp8 = document.querySelector('.i-8'),
    out8 = document.querySelector('.out-8');
const a8 = {
    'i': 1,
    'o': 0,
    'l': 7
}
inp8.onkeypress = function (event) {
    t8(event);
}
function t8(event) {
    if(event.key == 'i') {
        out8.innerHTML += '1'
    } else if (event.key == 'o') {
        out8.innerHTML += '0'
    } else if (event.key == 'l') {
        out8.innerHTML += '7'
    } else {
        out8.innerHTML += event.key;
    }
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let inp9 = document.querySelector('.i-9'),
    out9 = document.querySelector('.out-9'),
    a9 = [];

inp9.onkeydown = function(event) {
    t9(event);
}

function t9(event) {
    if (event.keyCode == '40') {
        a9.push(event.keyCode);
        for (let key in a9) {
            out9.innerHTML = key;
        }
    }
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let inp10 = document.querySelector('.i-10'),
    out10 = document.querySelector('.out-10'),
    imgD = document.querySelector('.div-10'),
    w10 = 75;

inp10.onkeydown = function(event) {
    t10(event);
}

function t10(event) {
    if (event.keyCode == '39') {
        w10 += 1;
        imgD.style.width = w10 + 'px';
    } else if (event.keyCode == '37') {
        w10 += 1;
        imgD.style.width = w10 + 'px';
    }
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11() {
    
}

// ваше событие здесь!!!


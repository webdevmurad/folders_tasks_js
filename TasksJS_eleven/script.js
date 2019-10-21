// Task 1.
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. 
// При нажатии кнопки, функция читает содержимое input и добавляет 
// содержимое в массив, после чего выводит содержимое массива в div.out-1.

let arr1 = [];
let btn1 = document.querySelector('.btn1'),
    inp1 = document.querySelector('.inp1'),
    out1 = document.querySelector('.out-1');

btn1.onclick = () => {
    i1 = inp1.value;
    if (i1 == 0) {
        out1.textContent = 'Массив пустой';
    } else {
        arr1.push(i1);
        out1.textContent = arr1 + ''; 
    }
}

// Task 2.
// Добавьте к предыдущему заданию кнопку button.u-2__pop, 
// при нажатии которой, к массиву arr1 применяется метод pop, 
// после чего массив выводится в div.out-1

let btn2 = document.querySelector('.u-2__pop');

btn2.onclick = () => {
    i1 = inp1.value;
    arr1.pop(i1);
    out1.textContent = arr1 + '';
}

// Task 3.
// Добавьте к заданию 1 кнопку button.u-3__shift, 
// которая применяет к массиву arr1 метод shift ( читать за метод shift). 
// После применения shift, массив arr1 выподится в div.out-1.

let btn3 = document.querySelector('.u-3__shift');

btn3.onclick = () => {
    i1 = inp1.value;
    arr1.shift(i1);
    out1.textContent = arr1 + '';
}

// Task 4.
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая 
// применяет к массиву arr1 метод unshift ( читать за метод unshift). 
// После применения unshift, массив arr1 выподится в div.out-1. 
// Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift. 
// Надеюсь, вы это сделали и в первой задаче?

let btn4 = document.querySelector('.u-4__unshift');

btn4.onclick = () => {
    i1 = inp1.value;
    if (i1 == 0) {
        out1.textContent = 'Массив пустой';
    } else {
        arr1.unshift(i1);
        out1.textContent = arr1 + '';
    }  
}

// Task 5.
// Обьявите массив arr5, добате два элемента input, 
// в первый пользователь может ввести индекс элемента, во второй - количество. 
// Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice.
// Результат применения выводите в div.out-5.

// let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let input5_1 = document.querySelector('.inp5_1'),
    input5_2 = document.querySelector('.inp5_2'),
    btn5 = document.querySelector('.btn5'),
    out5 = document.querySelector('.out-5');

btn5.onclick = () => {
    i5_1 = +input5_1.value;
    i5_2 = +input5_2.value;

    arr5.splice(i5_1, i5_2);
    out5.textContent = arr5;
    console.log(arr5);
}

// Task 6.
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:

// читает содержимое input в переменную
// вычисляет длину массива
// присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

// Task 7.
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:

// удаляет последний элемент массива
// Выводит массив на страницу

// Task 8.
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:

// Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу

let arr6 = [];
let btn6 = document.querySelector('.btn6'),
    inp6 = document.querySelector('.inp6'),
    div6 = document.querySelector('.div-6');

function funcPush() {
    let i6 = inp6.value.trim();
    let count = 0 
    if (i6 != '') {
        count += i6.length;
        
    } else {
        div6.textContent = 'Заполни да!';
    }
    arr6[count - 1] = i6;
    div6.textContent += arr6;
    console.log(arr6);
    function funcPop() {
        arr6.pop();
        div6.textContent = arr6;
    }
    document.querySelector('.btn7').onclick = funcPop;

    function funcShift() {
        arr6.shift();
        div6.textContent = arr6;
    }
    document.querySelector('.btn8').onclick = funcShift;
}
document.querySelector('.btn6').onclick = funcPush;

// Task 9.
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:

// читает содержимое input в переменную
// создает новый массив где нулевым элементов задает считанную из input строку
// дописывает остальные значения старого массива в новый
// Выводит массив на страницу


let arr9 = [];
let inp9 = document.querySelector('.inp9');
let div9 = document.querySelector('.div-9');

document.querySelector('.btn9').onclick = () => {
    let i9 = +inp9.value; 
    arr9.unshift(i9);
    console.log(arr9);
    div9.textContent = arr9;
}

// Task 10.
// Создайте массив arr10, примените к массиву метод 
// reverse ( читать за метод reverse). 
// После применения reverse, массив arr10 выподится в div.out-10.

// let arr10 = [2,4, 6, 8, 10, 'hello'];

let arr10 = [2, 4, 6, 8, 10, 'hello'];
let div10 = document.querySelector('.out-10');

function func_9() {
    a = arr10.reverse();
    div10.textContent = a;
}

func_9();

// Task 11.
// Создайте input.u-11__input и кнопку button.u-11__button. 
// Объявите массив arr11. По нажатию на кнопку, читайте 
// содержимое input.u-11__input в переменную u11. 
// Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). 
// Результат применения indexOf выводите на страницу в div.out-11. 
// Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.

// let arr11 = [0, 2, 3, 7, 8, 5, 11];

let arr11 = [0, 2, 3, 7, 8, 5, 11],
    div11 = document.querySelector('.out-11'),
    inp11 = document.querySelector('.u-11__input');

document.querySelector('.u-11__button').onclick = () => {
    let u11 = +inp11.value;
    div11.textContent = arr11.indexOf(parseInt(u11));
}

// Task 12.
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. 
// Программа должна:

// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// Если совпадения нет выводить -1.

let arr12 = [0, 2, 3, 7, 8, 5, 11],
    div12 = document.querySelector('.out-12'),
    inp12 = document.querySelector('.u-12__input');

document.querySelector('.u-12__button').onclick = () => {
    let i12 = inp12.value;
    for(let i = 0; i < arr12.length; i++) {
        if(i12 == i) {
            div12.textContent = arr12[i];
        } else {
            div12.textContent = -1;
        }
    }
}

// Task 13.
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. 
// Программа должна:

// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.

let arr13 = [0, 2, 3, 7, 8, 5, 11],
    ar = [],
    div13 = document.querySelector('.out-13'),
    inp13 = document.querySelector('.u-13__input');

document.querySelector('.u-13__button').onclick = () => {
    for (i = arr13.length - 1; i >= 0; i--) {
        ar.push(arr13[i]);
        div13.textContent = ar;
    }
}


// Task 14.
// Создайте инпут, куда пользователь может ввести число элементов в массиве. 
// Создайте функцию, которая прочитает введенное число и создаст массив такой длины,
// причем каждый элемент - это случайное число от 0 до 100. 
// Массивы выведите на страницу.

let inp14 = document.querySelector('.u-14__input'),
    div14 = document.querySelector('.out-14'),
    arr14 = [];

document.querySelector('.u-14__button').onclick = () => {
    i14 = +inp14.value;
    for(let i = 0; i < i14; i++) {
        let arr = Math.floor(Math.random() * (101 - 0) + 0);
        arr14.push(arr);
        div14.textContent = arr14;
    }
}

// Task 15.
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, 
// в который входят только четные элементы массива arr15 (элементы с четным индексом). 
// Выведите на экран.

let div15 = document.querySelector('.out-15'),
    arr15 = [1, 4, 5, 6, 9, 15, 28, 33, 44, 66, 76, 88, 99];

function func_15() {
    for(let i = 0; i < arr15.length; i++) {
        if (arr15[i] % 2 == 0 ) {
            div15.textContent += arr15[i] + ' ';
        }
    }
}

func_15();

// Task 16.
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. 
// По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). 
// Результат применения concat выводите на страницу в div.out-16.

// let arr16_1 = [3, 5, 7 ];
// let arr16_2 = [2, 4, 6 ];

let div16 = document.querySelector('.out-16');
let arr16_1 = [3, 5, 7 ];
let arr16_2 = [2, 4, 6 ];
document.querySelector('.u-16__button').onclick = () => {
    div16.textContent = arr16_1.concat(arr16_2);
}

// Task 17.
// Напишите функцию funcConcat, которая эмулирует работу метода concat. 
// Программа должна:

// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.

let arr17_1 = [3, 5, 7 ];
let arr17_2 = [2, 4, 6 ];
let div17 = document.querySelector('.out-17');

document.querySelector('.u-17__button').onclick = () => {
    for (let i = 0; i < arr17_2.length; i++) {
        arr17_1.push(arr17_2[i]);
        div17.textContent = arr17_1;
    }
}

// Task 18.
// Создайте button.u-18__button и input.u-18__input. 
// Объявите массив arr18 . По нажатию на кнопку примените к массивам 
// метод includes, который проверяет есть ли в массиве значение введенное в input. 
// ( читать за метод includes). 
// Результат применения includes выводите на страницу в div.out-18.

// let arr16_1 = [3, 5, 7, 11, 12, 13, 14 ];

let inp18 = document.querySelector('.u-18__input'),
    div18 = document.querySelector('.out-18');
let arr18 = [3, 5, 7, 11, 12, 13, 14 ];


document.querySelector('.u-18__button').onclick = () => {
    i18 = +inp18.value;
    div18.textContent = arr18.includes(i18);
}

// Task 19.
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. 
// Программа должна:

// Перебирает второй массив и сравнивать если введенный элемент 
// совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.

let inp19 = document.querySelector('.u-19__input'),
    div19 = document.querySelector('.out-19');
let arr19 = [3, 5, 7, 11, 12, 13, 14 ];

document.querySelector('.u-19__button').onclick = () => {
    for (let i = 0; i < arr19.length; i++) {

        i19 = +inp19.value;
        if (i19 === arr19[i]) {
            div19.textContent = true;
            break;
        } else {
            div19.textContent = false;
        }
    }
}

// Task 20.
// Объявите массив arr20. Создайте кнопку, по нажатию которую 
// к массиву применяется метод join ( читать за метод join). 
// Результа выведите на страницу.

let div20 = document.querySelector('.out-20');
let arr20 = [1, 2, 3, 4, 5, 7];

document.querySelector('.btn20').onclick = () => {
    arr20.join();
    div20.textContent = arr20;
}
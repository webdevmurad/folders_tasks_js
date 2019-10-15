// Task 1.
// Напишите функцию func_1, которая присваивает 
// p.u-1 ширину 200px. Проверьте ее работу. 
// Допишите возможность присваивать высоту равную 100px

function func_1() {
    let task1 = document.querySelector('.u-1');
    task1.style.height = '200px';
    task1.style.width = '100px';
}
func_1();

// Task 2.
// Напишите функцию func_2, которая будучи запущенной 
// присваивает блоку p.u-2 класс css-1. Задайте данному 
// классу через CSS зеленый цвет фона.

function func_2() {
    let task2 = document.querySelector('.u-2');
    task2.classList.add('css-1');
    task2.style.background = 'green';
}
func_2();

// Task 3.
// Используя цикл, добавьте на все блоки p.u-3 событие onclick. 
// По клику запускайте функцию func_3, которая окрашивает элемент, 
// на котором произошло событие в красный цвет фона. 
// Для обращения внутри функции к такому элементу используйте this.

function func_3() {
    let task3 = document.querySelectorAll('.u-3');
    for( let i = 0; i < task3.length; i++) {
        task3[i].onclick = function () {
            this.style.background = 'red';
        }
    }
}
func_3();

// Task 4.
// Используя цикл, добавьте на все блоки p.u-4 событие onclick. 
// По клику запускайте функцию func_4, которая присваивает элементу, 
// на котором произошло событие, класс css-2. Для обращения 
// внутри функции к такому элементу используйте this.

function func_4() {
    let task4 = document.querySelectorAll('.u-4');
    for(let i = 0; i < task4.length; i++) {
        task4[i].onclick = function () {
            this.classList.add('css-2');
        }
    }
}
func_4();

// Task 5.
// C помощью цикла, повесьте на блоки p.u-5 функцию func_5, 
// которая при клике будет удалять класс css-3 с элемента, 
// на котором произошло событие.

function func_5() {
    let task5 = document.querySelectorAll('.u-5');
    for(let i = 0; i < task5.length; i++) {
        task5[i].onclick = function () {
            this.classList.remove('css-3');
        }
    }
}
func_5();

// Task 6.
// Есть кнопка .u-6. Напишите функцию, которая при 
// клике делает toggle классу .active для данной кнопки.

function func_6() {
    let btn6 = document.querySelector('.u-6');
    btn6.onclick = function() {
        this.classList.add('active');
    }
}
func_6();

// Task 7.
// Напишите функцию func-7, которая будучи запущенной 
// возвращает количество элементов с классом css-3.

function func_7() {
    let task7 = document.querySelectorAll('.css-3');
    let t7 = document.querySelector('.u-7');
    for (let i = 0; i < task7.length; i++) {
        t7.innerHTML = task7.length;
    }
}
func_7();

// Task 8.
// Напишите функцию func-8, которая будучи запущенной, 
// присваивает всем элементам p.u-1 атрибут title 
// со значением test-data.

function func_8() {
    let task8 = document.querySelectorAll('.u-1');
    for(let i = 0; i < task8.length; i++) {
        task8[i].setAttribute('title', 'test-data');
    }
}
func_8();

// Task 9.
// С помощью цикла получите кнопки .u-9. 
// Добавьте на них событие onclick которое 
// запускает функцию func-9. Функция возращает 
// data атрибут элемента, по которому кликнули.

function func_9() {
    let btn9 = document.querySelectorAll('.u-9');
    for(let i = 0; i < btn9.length; i++) {
        btn9[i].onclick = function() {
            this.setAttribute('title', 'test');
        }
    }
}
func_9();

// Task 10.
// Напишите функцию func-10, которая при клике 
// на кнопке .u-10__button читает атрибут валюты 
// data-currency и на основании этого выводит 
// в p.u-10__out коэффициент данной валюты по отношению 
// к доллару. Коэффициент возьмите приблизительно из 
// интернета. Считается, что пользователь 
// всегда вводит валюту в долларах.
let btn10 = document.querySelector('.u-10__button');
let inp10 = document.querySelector('.inp10');
let ptext = document.querySelector('.u-10__out');

btn10.onclick = function() {
    let dlr = this.getAttribute('data-currency');
    i10 = +inp10.value;
    ptext.innerHTML = dlr * i10;
}

// Task 11.
// Напишите функцию func-11, которая при клике 
// на кнопке .u-11__button читает атрибут валюты data-currency 
// и на основании этого выводит в p.u-11__out перевод 
// валюты введенной пользователем в input.u-11__input в 
// указанную валюту. Считается, что пользователь всегда 
// вводит валюту в долларах.

let btn11 = document.querySelector('.u-11__button'),
    inp11 = document.querySelector('.inp11'),
    p11 = document.querySelector('.u-11__out');

btn11.onclick = function() {
    let dol = this.getAttribute('data-currency');
    i11 = +inp11.value;
    p11.innerHTML = dol * i11;
}

// Task 12.
// Создайте функцию func-12, которая создает 
// через createElement элемент div, присваивает 
// ему класс css-4 и возвращает данный элемент

function func_12() {
    let s12 = document.createElement('div');
    s12.classList.add('css-4');
    console.log(s12);
}
func_12();

// Task 13.
// Создайте функцию func-13, которая создает 
// элемент span.span-13 с текстом 13 через createElement 
// и вставляет его в p.u-13 (append).

let s13 = document.querySelector('.sect-13');

function func_13() {
    let span = document.createElement('span');
    span.innerHTML = '13';
    span.classList.add('span-13');
    console.log(span);
    s13.appendChild(span);
}
func_13();

// Task 14.
// Создайте функцию func-14, которая создает 
// элемент span.span-14 с текстом 14 через createElement 
// и вставляет его в p.u-14 (prepend).

let s14 = document.querySelector('.sect-14');

function func_14() {
    let span = document.createElement('span');
    span.innerHTML = '14';
    span.classList.add('span-14');
    console.log(span);
    s14.prepend(span);
}
func_14();

// Task 15.
// Создайте функцию func-15, которая создает 
// элемент span.span-15 с текстом 15 через
//  createElement и вставляет его в p.u-15 (before).

let s15 = document.querySelector('.sect-15');

function func_15() {
    let span = document.createElement('span');
    span.innerHTML = '15';
    span.classList.add('span-15');
    s15.before(span);

}
func_15();

// Task 16.
// Создайте функцию funct-16, которая создает 
// элемент button.u-16 c текстом Push. Повесьте 
// на данный элемент событие onclick со стрелочной 
// функцией, которая в консоль выводит текст u-16. 
// И после добавления события добавьте данный элемент 
// на страницу в div.u-16__out. 
// Проверьте работоспособность события.

let s16 = document.querySelector('.u-16__out');

function func_16() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Push';
    s16.appendChild(btn);
    btn.onclick = () => {
        alert('Push');
    }

}
func_16();

// Task 17.
// Создайте функцию, funct-17, которая при запуске создаст элемент 
// p c текстом 17 и заменит этим элементом div.u-17 (replaceWith)

let p = document.querySelector('.p17');

function func_17() {
    let d17 = document.createElement('div');
    d17.classList.add('u-17');
    p.replaceWith(d17);
}
func_17();

// Task 18.
// C помощью цикла повесьте на div.out-18 функцию func-18. 
// Данная функция дожна удалять элемент, на котором произошел 
// клик из DOM. Функция должна возвращать удаленный элемент.

function func_18() {
    let d18 = document.querySelector('.out-18');
    d18.onclick = () => {
        d18.removeChild(d18.firstChild);
        console.log(d18);
    }
    
}

func_18();

// Task 19.
// Создайте функцию func-19, которая принимает параметр текст. 
// Создает элемент li, вставляет в него указанный текст, и 
// добавляет на страницу в ul.u-19 в конец списка.

let s19 = document.querySelector('.sec-19');

function func_19 (text){
    let li = document.createElement('li');
    li.innerHTML = text;
    s19.appendChild(li);
}
func_19("Добавил первый пункт");

// Task 20.
// Доработайте предыдущее задание. Допишите функцию 
// func-20 которая может принимать текст от пользователя 
// и вставлять в список ul.u-20. Также добавьте 
// checkbox - важное, при этом созданный li получает 
// класс .css-5.

let s20 = document.querySelector('.sec-20'),
    i20 = document.querySelector('.inp20'),
    btn20 = document.querySelector('.btn20'),
    ch = document.querySelector('.check');

function func_20() {
    btn20.onclick = function (text) {
        text = i20.value;
        let le = document.createElement('li');
        le.classList.add('u-20');
        le.innerHTML = text;
        s20.appendChild(le); 
        if (ch.checked) {
            le.classList.add('css-5');
        }   
    };
    
    
}
func_20();


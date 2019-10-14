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

// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
let div1 = document.querySelector('.div-1');

div1.onclick = () => {
    t1();
}

function t1() {
    let out1 = document.querySelector('.out-1');
    out1.innerHTML = div1.textContent;
}



// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let div2 = document.querySelector('.div-2');

div2.onclick = (e) => {
    t2(e);
}
function t2(e) {
    document.querySelector('.out-2').innerHTML = e.altKey;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let div3 = document.querySelector('.div-3');

div3.onclick = () => {
    t3();
}
function t3() {
    w3 += 5;
    div3.style.width = w3 + 'px';
    document.querySelector('.out-3').innerHTML = w3;

}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let div4 = document.querySelector('.div-4');

div4.ondblclick = () => {
    t4();
}

function t4() {
    let out4 = document.querySelector('.out-4');
    out4.innerHTML = div4.textContent;
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let div5 = document.querySelector('.div-5');

div5.onclick = () => {
    t5();
}

function t5() {
    if(div5.classList.contains('active')) {
        div5.classList.remove('active');
    } else {
        div5.classList.add('active');
    }
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

let div6 = document.querySelector('.div-6'),
    lists = document.querySelector('.ul-6');

div6.ondblclick = () => {
    t6();
}

function t6() {
    if (lists.classList.contains('hide')) {
        lists.classList.remove('hide');
    } else {
        lists.classList.add('hide');
    }
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

let div7 = document.querySelector('.div-7');

div7.oncontextmenu = () => {
    t7();
}

function t7() {
    if (div7.classList.contains('active')) {
        div7.classList.remove('active');
    } else {
        div7.classList.add('active');
    }
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let check = document.querySelector('.ch-8');

check.onchange = () => {
    t8();

}

function t8() {
    if (check.checked) {
        document.oncontextmenu = zapret;
        function zapret() {
            return false;
        }
    } else {
        document.oncontextmenu = zapret;
        function zapret() {
            return true;
        }
    }
}

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let img = document.querySelector('.div-9 img'),
    div9 = document.querySelector('.div-9');

div9.oncontextmenu = () => {
    t9();
}

function t9() {
    img.src = 'img/2.png';
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

let div10 = document.querySelector('.div-10');

div10.onmouseenter = () => {
    t10();
}

function t10() {
    document.querySelector('.div-10 img').src = 'img/2.png';
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector('.div-11');

div11.onmouseenter = () => {
    t11();
}
div11.onmouseleave = () => {
    t111();
}
function t11() {
    document.querySelector('.div-11 img').src = 'img/2.png';
    
}
function t111() {
    document.querySelector('.div-11 img').src = 'img/1.png';
    
}


// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// () => {

// }
    

// ваше событие здесь!!!
    let div12 = document.querySelector('.div-12');

    div12.onmousedown = () => {
        div12.classList.add('active');
    }

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// () =>  {

// }

// () =>  {

// }
// ваше событие здесь!!!
    let div13 = document.querySelector('.div-13');

    div13.onmousedown = () => {
        div13.classList.add('active');
    }
    div13.onmouseup = () => {
        div13.classList.remove('active');
    }

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
document.querySelector('.b-14').onclick = () => {
    t14();
}
function t14() {
    let div14 = document.querySelector('.div-14');
    div14.classList.add('active');
}
// document.querySelector('t-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

document.querySelector('.div-15').onmousemove = () => {
    t15();
}

function t15() {
    let div15 = document.querySelector('.div-15');
    div15.textContent++;
}
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16() {

}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {

}
function t17Off() {

}
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {

}
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {

}
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {

}
// ваше событие здесь!!!

// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

document.querySelector('.div-1').addEventListener('touchstart', t1);

function t1() {
    document.querySelector('.out-1').innerHTML += 'touch';
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

document.querySelector('.div-2').addEventListener('touchstart', t2);
let count = 0;

function t2() {
    count++;
    document.querySelector('.out-2').innerHTML = count;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

let div31 = document.querySelector('.div-3_1').addEventListener('touchstart', t3),
    div32 = document.querySelector('.div-3_2').addEventListener('touchstart', t3),
    out3 = document.querySelector('.out-3');

function t3(event) {
    console.log(event);
    out3.innerHTML = event.target.innerHTML;
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let btn4 = document.querySelector('.b-4').addEventListener('touchstart', t4),
    out4 = document.querySelector('.out-4');

function t4() {
    out4.innerHTML += 'touch';
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

let btn5 = document.querySelector('.b-5').addEventListener('touchstart', t5),
    out5 = document.querySelector('.out-5');

function t5() {
    document.querySelector('.b-4').removeEventListener('touchstart', t4);
}   

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

let div6_4 = document.querySelector('.div-4').addEventListener('touchend', t6);

function t6() {
    document.querySelector('.out-6').innerHTML += 'touchend';
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

let div7 = document.querySelector('.div-7').addEventListener('touchstart', t7);

function t7() {
    console.log(div7);
    let d7 = document.querySelector('.div-7');
    d7.style.backgroundColor = "red";
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'],
    div8 = document.querySelector('.div-8').addEventListener('touchstart', t8);

function t8() {
    let rand = Math.floor(Math.random() * a8.length);
    let d8 = document.querySelector('.div-8');
    d8.style.backgroundColor = a8[rand];

}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

let div9 = document.querySelector('.div-9').addEventListener('touchstart', t9);

function t9(event) {
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10').addEventListener('touchmove', t10);
let a = 71;

function t10(event) {
    let touch = event.touches;
    for (let i = 0; i < touch.length; i++) {
        a++;
        console.log(a);
        let d10 = document.querySelector('.div-10');
        d10.style.width = a + 'px';
    }
    
    
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

let div11 = document.querySelector('.div-11').addEventListener('touchmove', t11);
let out11 = document.querySelector('.out-11');

function t11(event) {
    let x = event.touches[0].radiusX;
    let y = event.touches[0].radiusY;
    out11.innerHTML = 'Radius X: ' + x + ' ' + 'Radius Y: ' + y;
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

let arr = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');
let divs = document.querySelectorAll('.img-12-min');
let divBig = document.querySelector('.img-12-max');
let reset = document.querySelector('.reset');
let des = document.querySelector('.img-12-text');


reset.ontouchstart = () => {
    divBig.src = `img/${arr[0]}`;
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('active-img');
        divs[0].classList.add('active-img');
        des.innerHTML = divs[0].getAttribute('data-text');
    }
}

for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = () => {
        divs.forEach(elem => {
            elem.classList.remove('active-img');
        })
        divs[i].classList.add('active-img');
        divBig.src = divs[i].src;
        des.innerHTML = divs[i].getAttribute('data-text');
    }
}

let slideIndex = 0;

prev.onclick = () => {
    divs.forEach( elem => {
        elem.classList.remove('active-img');
    })
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = divs.length - 1;
    }
    divBig.src = divs[slideIndex].src;
    divs[slideIndex].classList.add('active-img');
    des.innerHTML = divs[slideIndex].getAttribute('data-text');
}

next.onclick = () => {
    divs.forEach( elem => {
        elem.classList.remove('active-img');
    })
    slideIndex++;

    if (slideIndex > divs.length - 1) {
        slideIndex = 0;
    }
    console.log(slideIndex);
    divBig.src = divs[slideIndex].src;
    divs[slideIndex].classList.add('active-img');
    des.innerHTML = divs[slideIndex].getAttribute('data-text');

}





// ваше событие здесь!!!



// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

function f1(){
    let i1 = document.querySelector('.i-1');
    inp1 = i1.value;
    if (inp1 == 4) {
        document.querySelector('.out-1').innerHTML = true;
    } else {
        document.querySelector('.out-1').innerHTML = false;
    }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;

function f2(){
    if (a21 < a22) {
        document.querySelector('.out-2').innerHTML = a22;
    } else if (a21 > a22) {
        document.querySelector('.out-2').innerHTML = a21;
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-31 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

function f3(){
    let i31 = document.querySelector('.i-31'),
        i32 = document.querySelector('.i-32');

    inp31 = i31.value;
    inp32 = i32.value;

    if (inp31 < inp32) {
        document.querySelector('.out-3').innerHTML = inp32;
    } else if (inp31 > inp32) {
        document.querySelector('.out-3').innerHTML = inp31;
    }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

function f4(){
    let i4 = document.querySelector('.i-4');
    inp4 = i4.value;
    result = 2019 - inp4;
    if (result < 18) {
        document.querySelector('.out-4').innerHTML = 0;
    } else if (result >= 18) {
        document.querySelector('.out-4').innerHTML = 1;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

function f5(){
    let i5 = document.querySelector('.i-5');
    inp5 = i5.value;
    if ( inp5 < 0) {
        document.querySelector('.out-5').innerHTML = 'm';
    } else if (inp5 == 0) {
        document.querySelector('.out-5').innerHTML = 0;
    } else if (inp5 > 0) {
        document.querySelector('.out-5').innerHTML = 1;
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

function f6(){
    let i6 = document.querySelector('.i-6');
    inp6 = i6.value;
    if (inp6 % 2 == 0) {
        document.querySelector('.out-6').innerHTML = 'even';
    } else if (inp6 % 2 !== 0) {
        document.querySelector('.out-6').innerHTML = 'odd';
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

function f7(){
    let i71 = document.querySelector('.i-71'),
        i72 = document.querySelector('.i-72');

    inp71 = i71.value;
    inp72 = i72.value;

    result = inp71 ** inp72;
    document.querySelector('.out-7').innerHTML = result;

}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

function f8(){
    let sel = document.querySelector('.s-8');

    result = sel.value;
    
    switch(result) {
        case '1' :
            document.querySelector('.out-8').innerHTML = 'one';
        break;
        case '2' :
            document.querySelector('.out-8').innerHTML = 'two';
        break;
        case '3' :
            document.querySelector('.out-8').innerHTML = 'three';
        break;
    }
    
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

function f9(){
    let i9 = document.querySelector('.i-9');
    inp9 = i9.value;

    if ( 1 <= inp9 && inp9 <= 32) {
        document.querySelector('.out-9').innerHTML = 1;
    } else if (33 <= inp9 && inp9 <= 43) {
        document.querySelector('.out-9').innerHTML = 2;
    } else if (44 <= inp9 && inp9 <= 64) {
        document.querySelector('.out-9').innerHTML = 3;
    } else {
        document.querySelector('.out-9').innerHTML = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
//     Дан input i-101 и input-102, type=number.  Дан select s-103, который содержит две операции - +, -, *, / . Дана кнопка b-10, при нажатии на которую срабатывает функция f10. Функция выводит в out-10 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат 1+13 т.е. 14.

function f10(){
    let sel = document.querySelector('.s-103'),
        i101 = document.querySelector('.i-101'),
        i102 = document.querySelector('.i-102');
    
    inp101 = +i101.value;
    inp102 = +i102.value;
    result = sel.value;

    if (result == '+') {
        res = inp101 + inp102;
        document.querySelector('.out-10').innerHTML = res;
    } else if (result == '-') {
        res = inp101 - inp102;
        document.querySelector('.out-10').innerHTML = res;
    } else if (result == '*') {
        res = inp101 * inp102;
        document.querySelector('.out-10').innerHTML = res;
    } else if (result == '/') {
        res = inp101 / inp102;
        document.querySelector('.out-10').innerHTML = res;
    }

}

document.querySelector('.b-10').onclick = f10;


// Task     11
//     Дан select s-111 и s-112, каждый из которых содержит 1 и 0.  Дан select s-113, который содержит две операции - && и || . Дана кнопка b-11, при нажатии на которую срабатывает функция f11. Функция выводит в out-11 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&,  нужно вывести результат операции 1&&1 т.е. 1 или 0.

function f11(){
    let s111 = document.querySelector('.s-111'),
        s112 = document.querySelector('.s-112'),
        s113 = document.querySelector('.s-113');
    
    sel1 = s111.value;
    sel2 = s112.value;
    sel3 = s113.value;

    if (sel3 == '&&') {
        res = sel1 && sel2;
        document.querySelector('.out-11').innerHTML = res;
    } else if (sel3 == '||') {
        res = sel1 || sel2;
        document.querySelector('.out-11').innerHTML = res;
    }
}

document.querySelector('.b-11').onclick = f11;




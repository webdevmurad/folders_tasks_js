// Task 1
// Вывод в консоль

a = 4;

if (a == 4) {
    console.log(true);
}




// Task 2
// Вывод в консоль

b = 8;
c = 10;

if (b < c) {
    console.log('10 больше');
}
else {
    console.log('8 больше');
}




// Task 3
// Вывод в консоль

b = 8;
c = 8;

if (b < c) {
    console.log('10 больше');
}
else if (b > c) {
    console.log('8 больше');
}
else if (b = c) {
    console.log('они равны');
}

// Task 4
// Вывод на экран

let inpO = document.querySelector('.inpOne'),
    inpT = document.querySelector('.inpTwo'),
    btn4 = document.querySelector('.btn4');

btn4.onclick = function() {
    if (+inpO.value < +inpT.value) {
        alert(inpT.value);
    }
    else if (+inpO.value > +inpT.value) {
        alert(inpO.value);
    }
    else if (+inpO.value == +inpT.value) {
        alert('Они равны');
    }
}





// Task 5
// Вывод на экран и в консоль

let inp5 = document.querySelector('.inp5'),
    btn5 = document.querySelector('.btn5');

btn5.onclick = function() {
    if(+inp5.value < 2000) {
        alert(+inp5.value);
    }
    else if (+inp5.value >= 2000) {
        console.log(+inp5.value);
    }
}




// Task 6
// Вывод на экран

let inp6 = document.querySelector('.inp6'),
    btn6 = document.querySelector('.btn6');

btn6.onclick = function() {
    if(+inp6.value >= 1 && +inp6.value <= 32) {
        alert('Квартира есть');
    }
    else {
        alert('Квартир нет');
    }
}




// Task 7
// Вывод на экран

let inp7 = document.querySelector('.inp7'),
    btn7 = document.querySelector('.btn7');

btn7.onclick = function() {
    if(+inp7.value < 0) {
        alert('0 больше');
    }
    else if(+inp7.value > 0) {
        alert(+inp7.value + ' больше');               
    }
    else if(+inp7.value == 0) {
        alert('Они равны');
    }
}




// Task 8
// Вывод на экран

let inp8 = document.querySelector('.inp8'),
    btn8 = document.querySelector('.btn8');

btn8.onclick = function() {
    num = +inp8.value;
    if(num % 2) {
        alert('число нечетное');
    }
    else {
        alert('число четное');
    }
}




// Task 9
// Вывод на экран

let inp1 = document.querySelector('.input1'),
    inp2 = document.querySelector('.input2'),
    btn9 = document.querySelector('.btn9');

btn9.onclick = function() {
    num1 = +inp1.value;
    num2 = +inp2.value;
    alert(num1 ** num2);
}




// Task 10
// Вывод на экран

let inp10 = document.querySelector('.input10'),
    btn10 = document.querySelector('.btn10');

btn10.onclick = function(){
    hull = inp10.value;
    if(hull == '' || hull.match(/^[ ]+$/)){
        alert('Нельзя ни пробелы ни пустой строки');
    }
    else {
        alert('Hello ' + hull);
    }
}




// Task 11
// Вывод на экран

let inp11 = document.querySelector('.inp11'),
    btn11 = document.querySelector('.btn11');

btn11.onclick = function() {
    name = inp11.value;
    name = name.trim();
    if(name == '') {
        alert('Ошибка');
    }
    else {
        alert(name);
    }
}




// Task 12
// Вывод в консоль

let inp12 = document.querySelector('.inp12'),
    btn12 = document.querySelector('.btn12');

btn12.onclick = function() {
    num = +inp12.value;
    switch (num) {
        case 1:
            alert('один');
            break;
        case 2:
            alert('два');
            break;
        case 3:
            alert('три');
            break;
    }
}




// Task 13
// Вывод на экран

let inp13 = document.querySelector('.inp13'),
    btn13 = document.querySelector('.btn13');

btn13.onclick = function() {
    number = +inp13.value;
    if(number >= 1 && number <= 5) {
        alert('Улица 1');
    }
    else if(number >= 6 && number <= 11) {
        alert('Улица 2');
    }
    else if(number > 11 && number <= 20) {
        alert('Улица 3');
    }
}




// Task 14
// Вывод на экран

let inp14 = document.querySelector('.inp14'),
    btn14 = document.querySelector('.btn14');

btn14.onclick = function(){
    rad = +inp14.value;
    if (rad >= 0 && rad <= 25) {
        alert('не обнаруживается');
    }
    else if (rad > 25 && rad <= 50) {
        alert('снижение числа лимфоцитов');
    }
    else if (rad > 50 && rad <= 100) {
        alert('вялость, рвота');
    }
    else if (rad > 100 && rad <= 150) {
        alert('смертность 5%');
    }
    else if (rad > 150 && rad <= 350) {
        alert('смертность 50% за 30 суток');
    }
    else if (rad > 350 && rad <= 600) {
        alert('90% смертность за 2 недели');
    }
    else if (rad > 600 && rad <= 1000) {
        alert('смертность 100%');
    }
}





// Task 15
// Вывод в консоль

let x = 1,
    y = 0;

console.log(x && y);
// В программировании И возвращает true если 
// оба значения true, если одна из них false, 
// то будет всегда false.

console.log(x || y);
// В программировании ИЛИ предназначено только для манипулирования булевыми значениями.
// Если true одна из сторон, то будет true если нет, то false.




// Task 16
// Вывод в консоль

let inp16 = document.querySelector('.inp16'),
    btn16 = document.querySelector('.btn16');

btn16.onclick = function() {
    cub = +inp16.value;
    if (cub >= 0 && cub <= 499) {
        alert('2525 тенге');
    }
    else if (cub>= 500 && cub <= 1199) {
        alert('5050 тенге');
    }
    else if (cub >= 1200 && cub <= 1599) {
        alert('8275 тенге');
    }
    else if (cub >= 1600 && cub <= 1899) {
        alert('9675 тенге');
    }
    else if (cub >= 1900 && cub <= 1999) {
        alert('11075тенге');
    }
    else if (cub >= 2500) {
        alert('15000 тенге');
    }
}




// Task 17
// Вывод на экран

let inputF = document.querySelector('.inputF'),
    inputS = document.querySelector('.inputS'),
    btn17 = document.querySelector('.btn17');

btn17.onclick = function() {
    n = +inputF.value;
    v = inputS.value;
    if(n > 0 && v == 'euro') {
        alert(parseInt(n * 0.9161));
    }
    else if (n > 0 && v == 'rub') {
        alert(parseInt(n * 64.4156));
    }
    else if (n > 0 && v == 'uah') {
        alert(parseInt(n * 24,10));
    }
}




// Task 18
// Вывод на экран

let inputA = document.querySelector('.inputA'),
    inputB = document.querySelector('.inputB'),
    btn18 = document.querySelector('.btn18');

btn18.onclick = function() {
    a = +inputA.value;
    b = inputB.value;
    switch(a > 0 && v == 'euro') {
        case '':
            alert(a * 0.9161);
            break;
    }
}




let z = document.querySelector('.inputZ'),
    xInp= document.querySelector('.inputX'),
    cInp = document.querySelector('.inputC'),
    btn19 = document.querySelector('.btn19');

btn19.onclick = function(){
    z = +z.value;
    cInp = +cInp.value;
    xInp = x.value;
    if(z > 0 && cInp > 0) {
        alert(z + cInp)
    }

}
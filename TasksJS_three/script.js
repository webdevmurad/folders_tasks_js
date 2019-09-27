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
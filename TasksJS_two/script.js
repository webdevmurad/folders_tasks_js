// Task 1
// Вывод в консоль

let a = 7,
    b = 9;

console.log(a * b);




// Task 2
// Вывод в консоль

let c = 7,
    d = 9;

console.log(c / d);




// Task 3
// Вывод в консоль

let e = 3,
    f = 5;

console.log(e + f);




// Task 4
// Вывод в консоль

let e1 = '3',
    f1 = 5;

console.log(e1 + f1); 
// Конкатенация строк




// Task 5
// Вывод в консоль

let e2 = 3,
    f2 = 0;

console.log(e2 / f2);




// Task 6
// Вывод на экран

// let e3 = 3,
//     f3 = 'Hello';

// alert(e3 + f3);




// Task 7 
// Вывод на экран

// let e4 = 3,
//     f4 = 'Hello';

// alert(e4 * f4);




// Task 8
// Вывод на экран

let inp = document.querySelector('.eight_input'),
    btn = document.querySelector('.eight_btn');

btn.onclick = function() {
    console.log(inp.value);
}




// Task 9
// Вывод на экран

let inp9 = document.querySelector('.nine_input'),
    btn9 = document.querySelector('.nine_btn');

btn9.onclick = function() {
    alert(inp9.value);
    inp9.value = '';
}




// Task 10
// Вывод на экран

let inp10 = document.querySelector('.ten_input'),
    btn10 = document.querySelector('.ten_btn');

btn10.onclick = function() {
    alert(inp10.value * 10);
}




// Task 11 
// Вывод на экран

let inp11 = document.querySelector('.eleven_input'),
    btn11 = document.querySelector('.eleven_btn');

btn11.onclick = function(){
    alert(inp11.value + 10);
}




// Task 12
// Вывод на экран

let name = document.querySelector('.name'),
    surname = document.querySelector('.surname'),
    nameSurname = document.querySelector('.NameSurname');

nameSurname.onclick = function() {
    alert('Hello ' + name.value + " " + surname.value);
}




// Task 13
// Вывод на экран

let numberOne = document.querySelector('.numberOne'),
    numberTwo = document.querySelector('.numberTwo'),
    numbers = document.querySelector('.numbers');

numbers.onclick = function() {
    alert(+numberOne.value + +numberTwo.value);
}





// Task 14
// Изменение Value

let Task14 = document.querySelector('.Task14').value = 'Hello';
console.log(Task14.value);




// Task 15
// Вывод в консоль

let y = document.querySelector('.y');
y.style.border = '2px solid red';




// Task 16
// Вывод на экран

let number1 = document.querySelector('.number1'),
    number2 = document.querySelector('.number2'),
    numbtn = document.querySelector('.numbtn');

numbtn.onclick = function() {
    alert(+number1.value + +number2.value);
}




// Task 17
// Вывод в консоль

let inp17 = document.querySelector('.inp17'),
    btn17 = document.querySelector('.btn17');

btn17.onclick = function(){
    t = inp17.value;
    t = parseInt(t);
    console.log(t);
}

// принимает строку и возвращает целое число




// Task 18 
// Вывод в консоль

let inp18 = document.querySelector('.inp18'),
    btn18 = document.querySelector('.btn18');

btn18.onclick = function(){
    t = inp18.value;
    t = parseFloat(t);
    console.log(t);
}

// принимает строку и возвращает десятичное число, без букв




// Task 19
// Вывод в консоль

let inputOne = document.querySelector('.inputOne'),
    inputTwo = document.querySelector('.inputTwo'),
    btn19 = document.querySelector('.btn19');

btn19.onclick = function() {
    t = inputTwo.value + inputTwo.value;
    t = parseInt(t);
    console.log(t);
}

// Код вроде неправильно прописал. Как я понял она не должна выдавать в консоль




// Task 20
// Вывод на экран

let name20 = document.querySelector('.name20'),
    surname20 = document.querySelector('.surname20'),
    age20 = document.querySelector('.age20'),
    profession = document.querySelector('.profession'),
    btn20 = document.querySelector('.btn20');

btn20.onclick = function() {
    alert('Уважаемый ' + name20.value + ', ' + surname20.value + ', ' + ' ваш возраст ' + age20.value + ' года,' + ' по профессии вы ' + profession.value);
}

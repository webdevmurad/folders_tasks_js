// Task 1
// Вывод в консоль

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Task 2
// Вывод на страницу
let taskTwo = document.querySelector('.taskTwo');
for (let i = 1; i < 11; i++) {
   taskTwo.innerHTML += i +'<br>'; 
}

// Task 3
// Вывод на страницу
let taskThree = document.querySelector('.taskThree');
for (let i = 11; i > 0; i--) {
   taskThree.innerHTML += i +'<br>'; 
}

// Task 4
// Вывод на страницу
let taskFour = document.querySelector('.taskFour');
for (let i = 0; i < 11; i = i + 2) {
   taskFour.innerHTML += i +'<br>'; 
}

// Task 5
// Вывод на страницу
let taskFive = document.querySelector('.taskFive');
for (let i = 21; i > 0; i = i - 3) {
   taskFive.innerHTML += i +'<br>'; 
}

// Task 6
// Вывод на страницу
let taskSix = document.querySelector('.taskSix');
for (let i = 0; i < 6; i++) {
   taskSix.innerHTML += '******<br>'; 
}

// Task 7
// Вывод на страницу
let inp7 = document.querySelector('.inp7'),
    btn7 = document.querySelector('.btn7'),
    taskSeven = document.querySelector('.taskSeven');

btn7.onclick = () => {
    inpSeven = +inp7.value;
    console.log(inpSeven);
    for(let i = inpSeven; i > 0; i--) {
        taskSeven.innerHTML += i +'<br>';
    }
}

// Task 8
// Вывод на страницу

let inp8_1 = document.querySelector('.inp8_1'),
    inp8_2 = document.querySelector('.inp8_2'),
    btn8 = document.querySelector('.btn8'),
    taskEight = document.querySelector('.taskEight');

btn8.onclick = () => {

    inp81 = +inp8_1.value;
    inp82 = +inp8_2.value;

    for(let i = inp81; i <= inp82; i++) {
        taskEight.innerHTML += i + '<br>';
    }
}

// Task 9
// Вывод на страницу

let inp9_1 = document.querySelector('.inp9_1'),
    inp9_2 = document.querySelector('.inp9_2'),
    btn9 = document.querySelector('.btn9'),
    taskNine = document.querySelector('.taskNine');

btn9.onclick = () => {

    inp91 = +inp9_1.value;
    inp92 = +inp9_2.value;

    if(inp91 < inp92) {
        for(let i = inp91; i <= inp92; i++) {
            taskNine.innerHTML += i + '<br>';
        }
    } else {
        alert('Ошибка');
    }
}

// Task 10
// Вывод на страницу

let taskTen = document.querySelector('.taskTen');

for(let i = 1901; i <= 1950; i++) {
    taskTen.innerHTML += i;
}

// Task 11
// Вывод на страницу

let one = document.querySelectorAll('.One'),
    tEleven = document.querySelector('.taskEleven');

for(let i = 0; i < one.length; i++) {
    tEleven.innerHTML = i;
}

// Task 12
// Вывод на страницу

let One = document.querySelectorAll('.one'),
    btnTw = document.querySelector('.btnTw');

btnTw.onclick = () => {
    for(let i = 0; i < One.length; i++){
        One[i].style.background = "orange";
    }
}

// Task 13
// Вывод в консоль

let taskThn = document.querySelector('.Task13');
document.querySelector('.btnThn').onclick = () => {
    for(let i = 0; i < One.length; i++) {
        console.log(One[i].innerHTML);
    }
}

// Task 14
// Вывод в inputs

let inp14 = document.querySelectorAll('input[type="text"]');

document.querySelector('.btnFtn').onclick = () => {
    for (let i = 0; i < inp14.length; i++) {
        inp14[i].placeholder = "Введите данные";
    }
}

// Task 15.
// Вывод в консоль

document.querySelector('.btnFvtn').onclick = () => {
    let inputs = document.querySelectorAll('input[type="text"]');

    for(let i = 0; i < inputs.length; i++) {
        console.log(inputs.length);
    }
}

// Task 16.
// Вывод на страницу

let rad = document.querySelectorAll('input[name="p1"]');

document.querySelector('.btn16').onclick = () => {
    for(let i = 0; i < rad.length; i++) {
        if(rad[i].checked) {
            alert(rad[i].value);
        }
    }
}

// Task 17.
// Вывод на страницу

let firstRad = document.querySelector('input[name="p1"]');

document.querySelector('.btn17').onclick = () => {
    firstRad.checked = true;
}

// Task 18.
// Вывод value

let allInputs = document.querySelectorAll('input[name="p1"]');

document.querySelector('.btn18').onclick = () => {
    for(let i = 0; i < allInputs.length; i++) {
        allInputs[0].value = "0";
        allInputs[1].value = "1";
        allInputs[2].value = "2";

        allInputs[0].innerHTML = allInputs[0].value;
        allInputs[1].innerHTML = allInputs[1].value;
        allInputs[2].innerHTML = allInputs[2].value;

        console.log(allInputs[0].value);
    }
}

// Task 19.
// Вывод на экран

let allInp = document.querySelectorAll('input[name="p2"]');

document.querySelector('.btn19').onclick = (event) => {
    event.preventDefault();
    for(let i = 0; i < allInp.length; i++) {
        if(allInp[i].checked == true && allInp[i].value == 6) {
            alert(true)
        }
        else if (allInp[i].checked == true && allInp[i].value !== 6) {
            alert(false)
        }
    }
}





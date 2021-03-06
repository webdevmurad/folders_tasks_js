// Task 1
// Вывод на экран

function task1() {
    alert('Murad');
}
document.querySelector('.btn1').onclick = task1;

// Task 2
// Вывод в консоль

function task2(name = Ivan) {
    return name;
}
console.log(task2("Sergey"));

// Task 3
// Вывод в консоль

function task3(a = 5) {
    return a * 10;
}

document.querySelector('.btn3').onclick = function() {
    console.log(task3());
};

// Task 4
// Вывод на экран

let btn4 = document.querySelector('.btn4');

function task4() {
    btn4.style.background = "red";
}
btn4.onclick = () => {
    task4();
}

// Task 5
// Вывод на экран

let btn5 = document.querySelector('.btn5'),
    inp5 = document.querySelector('.inp5');

btn5.onclick = () => {
    alert(inp5.value);
}

// Task 6
// Вывод на экран

let btn6 = document.querySelector('.btn6'),
    inp6_1 = document.querySelector('.inp6_1'),
    inp6_2 = document.querySelector('.inp6_2');

btn6.onclick = () => {
    inp61 = +inp6_1.value;
    inp62 = +inp6_2.value;

    if (inp61 > inp62) {
        alert(inp61);
    } 
    else if (inp61 < inp62) {
        alert(inp62);
    }
    else if (inp61 == inp62) {
        alert(inp61 || inp62);
    }
}

// Task 7
// Вывод на экран

let btn7 = document.querySelector('.btn7'),
    inp7 = document.querySelector('.inp7');

btn7.onclick = () => {
    inpVal = +inp7.value;
    alert(2019 - inpVal);
}

// Task 8
// Вывод на экран

let btn8 = document.querySelector('.btn8');

btn8.onclick = () => {
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    alert(randomInteger(1, 10));
}

// Task 9
// Вывод на экран

let btn9 = document.querySelector('.btn9'),
    inp9_1 = document.querySelector('.inp9_1'),
    inp9_2 = document.querySelector('.inp9_2');

btn9.onclick = () => {
    inp91 = +inp9_1.value;
    inp92 = +inp9_2.value;
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    alert(randomInteger(inp91, inp92));
}

// Task 10
// Вывод в консоль 

let btn10 = document.querySelector('.btn10');

function color(){
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

btn10.onclick = () => {
    console.log( 'rgba' + '(' + color() + ',' + color() + ',' + color() + ');');
}


// Task 11
// Вывод в консоль

function f11() {
    return 5;
}
f11();
function t11(x, y) {
    return x * y;
}
console.log(t11(5, f11()));

// Task 12
// Вывод в консоль

let inp12 = document.querySelector('.inp12'),
    btn12 = document.querySelector('.btn12');
btn12.onclick = () => {
    i12 = +inp12.value;
    function toNum(obj) {
        return obj;
    }
    console.log(toNum(i12)); 
}

// Task 13
// Вывод в консоль

let inp13 = document.querySelector('.inp13'),
    btn13 = document.querySelector('.btn13');

btn13.onclick = () => {
    function emptyInput(input) {
        input = inp13.value.trim();
        if(input == '') {
            return alert(false);
        }
        else {
            return alert(input);
        }
    }
    emptyInput();
}


// Task 14
// Вывод на экран

let inp14 = document.querySelector('.inp14'),
    btn14 = document.querySelector('.btn14');

btn14.onclick = () => {
    function number(num) {
        num = +inp14.value;
        if (num % 2 == 0) {
            return alert(true);
        }
        else {
            return alert(false);
        }
    }
    number();
}

// Task 15
// Вывод в консоль

document.querySelector('.task15').onmousemove = () => {
    console.log('move');
}

// Task 16
// Вывод в консоль

document.querySelector('.task16').onmouseenter = () => {
    console.log('enter');
}

// Task 17
// Вывод в консоль

document.querySelector('.task17').onmouseleave = () => {
    console.log('leave');
}

// Task 18
// Вывод на экран

let task18 = document.querySelector('.task18');

task18.onclick = function() {
    this.style.background = 'red';
}

// Task 19
// Вывод на экран

let task19 = document.querySelector('.task19');

task19.onclick = () => {
    this.style.background = 'red';
}

// Task 20
// Вывод на экран

let go = document.querySelectorAll('.go');
console.log(go);

for (let i = 0; i < go.length; i++) {
    console.log(go);
    go[i].onclick = function() {
        this.style.background = 'red';
    }
}
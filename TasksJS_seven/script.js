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
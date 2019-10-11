// Task 1. 
// Создайте функцию func_1, которая возращает строку 
// от нуля до 100 в формате 0 1 2 .. 100 (после 100 тоже есть пробел)
// задание сделать с помощью while

let task_1 = document.querySelector('.task_1');
let sum = 0;

function func_1() {
    while (sum < 100) {
        sum++;
        task_1.innerHTML += sum + '&nbsp';
    }
    
}
func_1();

// Task 2. 
// Создайте функцию func_2, которая принимает от пользователя 2 параметра 
// числа и возращает строку от первого числа до второго с шагом 1. 
// Разделитель пробел. Пример: пользователь ввел 5 и 7 5 6 7 считаем 
// что второе число всегда больше первого. Решаем с помощью while

let task_2 = document.querySelector('.task_2'),
    inp21 = document.querySelector('.inp2_1'),
    inp22 = document.querySelector('.inp2_2'),
    btn2 = document.querySelector('.btn2');

btn2.onclick = () => {
    i21 = +inp21.value;
    i22 = +inp22.value;
    if (i21 < i22) {
        while (i21 <= i22) {
            
            task_2.innerHTML += i21 + '&nbsp';
            i21++;
        }
    } else {
        alert('Первое число больше');
    }
}

// Task 3. 
// Создайте функцию func_3, которая принимает 
// от пользователя 2 параметра числа и возращает 
// строку от большего числа меньшего с шагом 1. 
// Разделитель пробел. Пример: пользователь ввел 5 и 7 7 6 5 
// Решаем с помощью while

let task_3 = document.querySelector('.task_3'),
    inp31 = document.querySelector('.inp3_1'),
    inp32 = document.querySelector('.inp3_2'),
    btn3 = document.querySelector('.btn3');

btn3.onclick = () => {
    i31 = +inp31.value;
    i32 = +inp32.value;
    if (i31 < i32) {
        while (i31 <= i32) {
            task_3.innerHTML += i32 + '&nbsp';
            i32--;
        }
    } else {
        alert('Первое число больше');
    }
}

// Task 4.
// Создайте функцию func_4, которая принимает 
// от пользователя 3 параметра (число, число и шаг) 
// и возращает строку от большего числа меньшего с заданным. 
// Разделитель пробел. Пример: пользователь ввел 1 5 2 
// 5 3 1 Решаем с помощью while

let task_4 = document.querySelector('.task_4'),
    inp41 = document.querySelector('.inp4_1'),
    inp42 = document.querySelector('.inp4_2'),
    inp43 = document.querySelector('.inp4_3'),
    btn4 = document.querySelector('.btn4');

btn4.onclick = () => {
    i41 = +inp41.value;
    i42 = +inp42.value;
    i43 = +inp43.value;

    while (i41 <= i42) {  
        
        task_4.innerHTML += i42 + '&nbsp';
        i42 = i42 - i43;

    }
}

// Task 5. 
// С помощью цикла while создайте 
// функцию func_5, считает и возвращает сумму чисел от 0 до 20.

let task_5 = document.querySelector('.task_5');

let q = 0;
let w = 20;
while(q < w) {
        q++;
        task_5.innerHTML += q + ' ';
    }
function func_5(){
    
}
func_5();

// Task 6.
// C помощью цикла while создайте функцию func_6, 
// которая принимает 2 параметра, и если второй 
// параметр больше первого, то возвращает сумму чисел 
// от первого до второго включительно.Если нет - то false.
// Считаем, что пользователь может ввести только числа.

let task_6 = document.querySelector('.task_6'),
    inp61 = document.querySelector('.inp6_1'),
    inp62 = document.querySelector('.inp6_2');

btn6.onclick = () => {
    i61 = +input.value;
    i62 = +input.value;
    function func_6(a, b) {
        
    }
}



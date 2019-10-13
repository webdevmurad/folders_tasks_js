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

function func_5(){
    while(q < w) {
        q++;
        task_5.innerHTML += q + ' ';
    }
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
    inp62 = document.querySelector('.inp6_2'),
    btn6 = document.querySelector('.btn6');

btn6.onclick = () => {
    function func_6() {
        i61 = +inp61.value;
        i62 = +inp62.value;
        let sum = 0;
        while(i62 > i61) {
            sum = sum + i61;
            i61++;
            task_6.innerHTML = sum;
        }
        while(i62 < i61) {
            return alert(false);
        }
    }
    func_6();
}

// Task 7. 
// C помощью цикла while создайте функцию func_7, 
// которая принимает 2 параметра, и если второй 
// параметр больше первого, то возвращает произведение 
// чисел от первого до второго включительно. 
// Если нет - то false. Считаем, что пользователь может ввести только числа.

let task_7 = document.querySelector('.task_7'),
    inp71 = document.querySelector('.inp7_1'),
    inp72 = document.querySelector('.inp7_2'),
    btn7 = document.querySelector('.btn7');

btn7.onclick = () => {
    function func_7() {
        i71 = +inp71.value;
        i72 = +inp72.value;
        while (i71 < i72) {
            sum = i71 * i72;
            i71++;
            task_7.innerHTML = sum;
        }
        while (i71 > i72) {
            return alert(false);
        }
    }
    func_7();
}

// Task 8. 
// У пользователя есть 333 монеты в кармане.
// Каждый день, начиная с первого количество 
// монет увеличиваетя в 2 раза.Напишите функцию 
// func_8, которая вернет день, в который количество 
// монет станет больше или равно 1000000.

let task_8 = document.querySelector('.task_8');

function func_8() {
    let day = 1,
        money = 333;
    
    while (day) {
        money *= 2;
        day++;
        if (money >= 1000000) {
            return day;
            break;
        }
    }
}
task_8.innerHTML = func_8();


// Task 9. 
// Создайте функцию func_9, которая принимает 2 параметра 
// и возращает строку от первого до второго введенного параметра, 
// где все четные числа заменены на символ нуля(0).

let task_9 = document.querySelector('.task_9');

function func_9() {
    let a = 1,
        b = 9;

    while (a <= b) {
        if (a % 2 == 0) {
            task_9.innerHTML += 0;
            a++;
        }
        else {
            task_9.innerHTML += a;
            a++;
        }
        ;
    }
    
}
console.log(func_9());

// Task 10. 
// Cоздайте функцию func_10, которая 
// вернет строку (решаем через while):
//     **
//     *
//     **
//     *
//     **
//     *

let task_10 = document.querySelector('.task_10');

function func_10() {
    let i = 0;

    while (i < 6) {
        if (i % 2 == 0) {
            task_10.innerHTML += '**' + '<br>';
            i++;
        } else {
            task_10.innerHTML += '*' + '<br>';
            i++;
        }
    }
}
func_10();

// Task 11. 
// Создайте функцию func_11, которая 
// вернет следующую строку: 10 1 9 2 8 3 .. 1 10. 
// Решаем через while.

let task_11 = document.querySelector('.task_11');



function func_11() {
    let z = 1;
    let x = 10;
    while (z < 10 || x > 0) {
        task_11.innerHTML += x + ' ';
        task_11.innerHTML += z + ' ';
        
        z++;
        x--;
    }
}

func_11();

// Task 12. 
// Прочитайте о цикле do while. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }
// изучите вывод. Как видите, цикл do while срабатывает 
// минимум один раз в любом случае. Т.е.вначале идет 
// срабатывание, а потом проверка.

let a = 0;
do {
    console.log('do while work');
} while (a < 0);

let b = 0;
while(b < 0) {
    console.log('while work');
}

// Task 13. 
// Напишите функцию func_13 которая возвращает 
// строку, от 100 до 0 включительно.
// Используем цикл do while.

let task_13 = document.querySelector('.task_13');

function func_13() {
    let a = 101;
    do {
        a--;
        task_13.innerHTML += a + ' ';
    } while (a >= 1);
}
func_13();

// Task 14. 
// Стаханов в первый день своей работы добыл 5 тонн угля. 
// Во второй - на 30 % больше от предыдущего дня. 
// В третий тоже на 30% больше от предыдущего дня и т.д. 
// Напишите функцию func_14 которая вернет день, когда 
// Стаханова побьют все, кто с ним работает, этот день наступит тогда, 
// когда Стаханов в день добудет 132 тонны угля.
// Используйте для решения do while.

let task_14 = document.querySelector('.task_14');

function func_14() {
    let day = 1;
    let ton = 5;
    do {
        ton = ton + (ton / 100 * 30);
        if (ton > 132) {
            task_14.innerHTML += day;
            break;
        }
        day++;
    } while (day < 30); 
}
func_14();

// Task 15. 
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья. 
// Во второй день на 0.3 литра зелья больше. 
// Напишите функцию func_15, которая вернет день, когда в 
// Хоргвардсе не останется пустых котлов (суммарный объем котлов в замке 568 литров). 
// Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, 
// а не дневной объем. Используем do while.

let task_15 = document.querySelector('.task_15');

function func_15() {
    let potion = 1.1;
    let day = 1;

    do {
        potion = potion + 0.3;
        if (potion > 568) {
            task_15.innerHTML += day;
            break;
        }
        day++;
    } while (day < 10000);
}
func_15();

// Task 16. 
// На странице есть три параграфа p.task-16. 
// Используя цикл do ..while посчитайте количество 
// параграфов p.task-16 и если число четное - верните значение, 
// если нет - верните false. Код напишите в функции func_16.

let task_16 = document.querySelectorAll('.task_16 p'),
    task_div = document.querySelector('.task_16');

function func_16() {
    let i = 0;
    do {
        par = +task_16.length;
        if (par % 2 == 0) {
            task_div.innerHTML += par;
        } else {
            return task_div.innerHTML += false;
        }
    } while (i < task_16.lenght);
}
func_16();

// Task 17. 
// На странице есть три параграфа p.task-16. 
// Используя цикл do ..while выведите в первый p.task-16 - число 1, 
// во второй 2 и т.д. Решение оформите в виде функции func_17.

let task_17 = document.querySelectorAll('.task_17 p');

function func_17() {
    let i = 0;
    do {
        par = +task_17.length;
        
        task_17[0].innerHTML += '1';
        task_17[1].innerHTML += '2';
        task_17[2].innerHTML += '3';
        break;
    } while (i < task_17.length);
}
func_17();

// Task 18. 
// На странице есть три параграфа p.task-18. 
// Используя цикл do ..while выведите в первый p.task-18 - число 
// равное количеству параграфов p.task-18, во второй на единицу меньше и т.д. 
// Решение оформите в виде функции func_18.

let task_18 = document.querySelectorAll('.task_18 p');

function func_18() {
    let z = 0;
    
    do {
       task_18[z].innerHTML += task_18.length -z;
       for (let i = 0; i < z; i++) {
           task_18[z].innerHTML += i;
       }
       z++;
    } while(z < task_18.length);
} 
func_18();

// Task 19. 
// Напишите функцию func_19, 
// которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. 
// Решите с помощью do while.

let task_19 = document.querySelector('.task_19');

function func_19() {
    let n = 20;
    let i = 0;
    do {
        for (let i = 0; i < 20; i++) {
            if (i % 2 == 0) {
                task_19.innerHTML += '*';
            } else {
                task_19.innerHTML += i;
            }
        }
        n--;
        break;
    } while (i < n);
}
func_19();

// Task 20. Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * *  * 1

let task_20 = document.querySelector('.task_20');

for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
        if (k == i) {
            task_20.innerHTML += '1';
        } else {
            task_20.innerHTML += '*';
        }
    }
    task_20.innerHTML += '<br>';
}

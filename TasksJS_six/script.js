// Task 1
// Вывод на страницу

let task1 = document.querySelector('.Task1');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        task1.innerHTML += '*'; 
    }
    task1.innerHTML += ' ';
}


// Task 2
// Вывод на страницу

let task2 = document.querySelector('.task2');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        task2.innerHTML += '*';
    }
    task2.innerHTML += '<br>';
}



// Task 3
// Вывод на страницу

let task3 = document.querySelector('.task3');

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        if(1 % 2 !== 0 || 0 % 2 == 0) {
            task3.innerHTML += 1;
            task3.innerHTML += 0;
        }
    }
    task3.innerHTML += '<br>';
}



// Task 4
// Вывод на страницу

let task4 = document.querySelector('.task4');

for (let i = 1; i <= 3; i++) {
    for (let k = 1; k <= 6; k++) {
        if(k % 3 == 0) {
            task4.innerHTML += 'x';
        }
        else if (k % 2 == 0) {
            task4.innerHTML += 0; 
        }
        else {
            task4.innerHTML += 1; 
        }
    }
    task4.innerHTML += '<br>';
}


// Task 5
// Вывод на страницу

let task5 = document.querySelector('.task5');

for (let i = 0; i <= 3; i++) {
    for (let k = 1; k <= i; k++) {
        task5.innerHTML += '*';
    }
    task5.innerHTML += '<br>';
    
}


// Task 6
// Вывод на страницу

let task6 = document.querySelector('.task6');

for (let i = 1; i <= 5; i++) {
    console.log(i);
    
    for (let k = 6; k > i; k--){
        task6.innerHTML += '*';
    }
    task6.innerHTML += '<br>';
}

// Task 7
// Вывод на страницу

let task7 = document.querySelector('.task7');
let b = 2;
let c = 7;

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < c; k++) {
        if (k < b) {
            task7.innerHTML += '&nbsp';
        } else {
            task7.innerHTML += '*';
        }
    }
    b--;
    c--;
    task7.innerHTML += '<br>';
}


// Task 8
// Вывод на страницу

let task8 = document.querySelector('.task8');

for(let i = 0; i <= 2; i++) {
    for (let k = 0; k <=i; k++) {
        task8.innerHTML += '*';
    }
    task8.innerHTML += '<br>';
}
for(let i = 1; i >= 0; i--) {
    for (let k = 0; k <= i; k++) {
        task8.innerHTML += '*';
    }
    task8.innerHTML += '<br>';
}

// Task 9
// Вывод на страницу

let task9 = document.querySelector('.task9');

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 6; k++) {
        if (i == 0 || i == 4) {
            task9.innerHTML += '*';
        }
        else if (k == 0 || k == 5) {
            task9.innerHTML += '*';
        }
        else {
            task9.innerHTML += '&nbsp';
        }
    }
    task9.innerHTML += '<br>';
}

// Task 10
// Вывод на страницу

let task10 = document.querySelector('.task10'),
    input10 = document.querySelector('.inp10'),
    btn10 = document.querySelector('.btn10');

btn10.onclick = () => {
    inp10 = input10.value;
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if (i == 0 || i == 4) {
                task10.innerHTML += inp10;
            } else if (k == 0 || k == 5) {
                task10.innerHTML += inp10;
            }
            else {
                task10.innerHTML += '&nbsp';
            }
        }
        task10.innerHTML += '<br>';
    }
}

// Task 11
// Вывод на страницу

let task11 = document.querySelector('.task11');

for (let i = 0; i <= 10; i++) {
    task11.innerHTML += `6*${i}=${6 * i}<br>`;
}
for (let i = 0; i <= 10; i++) {
    task11.innerHTML += `7*${i}=${7 * i}<br>`;
}

// Task 12
// Вывод на страницу

let task12 = document.querySelector('.task12');

for (let i = 1; i <= 5; i++) {
    for (let k = 1; k < i + 1; k++) {
        task12.innerHTML += k + ' ';
    }
    task12.innerHTML += '<br>';
}

// Task 13
// Вывод на страницу

// Task 14
// Вывод на страницу

let task14 = document.querySelector('.task14');


for (let i = 5; i >= 1; i--) {

    for (let k = 5; k < i - 1; k++) {
        task14.innerHTML += k;
    }
    task14.innerHTML += '<br>';
}







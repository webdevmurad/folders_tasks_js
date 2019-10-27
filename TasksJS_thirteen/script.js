// Task 1.
// Выведите массив a1 на страницу.

// a1 = {
//  3 : 'hello',
//  'one' : 'hi'
// };

let out1 = document.querySelector('.out-1');
let out11 = '';
let a1 = {
    3 : 'hello',
    'one' : 'hi'
};
for (let key in a1) {
    out11 += key + ' : ' + a1[key] + '<br>';
}
out1.innerHTML = out11;

// Task 2.
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.

// a2 = {
//  3 : 'hello',
//  'one' : 'hi',
//  'testt' : 'vodoley',
//  'ivan' : 'ivanov'
// };

let out2 = document.querySelector('.out-2');
let a2 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
};


for (let key in a2) {
    if(a2[key].length > 4) {
        out2.innerHTML += a2[key] + '<br>';
    }
}

// Task 3.
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

// a3 = {
//  3 : 'hello',
//  'one' : 'hi',
//  'testt' : 'vodoley',
//  'ivan' : 'ivanov'
// };

let out3 = document.querySelector('.out-3');
a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
};

for (let key in a3) {
    if(a3[key].length < 4) {
        out3.innerHTML += a3[key] + '<br>';
    }
}

// Task 4.
// Выведите на страницу элементы из масиива a4 у которых значение - число.

// a4 = {
//     3 : 'hello',
//     'one' : 4,
//     'testt' : 'vodoley',
//     'ivan' : 6
// };

let out4 = document.querySelector('.out-4');
a4 = {
    3 : 'hello',
    'one' : 4,
    'testt' : 'vodoley',
    'ivan' : 6
};

for (let key in a4) {
    if(typeof(a4[key]) == "number") {
        out4.innerHTML += a4[key] + '<br>';
    }
}

// Task 5.
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

// a5 = {
//  a : 7,
//  z : 4,
//  45 : 12,
//  f : 6
// };

let out5 = document.querySelector('.out-5');
let sum5 = 0;
a5 = {
    a : 7,
    z : 4,
    45 : 12,
    f : 6
};

for (let key in a5) {
    out5.innerHTML = sum5 += a5[key];
}

// Task 6.
// Создайте ассоциативный массив a6, который содержит 
// ключи name, age, sex, height и значения любого персонажа. 
// Выведите массив на страницу.

let out6 = document.querySelector('.out-6');
let out66 = '';
let a6 = {
    "name": "Murad",
    "age": 25,
    "sex": "male",
    "height": 178
};

for (let key in a6) {
    out66 += key + " : " + a6[key] + '<br>';
}
out6.innerHTML = out66;

// Task 7.
// Создайте ассоциативный массив a7, 
// два input (u7-key__input, u7-value__input) и кнопку. 
// При нажатии кнопки добавляйте в массив новое значение 
// с соответствующим ключем. Выводите массив на страницу.

let a7 = {};
let out7 = '';
let inpKey = document.querySelector('.input1'),
    inpVal = document.querySelector('.input2'),
    btn7 = document.querySelector('.btn7');

btn7.onclick = function() {
    inpK = inpKey.value.trim();
    inpV = inpVal.value.trim();
    if (inpK != '' && inpV != '') {
        a7[inpK] = inpV;
        for (let key in a7) {
            out7 += ` ${key} : ${a7[key]} <br> `;
        }
    }
    document.querySelector('.out-7').innerHTML = out7;
};

// Task 8.
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. 
// При нажатии кнопки - удаляйте значение с соответствующим ключем. 
// Выводите массив на страницу.

let btn8 = document.querySelector('.btn8'),
    inpDel = document.querySelector('.delInp');
let out8 = '';

btn8.onclick = function() {
    inpD = inpDel.value.trim();
    for (let key in a7) {
        if (inpD == key) {
            delete a7[inpD];
        }
    }
    for (let key in a7) {
        out8 += ` ${key} : ${a7[key]} <br> `;
        document.querySelector('.out-8').innerHTML = out8;
    }
};

// Task 9.
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. 
// При нажатии кнопки - удаляйте записи с соответствующим значением. 
// Выводите массив на страницу.

let btn9 = document.querySelector('.btn9'),
    inpDel9 = document.querySelector('.delInp9');
let out9 = '';

btn9.onclick = function() {
    inpD9 = inpDel9.value.trim();
    for (let key in a7) {
        console.log(a7[key]);
        if (inpD9 == a7[key]) {
            delete a7[key];
        }
    }
    for (let key in a7) {
        out9 += ` ${key} : ${a7[key]} <br> `;
        document.querySelector('.out-9').innerHTML = out9;
    }
};

// Task 10.
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. 
// При нажатии кнопки - возвращайте true если 
// такой ключ есть в массиве, и false если нет.

let btn10 = document.querySelector('.btn10'),
    inpDel10 = document.querySelector('.u10-has-key__input');
let out10 = '';
let tf = false;

btn10.onclick = function() {
    inpD10 = inpDel10.value.trim();
    for (let key in a7) {
        console.log(inpD10);
        if (inpD10 === key) {
            tf = true;
            alert(tf);
            break;
        } else {
            tf = false;
            alert(tf);
            break;
        }
    }
    for (let key in a7) {
        out10 += ` ${key} : ${a7[key]} <br> `;
        document.querySelector('.out-10').innerHTML = out10;
    }
};


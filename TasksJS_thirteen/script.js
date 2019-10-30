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

btn10.onclick = function() {
    inpD10 = inpDel10.value.trim();
    if (a7[inpD10]) {
        alert(true);
    } else {
        alert(false);
    }
};

// Task 11.
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.

// a11 = {
// 	"red" : ['Академгородок',...],
// 	"green" : 
// }

let out111 = document.querySelector('.out-11');
let out1111 = '';

let a11 = {
	"red" : ["Академгородок", "Житомирская", "Святошин", "Нивки", "Берестейская", "Шулявская", "Политехнический институт", "Вокзальная", "Университет", "Театральная", "Крещатик", "Арсенальная", "Днепр", "Гидропарк", "Левобережная", "Дарница", "Черниговская", "Лесная"], 
    "blue" : ["Героев Днепра", "Минская", "Оболонь", "Почайна", "Тараса Шевченко", "Контрактовая площадь", "Почтовая площадь", "Майдан Незалежности", "Площадь Льва Толстого", "Олимпийская", "Дворец «Украина", "Лыбедская", "Демиевская", "Голосеевская", "Васильковская", "Выставочный центр", "Ипподром", "Теремки"],
    "green" : ["Сырец", "Дорогожичи", "Лукьяновская", "Золотые ворота", "Дворец спорта", "Кловская", "Печерская", "Дружбы народов", "Выдубичи", "Славутич", "Осокорки", "Позняки", "Харьковская", "Вырлица", "Бориспольская", "Красный хутор"]
}

for (let key in a11) {
    out1111 += key + ' : ' + a11[key] + '<br>';
}

out111.innerHTML = out1111;

// Task 12.
// Добавьте к предыдущей задаче select.u12-branch и кнопку. 
// Пользователь может выбрать цвет ветки и нажать кнопку, 
// после чего на страницу будут выведены только станции данной ветки.
let out12 = document.querySelector('.out-12');
document.querySelector('.btn12').onclick = () => {
    let line = document.querySelector('.u12-branch');
    for (let key in a11) {
        if (line.value == key) {
            out12.innerHTML = a11[key];
        }
    }
}

// Task 13.
// Добавьте к предыдущей задаче кнопку button.u13-reverse 
// которая при нажатии выводит станции ветки в обратном порядке. 
// Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

let out13 = document.querySelector('.out-13');

document.querySelector('.btn13').onclick = () => {
    let line = document.querySelector('.u12-branch');
    for (let key in a11) {
        if (line.value == key) {
            out13.innerHTML = a11[key].reverse();
        }
    }
};

// Task 14.
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. 
// В select - пользователь может выбрать станцию, а вы перебирая 
// массив - вывести ветку на которой эта станция находится.

let out14 = document.querySelector('.out-14');

document.querySelector('.btn14').onclick = () => {
    let station = document.querySelector('.u14-find-station');
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            if (station.value == a11[key][i]) {
                out14.innerHTML = key;
            }
        }
    }
}

// Task 15.
// Добавьте к предыдущему заданию 2 select где пользователь 
// может выбрать 2 станции, и если они на одной ветке - то 
// по нажатию на кнопку будет показано сколько станций между ними 
// (сами станции не включаем. Если это соседние станции - то 0).

let fromStat = document.querySelector('.valfrom'),
    toStat = document.querySelector('.valto');
let out15 = '';

for(let key in a11) {
    for (let k = 0; k < a11[key].length; k++) {
        out15 += `<option >${a11[key][k]}</option>`;
    }
    fromStat.innerHTML = out15;
    toStat.innerHTML = out15;
}

document.querySelector('.btn15').onclick = () => {
    let fromS = fromStat.value,
        toS = toStat.value,
        fromKey = '',
        toKey = '_';
    for (let key in a11) {
        let from = a11[key].indexOf(fromS);
        if (from != -1) {
            fromKey = key;
        }
        let to = a11[key].indexOf(toS);
        if (to != -1) {
            toKey = key;
        }
        if (toKey == fromKey && from >= to) {
            document.querySelector('.out-15').textContent = from - to;
            break;
        } else if (fromKey == toKey && to >= from) {
            document.querySelector('.out-15').textContent = to - from;
            break;
        } else {
            document.querySelector('.out-15').textContent = 0;
        }
    } 
};

// Task 16.
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в 
// соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. 
// При выборе radio - программа должна в select добавлять option с названиями 
// станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть 
// записаны option со станциями зеленой ветки. Выбрали red - select должен быть 
// очищен и добавлены option со станциями красной ветки.

let lineMetro = document.querySelectorAll('.u16-radio');
let metroL = document.querySelector('.u16-select');

document.querySelector('.btn16').onclick = () => {
    let option16 = document.createElement('option');
    metroL.append(option16);
    for (let i = 0; i < lineMetro.length; i++) {
        console.log(lineMetro[i]);
    }
    for (let key in a11) {
        if (lineMetro[0].value == key) {
            option16.textContent = a11[key];
        } else if (lineMetro[1].value == key) {
            option16.textContent = a11[key];
        } else if (lineMetro[2].value == key) {
            option16.textContent = a11[key];
        }
    }
}

// Task 17.
// Создайте массив, который описывает метро киевского 
// метрополитена и обозначаются конечные и станции перехода, 
// выведите его на страницу. Конечные - обозначать 0, перехода - 1.

// a17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }

let div17 = document.querySelector('.out-17');
let a17 = {
	"red" : [["Академгородок", 0], ["Житомирская"], ["Святошин"], ["Нивки"], ["Берестейская"], ["Шулявская"], ["Политехнический институт"], ["Вокзальная"], ["Университет"], ["Театральная", 1],[ "Крещатик", 1], ["Арсенальная"], ["Днепр"], ["Гидропарк"], ["Левобережная"], ["Дарница"], ["Черниговская"], ["Лесная", 0]], 
    "blue" : [["Героев Днепра", 0], ["Минская"], ["Оболонь"], ["Почайна"], ["Тараса Шевченко"], ["Контрактовая площадь"], ["Почтовая площадь"], ["Майдан Незалежности", 1], ["Площадь Льва Толстого", 1],[ "Олимпийская"], ["Дворец Украина"], ["Лыбедская"], ["Демиевская"], ["Голосеевская"], ["Васильковская"], ["Выставочный центр"], ["Ипподром"], ["Теремки", 0]],
    "green" : [["Сырец", 0], ["Дорогожичи"], ["Лукьяновская"], ["Золотые ворота", 1], ["Дворец спорта", 1], ["Кловская"], ["Печерская"], ["Дружбы народов"], ["Выдубичи"], ["Славутич"], ["Осокорки"], ["Позняки"], ["Харьковская"], ["Вырлица"], ["Бориспольская"], ["Красный хутор", 0]]
}

for (let key in a17) {
    div17.innerHTML += a17[key] + '<br>';
}

// Task 18.
// Выведите на страницу только станции с переходами из массива a17.

let div18 = document.querySelector('.out-18');

for (let key in a17) {
    console.log(a17[key]);
}
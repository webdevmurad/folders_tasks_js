// Task 1 

// Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'array' и 'func'
// 'array' - массив
// 'func' - фильтрующая функция
// Условия:
// Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
// Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'
// Нельзя использовать функции для работы с массивами, методы и циклы.

// Пример: 
// let allNumbers= [1, 2, 4, 5, 6, 7, 8],
// someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
// noNumbers = ['здесь', 'нет',  'чисел'];

// function isNumber(val) {
// return typeof val === 'number';
// }

// console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

let allNumbers= [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
    noNumbers = ['здесь', 'нет', 'чисел'];
    
    function isNumber(val) {
        return typeof val === 'number';
    }

    function isSomeTrue(arr, func) {
        const arr1 = arr; 
        if(func(arr1[0])) {
            return true
        } else {
            arr1.splice(0, 1);
            if(arr1.length > 0) {
                return isSomeTrue(arr1, func)
            } else return false
        }
    }

    

    console.log(isSomeTrue(allNumbers, isNumber)); 
    console.log(isSomeTrue(someNumbers, isNumber)); 
    console.log(isSomeTrue(noNumbers, isNumber)); 


    // Task 2 

    // Написать функцию, которая рассчитает угол между часовой и минутной стрелками часов!
    // Функция принимает два аргумента (часы, минуты)

    // например :
    // func(6, 0)  =>>>  180
    // func(3, 0)  =>>>  90
    // func(3, 30)  =>>>  75

    function isTime(hour, minutes) {
        const time = (((hour % 12) * 60 + (minutes % 60)) * 5.5) % 360;
        console.log(time);
    }

    isTime(6, 0);
    isTime(3, 0);
    isTime(3, 30);

    
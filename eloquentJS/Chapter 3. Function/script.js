// Минимум

function min(a, b) {
    if (a < b) return a;
    else return b;
}

// console.log(min(4, 5))

//  Рекурсия 

function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else return isEven(n - 2);
}

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// Подсчет букв 

function countChar(string, ch) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            count++;
        }
    }

    return count
}

// console.log(countChar('murad', 'a'))
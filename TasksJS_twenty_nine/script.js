function t1() {
    let a = 0;
    return function () {
        a = a + 1;
        return a;
    }
}

let b = t1();
console.log(b());
console.log(b());
console.log(b());

// Замыкания - это замыкания области видимости на какой-то объем переменной.
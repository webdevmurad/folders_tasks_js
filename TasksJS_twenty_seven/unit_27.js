
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

document.querySelector('.b-1').onclick = () => {
    t1();
}


function t1() {
    let prom1 = new Promise ((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1', {
        method: 'GET',
    })
        .then(data => {
            resolve(data.text());
        })
    });
    let prom2 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Murad', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    });
    Promise.all([prom1, prom2]).then(value => {
        document.querySelector('.out-1').innerHTML = value;
    });
}

// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

document.querySelector('.b-2').onclick = () => {
    t2();
}

function t2() {
    let prom3 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=5&num2=5', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    });
    let prom4 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=1&num2=10', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom3, prom4]).then(value => {
        document.querySelector('.out-2').innerHTML = value;
    }) 
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

document.querySelector('.b-3').onclick = () => {
    t3();
}

function t3() {
    let prom5 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    })
    let prom6 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=1&num2=10', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom5, prom6]).then(value => {
        document.querySelector('.out-3').innerHTML = value;
    })
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

document.querySelector('.b-4').onclick = () => {
    t4();
}

function t4() {
    let prom7 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    })
    let prom8 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1994', {
            method: 'GET',
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom7, prom8]).then(value => {
        document.querySelector('.out-4').innerHTML = value;
    })
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

document.querySelector('.b-5').onclick = () => {
    t5();
}

function t5() {
    let prom9 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    let prom10 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Murad', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom9, prom10]).then(value => {
        document.querySelector('.out-5').innerHTML = value;
    })
}

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

document.querySelector('.b-6').onclick = () => {
    t6();
}

function t6() {
    let prom11 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=1&num2=10', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    let prom12 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=1&num2=10', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom11, prom12]).then(value => {
        document.querySelector('.out-6').innerHTML = value;
    })
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

document.querySelector('.b-7').onclick = () => {
    t7();
}

function t7() {
    let prom13 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    let prom14 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=1&num2=10', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom13, prom14]).then(value => {
        document.querySelector('.out-7').innerHTML = value;
    })
}

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

document.querySelector('.b-8').onclick = () => {
    t8();
}

function t8() {
    let prom15 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    let prom16 = new Promise ((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1994', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(data => {
            resolve(data.text());
        })
    })
    Promise.all([prom15, prom16]).then(value => {
        document.querySelector('.out-8').innerHTML = value;
    })
}

// ваше событие здесь!!!


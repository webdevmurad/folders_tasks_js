// Task 1
// Вывод на экран

document.querySelector('.btn1').onclick = () => {
    alert('Task 1');
}




// Task 2
// Вывод на экран

document.querySelector('.inp2').onclick = () => {
    alert('Task 2');
}




// Task 3
// Вывод на экран

document.querySelector('.text3').onclick = () => {
    alert('Task 3');
}




// Task 4
// Вывод в консоль

document.querySelector(".btn4").onclick = () => {
    let check = document.querySelector('.check');
    if(check.checked) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}




// Task 5
// Вывод в консоль

document.querySelector('.btn5').onclick = () => {
    let check5 = document.querySelector('.check5');
    if(check5.checked) {
        console.log(check5.value);
    }
    else {
        console.log(false);
    }
}




// Task 6
// Вывод в консоль

document.querySelector('.btn6').onclick = () => {
    let inp6 = document.querySelector('.inp6');
    alert(inp6.value);
}




// Task 7
// Вывод на экран

let inp7 = document.querySelector('.inp7'),
    btn7 = document.querySelector('.btn7');

btn7.onclick = () => {
    if(6 > inp7.value.length){
        alert("Пароль меньше 6 символов");
    }
    else {
        alert(inp7.value);
    }
}




// Task 8
// Вывод на экран

let div1 = document.querySelector('.div1'),
    btn8 = document.querySelector('.btn8');

btn8.onclick = () => {
    div1.innerHTML = "<input class='inp8'> <button class = 'btn82'>OK</button> ";
    btn82.onclick = () => {
        alert(inp8.value);
    }
}




// Task 9
// Вывод на экран

document.querySelector('.btn9').onclick = () => {
    let inp9 = document.querySelector('.inp9');
    if(inp9.checked) {
        alert('Активен');
    }
    else {
        alert('false');
    }
}




// Task 10
// Вывод на экран

document.querySelector('.btn10').onclick = () => {
    let inp10 = document.querySelector('.inp10');
    inp10.style.сolor = 'yellow';
}




// Task 11
// Вывод на экран

document.querySelector('.btn11').onclick = () => {
    let inp111 = document.querySelector('.inp111'),
        inp112 = document.querySelector('.inp112');
    inp111.style.backgroundColor = 'white';
    inp112.style.backgroundColor = 'blue';
}




// Task 12
// Вывод на экран

document.querySelector('.btn12').onclick = () => {
    let inp12 = document.querySelector('.inp12');
    alert(inp12.value);
}




// Task 13
// Вывод в консоль

document.querySelector('.btn13').onclick = () => {
    console.log(document.querySelector('.inp13').value);
}

// document.querySelector('.inp13').oninput = () => {
//     console.log(document.querySelector('.inp13').value);
// }




// Task 14
// Вывод на экран

document.querySelector('.btn14').onclick = () => {
    let textA = document.querySelector('#textA');
    alert(textA.value);
}




// Task 15
// Вывод на экран

// document.querySelector('.btn15').onclick = (event) => {
//     event.preventDefault();
//     let text15 = document.querySelector('.text15'),
//         inp15 = document.querySelector('.inp15');
//     inp15 = inp15.value;
//     alert(inp15);
//     text15.value = inp15.value;
// }

// Не получается




// Task 16
// Вывод на экран

document.querySelector('.btn16').onclick = () => {
    let sel16 = document.querySelector('.sel16');
    sel16 = sel16.value;
    alert(sel16);
}




// Task 18
// Вывод на экран
document.querySelector('.sel18').onchange = () => {
    let sel18 = document.querySelector('.sel18');
    alert(sel18.value);
}




// Task 19
// Вывод в консоль

document.querySelector('.btn19').onclick = (event) => {
    event.preventDefault();
    let inpText = document.querySelector('.inpText'),
        inpPas = document.querySelector('.inpPas');
    log = inpText.value;
    pas = inpPas.value; 
    console.log(log);
    console.log(pas);
}




// Task 20
// Вывод в консоль

document.querySelector('.btn20').onclick = (event) => {
    event.preventDefault();
    console.log(document.querySelector('.form20').elements[0].value + document.querySelector('.form20').elements[1].value);
}
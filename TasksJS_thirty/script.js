// let a = 1;

// function rec(){
//     a++;
//     console.log(a);
//     if ( a >= 10 ) {
//         return a;
//     }
//     rec();
// }
// rec();

// let b = 0; 

// function rec2() {
//     b = b + 2;
//     console.log(b);
//     if (b > 99) {
//         return b;
//     }
//     rec2();
// }

// rec2();

let offset = 0;

function move() {
    offset = offset + 5;
    document.querySelector('.task').style.marginLeft = offset + 'px';
    if(offset > 200){
        return true;
    }
    setTimeout(move, 500);
}

document.querySelector('.push').onclick = move;


// Рекурсия - это возможность функции вызвать саму себя.
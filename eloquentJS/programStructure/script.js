// Task 1
// Можно было решить ее одним циклом или с помощью вложенных циклов

let task1 = document.querySelector('.task1');
for (let i = 0; i < 7; i++) {
    for (let k = 0; k <= i; k++) {
        task1.innerHTML += '#';
    }
    task1.innerHTML += '<br>';
}

// Решение одним циклом
for (let line = '#'; line.length < 8; line += '#'){
    console.log(line);
}

// Task 2

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    }
}

// Task 3
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
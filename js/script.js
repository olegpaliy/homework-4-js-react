//завдання 1
let total = 0;
let someMarks = [80, 77, 68, 88, 95];
for (i = 0; i < someMarks.length; i++) {
  total += someMarks[i];
}
let average = total / someMarks.length;
console.log(average);

if (average < 60) {
  console.log("F");
} else if (average < 70) {
  console.log("D");
} else if (average < 80) {
  console.log("C");
} else if (average < 90) {
  console.log("B");
} else {
  console.log("A");
}

//завдання 2
let Numb1 = 3;
let Numb2 = 5;
let sum = 0;
for (m = 0; m < 1000; m++) {
  if (m % Numb1 == 0 || m % Numb2 == 0) {
    sum += m;
    console.log(m);
  }
}
console.log(sum);

//завдання 3
let NumbStars = prompt('скільки рядків зірочок з неба хо?')
let NumbStr = '';
for (let i = 0; i < NumbStars; i++) {
    NumbStr += '* ';
    alert(NumbStr);
}

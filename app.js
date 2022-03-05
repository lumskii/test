console.log('hello world');
// okay this comment thing works

let speedLimit = 50;
let mySpeed = 65;

//conditional statement
if (mySpeed > speedLimit){
    console.log('Slow Down! Mom is mad!');
}else if (mySpeed == speedLimit){
    console.log('Everyone is happy!');
}else {
    console.log('Speed up! Dad is mad!');
}

//boolean conditional statements
var alarmSet = true;
var openDoor = false;

if (alarmSet == true && openDoor == true){
        console.log('Sound Alarm!');
    }else {
    console.log('Everyone is fine!');
}

//string conditional statement
let username;
let password;

if((username === 'Tommy123' && password === '12345') || (username === 'Timmy456' && password === '6789')){
    console.log('Admin Login Successful');
}else {
    console.log('Admin Access Denied');
}

let studentGrade = 7;
let studentClass;

switch(studentGrade){
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = 'Elementary';
        break;
    case 7:
    case 8:
        studentClass = 'Middle';
        break;
    case 9:
        studentClass = 'Freshman';
        break;
    case 10:
        studentClass = 'Sophomore';
        break;
    case 11:
        studentClass = 'Junior';
        break;
    case 12:
        studentClass = 'Senior';
        break;
    default:
        console.log('Error');
}
console.log(studentClass);

// For loop
for (let i = 10; i >= -10; i--){
    console.log(i);
}

// Do/While loop
// let a = 1;
// do {
//     console.log(a);
//     a++;
// }while (a <= 50);

// do/while loop remainder divided by 4
let a = 1;
do {
    console.log(a % 4);
    a++;
} while (a <= 50);

//correcting an infinite loop
//for(let i = 11; i > 10; i++){
//     console.log(i);
// }
for(let i = 0; i < 10; i++){
    console.log(i);
}

//Example
var requiredCupsOfRice = parseInt(input[0]);
var currentCupsOfRice = 0;

//This is just one example using a while loop

while (currentCupsOfRice != requiredCupsOfRice) {
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

//another example
var userNumber = parseInt(input[0]);

//write your code here
do {
    console.log(userNumber);
    userNumber = userNumber + 6;
} while (userNumber <= 100);

//for loop example
for (var i = 0; i <= 99; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

//for loop for multiplication table
for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

//loop Game
var points = 0;
var pointsReset = false;

for (var i = 0; i < 100 && points < 290; i++) {
    if (points == 125 && pointsReset === false) {
        points = 25;
        pointsReset = true;
    } else if (i % 2 === 0) {
        points = points + 5;
    } else {
        points = points + 3;
    }

    console.log("Turns: " + i + " Score: " + points)
}

// while loop example
var countdown = parseInt(input[0]);


if (countdown <= 10 && countdown >= 3) {
    while (countdown >= 1) {
        console.log(countdown + "...");
        countdown--;
    }
}

console.log("We have lift off!");

forEach=(array,callBack) => {
    for(let i=0; i<array.length;i++){
    callBack(array[i]);
    }
    
}

// Lecture: let and const



// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;


// ES5 functions
function driversLicense(passedTest) {
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ', born in ' + yearOfBirth +
        ' is now officially allowed to drive a car.')
    }
}
driversLicense(true);

// ES6 functions // let and const only accessible inside the block it's used in
function driversLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest) {
        firstName = 'John';
     
        console.log(firstName + ', born in ' + yearOfBirth +
        ' is now officially allowed to drive a car.')
    }
}
driversLicense6(true);

// Lecture: Blocks and IIFEs
// ES6
{
    const a  = 1;
    let b = 2;
    var c= 3;
}
console.log(c);

// ES5
(function() {
    var c = 3;
})();

// Lecture: Strings

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName +
' ' + lastName + '. He was born in ' + yearOfBirth 
+ '. Today, he is ' + calcAge(yearOfBirth)
+ ' years odl.');

// ES6 `` template literal
console.log(`This is ${firstName} ${lastName}. He was born in
${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endssWith('th'));
console.log(n.includes(' '));
console.log(`{firstName}`.repeat(5));

// Lecture: Arrow Functions: Basics

const years = [1990, 19965, 1982, 1937];

// ES5 
var ages5 = years.map(function(el) {
    return 2018 - el;
});
console.log(ages5);

// ES6 
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => { 
    const now = new Date().getFullYear();
    const age = now - el;

    return  `Age element ${index + 1}: ${age}.`
});

// Lecture: Arrow Functions 2
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}
box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => { // shares global this keyboard
        
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }
// box5.clickMe();

function Person(name) {
    this.name = name;
}
// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(tihs));;
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el =>
        `${this.name} is friends with ${el}`);
    console.log(arr);
}
new Person('Mike').myFriends6(friends);

// Lecture: Destructuring

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1990);

// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(current) {
//     current.style.backgroundColor = 'dodgerblue';
// })

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');
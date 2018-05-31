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
 var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(current) {
//     current.style.backgroundColor = 'dodgerblue';
// })

// ES6
const boxesArr6 = 
Array.from(boxes).boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');

//ES5
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

//ES6 For-Off loop
for (const current of boxesArr6) {
    if (current.className.includes('blue')) {
        continue;
    }
    current.textContent = 'I changed to blue!';
}


//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

// Lecture: Spread operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); //apply will take the array and call the array
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages); // expands the array into it's components
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anm'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box'); // node list
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

// Lecture: Rest parameters

// //ES5
// function isFullAge5() {
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     args.Arr(forEach(function(cur) {
//         console.log((2018 - cur) >= 18);
//     }))
// }

// isFullAge5(1990, 1999, 1965);

// //ES6
// function isFullAge6(...years) {
//     years.forEach(cur => console.log((2018 - cur) >= 18));
// } //passes the array from the function and allows you to access the years
// // from each index
// isFullAge6(1990, 1999, 1965));


//ES5
function isFullAge5(limit) {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    args.Arr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    })
}

isFullAge5(1990, 1999, 1965);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2018 - cur) >= limit));
} //passes the array from the function and allows you to access the years
// from each index
isFullAge6(16, 1990, 1999, 1965);

// Lecutre: Default parameters

//ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    // default paraments above

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john  = new SmithPerson('John', 1990); // passed 2 arguments
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', 
nationality = 'american'){
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var john  = new SmithPerson('John', 1990); // passed 2 arguments
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version');
// Define new key value pair
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D' );
question.set(false, 'Wrong, please try again!');

// retrieve data
console.log(question.get('question'));
console.log(question.size);

// remove data
question.delete(4);

if(question.has(4)) { //checks if 4 exists in data
    console.log('Answer 4 is here');
}
// delete all data
question.clear();
// Maps are iterable
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) { // using entries returns all key, value pairs.  Works for arrays too
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${vlaue}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
// Use anything as keys, opens a lot of possibilities.
// Maps are iterable allows u to manipulate the data
// can easily add and remove data from a map
// Map > objects when building hash maps
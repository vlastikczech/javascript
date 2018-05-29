// Function constructor

// var john = {
// 	name: 'john',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person.prototype.calculateAge = function(){
// 		console.log(2018 - this.yearOfBirth);
// 	}

// var personProto = {
// 	calculateAge: function(){
// 		console.log(2018 - this.yearOfBirth);
// 	}
// }

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();


// var bob = Object.create(personProto);
// bob.name = 'Bob';
// bob.yearOfBirth = 1990;
// bob.job = 'teacher';

// var tim = Object.create(personProto, {
// 	name: { value: 'tim'},
// 	yearOfBirth: { value: 1969 },
// 	job: { value: 'designer' }
// });


	//Primitives vs objects

// 	var a = 23;
// 	var b = a;
// 	a = 46;
// 	console.log(a);
// 	console.log(b);

// var obj1 = {
// 	name: 'john',
// 	age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // functions

// var age  = 27;
// var obj = {
// 	name: 'Jonas',
// 	city: 'Lisbon'
// };

// function change(a, b) {
// 	a = 30;
// 	b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


//Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++){
// 		arrRes.push(fn(arr[i]);
// 	}
// 	return arrRes;
// }
// function calculateAge(el) {
// 	return 2018 - el;
// }

// function isFullAge(el){
// 	return el >= 18;
// }

// function maxHeartRate(el){
// 	of ( el >= 18 && el <= 81){
// 		return Math.round(206.9 - (0.67 * el));
// 	}
// 	else {
// 		return -1;
// 	}
	
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// function interviewQuestion(job){
// 	if (job === 'designer'){
// 		return function(name){
// 			console.log(name + ', can you please explain what UX design is?');
// 		}

// 	}
// 	else if (job === 'teacher'){
// 		return function(name){
// 			console.log('What subject do you teach, ' + name + '?');
// 		}
// 	}
// 	else{
// 		return function(name){
// 			console.log('Hello ' + name + ', what do you do?');
// 		}
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('teacher')('Mark');

 //IIFE

 // (function (){
 // 	var score = Math.random() * 10;
 // 	console.log(score >=5);
 // })(); // () invokes the function, and hides the data
 // // new scope hidden from the outside scope
 // // obtains data privacy 

 //  (function (goodLuck){
 // 	var score = Math.random() * 10;
 // 	console.log(score >=5 - goodLuck);
 // })(5); 

 // closures

 // function retirement(retirementAge){
 // 	var a = ' years left until retirement.';
 // 	return function(yearOfBirth){
 // 		var age = 2018 - yearOfBirth;
 // 		console.log((retirementAge - age) + a);
 // 	}
 // }

 // var retirementUS = retirement(66);
 // retirementUS(1995);

 // retirement(66)(1995);


 // function interviewQuestion(job){
 // 	return function(name){
 // 		if (job === 'designer'){
 // 			console.log(name + ', can you please explain what UX design is?');

 // 		}else if (job === 'teacher'){
 // 			console.log('What subject do you teach, ' + name + '?');
 // 		}
 // 		else{
 // 			console.log('Hello ' + name + ', what do you do?');
 // 		}
 // 	}
 // }

//  iterviewQuestion('teacher')('John');
//  	// Bind, call and apply
//  	var john = {
//  		name: 'John',
//  		age: 26,
//  		job: 'teacher',
//  		presentation: function(style, timeOfDay) {
//  			if(style === 'formal'){
//  				console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' + 
//  					this.name + ', I\'m a ' + this.job +
//  					' and I\'m ' + this.age + ' years old.');
//  			}
//  			else if (style === 'friendly'){
//  				console.log('Hey! What\'s up? I\'m ' + 
//  					this.name + ', I\'m a ' + this.job +
//  					' and I\'m ' + this.age + ' years old. Have a nice ' +
//  					timeOfDay + '.' );
//  			}
//  		}
//  	}

//  	var emily = {
//  		name: 'Emily',
//  		age: 35,
//  		job: 'designer'
//  	};

//  	john.presentation('formal', 'morning');

//  	john.presentation.call(emily, 'friendly', 'afternoon');

// 	 	//john.presentation.apply(emily, ['friendly', 'afternoon'])
// 	 	//bind allows to set parameters && set scope
//  	var johnFriendly = john.presentation.bind(john, 'friendly');

//  	johnFriendly('morning');
//  	johnFriendly('night');


//  	var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++){
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }
// function calculateAge(el) {
// 	return 2018 - el;
// }

// function isFullAge(limit, el){
// 	return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge)
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);
var player1 = {
	height: 150,
	age: 21
};

var player2 = {
	height: 140,
	age: 30
};

var player3 = {
	height: 180,
	age: 34
}

var score1 = player1.height + (player1.age * 5);
var score2 = player2.height + (player2.age * 5);
var score3 = player3.height + (player3.age * 5);

if(score1 > score2 && score1 > score3){
	console.log("Player1 wins with " + score1 + " points!");	
}
else if(score2 > score1 && score2 > score3){
	console.log("Player2 wins with " + score2 + " points!");	
}
else if(score3 > score1 && score3 > score2){
	console.log('Player3 wins with ' + score3 + ' points!');
}
else{
	console.log('There is a draw.');
}

var john = {
	yearOfBirth: 1990,
	calculateAge: function(){
		this.age = 2016 - this.yearOfBirth;
	}
};
john.calculateAge();
console.log(john);
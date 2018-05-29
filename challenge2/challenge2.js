var yearBorn = [1995, 2002, 2008, 1996, 1986];



function printFullAge(yearBorn){
	var ages = [];
	var fullAges = [];
	for(var i = 0; i < yearBorn.length; i++){
		ages[i] = 2018 - yearBorn[i];
	};

	for( i = 0; i < yearBorn.length; i++){
		if(ages[i] >= 18){
			console.log('You are an adult ' + ages[i]);
			fullAges.push(true);
		}
		else{
			console.log('You are not an adult ' + ages[i]);
			fullAges.push(false);
		}
	};

}

do{

var turn = prompt("Choose 1 to turn on and 2 to turn off.");
var option = true

if(turn !== "1" && turn !== "2")
{
  alert("Please enter a valid input.");
}

else
{
  
    switch(turn)
    {
        case '1':
        turn = 'On';
        break;

        case '2':
        turn = 'Off';
        break;
    }

   alert("The switch is now " + turn);
   option = false;
}


}while(option === true);
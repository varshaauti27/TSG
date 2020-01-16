function sayHi()
{
	alert("Hii");
}

// Function call :
sayHi();

function sayHello(myName)
{
	alert("Hi " +myName +"!!!!");
}
// Function call :
sayHello("Varsha");

// What if we passed in something that isn't a string? 
sayHello(3.14);
sayHello(true);
sayHello(null);

var undefinedName;
sayHello(undefinedName);

function sayHello(myName)
{
	if(myName=="Varsha")
	{
		alert("You are a Software Developer " +myName +"!!!!");
	}
	else
	{
		alert("Hello " + myName);
	}
}
function rollDice()
{
	return Math.floor(Math.random() * 6) + 1;
}

function rollDice(numSides)
{
	return Math.floor(Math.random() * 6) + 1;
}

for(var i=0; i<10; i++)
{
	console.log(rollDice());
}
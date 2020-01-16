var friends = ["Varsha","Pratiksha","Deepak","Vijay","Tani","Vinod","Nanda","Shivaji"];
friends.length;

var team1 = new Array();
var team2 = new Array();

for(var i=0; i<friends.length; i++)
{
	if(i % 2 == 0)
	{
		team1.push(friends[i]);
	}
	else
	{
		team2.push(friends[i]);
	}
}

console.log(team1);

console.log(team2);

var fruits = ['kiwi', 'rambutan', 'mango', 'tomato'];
console.log(fruits);

fruits.pop(); 
console.log(fruits);

fruits.push('gooseberry');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("banana");
console.log(fruits);

console.log(fruits.splice(0, 2));

fruits[5] = "dragonfruit";
console.log(fruits);
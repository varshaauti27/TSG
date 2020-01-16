
// Function call : 
// countingCharacters("Varsha");
function countingCharacters(stringToCount)
{
	alert(stringToCount + " Has " + stringToCount.length + " characters.");
}

// Function call : 
// countingCharacters2("VARSHA","A");
function countingCharacters2(stringToCount, charToCount)
{
	var charCount = 0;
	for(var charPosition=0; charPosition < stringToCount.length; charPosition++)
	{
		console.log(stringToCount[charPosition]);
		if(stringToCount[charPosition] == charToCount)
		{
			charCount++;
		}
	}
	console.log("String to search in: "+stringToCount);
	console.log("Character to find: "+charToCount);
	console.log("No.of Char " + charToCount +" in the string "+ stringToCount + " is "+charCount);
}

// Function call : 
// countingCharacters3("xxaxxxbxx","xx");
function countingCharacters3(str,search)
{
	var count = 0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	for (var index=0; index <= lastIndex; index++)
	{
		var current = str.substring(index, index + numChars);
		if(current == search)
		{
			count++;
		}
	}
	console.log("String to search in : " +str);
	console.log("Character to find : " +search);
	console.log("Number of times the character appears : "+count);
}

function countingCharacters4(str,search)
{
	var count=0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	for(var index=0; index <= lastIndex; index++ )
	{
		var current = str.substring(index, index + numChars);
		if(current == search)
		{
			count++
		}
	}
	return count;
}


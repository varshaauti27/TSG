var arr1=[21,5,72,9,42,56,34,52,19];
console.log(arr1);

function findMax(arr)
{
	var maxNo = 0;
	for(var i=0; i<arr.length; i++)
	{
		if(maxNo < arr1[i])
		{
			maxNo = arr1[i];
		}		
	}
	return maxNo;
}

function sumOfRange(arr)
{
	var sum = 0;
	for(var i=0; i<arr.length; i++)
	{
		sum += arr[i];
	}
	return sum;
}

console.log(findMax(arr1));
console.log(sumOfRange(arr1));



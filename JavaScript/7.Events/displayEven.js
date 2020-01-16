
function validateItems() {
    var startNum = Number(document.forms["evenNum"]["startNum"].value);
    var endNum = Number(document.forms["evenNum"]["endNum"].value);
	var steps = Number(document.forms["evenNum"]["steps"].value);
	var arrEven = new Array();
	var arrSteps =new Array();
    if (startNum == "" || isNaN(startNum)) {
        alert("Start Number must be filled in with a number.");
        document.forms["evenNum"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["evenNum"]["startNum"].focus();
        return false;
    }
   if (endNum == "" || isNaN(endNum)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["evenNum"]["endNum"]
          .parentElement.className = "form-group has-error";
       document.forms["evenNum"]["endNum"].focus();
       return false;
   }
   
   if (steps == "" || isNaN(steps) || steps < 0) {
       alert("Steps must be filled in with a positive number.");
       document.forms["evenNum"]["steps"]
          .parentElement.className = "form-group has-error";
       document.forms["evenNum"]["steps"].focus();
       return false;
   }
   
   if(startNum >= endNum)
   {
	   alert("Ending number must be greater than Starting Number.")
	   document.forms["evenNum"]["endNum"]
          .parentElement.className = "form-group has-error";
       document.forms["evenNum"]["endNum"].focus();
       return false;
   }
   
   var i = startNum;
   arrSteps.push(startNum);
  
   while(i+steps <= endNum)
   {
	   i = i+steps;
	   arrSteps.push(i);
   }
	
   for(var j=0;j<arrSteps.length; j++)
   {
	   if(arrSteps[j]%2==0)
	   {
		   arrEven.push(arrSteps[j]);
	   }
   }
   
   
   document.getElementById("results").style.display = "block";
   document.getElementById("startNo").innerText = Number(startNum);
   document.getElementById("endNo").innerText = Number(endNum);
   document.getElementById("evenNo").innerText = arrEven;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}
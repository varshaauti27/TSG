//js for ToDO

function addStuff()
{
	//alert("Add Stuff");
	var stuff = document.forms["ToDOForm"]["inputStuff"].value;
	//alert(stuff);
	
	var node = document.createElement("LI");
	var btnEdit = document.createElement("BUTTON");   // Create a <button> element
	btnEdit.innerHTML = "Edit";                   // Insert text
	
	var btnDelete = document.createElement("BUTTON");   // Create a <button> element
	btnDelete.innerHTML = "Delete"; 
	 
	var listItemNode = document.createTextNode(stuff);
	node.appendChild(listItemNode);
	node.appendChild(btnEdit);
	node.appendChild(btnDelete);
	
	btnEdit.onclick = editStuff;
	btnDelete.onclick = deleteStuff;

	
	
	document.getElementById("resultList").appendChild(node);
	//document.body.appendChild(btn);  
}


function editStuff()
{
	alert("edit Stuff");
	var stuff = document.forms["ToDOForm"]["inputStuff"].value;
	alert(this.parentNode.childElementCount);
	//this.parentNode.innerHTML = stuff+"<button>Edit</button><button>Delete</button>";
}


function deleteStuff()
{
	//alert(this.parentNode);
	this.parentNode.remove();
}





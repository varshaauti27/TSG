$(document).ready(function () {
   $('h1').addClass('text-center'); 
   $('h2').addClass('text-center'); 
   
   //Replace the class that is on the element containing the text "Team Up!" with the class page-header
   $('.myBannerHeading').addClass('page-header');
   $('.myBannerHeading').removeClass('myBannerHeading');
   
   //text of "The Squad" to "Yellow Team"
   $('#yellowHeading').Text = "Yellow Team";
   
   //Change the background color for each team list to match the name of the team
   $('#orangeTeamList').css('backgroundColor', 'orange');
   $('#blueTeamList').css('backgroundColor', 'blue');
   $('#redTeamList').css('backgroundColor', 'red');
   $('#yellowTeamList').css('backgroundColor', 'yellow');
   
   //Add Joseph Banks and Simon Jones to the Yellow Team list

   	var node1 = document.createElement("LI");
	var node2 = document.createElement("LI");
               // Insert text 
	var listItemNode1 = document.createTextNode("Joseph Banks");
	var listItemNode2 = document.createTextNode("Simon Jones");
	
	node1.appendChild(listItemNode1);
	node2.appendChild(listItemNode2);
	
	document.getElementById("yellowTeamList").appendChild(node1);
	document.getElementById("yellowTeamList").appendChild(node2);
	
	//Hide the element containing the text "Hide Me!!!"
	$('#oops').hide();
	
	//Remove the element containing the text "Bogus Contact Info" from the footer
	$("h2:contains('Bogus Contact Info')").remove();
	
	//Add a paragraph element containing your name and email to the footer. The text must be in Courier font and be 24 pixels in height
	$('#footer').append('p').text('Varsha Auti');
	
	$('#footer').css('font-size','24px');
	$('#footer').css('font-family', 'Courier');
	
});
// Check to see if the user likes cake
var likesCake = confirm("Do you like cake?");
// If the user likes cake, find out what their favorite cake is
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is whatever they inputted 
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}
function handleReady() {
    alert("A named function : Ready to go!");
}
 
// Run a named function when the document is ready.
$(document).ready(handleReady);
 
// Run an anonymous function when the document is ready.
$(document).ready(function () {
    alert("An anonymous function : Ready to go!");
});

$('#emptyDiv').append('p').text('A new paragraph of text...');

$('#emptyDiv').append('<hr/>');

$.ajax({
    type: "GET",
    url: "http://localhost:8080/contacts",
    success: function (contactArray) {
 
        // Get a reference to the 'allContacts' div.
        var contactsDiv = $("#allContacts");
 
        // Go through each contact in the result and append its info
        // to the contactsDiv.
        $.each(contactArray, function (index, contact) {
            var contactInfo = "<p>";
            contactInfo += "Name:"
                + contact.firstName + " " + contact.lastName + "<br />";
            contactInfo += "Company:" + contact.company + "<br />";
            contactInfo += "Phone:" + contact.phone + "<br />";
            contactInfo += "Email:" + contact.email + "<br />";
            contactInfo += "</p>";
            contactInfo += "<hr />";
 
            contactsDiv.append(contactInfo);
        });
    },
    error: function (jqXHR, textStatus, errorThrown) {
        alert("FAILURE!");
    }
});
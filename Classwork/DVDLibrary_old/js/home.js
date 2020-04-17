$(document).ready(function(){
	
	var idURL = "https://tsg-dvds.herokuapp.com/dvd/";
	var URL = "https://tsg-dvds.herokuapp.com/dvds/";
		
	loadDVDResults('https://tsg-dvds.herokuapp.com/dvds');
	
	$('#search-button').click(function (event) {
		
		$('#errorMessages').empty();
		
		if($('#search-category-select').val()==null)
		{
			$('#errorMessages').append($('<li>').attr({class: 'list-group-item list-group-item-danger'}).text("Please Enter Search Category"));
			return false;
		}
		
 		if($('#search-term-text').val()=='')
		{
			$('#errorMessages').append($('<li>').attr({class: 'list-group-item list-group-item-danger'}).text("Please Enter Search Term"));
			return false;
		}
		
		/*
	 
		var haveValidationErrors = checkAndDisplayValidationErrors($('#search-category-select'));
        // if we have errors, bail out by returning false
        if (haveValidationErrors) {
            return false;
        }
		var haveValidationErrors = checkAndDisplayValidationErrors($('#search-category-text'));
        // if we have errors, bail out by returning false
        if (haveValidationErrors) {
            return false;
        }
		 */
		
		var searchBy = $('#search-category-select').val();
		var searchTerm = $('#search-term-text').val();
		
		if(searchBy=='id')
		{
			loadDvdByID(idURL+searchTerm);
			return;
		}
		if(searchBy=='title')
		{
			URL +='title/';
		}
		if(searchBy=='releaseYear')
		{
			URL+='year/';
		}
		if(searchBy=='director')
		{
			URL+='director/';
		}
		if(searchBy=='rating')
		{
			URL+='rating/';
		}
		
		//alert(URL+searchTerm);
		loadDVDResults(URL+searchTerm);
	 });
	 
	  // Update Button onclick handler
    $('#edit-button').click(function (event) {

        // check for errors and display any that we have
        // pass the input associated with the edit form to the validation function
        var haveValidationErrors = checkAndDisplayValidationErrors($('#edit-form').find('input'));

        // if we have errors, bail out by returning false
        if (haveValidationErrors) {
            return false;
        }
		
        // if we get to here, there were no errors, so make the Ajax call
        $.ajax({
           type: 'PUT',
           url: 'https://tsg-dvds.herokuapp.com/dvd/' + $('#edit-dvd-id').val(),
           data: JSON.stringify({
             title: $('#edit-title').val(),
             releaseYear: $('#edit-releaseYear').val(),
             director: $('#edit-director').val(),
             rating: $('#edit-rating-select').val(),
             notes: $('#edit-notes').val()
			 
           }),
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           success: function() {
                // clear errorMessages
	
				alert("Success Edit");
                $('#errorMessages').empty();
				
                hideEditForm();
           },
           error: function(xhr,errorType, exception) {
              $('#errorMessages')
                .append($('<li>')
                .attr({class: 'list-group-item list-group-item-danger'})
                .text('Error calling web service.  Please try again later.')); 
	
				var responseText = (xhr.responseText);
				alert("Error type : "+errorType);
				alert("Exception : "+exception +"\nException Type :"+responseText.ExceptionType+"\nResponse Message: "+responseText.Message +"\nRespose StackTrace:"+responseText.StackTrace);
           }
       })
	   
    });
});


function loadDvdByID(URL)
{
	clearSearchTableTable();
	var contentRows = $('#contentRows');

    $.ajax ({
        type: 'GET',
        url: URL,
        success: function (dvd, status) {
				if(dvd!="")
				{
					var title = dvd.title;
					var releaseYear = dvd.releaseYear;
					var director = dvd.director;
					var rating = dvd.rating;
					var notes = dvd.notes;

					var id = dvd.id;
					var row = '<tr>';
						row += '<td><a onclick="showDvdDetailDisplay('+id +')">' + title + '</a></td>';
						row += '<td>' + releaseYear + '</td>';
						row += '<td>' + director + '</td>';
						row += '<td>' + rating + '</td>';
						
						row += '<td><a onclick="showEditForm(' + id + ')">Edit</a>';
						row += ' | <a onclick="deleteDVD(' + id + ')">Delete</a></td>';
						row += '</tr>';
					contentRows.append(row);
				}
        },
        error: function(xhr,status,error) {
            $('#errorMessages')
                .append($('<li>')
                .attr({class: 'list-group-item list-group-item-danger'})
                .text('Error calling web service.  Please try again later.'));
			
        }
    });
}
function showCreateForm()
{
	// clear errorMessages
    $('#errorMessages').empty();
	
	$('#pageTitle-span').text('Create New Dvd');
	
	$('#searchResultDiv').hide();
	$('#navSelection').hide();
	$('#search-category-select').val('default');
	$('#search-term-text').val('');
	$('#editFormDiv').hide();
    $('#createFormDiv').show();
}

function createNewDvd()
{
	showCreateForm();
	
    var haveValidationErrors = checkAndDisplayValidationErrors($('#create-form').find('input'));

	// if we have errors, bail out by returning false
	if (haveValidationErrors) {
		return false;
	}

	 // if we made it here, there are no errors so make the ajax call
	$.ajax({
		type: 'POST',
		url: 'https://tsg-dvds.herokuapp.com/dvd/',
		data: JSON.stringify({
			title: $('#create-title').val(),
			releaseYear: $('#create-releaseYear').val(),
			director: $('#create-director').val(),
			rating: $('#create-rating-select').val(),
			notes: $('#create-notes').val()
		}),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		'dataType': 'json',
		success: function(data, status) {
			// clear errorMessages
			$('#errorMessages').empty();
		   // Clear the form and reload the table
			$('#create-title').val('');
			$('#create-releaseYear').val('');
			$('#create-director').val('');
			$('#create-rating-select').val('G');
			$('#create-notes').val('');
			alert("DVD created !!!"+data.id);
			showDvdDetailDisplay(data.id);
		},
		error: function() {
			$('#errorMessages')
			   .append($('<li>')
			   .attr({class: 'list-group-item list-group-item-danger'})
			   .text('Error calling web service.  Please try again later.'));
		}
	});
}

function deleteDVD(dvdId)
{	
	var confirmDelete = confirm("Are you sure you want to delete ?? "); 
	if(confirmDelete)
	{
		$.ajax ({
			type: 'DELETE',
			url: "https://tsg-dvds.herokuapp.com/dvd/" + dvdId,
			success: function (status) {
				loadDVDResults('https://tsg-dvds.herokuapp.com/dvds');
			} 
		}); 
	}
}

function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 
	&& (charCode < 48 || charCode > 57))
	return false;
	return true;
}  

function loadDVDResults(URL)
{
	clearSearchTableTable();
	
	$('#pageTitle-span').text('Search Result');

    // grab the the tbody element that will hold the rows of contact information
    var contentRows = $('#contentRows');

    $.ajax ({
        type: 'GET',
        url: URL,
        success: function (data, status) {
            $.each(data, function (index, dvd) {
				
                var title = dvd.title;
                var releaseYear = dvd.releaseYear;
                var director = dvd.director;
				var rating = dvd.rating;
				var notes = dvd.notes;

				var id = dvd.id;
                var row = '<tr>';
                    row += '<td><a onclick="showDvdDetailDisplay('+id +')">' + title + '</a></td>';
                    row += '<td>' + releaseYear + '</td>';
					row += '<td>' + director + '</td>';
					row += '<td>' + rating + '</td>';
					
                    row += '<td><a onclick="showEditForm(' + id + ')">Edit</a>';
                    row += ' | <a onclick="deleteDVD(' + id + ')">Delete</a></td>';
                    row += '</tr>';
                contentRows.append(row);
            });
        },
        error: function(xhr,status,error) {
            $('#errorMessages')
                .append($('<li>')
                .attr({class: 'list-group-item list-group-item-danger'})
                .text('Error calling web service.  Please try again later.'));
				
				var err =eval(xhr.responseText);
				alert(err.Message)
        }
    });
}

function hideDisplayForm()
{
	$('#searchResultDiv').show();
	$('#navSelection').show();
	loadDVDResults('https://tsg-dvds.herokuapp.com/dvds');
	$('#search-category-select').val('default');
	$('#search-term-text').val('');
	$('#createFormDiv').hide();
    $('#editFormDiv').hide();
	$('#displayFormDiv').hide();
	$('#pageTitle-span').text('Search Result');
}
function showDvdDetailDisplay(dvdId)
{
	 // clear errorMessages
    $('#errorMessages').empty();
    // get the contact details from the server and then fill and show the
    // form on success
    $.ajax({
        type: 'GET',
        url: 'https://tsg-dvds.herokuapp.com/dvd/' + dvdId,
        success: function(data, status) {
              $('#display-title').text(data.title);
              $('#display-releaseYear').text(data.releaseYear);
              $('#display-director').text(data.director);
              $('#display-rating').text(data.rating);
              $('#display-notes').text(data.notes);
              $('#display-dvd-id').text(data.id);	
			  $('#pageTitle-span').text(data.title);
          },
          error: function() {
            $('#errorMessages')
               .append($('<li>')
               .attr({class: 'list-group-item list-group-item-danger'})
               .text('Error calling web service.  Please try again later.'));
          }
    });
    $('#searchResultDiv').hide();
	$('#navSelection').hide();
	$('#search-category-select').val('default');
	$('#search-term-text').val('');
	$('#createFormDiv').hide();
    $('#editFormDiv').hide();
	$('#displayFormDiv').show();
}

function showEditForm(dvdId) {
    // clear errorMessages
    $('#errorMessages').empty();
    // get the contact details from the server and then fill and show the
    // form on success
    $.ajax({
        type: 'GET',
        url: 'https://tsg-dvds.herokuapp.com/dvd/' + dvdId,
        success: function(data, status) {
              $('#edit-title').val(data.title);
              $('#edit-releaseYear').val(data.releaseYear);
              $('#edit-director').val(data.director);
              $('#edit-rating-select').val(data.rating);
              $('#edit-notes').val(data.notes);
              $('#edit-dvd-id').val(data.id);	
			  $('#pageTitle-span').text('Edit dvd : [' + data.title + ']');
          },
          error: function() {
            $('#errorMessages')
               .append($('<li>')
               .attr({class: 'list-group-item list-group-item-danger'})
               .text('Error calling web service.  Please try again later.'));
          }
    });
    $('#searchResultDiv').hide();
	$('#navSelection').hide();
	$('#search-category-select').val('default');
	$('#search-term-text').val('');
	$('#createFormDiv').hide();
    $('#editFormDiv').show();
}

function hideEditForm() {
    // clear errorMessages
    $('#errorMessages').empty();
    // clear the form and then hide it
    $('#edit-title').val('');
    $('#edit-releaseYear').val('');
    $('#edit-director').val('');
    $('#edit-rating-select').val('G');
    $('#edit-notes').val('');
	$('#pageTitle-span').text('');
	
    $('#editFormDiv').hide();
	$('#createFormDiv').hide();
    $('#searchResultDiv').show();
	$('#navSelection').show();
	loadDVDResults('https://tsg-dvds.herokuapp.com/dvds');
}

function hideCreateForm()
{
	// clear errorMessages
    $('#errorMessages').empty();
	
	$('#create-title').val('');
    $('#create-releaseYear').val('');
    $('#create-director').val('');
    $('#create-rating-select').val('G');
    $('#create-notes').val('');
	$('#pageTitle-span').text('');
	
	$('#editFormDiv').hide();
	$('#createFormDiv').hide();
    $('#searchResultDiv').show();
	$('#navSelection').show();
	
	loadDVDResults('https://tsg-dvds.herokuapp.com/dvds');
}

function clearSearchTableTable(){
	 $('#contentRows').empty();
}

function checkAndDisplayValidationErrors(input) {
    // clear displayed error message if there are any
    $('#errorMessages').empty();
    // check for HTML5 validation errors and process/display appropriately
    // a place to hold error messages
    var errorMessages = [];

    // loop through each input and check for validation errors
    input.each(function() {
        // Use the HTML5 validation API to find the validation errors
        if(!this.validity.valid)
        {
            var errorField = $('label[for='+this.id+']').text();
            errorMessages.push(errorField + ' ' + this.validationMessage);
        }
    });

    // put any error messages in the errorMessages div
    if (errorMessages.length > 0){
        $.each(errorMessages,function(index,message){
            $('#errorMessages').append($('<li>').attr({class: 'list-group-item list-group-item-danger'}).text(message));
        });
        // return true, indicating that there were errors
        return true;
    } else {
        // return false, indicating that there were no errors
        return false;
    }
}

$(document).ready(function () {
  
	//Only the content in the Main section should display when the page is loaded.
	MainDisplay();
	
	//Navigation Button Behavior
	$('#mainButton').click(MainDisplay);
	$('#akronButton').click(AkronDisplay);
	$('#minneapolisButton').click(minneapolisDisplay);
	$('#louisvilleButton').click(louisvilleDisplay);
	
	$('.table tr:not(:first-child)').hover(function() 
		{
			$(this).css('backgroundColor','WhiteSmoke');
		}, 
		function() {
			$(this).css('backgroundColor','');
		});
	
		
	 $('#akronWeatherButton').on('click', function() 
		{
			$('#akronWeather').toggle('slow'); 
		});
	
	 $('#minneapolisWeatherButton').on('click', function() 
		{
			$('#minneapolisWeather').toggle('slow'); 
		});
		
	 $('#louisvilleWeatherButton').on('click', function() 
		{
			$('#louisvilleWeather').toggle('slow'); 
		});
});

function MainDisplay()
{
	$('#mainInfoDiv').show();
	$('#akronInfoDiv').hide();
	$('#minneapolisInfoDiv').hide();
	$('#louisvilleInfoDiv').hide();
}

function AkronDisplay()
{
	$('#mainInfoDiv').hide();
	$('#akronInfoDiv').show();
	$('#minneapolisInfoDiv').hide();
	$('#louisvilleInfoDiv').hide();
}

function minneapolisDisplay()
{
	$('#mainInfoDiv').hide();
	$('#akronInfoDiv').hide();
	$('#minneapolisInfoDiv').show();
	$('#louisvilleInfoDiv').hide();
}

function louisvilleDisplay()
{
	$('#mainInfoDiv').hide();
	$('#akronInfoDiv').hide();
	$('#minneapolisInfoDiv').hide();
	$('#louisvilleInfoDiv').show();
}
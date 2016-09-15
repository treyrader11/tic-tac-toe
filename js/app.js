'use strict'


$(document).ready(function() {
	$('#main-wrapper').find('.row').children().click(function() {
		$(this).toggleClass('red');
		//$( ".draggable" ).draggable();
	})
})


$( function() {
    $( ".draggable" ).draggable();
  } );

/*all you need to do is include the jqueryUI script tag
//and add draggable() function to the selector*/
'use strict'


$(document).ready(function() {

	$('#main-wrapper').find('.row').children().click(function() {
		$(this).toggleClass('red');
		//$( ".draggable" ).draggable();
	})

	$('#main-wrapper').mouseenter(function() {
		$('#header-1').fadeOut(1000, function() {
			$(this).remove();
			$('#header-2').fadeIn(1000);
		});
		
	})
})


$( function() {
    $( ".draggable" ).draggable();
  } );

/*all you need to do is include the jqueryUI script tag
//and add draggable() function to the selector*/


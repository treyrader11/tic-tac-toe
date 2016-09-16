'use strict'

$(document).ready(function() {
	$('#begin-game').fadeIn(1000);
	$('#bg-img').fadeIn(1000);

	$('#yes').on("click", function() {
		$('#begin-game').toggle('explode', function() {
			$(this).remove();
			$('#game').fadeIn(500, function() {
				beginGame();
			});
		}) ;
		$('#bg-img').toggle('explode', function() {
			$(this).remove();
		});
	})
	$('#no').on("click", function() {
		alert('WHWYHYWHWYWHWYHWYHWY!!?')
	})
})


function beginGame() {
	var turn = 0;
	console.log('new game', turn)
	//Spot vars
	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');
	
	var player1 = prompt('Enter the name for player 1');
	if(player1 == '' || player1 == null) {
		alert("Please enter a name.");
		location.reload(true);
	}
	var player2 = prompt('Enter the name for player 2');
	if(player2 == '' || player2 == null) {
		alert("Please enter a name.");
		location.reload(true);
	}
	var x = "<li class='pull-left' id='x'><h4>" +player1+ ": X</h4></li>";
	var o = "<li class='pull-right' id='o'><h4>" +player2+ ": O</h4></li>";
	$('#players').find('li').remove();
	console.log("player1 is " +player1);
	console.log("player2 is " +player2);
	$('#players').append(x);
	$('#players').append(o);
	//turn++;
	$('#players').find('#x').addClass('active-x');
	console.log("round " +turn);	

	


	$('.square').on('click', function() {
		turn++;
		//$('#players').find('li').remove()
		console.log("round " +turn);
		if(turn % 2 == 0) {
			$(this).addClass('o').text("o");
			$('#players').find('#o').removeClass('active-o');
			$('#players').find('#x').addClass('active-x');

			//$('#players').find('li').remove();
			//$('#players').append(o);
		}
		 else {
		 	$(this).addClass('x').text("x");
		 	$('#players').find('#x').removeClass('active-x');
		 	$('#players').find('#o').addClass('active-o');
		 	//$('#players').find('li').remove();
		 	//$('#players').append(x);
		 }
	})




	$('#board td').on('click', function() {
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
		spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
		spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
		spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') || 
		spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') || 
		spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
		spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
		spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')) {
			$('#players').find('li').remove()
			$('#game').fadeOut(1000, function() {
				$('#results-modal').fadeIn(1000)
			})
			turn = 0;
			showPlayer1(player1, player2, turn);

		}

		else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
		spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
		spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
		spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') || 
		spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') || 
		spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
		spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
		spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')) {
			$('#players').find('li').remove();
			$('#game').fadeOut(1000, function() {
				$('#results-modal').fadeIn(1000)
			})
			turn = 0;
			showPlayer2(player2, player1, turn);
		}

		else if(turn == 9) {
			$('#game').fadeOut(1000, function() {
				$('#results-modal').fadeIn(1000)
			})
			turn = 0;
			showTie(turn);
		}
	});
};


function showPlayer1(player1, player2, turn) {
	//turn = 0;
	$('.square').empty();
	$('#board td').removeClass('o');
	$('#board td').removeClass('x');
	var winner = "<li><h1>Congratulations, " +player2+ ". You wupped " +player1+ " in Tic Tac Toe!</h1></li>";
	$('#results-list').append(winner);
	$('#game').fadeOut(1000, function() {
		$('#results-modal').fadeIn(1000)
	})
}

function showPlayer2(player2, player1, turn) {
	//turn = 0;
	$('#board td').empty();
	$('#board td').removeClass('o');
	$('#board td').removeClass('x');
	var winner = "<li><h1>Congratulations, " +player1+ ". You wupped " +player2+ " in Tic Tac Toe!</h1></li>";
	$('#results-list').append(winner);
	$('#game').fadeOut(1000, function() {
		$('#results-modal').fadeIn(1000)
	})


}

function showTie(turn) {
	$('#board td').empty();
	$('#board td').removeClass('o');
	$('#board td').removeClass('x');
	var tie = "<li><h1>Whoa, it's a tie! I guess this means that you two are true tic tac toe rivals!</h1></li>";
	$('#results-list').append(tie);
	$('#game').fadeOut(1000, function() {
		$('#results-modal').fadeIn(1000)
	})
}

$('#replay').on('click', function() {
	location.reload(true);
	$('#results-modal').fadeOut(500, function() {
		$('#game').fadeIn(1000, function() {
			beginGame();
		});
	})
})






	
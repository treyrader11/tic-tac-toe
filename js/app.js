'use strict'

var SPOT_1 = $('#spot1');
var SPOT_2 = $('#spot2');
var SPOT_3 = $('#spot3');
var SPOT_4 = $('#spot4');
var SPOT_5 = $('#spot5');
var SPOT_6 = $('#spot6');
var SPOT_7 = $('#spot7');
var SPOT_8 = $('#spot8');
var SPOT_9 = $('#spot9');
var turn = 0;

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
		alert('Ok')
	})
})

//Need to reset prompt()s with each newGame
function beginGame() {
	console.log("New game!")
	
	var player1 = prompt('Enter the name for player 1');
	var player2 = prompt('Enter the name for player 2');
	while(player1 == '' || player1 == null) {
		alert("Please enter a name.");
		player1 = prompt('Enter the name for player 1');
		//location.reload(true);
	}
	while(player2 == '' || player2 == null) {
		alert("Please enter a name.");
		player2 = prompt('Enter the name for player 2');
		//location.reload(true);
	}
	var x = "<li class='pull-left' id='x'><h4>" +player1+ ": X</h4></li>";
	var o = "<li class='pull-right' id='o'><h4>" +player2+ ": O</h4></li>";
	//$('#players').find('li').remove();
	console.log("player1 is " +player1);
	console.log("player2 is " +player2);
	$('#players').append(x);
	$('#players').append(o);
	$('#players').find('#x').addClass('active-x');
	console.log("round", turn);	

	


	$('.square').on('click', function() {
		turn++;
		console.log("round " + turn);

		if(turn % 2 == 0) {
			$(this).addClass('o').text("o");
			$('#players').find('#o').removeClass('active-o');
			$('#players').find('#x').addClass('active-x');
		}
		 else {
		 	$(this).addClass('x').text("x");
		 	$('#players').find('#x').removeClass('active-x');
		 	$('#players').find('#o').addClass('active-o');
		 }
		 return turn;
	})




	$('#board td').on('click', function() {
		if(SPOT_1.hasClass('o') && SPOT_2.hasClass('o') && SPOT_3.hasClass('o') ||
		SPOT_4.hasClass('o') && SPOT_5.hasClass('o') && SPOT_6.hasClass('o') ||
		SPOT_7.hasClass('o') && SPOT_8.hasClass('o') && SPOT_9.hasClass('o') ||
		SPOT_1.hasClass('o') && SPOT_4.hasClass('o') && SPOT_7.hasClass('o') || 
		SPOT_2.hasClass('o') && SPOT_5.hasClass('o') && SPOT_8.hasClass('o') || 
		SPOT_3.hasClass('o') && SPOT_6.hasClass('o') && SPOT_9.hasClass('o') ||
		SPOT_1.hasClass('o') && SPOT_5.hasClass('o') && SPOT_9.hasClass('o') ||
		SPOT_3.hasClass('o') && SPOT_5.hasClass('o') && SPOT_7.hasClass('o')) {
			$('#players').find('li').remove()
			$('#game').hide(function() {
				$('#results-modal').fadeIn(1000)
			})
			showPlayer1(player1, player2, turn);

		}

		else if(SPOT_1.hasClass('x') && SPOT_2.hasClass('x') && SPOT_3.hasClass('x') ||
		SPOT_4.hasClass('x') && SPOT_5.hasClass('x') && SPOT_6.hasClass('x') ||
		SPOT_7.hasClass('x') && SPOT_8.hasClass('x') && SPOT_9.hasClass('x') ||
		SPOT_1.hasClass('x') && SPOT_4.hasClass('x') && SPOT_7.hasClass('x') || 
		SPOT_2.hasClass('x') && SPOT_5.hasClass('x') && SPOT_8.hasClass('x') || 
		SPOT_3.hasClass('x') && SPOT_6.hasClass('x') && SPOT_9.hasClass('x') ||
		SPOT_1.hasClass('x') && SPOT_5.hasClass('x') && SPOT_9.hasClass('x') ||
		SPOT_3.hasClass('x') && SPOT_5.hasClass('x') && SPOT_7.hasClass('x')) {
			$('#players').find('li').remove();
			$('#game').hide(function() {
				$('#results-modal').fadeIn(1000)
			})
			showPlayer2(player2, player1, turn);
		}




		else if(turn === 9) {
			$('#game').hide(function() {
				$('#results-modal').fadeIn(1000)
			})
			showTie();
		}
	});
};


function showPlayer1(player1, player2) {
	
	var winner = "<li><h1>Congratulations, " +player2+ ". You wupped " +player1+ " in Tic Tac Toe!</h1></li>";
	$('#results-list').append(winner);
	$('#game').hide(function() {
		$('#results-modal').fadeIn(1000)
	})
	restartGame();
}

function showPlayer2(player2, player1) {
	
	var winner = "<li><h1>Congratulations, " +player1+ ". You wupped " +player2+ " in Tic Tac Toe!</h1></li>";
	$('#results-list').append(winner);
	$('#game').hide(function() {
		$('#results-modal').fadeIn(1000)
	})
	restartGame();


}

function showTie() {
	var tie = "<li><h1>Whoa, it's a tie! I guess this means that you two are true tic tac toe rivals!</h1></li>";
	$('#results-list').append(tie);
	$('#game').hide(function() {
		$('#results-modal').fadeIn(1000)
	})
	restartGame();
}

function restartGame() {
	console.log("inside restartGame, turn is", turn);
	$('.square').empty();

	$('#board td').removeClass('o');
	$('#board td').removeClass('x');
	$('#players').find('li').remove();
}

$('#replay').on('click', function() {
	turn = 0;
	console.log("you clicked the replay button and turn is ", turn)
	$('#results-modal').fadeOut(500, function() {
		$('#game').fadeIn(1000, function() {
			$('#results-list').find('li').remove();
		});
	})
	return turn;
	beginGame();
})






	
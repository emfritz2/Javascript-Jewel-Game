
// set a random number that needs to be displayed
// and changed every time the page is refreshed

$( document ).ready(function(){
  var Random=Math.floor(Math.random() * 101+19)

  $('#numberToGet').html(Random);

// assign variables to the wins, losses and score so far

var wins = 0;

var losses = 0;

var score = 0;

// display the wins/losses/userscore in html

	$('#wins').html(wins);

	$('#losses').html(losses);

	$('#totalScore').html(score);


	// set a random number to each jewel

	var jewel1 = Math.floor((Math.random() * 11) + 1);

	var jewel2 = Math.floor((Math.random() * 11) + 1);

	var jewel3 = Math.floor((Math.random() * 11) + 1);

	var jewel4 = Math.floor((Math.random() * 11) + 1);


	function restart() {

	Random=Math.floor(Math.random() * 101+19)
	
	$('#numberToGet').html(Random);

	jewel1 = Math.floor((Math.random() * 11) + 1);
	jewel2 = Math.floor((Math.random() * 11) + 1);
	jewel3 = Math.floor((Math.random() * 11) + 1);
	jewel4 = Math.floor((Math.random() * 11) + 1);

		score = 0;

		$('#totalScore').html(score);
	}



// when user clicks the gem, the score goes up

// jewel 1

$('#circle').on('click', function(){

	score = score + jewel1;

	$('#totalScore').html(score);

	if (score == Random) {

		wins++;

		$('#wins').html(wins);

		restart()
	}
	
	else if (score > Random) {

		losses++;

		$('#losses').html(losses);

		restart()
	}


})

// jewel 2

$('#hex').on('click', function(){

	score = score + jewel2;

	$('#totalScore').html(score);

	if (score == Random) {

		wins++;

		$('#wins').html(wins);

		restart()
	}
	
	else if (score > Random) {

		losses++;

		$('#losses').html(losses);

		restart()
	}


})

// jewel 3

$('#diamond').on('click', function(){

	score = score + jewel3;

	$('#totalScore').html(score);

		if (score == Random) {

		wins++;

		$('#wins').html(wins);

		restart()
	}
	
	else if (score > Random) {

		losses++;

		$('#losses').html(losses);

		restart()
	}

})

// jewel 4

$('#square').on('click', function(){

	score = score + jewel4;

	$('#totalScore').html(score);

	if (score == Random) {

		wins++;

		$('#wins').html(wins);

		restart()
	}
	
	else if (score > Random) {

		losses++;

		$('#losses').html(losses);

		restart()
	}

})



// 50% opacity when the mouse hovers over images

  $("img").hover(function() {
        $(this).animate({opacity: 0.6});
    }, function() {
        $(this).animate({opacity: 1.0});
    });



});

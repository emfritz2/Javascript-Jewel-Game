
// set a random number that needs to be displayed
// and changed every time the page is refreshed

$( document ).ready(function(){
  var Random=Math.floor(Math.random() * 101+19)

  $('#numberToGet').html(Random);

// assign variables to the wins, losses and score so far

var wins = 0;

var losses = 0;

var totalScore = 0;

// display the wins/losses/userscore in html

	$('#wins').html(wins);

	$('#losses').html(losses);

	$('#totalScore').html(totalScore);


	// set a random number to each jewel

	var jewel1 = Math.floor((Math.random() * 11) + 1);

	var jewel2 = Math.floor((Math.random() * 11) + 1);

	var jewel3 = Math.floor((Math.random() * 11) + 1);

	var jewel4 = Math.floor((Math.random() * 11) + 1);


// when user clicks the gem, the score goes up

// jewel 1

$('#circle').on('click', function(){

	totalScore = totalScore + jewel1;

	$('#totalScore').html(totalScore);

})

// jewel 2

$('#hex').on('click', function(){

	totalScore = totalScore + jewel2;

	$('#totalScore').html(totalScore);

})

// jewel 3

$('#diamond').on('click', function(){

	totalScore = totalScore + jewel3;

	$('#totalScore').html(totalScore);
})

// jewel 4

$('#square').on('click', function(){

	totalScore = totalScore + jewel4;

	$('#totalScore').html(totalScore);

})

	if (totalScore == Random) {
		wins++;
	}
	else if (totalScore > Random) {
		losses++;
	}



// 50% opacity when the mouse hovers over images

  $("img").hover(function() {
        $(this).animate({opacity: 0.5});
    }, function() {
        $(this).animate({opacity: 1.0});
    });



});

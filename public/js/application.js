$(document).ready(function() {
  $('.super_awesome').on('click', function() {
  	var superAwesome = $('.super_awesome').text();
    $('h1').text(superAwesome);
  });

  $('.not_awesome').on('click', function() {
  	var notAwesome = $('.not_awesome').text();
  	$('h1').text(notAwesome);
  });

  $('.skill_teller').on('click', function() {
  	var skill = window.location.href.split('/').pop();
    $('h1').text(skill);
  });
  
  $('.meal_teller').on('click', function() {
    var mealChooser = meals[Math.floor(Math.random()*meals.length)];
    $('#meal_holder').text(mealChooser);
  });


  // What other events do you need to bind to make the other pages work?
});

// continuous learning & experimentation with new technologies
// constant mental challenges
// creative problem solving

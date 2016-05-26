var dinoFetch = require('./../js/dino-fetcher.js').dinoFetch;
var dinoGenerator = require('./../js/dino-name-generator.js').dinoGenerator;
var RNG2 = require('./../js/dino-name-generator.js').RNG2;
var points = 0;


$(document).ready(function() {
  var random = RNG2(2);
  if(random === 0){
    dinoFetch('#wiki');
    $('#answer').text("Real!");
  } else {
    dinoGenerator('#dinoGen');
    $('#answer').text("Fake!");
  }
  $('#real').submit(function(event) {
    event.preventDefault();
    $("#output").show();
    if($('#answer').text() === "Real!"){
      points += 1;
      $("#points").text(points);
    } else {
      points -= 1;
      $("#points").text(points);
    }
    $('#guesses').hide();
  });

  $('#fake').submit(function(event) {
    event.preventDefault();
    $("#output").show();
    if($('#answer').text() === "Fake!"){
      points += 1;
      $("#points").text(points);
    } else {
      points -= 1;
      $("#points").text(points);
    }
    $('#guesses').hide();
  });

  $("#next").submit(function(event){
    event.preventDefault();
    $("#output").hide();
    $("#wiki").empty();
    random = RNG2(2);
    if(random === 0){
      dinoFetch('#wiki');
      $('#answer').text("Real!");
    } else {
      dinoGenerator('#dinoGen');
      $('#answer').text("Fake!");
    }
    $('#guesses').show();
  });
});

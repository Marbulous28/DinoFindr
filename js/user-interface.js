var dinoFetch = require('./../js/dino-fetcher.js').dinoFetch;
var dinoBattlr = require('./../js/dino-game.js').dinoBattlr;
var dinoGen = require('./../js/dino-name-generator.js').RNG;

$(document).ready(function() {
  $('#getDino').submit(function(event) {
    event.preventDefault();
    dinoFetch('#output');
    dinoBattlr();
  });
});

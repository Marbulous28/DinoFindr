var dinoFetch = require('./../js/dino-fetcher.js').dinoFetch;

$(document).ready(function() {
  $('#getDino').submit(function(event) {
    event.preventDefault();
    dinoFetch('#output');
  });
});

var dinoFetcher = "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1";
var dinoName;

$(document).ready(function() {
  $('#getDino').submit(function(event) {
    event.preventDefault();
    $.get(dinoFetcher, function(response) {
      dinoName = response[0][0];
      console.log(dinoName);
      $('#output').text(dinoName);
    });

  });
});

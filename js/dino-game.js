exports.dinoBattlr = function() {
  var dinoFetcher = "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=2";
  var dinoName1;
  var dinoName2;
  $.get(dinoFetcher, function(response) {
     dinoName1 = response[0][0];
     dinoName2 = response[0][1];
  });
};

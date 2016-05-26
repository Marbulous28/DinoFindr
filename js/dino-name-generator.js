exports.dinoGenerator = function(output) {
  var prefix = prefixGenerator();
  var suffix = suffixGenerator();

  var dinoName = prefix + suffix;
  var outputChoice = RNG(2);
  $(output).text(dinoName);

};

function suffixGenerator() {
  var suffixRare = ["teryx", "titan", "tyrannus","nator"];
  var suffixUncommon = ["odon", "ia", "ceratops"];

  var suffixType = RNG(32);
  if (suffixType < 28) {
    suffixChoice = "saurus";
  } else if (suffixType == 31) {
    suffixNumber = RNG(3);
    suffixChoice = suffixRare[suffixNumber];
  } else {
    suffixNumber = RNG(2);
    suffixChoice = suffixUncommon[suffixNumber];
  }
  return suffixChoice;
}

function prefixGenerator() {
  var premadePrefix = ["Ambuli", "Cata", "Celera", "Verata", "Ante", "Dynastha", "Tortora", "Tetra", "Cepta", "Phoba", "Archa", "Kyra", "Acri", "Anime", "Aphrodi",  "Biblio", "Butyr", "Camisia", "Corpi", "Curo"];
  var choice = RNG(11);
  var prefixChoice = premadePrefix[choice];
  // var vowels = ["a", "e", "i", "o", "u"];
  // var consonants = ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  return prefixChoice;
}



function RNG(max) {
  return Math.floor(Math.random() * max);
}

exports.RNG2 = function(max){
  return Math.floor(Math.random() * max);
}

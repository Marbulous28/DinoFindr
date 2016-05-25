exports.dinoGenerator = function() {
  var suffix = ["saurus", "ceratops", "teryx", "tops", "urus", "odon", "titan", "tyrannis", "meus", "ia", "dactyl"];
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var newSuffix = RNG(11);
  var suffixChoice = suffix[newSuffix];
};

exports.RNG = function(max) {
  return Math.floor(Math.random() * max);
}

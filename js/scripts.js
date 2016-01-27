function randomWordGenerator (wordArray) {
  var randomNumber = Math.floor(Math.random() * wordArray.length);
  var tempWord = wordArray[randomNumber];
  var currentArray = [];
  for (var i = 0; i < tempWord.length; i ++) {
    currentArray.push(tempWord.charAt(i));
  }
  return currentArray;
}

function getColumnWidths (currentArray) {
  return 12 / currentArray.length;
}

$(document).ready(function() {
  var wordBank = ["mango", "guava", "hibiscus", "megabat", "nectar", "passionfruit", "watermelon", "bananas", "seeds", "peel", "pulp"]
  $("body").data("wordBank", wordBank);

  $("button#playNewGame").submit(function(event) {
    var wordBank = $("body").data("wordBank");
    var randomWord = randomWordGenerator(wordBank);
    var colWidths = getColumnWidths(randomWord);
    for (var i = 0; i < randomWord.length; i++) {
      $("#spacesRow").append('<div class="col-md-' + colWidths + '"></div>')
    }
    event.preventDefault();
  )};
)};

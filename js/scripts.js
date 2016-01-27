function randomWordGenerator (wordArray) {
  var randomNumber = Math.floor(Math.random() * wordArray.length);
  var tempWord = wordArray[randomNumber];
  var currentArray = [];
  for (var i = 0; i < tempWord.length; i++) {
    currentArray.push(tempWord.charAt(i));
  }
  return currentArray;
}

function getColumnWidths (currentArray) {
  return 12 / currentArray.length;
}

$(document).ready(function() {
  var wordBank = ["mango", "guava", "hibiscus", "megabat", "nectar", "fruit", "watermelon", "bananas", "seeds", "peel", "pulp"];
  $("body").data("wordBank", wordBank);
  $("#playNewGame").click(function() {
    // debugger;
    var wordBank = $("body").data("wordBank");
    var randomWord = randomWordGenerator(wordBank);
    var colWidths = getColumnWidths(randomWord);
    for (var i = 0; i < randomWord.length; i++) {
      $("button#spacesRow").append('<div class="col-md-' + colWidths + ' letterSpaces"></div>');
    }
  });
});

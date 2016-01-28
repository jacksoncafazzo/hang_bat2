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
  return Math.floor(12 / currentArray.length);
}

$(document).ready(function() {
  var wordBank = ["mango", "guava", "hibiscus", "megabat", "nectars", "fruit", "watermelon", "bananas", "seeds", "peels", "pulpy"];
  $("body").data("wordBank", wordBank);
  $("#playNewGame").click(function() {
    // debugger;
    $("#spacesRow").empty();
    var wordBank = $("body").data("wordBank");
    var randomWord = randomWordGenerator(wordBank);
    for (var i = 0; i < randomWord.length; i++) {
      $("#spacesRow").append('<div class="col-sm-' + getColumnWidths(randomWord) + ' letterSpaces" id="letterSpaces' + i + '"><div class="userGuess" id="userGuess' + i + '"></div></div>');
    }
    for (var i = 0; i < randomWord.length; i++) {
      $("#letterSpaces" + i).text(randomWord[i]);

    }
    for (var i = 0; i < randomWord.length; i++) {
      $("#userGuess" + i).hide();
    }
  });
});

<div class="col-sm-3 letterSpaces" id="letterSpaces0">
  <div class="userGuess" id="userGuess0">
  </div>
</div>
<div class="col-sm-3 letterSpaces" id="letterSpacesi">
  <div class="userGuess" id="userGuessi">
  </div>
</div><div class="col-sm-3 letterSpaces" id="letterSpacesi">
  <div class="userGuess" id="userGuessi">
  </div>
</div>

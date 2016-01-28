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

function letterMatch (letter) {
  debugger;
  var randomWord = ['m','a','n','g','o'];
  var tempMatchObj = new userGuessValues(letter, randomWord, [""]);
  // var randomWord = $("body").data("randomWord");
  for (var i = 0; i < randomWord.length; i++) {
    if (letter === randomWord[i]) {
      tempMatchObj.matchTrue[i] = true;
      tempMatchObj.remainingLetters.splice(letter, letter);
      console.log(tempMatchObj.remainingLetters);
    } else
      tempMatchObj.matchTrue[i] = false;
  }
  return tempMatchObj;

  // var alphabetArray = alphabetArray.slice.call(letter);

// console.log(alphabetArray);
}

function userGuessValues (letter, randomWord, matchTrue, remainingLetters) {
  this.letter = letter;
  this.randomWord = randomWord;
  this.matchTrue = matchTrue;
  this.remainingLetters = remainingLetters;
}

$(document).ready(function() {
  var wordBank = ["mango", "guava", "hibiscus", "megabat", "nectars", "fruit", "watermelon", "bananas", "seeds", "peels", "pulpy"];
  $("body").data("wordBank", wordBank);
  $("#playNewGame").click(function() {
    var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // debugger;
    $("#spacesRow").empty();
    var wordBank = $("body").data("wordBank");
    var randomWord = randomWordGenerator(wordBank);
    for (var i = 0; i < randomWord.length; i++) {
      $("#spacesRow").append('<div class="col-centered col-sm-' + getColumnWidths(randomWord) + ' letterSpaces" id="letterSpaces' + i + '"><div class="letterDisplay" id="letterDisplay' + i + '"></div></div>');
    }
    for (var i = 0; i < randomWord.length; i++) {
      $("#letterDisplay" + i).text(randomWord[i]);
      $("#letterDisplay" + i).hide();
    }

    $("body").data("randomWord", randomWord);
  });

  $(".alphabetBtn").click(function (){
    var letterChoice = ($(this).text());
    console.log(letterChoice);


  });


  //
  // new click jquerey
  // $("body").data("alphabetArray")

});

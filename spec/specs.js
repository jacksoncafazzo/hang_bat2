describe("randomWordGenerator", function(){
  it("will return random word from array", function(){
    var wordArray = ["mango", "guava", "hibiscus"];
    expect(randomWordGenerator(wordArray)).to.equal("guava");
  });

  it("will return the wrong word randomly", function () {
    var wordArray = ["mango", "guava", "hibiscus"];
    expect(randomWordGenerator(wordArray)).to.equal("guava");
  });

  it("will return a word into an array of word letters", function () {
    var wordArray = ["mango", "guava", "hibiscus"];
    expect(randomWordGenerator(wordArray)).to.eql(['m','a','n','g','o']);
  });
});

describe("getColumnWidths", function() {
  // initial spec no longer neccessary:
  // it("will divide word length by 12 to get the width of the columns", function () {
  //   var currentArray = ['m','a','n','g','o'];
  //   expect(getColumnWidths(currentArray)).to.equal(2.4);
  // });

  it("will round the remainer of 12 / currentArray length down to the nearest column value", function () {
    var currentArray = ['m','a','n','g','o'];
    expect(getColumnWidths(currentArray)).to.equal(2)
  });
});

describe("letterMatch", function () {
  it("check the randomWord letters for a match", function () {
    expect(letterMatch('a')).to.equal("tempMatchObject");
  });
});


describe("userGuessValues", function () {
  it("creates an object with the following properties", function () {
    var randomWord = ['m','a','n','g','o'];
    var letter = "a";
    var matchTrue = true;
    var userGuess = new userGuessValues(letter, randomWord, matchTrue);
      expect(userGuess.letter).to.equal("a");
      expect(userGuess.randomWord).to.eql['m','a','n','g','o'];
      expect(userGuess.matchTrue).to.equal(true);
  });
});

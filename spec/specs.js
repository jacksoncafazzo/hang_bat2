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
  it("divide word length by 12 to get the width of the columns", function () {
    var currentArray = ['m','a','n','g','o'];
    expect(getColumnWidths(currentArray)).to.equal(2.4);
  });
});

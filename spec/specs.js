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

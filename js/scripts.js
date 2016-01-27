function randomWordGenerator () {
  var wordArray = ["mango", "guava", "hibiscus"];
  var randomNumber = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomNumber];
}

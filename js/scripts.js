function randomWordGenerator () {
  var wordArray = ["mango", "guava", "hibiscus"];
  var arrayRange = wordArray.length;
  var randomNumber = Math.floor(Math.random() * arrayRange);
  return wordArray[randomNumber];
}

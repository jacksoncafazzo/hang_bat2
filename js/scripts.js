function randomWordGenerator (wordArray) {
  var randomNumber = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomNumber];
}

function letterArray (word) {
  var currentArray = [];
  for (var i = 0; i < word.length; i ++) {
    currentArray.push(word.charAt(i));
  } 
  return currentArray;
}

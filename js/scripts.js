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

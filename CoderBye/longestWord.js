// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"


function LongestWord(sen) {

    // code goes here  
    let splitSen = sen.split(" ")
    let longestWord = ''
  
    for (let i = 0; i < splitSen.length; i++) {
      // remove the special characaters
      let newStr=splitSen[i].replace(/[^\w\s]/gi, '')
    if (longestWord.length === newStr.length) {
        longestWord = longestWord
      }
      if(longestWord.length<newStr.length){
        longestWord=newStr
      }
    }
    return longestWord;
  
  }
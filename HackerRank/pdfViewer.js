// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:

function designerPdfViewer(h, word) {
  // Write your code here
  let wordsHeights = [];
  word = word.toLowerCase();
  let alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
  );
  for (let i = 0; i < word.length; i++) {
    let findIndex = alphabet.indexOf(word[i]);
    wordsHeights.push(h[findIndex]);
  }
  console.log(wordsHeights);
  let tallestHeight = Math.max(...wordsHeights);
  let len = wordsHeights.length;
  return parseInt(len) * tallestHeight;
}

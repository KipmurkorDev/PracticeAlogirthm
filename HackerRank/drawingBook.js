


// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side:



function pageCount(n, p) {
    // Write your code here
    let frontFlip = Math.floor(p / 2);
    let backFlip = Math.floor((n / 2) - frontFlip);
    let result = Math.min(frontFlip, backFlip);
    return result;

}
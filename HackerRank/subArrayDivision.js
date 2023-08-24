// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.



function birthday(s, d, m) {
    // Write your code here
    let nums = [];
    let count = 0;
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
      let arrayElement = s.slice(i, m + i);
      nums.push(arrayElement);
    }
    if(s.length===1 && s[0]===d){
        count++;
    }else{
      nums.forEach((el) => {
          if (add(el) === d) {
            count++;
          }
        });
    }
    
  
    return count;
}

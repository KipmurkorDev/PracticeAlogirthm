


// Bracket Combinations
// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.

function BracketCombinations(num) {

    // code goes here  
    let total = 2 * num;
    let opened = num;
    let closed = num;
    let current = 0;

    return process(total, opened, closed, current);
}

function process(total, opened, closed, current) {
    if (total === 1) {
        return 1;
    }
    let ans = 0;
    if (current > 0 && closed > 0) {
        ans += process(total - 1, opened, closed - 1, current - 1);
    }
    if (opened > 0) {
        ans += process(total - 1, opened - 1, closed, current + 1);
    }
    return ans;

}

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pair


function sockMerchant(n, ar) {
    // Write your code here
    let arrSet= Array.from(new Set([...ar]))
    let sum=0
    for(let i=0; i<arrSet.length; i++){
        let count=0;
        for(let j=0; j<n; j++){
            if(arrSet[i]===ar[j]){
                count++
            }
        }
        sum +=Math.floor(count/2)
        count=0
    }
return sum
}
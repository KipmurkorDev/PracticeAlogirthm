

// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .



function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let nums=[]
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            let sum=ar[i]+ar[j];
            if(sum%k===0){
                nums.push([ar[i], ar[j]])
            }
        }
    }
return nums.length
}
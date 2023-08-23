// John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

function circularArrayRotation(a, k, queries) {
    // Write your code here
for(let i=1; i<=k; i++){
    a.unshift(a[a.length-1])
    a.splice(a.length-1, 1)
}
let newArr=[];
for(let j=0; j<queries.length; j++){
    newArr.push(a[queries[j]])
}
console.log(newArr)
return newArr
}
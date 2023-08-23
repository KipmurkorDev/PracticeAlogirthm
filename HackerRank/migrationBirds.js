// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
function migratoryBirds(arr) {
    // Write your code here
    let count={};
    for(let i=0; i<arr.length; i++){
        if(!count.hasOwnProperty(arr[i])){
            count[arr[i]]=0
        }
        count[arr[i]] +=1;
        
    }
let values=Object.values(count)
let max_value=Math.max(...values)
let keys=Object.keys(count)
for(let j=0; j<keys.length; j++){
    if(count[keys[j]]===max_value)
    return keys[j]

}

}
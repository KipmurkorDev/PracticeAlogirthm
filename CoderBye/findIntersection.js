





function FindIntersection(strArr) { 

    // code goes here 
    let firstArr=strArr[0].split(',') 
    let secondArr=strArr[1].split(',')
    let results=[]
    for(let i=0; i<firstArr.length; i++){
      let parsenum=parseInt(firstArr[i]);
      for(let j=0; j<secondArr.length; j++ ){
        if(parsenum===parseInt(secondArr[j])){
            results.push(parsenum)
        }
      }
    }
  if(results.length>0){
    return results.join(",")
  }
  return false
  }
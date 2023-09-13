function QuestionsMarks(str) { 

    // code goes here 
    let count=0
    const num = str.split('').filter(item => !isNaN(item));
    for(let j=0; j<num.length; j++){
      let sum=parseInt(num[j])+ parseInt(num[j+1]);
      if(sum===10){
        let spliceStr=str.slice(str.indexOf(num[j]), str.indexOf(num[j+1])+1)
        for(let i=0; i<spliceStr.length; i++){
          if(spliceStr[i]==='?'){
            count++
          }
        }
      }
    }
  
    return count===3? true: false
  
  }
function factorialize(num) {
    let fact=1
    for(let i=1; i<=num; i++){
      if(num!==0){
        fact*=i;
      }
    }
    return fact;
  }
  
  console.log(factorialize(0));
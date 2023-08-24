function getTotalX(a, b) {
    // Write your code here
    a.sort((a,b) => a-b)
    b.sort((a,b) => a-b)
    let sol = []
    let factor = a[a.length-1]
    while(true){
        let flag = true;
        for(let i = 0; i<a.length; i++){
            console.log(factor);
            if(factor % a[i] !== 0){
                flag = false;
                break;
            } 
            //console.log("factor.filter(num => num%factor === 0));
            if(b.filter(num => num%factor === 0).length !== b.length){
                flag = false;
                break;
            }
        }
        if(flag) sol.push(factor);
        factor += a[a.length-1];
        if(factor>b[0]) break;
    }
    // console.log(sol)
    return sol.length;

}
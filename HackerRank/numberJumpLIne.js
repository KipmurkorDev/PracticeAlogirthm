
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if(x2>x1 && v2>v1){
        return 'NO'
    }
    else if((v2-v1)===0 && (x1-x2)===0){
        return 'YES'
    }
    else{
        let results=(x1-x2)%(v1-v2)
        if(results===0){
            return "YES"
        }
        return 'NO'
    }

}

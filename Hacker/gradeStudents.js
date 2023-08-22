
// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's


function gradingStudents(grades) {
    // Write your code here
    let newGrades=[]
    for(let i=0; i<grades.length; i++){

        if(grades[i]<38){
            newGrades.push(grades[i])
        }
        else if(grades[i]%5<3 && grades[i]%5>0){
            newGrades.push(grades[i])
        }
        else { 
            for(let j=0; j<=100; j+=5){
                let defVal=j-grades[i]
            if(defVal<3 && defVal>=0){
                newGrades.push(grades[i]+ defVal)
            }
           
        }
    }
}
return newGrades
}
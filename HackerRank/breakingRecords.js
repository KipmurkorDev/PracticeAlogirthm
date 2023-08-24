
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.




function breakingRecords(scores) {
    // Write your code here
    let countMaxPoints=0;
    let countMinPoints=0;
    let maxvalue=scores[0];
    let minValue=scores[0];
    for(let i=0; i<scores.length; i++){
        if(minValue>scores[i]){
            minValue=scores[i]
            countMinPoints++
        }
        if(maxvalue<scores[i]){
            maxvalue=scores[i]
            countMaxPoints++
        }
    }
    return[countMaxPoints, countMinPoints]

}
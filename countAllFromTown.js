
module.exports = function countAllFromTown(regNum, town) {
    var a = new String(regNum);
    var allRegNum = a.split(",");
    let counter = 0;
    
   
    if(typeof regNum === 'string' || regNum instanceof String){
        for (var i = 0; i < allRegNum.length; i++) {
            var howManyFromTown = allRegNum[i].trim();
    
            if (howManyFromTown.includes(town)) {
                counter++;
            }
        }
        return counter
    }
    else{
        return 'invalid input'
    }
}

/*Write a function called countAllFromTown that takes a string 
parameter with registration numbers separated with commas and
 the registration number start string. It should return number
  registration numbers in the string that is for that town.
*/

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

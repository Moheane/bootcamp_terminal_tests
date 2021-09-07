module.exports = function isWeekday(day){
    var isWeekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var isWeekend = ["Saturday", "Sunday"];
      
      if(isWeekday.includes(day)){
          return true
      }
      else{
      return false
      }
    }
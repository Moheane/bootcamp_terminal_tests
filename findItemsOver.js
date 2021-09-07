module.exports = function findItemsOver(itemList,threshold){
    const itemlst = [];
      
      for (var i in itemList){
      if(itemList[i].qty > threshold){
       itemlst.push(itemList[i]);
      }
         }
      return  itemlst;
    }
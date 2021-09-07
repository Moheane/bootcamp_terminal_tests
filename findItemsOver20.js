module.exports = function findItemsOver20(itemList){

    const itemlist = [];
    
      for (var i = 0; i < itemList.length; i++){
      if(itemList[i].qty > 20){
       itemlist.push(itemList[i]);
         
         }
      
      }
      return  itemlist; 
    }
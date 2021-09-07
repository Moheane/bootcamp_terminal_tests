let assert = require('assert')
let findItemsOver = require('../findItemsOver')



var itemList = [
    {name : 'bananas', qty : 42},
    {name : 'apples', qty : 19},
    {name : 'orange', qty : 5},
    {name : 'pears', qty : 63},
    
];

var results = [
    {name : 'bananas', qty : 42},
    {name : 'pears', qty : 63},
    
];

var itemList2 = [
    {name : 'bananas', qty : 42},
    {name : 'apples', qty : 19},
    {name : 'orange', qty : 52},
    {name : 'pears', qty : 63},
];

var results2 = [
    {name : 'bananas', qty : 42},
    {name : 'apples', qty : 19},
    {name : 'orange', qty : 52},
    {name : 'pears', qty : 63},
];

var itemList3 = [
    {name : 'bananas', qty : 42},
    {name : 'apples', qty : 19},
    {name : 'oranges', qty : 5},
    {name : 'pears', qty : 63},
];

var results3 = [
    {name : 'bananas', qty : 42},
    {name : 'pears', qty : 63},
];

describe('findItemsOver test' , function(){

it('returns items over quantity of 20 from item list' , function(){
    assert.deepEqual(results, findItemsOver(itemList, 20));
    });

it('returns items over quantity of 10 from item list' , function(){
 assert.deepEqual(results2, findItemsOver(itemList2, 10));
      
    });

it('returns items over quantity of 30 from item list' , function(){

      assert.deepEqual(results3, findItemsOver(itemList3, 30));
    });

});
let assert = require('assert')
let isFromBellville = require('../isFromBellville')


describe('isFromBellville test', function(){
    it('Should return "true" if given "CY 123" as an argument', function(){
        assert.equal(true, isFromBellville('CY  123'))
    });
    it('Should return "false" if given "CF 123" or any value that doesnt starts with CY as an argument', function(){
        assert.equal(false, isFromBellville('CJ 123'))
    });
    it('Should return "false" if no value is given', function(){
        assert.equal(false, isFromBellville(''))
    });

}

)
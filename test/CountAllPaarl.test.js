let assert = require('assert')
let countAllPaarl = require('../countAllpaarl')


describe('countAllPaarl test', function(){
    it('takes list of registration numbers:"CY 532, CJ 233, CY 432, CJ 321" and returns all the registration numbers in the string for Paarl which is 2.', function(){
        assert.equal(2, countAllPaarl('CY 532, CJ 233, CY 432, CJ 321'))
    });
    it('takes list of registration numbers:"CJ 233, CJ 321, CJ 999" and returns all the registration numbers in the string for Paarl which is 3.', function(){
        assert.equal(3, countAllPaarl('CJ 233, CJ 321, CJ 999'))
    });
    it('takes list of registration numbers:"FW 233, ST 321, WW 999, JQ 765" and returns all the registration numbers in the string for Paarl which is 0.', function(){
        assert.equal(0, countAllPaarl('FW 233, ST 321, WW 999, JQ 765'))
    });
    
})
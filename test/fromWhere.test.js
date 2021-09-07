let assert = require('assert')
let fromWhere = require('../fromWhere')

describe('fromWhere test', function(){
    it('takes list of registration numbers:"CY" and returns "Bellville"', function(){
        assert.equal('Bellville', fromWhere('CY'))
    });
    it('takes list of registration numbers:"CJ" and returns "Paarl"', function(){
        assert.equal('Paarl', fromWhere('CJ'))
    });
    it('takes list of registration numbers:"CA" and returns "Cape Town"', function(){
        assert.equal('Cape Town', fromWhere('CA'))
    });
    it('takes no arguments and returns "Some other place"!', function(){
        assert.equal('Some other place!', fromWhere())
    });
    
})

function fromWhere(regNum) {
    switch (regNum) {
        case "CY":
            return "Bellville";
        case "CJ":
            return "Paarl";
        case "CA":
            return "Cape Town";
        default:
            return "Some other place!";
    }
}
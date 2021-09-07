let assert = require('assert')
let transportFee = require('../transportFee')


describe('transportFeeBill test', function(){
    it('Should return "R20" if given "morning"', function(){
        assert.equal('R20', transportFee('morning'))
    });
    it('Should return "R10" if given "afternoon"', function(){
        assert.equal('R10', transportFee('afternoon'))
    });
    it('Should return "nightshift" if given "free"', function(){
        assert.equal('free', transportFee('nightshift'))
    });
    it('Should return "for the night shift return free" by default"', function(){
        assert.equal('for the night shift return free', transportFee())
    });

}
)
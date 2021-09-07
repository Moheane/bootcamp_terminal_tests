let assert = require('assert')
let totalPhoneBill = require('../totalPhoneBill')

describe('totalPhoneBill test', function(){
    it('returns R7.45 when given call, sms, call, sms, sms as arguments', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
    });
    it('returns R0.00 when given no arguments', function(){
        assert.equal('R0.00', totalPhoneBill(''))
    });
})
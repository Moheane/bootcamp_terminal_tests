let assert = require('assert')
let regCheck = require('../regCheck')


describe('RegCheck Test', function(){
    it('should return "true" if "Ramahadi" ends with "i" when given "Ramahadi, i" as arguments', function(){
        assert.equal(true, regCheck('Ramahadi', 'i'));
    });
    it('should return "false" if "Ramahadi" does not ends with "s" when given "Ramahadi, s"', function(){
        assert.equal(false, regCheck('Ramahadi', 's'));
    });

})
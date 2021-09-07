let assert = require('assert')
let countRegNumber = require('../countRegNumber')


describe('countRegNumber test', function(){
    it('should return total 3 when given "I, am, Ramahadi" as an argument', function(){
        assert.equal(3, countRegNumber('I, am, Ramahadi'))
    });
    it('should return total 7 when given "This, is, a, count, register, number, funtion" as an argument', function(){
        assert.equal(7, countRegNumber('This, is, a, count, register, number, funtion" as an argument'))
    });
    it('should return total 1 when given no argument', function(){
        assert.equal(1,countRegNumber(''))
    })
})
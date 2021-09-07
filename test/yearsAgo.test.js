let assert = require('assert')
let yearsAgo = require('../yearsAgo')


describe('yearsAgo test', function(){
    it('return how many years ago that year is from the current year.', function(){
        assert.equal(10,yearsAgo(2011))
    });
    it('return 2 years when given 2019 as an argument', function(){
        assert.equal(2,yearsAgo(2019))
    });
    it('return 0 years when given current year as an argument', function(){
        assert.equal(0,yearsAgo(2021))
    });
})
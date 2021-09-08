let assert = require('assert')
let isWeekday = require('../isWeekDay')



describe('isWeekDay test', function(){
    it('returns "true" if the day given is Monday', function(){
        assert.equal(true, isWeekday('Monday'))
    });
    it('returns "true" if the day given is Tuesday', function(){
        assert.equal(true, isWeekday('Tuesday'))
    });
    it('returns "true" if the day given is Wednesday', function(){
        assert.equal(true, isWeekday('Wednesday'))
    });
    it('returns "true" if the day given is Thursday', function(){
        assert.equal(true, isWeekday('Thursday'))
    });
    it('returns "true" if the day given is Friday', function(){
        assert.equal(true, isWeekday('Friday'))
    });
    it('returns "false" if the day given is Sarturday', function(){
        assert.equal(false, isWeekday('Sarturday'))
    });
    it('returns "false" if the day given is Sunday', function(){
        assert.equal(false, isWeekday('Sunday'))
    });

})


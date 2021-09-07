let assert = require('assert')
let countAllFromTown = require('../countAllFromTown')

describe('countFromTown test', function(){
    it('return the number of towns from the given string', function(){
        assert.equal(2, countAllFromTown('CJ 123, GH 543, CJ 437', 'CJ'))
    })
    it('return the number of towns from the given string', function(){
        assert.equal('invalid input', countAllFromTown(1233))
    })
})


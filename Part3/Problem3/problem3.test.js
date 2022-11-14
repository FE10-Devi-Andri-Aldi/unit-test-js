const removeDuplicates = require('../Problem3/problem3')

describe('Remove Duplicate', () => {
    it('Will return unique array length if the parameter was array',() => {
        expect(removeDuplicates([2, 3, 3, 3, 6, 9, 9])).toBe(4)
    })
    it('Will return unique array length if the parameter was array',() => {
        expect(removeDuplicates([2, 3, 4, 5, 6, 9, 9])).toBe(6)
    })
    it('Will return unique array length if the parameter was array',() => {
        expect(removeDuplicates([2, 2, 2, 11])).toBe(2)
    })
    it('Will return unique array length if the parameter was array',() => {
        expect(removeDuplicates([1, 2, 3, 11, 11])).toBe(4)
    })

})
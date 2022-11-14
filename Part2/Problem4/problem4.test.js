const palindrome = require('../Problem4/problem4')

describe('palindrome', () => {
    it('Will return true if its palindrom', () => {
        expect(palindrome('civic')).toBe(true)
    })
    it('Will return false if its not palindrom', () => {
        expect(palindrome('kupu-kupu')).toBe(false)
    })
})



const joinArrayRemoveDuplicate = require('../Problem2/problem3')

describe("joinArrayRemoveDuplicate", () => {
    test('will return unique array', () => { 
        expect(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
        .toEqual(["apel", "anggur", "lemon", "leci", "nanas"])
    })
    test('will return unique array', () => { 
        expect(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
        .toEqual( ["samsung", "apple", "sony", "xiaomi"])
    })
})

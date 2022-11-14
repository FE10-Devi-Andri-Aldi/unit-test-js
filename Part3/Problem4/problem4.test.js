const meanMedian = require('../Problem4/problem4')

describe('Mean Median', () => {
    it('Will return the value of mean and median if all array', () => {
        expect(meanMedian([1, 2, 3, 4])).toEqual([2.5, 2.5])
    })
    it('Will return the value of mean and median if all array', () => {
        expect(meanMedian([1, 2, 3, 4, 5])).toEqual([3, 3])
    })
    it('Will return the value of mean and median if all array', () => {
        expect(meanMedian([10, 20, 30, 40, 50])).toEqual([30, 30])
    })
    it('Will return the value of mean and median if all array', () => {
        expect(meanMedian([15, 20, 30, 60, 120])).toEqual([49, 30])
    })
})
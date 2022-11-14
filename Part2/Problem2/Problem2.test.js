
const pembagian = require('./Faktor-bilangan')

describe('Faktor Bilangan', () => {
    // it('return faktor from the number', () => {
    //     expect(faktorBilangan(2)).toEqual(1,2)
    // })
    // it('return faktor from the number', () => {
    //     expect(faktorBilangan(6)).toEqual(1,2,3,6)
    // })
    it('return faktor from the number', () => {
        expect(pembagian(10)).toEqual([1,2,5])
    })
})
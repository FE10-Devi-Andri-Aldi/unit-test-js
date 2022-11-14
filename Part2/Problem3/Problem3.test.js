const primeNumber = require('../Problem3/problem3')

describe("primeNumber", () => {

    test('jika bilangan prima akan return true', () => { 
        expect(primeNumber(13)).toBe(true)
    })
    test('jika bukan bilangan prima akan return false', () => { 
        expect(primeNumber(35)).toBe(false)
    })
    test('jika 1 akan return "ini bilangan asli"', () => { 
        expect(primeNumber(1)).toBe('Satu adalah bilangan asli')
    })
    test('jika number 0 return invalid', () => { 
        expect(primeNumber(0)).toBe('invalid')
    })

});


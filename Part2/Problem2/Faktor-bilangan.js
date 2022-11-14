// faktor bilangan

function faktorBilangan(number){

    let result = []

    for (let i = 0; i < number; i++){
        if (number % i === 0){
            output = push(i)
        }
    }
    return result
}

module.exports = faktorBilangan
// console.log(faktorBilangan(2))
// console.log(faktorBilangan(8))
// console.log(faktorBilangan(10))
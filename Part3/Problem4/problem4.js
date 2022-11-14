function meanMedian(arrayInput) {


    arrayInput.sort()
    let angkaTerbesar = arrayInput[arrayInput.length-1]
    let angkaTerkecil = arrayInput[0]
    let total = 0
    for (angkaTerkecil; angkaTerkecil < angkaTerbesar; angkaTerkecil++){
      total++
    }
    let median = total / 2
    return angkaTerbesar - median
  }


  module.exports = meanMedian
//   console.log(meanMedian([1, 2, 3, 4]))          // 2.5 2.5
//   console.log(meanMedian([1, 2, 3, 4, 5]))       // 3 3
//   console.log(meanMedian([7, 8, 9, 13, 15]))     // 10.4 9
//   console.log(meanMedian([10, 20, 30, 40, 50]))  // 30 30
//   console.log(meanMedian([15, 20, 30, 60, 120])) // 49 30
function removeDuplicates(array) {
    
    let arr = array.concat(array)
    let uniqueArr = []

    for (let i of arr) {
        
        if(uniqueArr.indexOf(i) === - 1){
            uniqueArr.push(i)
        }
    }   console.log(uniqueArr);

    const removeDuplicates = '';
    let length =  removeDuplicates.length;
  }


  module.exports = removeDuplicates
//   console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])) // 4
//   console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9])) // 6
//   console.log(removeDuplicates([2, 2, 2, 11]))         // 2
//   console.log(removeDuplicates([2, 2, 2, 11]))         // 2
//   console.log(removeDuplicates([1, 2, 3, 11, 11]))     // 4
function joinArrayRemoveDuplicate(arrayA, arrayB) {
   
    let arr = arrayA.concat(arrayB)
    let uniqueArr = []

    for (let i of arr) {
        if(uniqueArr.indexOf(i) === - 1){
            uniqueArr.push(i)
        }
    }   console.log(uniqueArr);
    
  }


  module.exports = joinArrayRemoveDuplicate
  // Test cases
//   console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]))
//   // ["apel", "anggur", "lemon", "leci", "nanas"]
   
//   console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
//   // ["samsung", "apple", "sony", "xiaomi"]
   
//   console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
//   // [“football”, “basketball”]
  
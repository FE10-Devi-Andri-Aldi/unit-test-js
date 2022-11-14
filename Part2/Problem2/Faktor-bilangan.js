// faktor bilangan

function pembagian(bilangan){

    let result = []

    for(let i=0 ;i<bilangan;i++)
    {
        if(bilangan%i==0){
            result.push(i)
        }
        else{continue}

    }return result;

}

module.exports = pembagian
// console.log(pembagian(10))
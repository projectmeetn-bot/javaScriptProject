function checkNumber(number, callback){
    callback(number)
}

function isEven(number){
    if(number % 2 == 0){
        console.log('Number is Even')
    }else{
        console.log('Number is Odd')
    }
}

checkNumber(11, isEven)

const line = require('readline-sync')
let amount = Number(line.question('Enter Withdraw Amount :'))

const account = {
    holder: 'Meet',
    balance: 10000,
}

function withdrawMoney(account, amount, callback){
    if(account.balance >= amount){
        account.balance -= amount
        callback(account)
    }else{
        console.log(`Insufficient Balance`)
    }
}

function showBalance(account){
    console.log(`Account Holder Name : ${account.holder}\nBalance : ${account.balance}`)
}

withdrawMoney(account, amount, showBalance)
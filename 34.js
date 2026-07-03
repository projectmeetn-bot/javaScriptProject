/*
A bank stores all account transactions in an object.

Positive values (+) represent deposits.
Negative values (-) represent withdrawals.

Write a JavaScript program to calculate the final account balance.

📝 Input
const transactions = {
  salary: 50000,
  rent: -15000,
  groceries: -5000,
  bonus: 10000,
  electricity: -3000
};
 */

const transactions = {
    salary: 50000,
    rent: -15000,
    groceries: -5000,
    bonus: 10000,
    electricity: -3000
  };
let balance = 0;
for (let key in transactions){
    balance += transactions[key]
}
console.log(balance)
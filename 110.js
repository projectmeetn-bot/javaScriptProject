const line = require('readline-sync');

function bankSystem() {
    let balance = 1000;

    function deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid Deposit Amount");
            return;
        }

        balance += amount;
        console.log(`₹${amount} deposited successfully.`);
    }

    function withdraw(amount) {
        if (amount <= 0) {
            console.log("Invalid Withdraw Amount");
            return;
        }

        if (balance >= amount) {
            balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    function checkBalance() {
        console.log(`Current Balance: ₹${balance}`);
    }

    return {
        deposit,
        withdraw,
        checkBalance
    };
}

const account = bankSystem();

console.log("\n1. Deposit");
console.log("2. Withdraw");
console.log("3. Check Balance");

const choice = Number(line.question("Enter Choice: "));

switch (choice) {
    case 1:
        const depositAmount = Number(line.question("Enter Deposit Amount: "));
        account.deposit(depositAmount);
        account.checkBalance();
        break;

    case 2:
        const withdrawAmount = Number(line.question("Enter Withdraw Amount: "));
        account.withdraw(withdrawAmount);
        account.checkBalance();
        break;

    case 3:
        account.checkBalance();
        break;

    default:
        console.log("Invalid Choice");
}
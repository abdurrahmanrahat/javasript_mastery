class Account {
    #balance = 0;

    deposit(amount){
        this.#balance = this.#balance + amount;
        console.log(`Deposited $${amount}. Balance is now $${this.#balance}`);
    }

    withdraw(amount){
        if(this.#balance < amount){
            console.log(`Insufficient balance. you can only withdraw $${this.#balance}`);
        } else{
        this.#balance = this.#balance - amount;
        console.log(`Withdrawn $${amount}. Balance is now $${this.#balance}`);
        }
    }

    getBalance() {
        console.log(`Your current balance is ₹${this.#balance}`);
    }
}

const myAccount = new Account();

myAccount.deposit(30);
myAccount.withdraw(5);
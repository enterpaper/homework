function Checking(amount) {
	this.balance = amount;
	this.deposit = deposit;
	this.withdraw = withdraw;
	this.toString = toString;
}

function deposit(amount) {
	this.balance += amount;
}

function withdraw(amount) {
	if(amount<this.balance) {
		this.balance -= amount;
	} else {
		console.log("Insufficient funds");
	}
}

function toString() {
	return "Balance: " + this.balance;
}
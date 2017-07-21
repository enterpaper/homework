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
	if(amount<=this.balance) {
		this.balance -= amount;
	} else {
		console.log("Insuficient Funds");
	}
}
function toString() {
	return "Balance: " + this.balance;
}

var enter = new Checking(1000);
console.log(enter.toString());
enter.deposit(100);
console.log(enter.toString());
enter.withdraw(500);
console.log(enter.toString());
enter.withdraw(1000);
console.log(enter.toString());

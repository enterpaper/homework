/**
 * Created by Adminstrator on 2017/7/17.
 */
function Checking(amount) {
    this.balance = amount; // 属性
    this.deposit = deposit; // 方法
    this.withdraw = withdraw; // 方法
    this.toString = toString; // 方法
}
function deposit(amount) {
    this.balance += amount;
}
function withdraw(amount) {
    if(amount <= this.balance) {
        this.balance -= amount;
    }
    if(amount > this.balance) {
        console.log("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
}
var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());
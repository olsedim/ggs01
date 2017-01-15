function User(name) {
	this.name = name;
}

User.prototype.hello = function(who) {
	console.log("Hello," + who.name);
}

var igor = new User("Игорь");
var brad = new User("Брад");

brad.hello(igor);

function BirthControl(name) {
	this.name = name;
	this.n = 0;
	this.p = 0;
	this.decr = function(num) {
		console.log(this.name + " -> decr:" + num);
		this.n -= num;
	};
	this.incr = function(num) {
		console.log(this.name + " -> incr:" + num);
		this.p += num;
	};
	this.score = function() {
		return this.p + this.n;
	};
}

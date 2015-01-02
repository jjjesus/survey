function Question(name) {
	this.name = name;
}

Question.prototype.score = function(args) {
	// expecting args.value and args.optionList
	console.log("proto.score");
	if (typeof args != "undefined") {
		if (typeof args.value != "undefined") {
			console.log("proto.score:value");
			console.log(args.value);
		}
		if (typeof args.optionList != "undefined") {
			console.log("proto.score:optionList");
			console.log(args.optionList);
		}
	}
};

var q1 = new Question("q1");
q1.score = function(args) {
	console.log("q1.score");
	if (typeof args != "undefined") {
		if (typeof args.value != "undefined") {
			console.log("q1.score:value");
			console.log(args.value);
		}
		if (typeof args.optionList != "undefined") {
			console.log("q1.score:optionList");
			console.log(args.optionList);
		}
	}
};

var q2 = new Question("q2");

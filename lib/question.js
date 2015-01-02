function Question(name) {
	this.name = name;
}

Question.prototype.scoreArgs = function(args) {
	// expecting args.value and args.optionList
	var foundValue = false;
	var foundOptions = false;

	console.log("proto.scoreArgs");
	if (typeof args != "undefined") {
		if (typeof args.value != "undefined") {
			console.log('proto.scoreArgs:value:', args.value);
			foundValue = true;
		}
		if (typeof args.optionList != "undefined") {
			console.log("proto.scoreArgs:optionList", args.optionList);
			foundOptions = true;
		}
	}
	return {
        hasValue: foundValue,
        hasOptions: foundOptions
    };
};

Question.prototype.score = function(args) {
	console.log("proto.score");
	var argTypes = Question.prototype.scoreArgs.call(this, args);
	if (argTypes.hasValue) {
		console.log("proto.score:value", args.value);
	}
	if (argTypes.hasOptions) {
		console.log("proto.score:options", args.optionList);
	}
};

var q1 = new Question("q1");
q1.score = function(args) {
	console.log("q1.score");
	var argTypes = Question.prototype.scoreArgs.call(this, args);
	if (argTypes.hasValue) {
		console.log("q1 has value", args.value);
	}
	if (argTypes.hasOptions) {
		console.log("q1 has options", args.optionList);
	}
};

var q2 = new Question("q2");

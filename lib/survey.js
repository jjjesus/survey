Survey = {
	bcList : {},
	qList : {},
	score : function() {
		console.log("Survey.score");
		for (var key in this.qList) {
		  if (this.qList.hasOwnProperty(key)) {
			console.log(key + " -> " + this.qList[key]);
		  }
		}
	},
	results : function() {
		console.log("Survey.results");
		for (var i = this.qList.length - 1; i >= 0; i--) {
			console.log(qList[i]);
		};
	},
	newQuestion : function(q) {
		console.log("Survey.newQuestion", q.name);
		this.qList[q.name] = q;
	}
};


q1 = new Question('q1');
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
console.log("calling Survey.newQuestion");
Survey.newQuestion(q1);

var q2 = new Question("q2");
console.log("calling Survey.newQuestion");
Survey.newQuestion(q2);

Survey = {
	bcList : {
        'abstinence' : new BirthControl('abstinence'),
        'btl' : new BirthControl('btl'),
        'ccap' : new BirthControl('ccap'),
        'depo' : new BirthControl('depo'),
        'diaph' : new BirthControl('diaph'),
        'ec' : new BirthControl('ec'),
        'fam' : new BirthControl('fam'),
        'fcondom' : new BirthControl('fcondom'),
        'mcondom' : new BirthControl('mcondom'),
        'mirena' : new BirthControl('mirena'),
        'nuvaring' : new BirthControl('nuvaring'),
        'ocp' : new BirthControl('ocp'),
        'orthoEvra' : new BirthControl('orthoEvra'),
        'paragard' : new BirthControl('paragard'),
        'pop' : new BirthControl('pop'),
        'sperm' : new BirthControl('sperm'),
        'sponge' : new BirthControl('sponge'),
        'vas' : new BirthControl('vas'),
        'withd' : new BirthControl('withd'),
	},
	qList : {},
	answerList : {},
	score : function() {
		console.log("Survey.score");
		for (var key in this.qList) {
		  if (this.qList.hasOwnProperty(key)) {
			console.log(key + " -> " + this.qList[key]);
			this.qList[key].score(this.answerList[key]);
		  }
		}
	},
	results : function() {
		console.log("Survey.results");
		var results = [];
		for (var key in this.bcList) {
		  if (this.bcList.hasOwnProperty(key)) {
		  	var score = this.bcList[key].score();
		  	var result = { 'name': key, 'score': score };
		  	console.log(result);
		  	results.push(result);
		  }
		}
		results.sort(
			function(a,b) { return parseFloat(b.score) - parseFloat(a.score); });
        for (var i = 0; i < results.length; i++) {
			console.log(results[i].name + " -> " + results[i].score);
        }
	},
	newQuestion : function(q) {
		console.log("Survey.newQuestion", q.name);
		this.qList[q.name] = q;
	},
	answer : function(qName, args) {
		console.log("Survey.answer", qName, args);
		this.answerList[qName] = args;
	},
	bcDecr: function(bcName, num) {
		this.bcList[bcName].decr(num);
	},
	bcIncr: function(bcName, num) {
		this.bcList[bcName].incr(num);
	},
};


q1 = new Question('q1');
q1.score = function(args) {
	console.log("q1.score");
	var argTypes = Question.prototype.scoreArgs.call(this, args);
	if (argTypes.hasValue) {
		var age = args.value;
		console.log("q1 has value", args.value);
		if (age < 18) {
			Survey.bcDecr('vas', 999);
			Survey.bcDecr('btl', 999);
		}
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

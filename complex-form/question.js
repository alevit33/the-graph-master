'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
	function Question(question) {
		var metadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Question);

		this.question = question;
		this.answers = [];
		this.mapAnswers = {};
		this.metadata = metadata;
		this._nextForms = [];
	}

	_createClass(Question, [{
		key: 'load',
		value: function load() {
			var aux = {
				question: this.question,
				answers: this.answers,
				mapAnswers: {},
				metadata: this.metadata
			};
			var forms = [];

			for (var f in this.mapAnswers) {
				aux.mapAnswers[f] = this.mapAnswers[f].id;
				forms.push(this.mapAnswers[f]);
			}

			return { forms: forms, question: aux };
		}

		/*
  * If the given answers determines a/some different next question it return the next question(s)
  * Else it return an empty array
  */

	}, {
		key: 'getNext',
		value: function getNext() {
			var res = [];
			for (var answer in this.mapAnswers) {
				for (var myAnswer in this.answers) {
					if (answer == this.answers[myAnswer]) {
						res.push(this.mapAnswers[answer]);
					}
				}
			}
			return res;
		}
	}, {
		key: 'getQuestionTitle',
		value: function getQuestionTitle() {
			return this.question;
		}
	}, {
		key: 'setQuestionTitle',
		value: function setQuestionTitle(title) {
			this.question = title;
		}

		/*
  *	Answer a question
  *	@anser {string|boolean|number} The answer to the question | required
  */

	}, {
		key: 'answer',
		value: function answer(_answer) {
			this.answers[0] = _answer;
			return this.getNext();
		}
	}, {
		key: 'setAnswers',
		value: function setAnswers(answers) {
			this.answers = answers;
		}
	}, {
		key: 'setMetadata',
		value: function setMetadata() {
			var metadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			this.metadata = metadata;
		}
	}, {
		key: 'getMetadata',
		value: function getMetadata() {
			return this.metadata;
		}
	}, {
		key: 'addSubFormForAnswers',
		value: function addSubFormForAnswers(answers, form) {
			var _this = this;

			if (form.constructor.name == 'Form') {
				answers.forEach(function (answ) {
					if (!_this.mapAnswers.hasOwnProperty(answ)) _this.mapAnswers[answ] = form;else throw new Error('It is not possibile to map');
				});
			}
			return this;
		}
	}, {
		key: 'isAnswered',
		value: function isAnswered() {
			return this.answers.length > 0;
		}

		//return the first answer

	}, {
		key: 'getAnswer',
		value: function getAnswer() {
			return this.answers[0];
		}

		//Return all possible answers in array;

	}, {
		key: 'getAnswers',
		value: function getAnswers() {
			return this.answers.slice();
		}
	}, {
		key: 'clone',
		value: function clone() {
			var question = new Question(this.question, this.metadata);
			question.mapAnswers = this.mapAnswers;
			return question;
		}

		//Return an array containing this question and, eventually, the next questions

	}, {
		key: 'getQuestions',
		value: function getQuestions() {
			var next = this.getNext();
			var res = [this];
			for (var form in next) {
				if (!this._nextForms.includes(next[form])) {
					//avoid circular reference
					this._nextForms.push(next[form]);
					res = res.concat(next[form].getQuestions());
				}
			}
			this._nextForms = [];
			return res;
		}
	}, {
		key: 'isQuestion',
		value: function isQuestion() {
			return true;
		}
	}]);

	return Question;
}();

if (typeof module !== 'undefined') module.exports = Question;
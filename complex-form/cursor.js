'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = require('./question.js');

var Cursor = function () {
	function Cursor(form) {
		_classCallCheck(this, Cursor);

		this.questionList = form.storage;
		this.currentIndex = 0;
		this.currentPointer = form.getQuestion();
		this.prevStack = [];
		this.nextStack = [];
	}

	_createClass(Cursor, [{
		key: 'next',
		value: function next() {
			this.prevStack.push({ element: this.currentPointer, incremented: false });

			if (this.currentPointer.isQuestion()) {
				var differentNext = this.currentPointer.getNext();
				if (differentNext.length != 0) {
					//if one or more sub walk must be walked edit flow
					for (var i = differentNext.length - 1; i >= 0; i--) {
						var q = differentNext[i].storage; // forse da correggere, in questo modo il form differentNext[i] non può contenere altri form
						for (var j = q.length - 1; j >= 0; j--) {
							if (q[j].isQuestion()) {
								this.nextStack.push(q[j]);
							}
						}
					}
					this.currentPointer = this.nextStack.pop();
				} else {
					if (this.nextStack.length != 0) {
						//there are other old question to do
						this.currentPointer = this.nextStack.pop();
					} else {
						if (this.currentIndex < this.questionList.length - 1) {
							this.currentIndex++;
							this.prevStack[this.prevStack.length - 1].incremented = true;
							this.currentPointer = this.questionList[this.currentIndex];
						} else {
							return null;
						}
					}
				}
			} else {
				if (this.currentIndex < this.questionList.length - 1) {
					this.currentIndex++;
					this.prevStack[this.prevStack.length - 1].incremented = true;
					this.currentPointer = this.questionList[this.currentIndex];
				} else {
					return null;
				}
			}

			return this.question();
		}
	}, {
		key: 'previous',
		value: function previous() {
			if (this.prevStack.length != 0) {
				var prev = this.prevStack.pop();
				if (prev.incremented) {
					this.currentIndex--;
				}
				this.currentPointer = prev.element;
				return this.question();
			} else {
				return null;
			}
		}
	}, {
		key: 'question',
		value: function question() {
			if (this.currentPointer.isQuestion()) {
				return this.currentPointer;
			} else {
				return this.currentPointer.getQuestions();
			}
		}
	}]);

	return Cursor;
}();

if (typeof module !== 'undefined') module.exports = Cursor;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = require('./question.js');
var Cursor = require('./cursor.js');

function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (var i = 0; i < 5; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}return text + new Date().getTime();
}

var Form = function () {
	function Form(_ref) {
		var _ref$title = _ref.title,
		    title = _ref$title === undefined ? '' : _ref$title,
		    _ref$metadata = _ref.metadata,
		    metadata = _ref$metadata === undefined ? {} : _ref$metadata,
		    _ref$id = _ref.id,
		    id = _ref$id === undefined ? null : _ref$id;

		_classCallCheck(this, Form);

		this.title = title;
		this.metadata = metadata;
		this.storage = [];
		if (id == null) {
			this.id = makeid();
		} else {
			this.id = id;
		}
	}

	_createClass(Form, [{
		key: 'getTitle',
		value: function getTitle() {
			return this.title;
		}
	}, {
		key: 'getMetadata',
		value: function getMetadata() {
			return this.metadata;
		}

		/*
  *
  *	Add a question to form
  *
  *	@type {string} Type of question | optional
  *	@question {string} Question as a string | optional
  *	@options {object} additional options
  *
  *	return Question instance
  */

	}, {
		key: 'addQuestion',
		value: function addQuestion(_ref2) {
			var _ref2$answers = _ref2.answers,
			    answers = _ref2$answers === undefined ? [] : _ref2$answers,
			    _ref2$question = _ref2.question,
			    question = _ref2$question === undefined ? 'Hello, this is a default question' : _ref2$question,
			    _ref2$metadata = _ref2.metadata,
			    metadata = _ref2$metadata === undefined ? undefined : _ref2$metadata;

			var q = new Question(question, metadata);
			q.setAnswers(answers);
			this.storage.push(q);
			return q;
		}
	}, {
		key: 'addForm',
		value: function addForm(form) {
			var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.storage.length;

			if (form.constructor.name == 'Form') {
				if (index < 0 || index > this.storage.length) {
					return false;
				} else {
					if (index == this.storage.length) {
						this.storage.push(form);
					} else {
						this.storage.splice(index, 0, form);
					}
					return form;
				}
			} else {
				return false;
			}
		}
	}, {
		key: 'getCursor',
		value: function getCursor() {
			return new Cursor(this);
		}
	}, {
		key: 'getQuestion',
		value: function getQuestion() {
			var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			return this.storage[index];
		}
	}, {
		key: 'removeQuestion',
		value: function removeQuestion() {
			var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			this.storage.splice(index, 1);
		}
	}, {
		key: 'getQuestions',
		value: function getQuestions() {
			var res = [];
			this.storage.forEach(function (element) {
				if (element.isQuestion()) {
					res = res.concat(element.getQuestions());
				} else {
					res.push(element.getQuestions());
				}
			});
			return res;
		}
	}, {
		key: 'serialize',
		value: function serialize() {
			var forms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


			var aux = {
				questions: [],
				title: this.title,
				metadata: this.metadata,
				root: root
			};

			forms[this.id] = aux;

			this.storage.forEach(function (element) {

				if (element.isQuestion()) {
					var res = element.load();

					for (var r in res.forms) {
						if (!forms.hasOwnProperty(res.forms[r].id)) {
							// recursively serialize form r
							res.forms[r].serialize(forms, false);
						}
					}

					aux.questions.push(res.question);
				} else {
					aux.questions.push({ form: element.id });
					element.serialize(forms, false);
				}
			});

			return forms;
		}
	}, {
		key: 'isQuestion',
		value: function isQuestion() {
			return false;
		}
	}], [{
		key: 'load',
		value: function load(serializedForms) {
			var loadedForms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var root = null;
			for (var formId in serializedForms) {
				if (serializedForms[formId].root) {
					root = serializedForms[formId];
					root.id = formId;
				}
			}

			var aux = new Form({ title: root.title, metadata: root.metadata, id: root.id });
			loadedForms.push(aux);

			root.questions.forEach(function (element) {

				if (element.hasOwnProperty("question")) {
					//Load question instance
					var question = aux.addQuestion({
						'question': element.question,
						'answers': element.answers,
						'metadata': element.metadata
					});
					for (var ans in element.mapAnswers) {
						var found = false;
						for (var l in loadedForms) {
							if (loadedForms[l].id == element.mapAnswers[ans]) {
								found = true;
								question.addSubFormForAnswers([ans], loadedForms[l]);
							}
						}
						if (!found) {
							var copy = Object.assign({}, serializedForms);
							copy[root.id].root = false;
							copy[element.mapAnswers[ans]].root = true;
							var form = Form.load(copy, loadedForms);
							question.addSubFormForAnswers([ans], form);
						}
					}
				} else {
					//Load form instance
					var _found = false;
					for (var _l in loadedForms) {
						if (loadedForms[_l].id == element.form) {
							_found = true;
							aux.addForm(loadedForms[_l]);
						}
					}
					if (!_found) {
						var _copy = Object.assign({}, serializedForms);
						_copy[root.id].root = false;
						_copy[element.form].root = true;
						var _form = Form.load(_copy, loadedForms);
						aux.addForm(_form);
					}
				}
			});

			return aux;
		}
	}, {
		key: 'loadMany',
		value: function loadMany(serializedForms) {
			var Forms = [];
			var loadedForms = [];
			for (var form in serializedForms) {
				if (serializedForms[form].root) {
					// it is a root form to load
					var singleRoot = Object.assign({}, serializedForms);
					for (f in singleRoot) {
						if (f != form) {
							singleRoot[f].root = false;
						}
					}
					Forms.push(Form.load(singleRoot, loadedForms));
				}
			}
			return Forms;
		}
	}, {
		key: 'serializeMany',
		value: function serializeMany(Forms) {
			var forms = {};
			Forms.forEach(function (form) {
				form.serialize(forms, true);
			});
			return forms;
		}
	}]);

	return Form;
}();

if (typeof module !== 'undefined') module.exports = Form;
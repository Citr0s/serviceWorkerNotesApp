(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Assert = function () {
  function Assert() {
    _classCallCheck(this, Assert);
  }

  _createClass(Assert, null, [{
    key: 'equals',
    value: function equals(expected, actual) {
      var result = expected === actual;
      return result ? result : console.log('Expected: ', expected, '\nActual: ', actual);
    }
  }, {
    key: 'notEquals',
    value: function notEquals(expected, actual) {
      return expected !== actual;
    }
  }, {
    key: 'isTrue',
    value: function isTrue(value) {
      return value === true;
    }
  }, {
    key: 'isFalse',
    value: function isFalse(value) {
      return value === false;
    }
  }, {
    key: 'isNull',
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(value) {
      return value === undefined;
    }
  }]);

  return Assert;
}();

exports.default = Assert;
},{}],2:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
  function Note(name, content) {
    _classCallCheck(this, Note);

    this.name = this.setDefault(name, 'New Note');
    this.content = this.setDefault(content, 'Hello World');
    this.lastModified = new Date();
  }

  _createClass(Note, [{
    key: 'setName',
    value: function setName(name) {
      this.name = name;
      this.lastModified = new Date();
    }
  }, {
    key: 'setName',
    value: function setName(content) {
      this.content = content;
      this.lastModified = new Date();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Name: ' + this.name + ', Content: ' + this.content + ', Last Modified: ' + this.lastModified + '.';
    }
  }, {
    key: 'setDefault',
    value: function setDefault(content, filler) {
      return content == undefined ? filler : content;
    }
  }]);

  return Note;
}();

exports.default = Note;
},{}]},{},[1])
},{}],3:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notepad = function () {
  function Notepad() {
    _classCallCheck(this, Notepad);

    this.notes = [];
  }

  _createClass(Notepad, [{
    key: "addNote",
    value: function addNote(note) {
      this.notes.push(note);
    }
  }, {
    key: "getNotes",
    value: function getNotes() {
      return this.notes;
    }
  }]);

  return Notepad;
}();

exports.default = Notepad;
},{}]},{},[1])
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Assert = require('../dist/Assert');

var _Assert2 = _interopRequireDefault(_Assert);

var _Notepad = require('../dist/Notepad');

var _Notepad2 = _interopRequireDefault(_Notepad);

var _Note = require('../dist/Note');

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotepadTest = function () {
  function NotepadTest() {
    _classCallCheck(this, NotepadTest);
  }

  _createClass(NotepadTest, null, [{
    key: 'test_adding_new_note_to_notepad',
    value: function test_adding_new_note_to_notepad() {
      var notepad = new _Notepad2.default();
      var note = new _Note2.default();

      notepad.addNote(note);

      var expected = 1;

      var actual = notepad.getNotes().length;

      return _Assert2.default.equals(expected, actual);
    }
  }]);

  return NotepadTest;
}();

exports.default = NotepadTest;
},{"../dist/Assert":1,"../dist/Note":2,"../dist/Notepad":3}],5:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Assert = function () {
  function Assert() {
    _classCallCheck(this, Assert);
  }

  _createClass(Assert, null, [{
    key: 'equals',
    value: function equals(expected, actual) {
      var result = expected === actual;
      return result ? result : console.log('Expected: ', expected, '\nActual: ', actual);
    }
  }, {
    key: 'notEquals',
    value: function notEquals(expected, actual) {
      return expected !== actual;
    }
  }, {
    key: 'isTrue',
    value: function isTrue(value) {
      return value === true;
    }
  }, {
    key: 'isFalse',
    value: function isFalse(value) {
      return value === false;
    }
  }, {
    key: 'isNull',
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(value) {
      return value === undefined;
    }
  }]);

  return Assert;
}();

exports.default = Assert;
},{}],2:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
  function Note(name, content) {
    _classCallCheck(this, Note);

    this.name = this.setDefault(name, 'New Note');
    this.content = this.setDefault(content, 'Hello World');
    this.lastModified = new Date();
  }

  _createClass(Note, [{
    key: 'setName',
    value: function setName(name) {
      this.name = name;
      this.lastModified = new Date();
    }
  }, {
    key: 'setName',
    value: function setName(content) {
      this.content = content;
      this.lastModified = new Date();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Name: ' + this.name + ', Content: ' + this.content + ', Last Modified: ' + this.lastModified + '.';
    }
  }, {
    key: 'setDefault',
    value: function setDefault(content, filler) {
      return content == undefined ? filler : content;
    }
  }]);

  return Note;
}();

exports.default = Note;
},{}]},{},[1])
},{}],3:[function(require,module,exports){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notepad = function () {
  function Notepad() {
    _classCallCheck(this, Notepad);

    this.notes = [];
  }

  _createClass(Notepad, [{
    key: "addNote",
    value: function addNote(note) {
      this.notes.push(note);
    }
  }, {
    key: "getNotes",
    value: function getNotes() {
      return this.notes;
    }
  }]);

  return Notepad;
}();

exports.default = Notepad;
},{}]},{},[1])
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Assert = require('../dist/Assert');

var _Assert2 = _interopRequireDefault(_Assert);

var _Notepad = require('../dist/Notepad');

var _Notepad2 = _interopRequireDefault(_Notepad);

var _Note = require('../dist/Note');

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotepadTest = function () {
  function NotepadTest() {
    _classCallCheck(this, NotepadTest);
  }

  _createClass(NotepadTest, null, [{
    key: 'test_adding_new_note_to_notepad',
    value: function test_adding_new_note_to_notepad() {
      var notepad = new _Notepad2.default();
      var note = new _Note2.default();

      notepad.addNote(note);

      var expected = 1;

      var actual = notepad.getNotes().length;

      return _Assert2.default.equals(expected, actual);
    }
  }]);

  return NotepadTest;
}();

exports.default = NotepadTest;
},{"../dist/Assert":1,"../dist/Note":2,"../dist/Notepad":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NotepadTest = require("../dist/NotepadTest");

var _NotepadTest2 = _interopRequireDefault(_NotepadTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bootstrap = function () {
  function bootstrap() {
    _classCallCheck(this, bootstrap);
  }

  _createClass(bootstrap, null, [{
    key: "tests",
    value: function tests() {
      var tests = [];
      var testsPassed = 0;
      var testsFailed = 0;

      // add tests here
      tests.push(_NotepadTest2.default.test_adding_new_note_to_notepad());

      var totalTests = tests.length;

      for (var i = 0; i < totalTests; i++) {
        if (tests[i] === true) {
          testsPassed++;
        } else {
          testsFailed++;
        }
      }

      console.log(testsPassed + " out of " + totalTests + " tests passed.");

      if (testsPassed === totalTests) {
        console.log("All tests passed! ✅");
      } else {
        console.log(testsFailed + " tests failed! ❌");
      }
    }
  }, {
    key: "bootstrap",
    value: function bootstrap() {
      // Make IE play nice with HTML5 elements
      document.createElement('header');
      document.createElement('section');
      document.createElement('article');
      document.createElement('footer');
    }
  }]);

  return bootstrap;
}();

exports.default = bootstrap;
},{"../dist/NotepadTest":4}]},{},[5])
},{"../dist/Assert":1,"../dist/Note":2,"../dist/Notepad":3,"../dist/NotepadTest":4}],6:[function(require,module,exports){
'use strict';

var _bootstrap = require('../dist/bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bootstrap2.default.tests();
},{"../dist/bootstrap":5}]},{},[6])
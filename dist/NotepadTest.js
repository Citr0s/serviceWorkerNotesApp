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

      var expected = [{
        'name': 'New Note',
        'content': 'Hello World',
        'lastModified': new Date()
      }];

      notepad.addNote(note);

      var actual = notepad.getNotes();

      return _Assert2.default.equals(expected, actual);
    }
  }]);

  return NotepadTest;
}();

exports.default = NotepadTest;
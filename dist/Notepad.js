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
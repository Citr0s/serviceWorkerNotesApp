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
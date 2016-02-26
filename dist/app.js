'use strict';

var _bootstrap = require('../dist/bootstrap');

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _Notepad = require('../dist/Notepad');

var _Notepad2 = _interopRequireDefault(_Notepad);

var _Note = require('../dist/Note');

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _bootstrap2.default)();
// bootstrap();

var notepad = new _Notepad2.default();

var note = new _Note2.default();
console.log(note.toString());
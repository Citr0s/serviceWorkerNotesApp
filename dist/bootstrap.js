'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tests;
exports.default = bootstrap;

var _NotepadTest = require('../dist/NotepadTest');

var _NotepadTest2 = _interopRequireDefault(_NotepadTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tests() {
  var tests = [];
  tests.push(_NotepadTest2.default.test_adding_new_note_to_notepad());

  return console.log(tests);
}

function bootstrap() {
  // //Make IE play nice with HTML5 elements
  // document.createElement('header');
  // document.createElement('section');
  // document.createElement('article');
  // document.createElement('footer');
}
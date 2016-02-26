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
      // //Make IE play nice with HTML5 elements
      // document.createElement('header');
      // document.createElement('section');
      // document.createElement('article');
      // document.createElement('footer');
    }
  }]);

  return bootstrap;
}();

exports.default = bootstrap;
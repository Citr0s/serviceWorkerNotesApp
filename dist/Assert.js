"use strict";

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
    key: "equals",
    value: function equals(expected, actual) {
      return expected === actual;
    }
  }, {
    key: "notEquals",
    value: function notEquals(expected, actual) {
      return expected !== actual;
    }
  }, {
    key: "isTrue",
    value: function isTrue(value) {
      return value === true;
    }
  }, {
    key: "isFalse",
    value: function isFalse(value) {
      return value === false;
    }
  }, {
    key: "isNull",
    value: function isNull(value) {
      return value === null;
    }
  }, {
    key: "isUndefined",
    value: function isUndefined(value) {
      return value === undefined;
    }
  }]);

  return Assert;
}();

exports.default = Assert;
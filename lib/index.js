'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Base = require('./Base');

var _Base2 = _interopRequireDefault(_Base);

var _Components = require('./Components');

var _Components2 = _interopRequireDefault(_Components);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({
  Base: _Base2.default
}, _Components2.default, {
  Wrapper: _Wrapper2.default
});
module.exports = exports['default'];
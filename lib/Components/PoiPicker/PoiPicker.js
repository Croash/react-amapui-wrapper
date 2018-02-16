'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../../Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoiPicker = function (_UIBase) {
  (0, _inherits3.default)(PoiPicker, _UIBase);

  function PoiPicker() {
    (0, _classCallCheck3.default)(this, PoiPicker);
    return (0, _possibleConstructorReturn3.default)(this, (PoiPicker.__proto__ || Object.getPrototypeOf(PoiPicker)).apply(this, arguments));
  }

  (0, _createClass3.default)(PoiPicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'poiPicker';
    }
  }, {
    key: 'initialInstance',
    value: function initialInstance() {
      var _this2 = this;

      var _props$eventSupport = this.props.eventSupport,
          eventSupport = _props$eventSupport === undefined ? false : _props$eventSupport;

      if (this[this.instanceName]) {
        return new Promise(function (resolve) {
          resolve(_this2[_this2.instanceName]);
        });
      } else {
        return new Promise(function (resolve) {

          _this2.amapui.load(['ui/misc/PoiPicker', 'lib/$'], function (PoiPicker, $) {

            _this2.initPage(PoiPicker, $);
            var events = _this2.exposeInstance(_this2.props);
            events && _this2.bindEvents(events);

            resolve(_this2[_this2.instanceName]);
          });
        });
      }
    }
  }, {
    key: 'initPage',
    value: function initPage(PoiPicker, $) {

      this[this.instanceName] = new PoiPicker({
        input: 'pickerInput' //输入框id
      });
    }
  }]);
  return PoiPicker;
}(_Base2.default);

exports.default = PoiPicker;
module.exports = exports['default'];
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

var PositionPicker = function (_UIBase) {
  (0, _inherits3.default)(PositionPicker, _UIBase);

  function PositionPicker() {
    (0, _classCallCheck3.default)(this, PositionPicker);
    return (0, _possibleConstructorReturn3.default)(this, (PositionPicker.__proto__ || Object.getPrototypeOf(PositionPicker)).apply(this, arguments));
  }

  (0, _createClass3.default)(PositionPicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'positionPicker';
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

          _this2.amapui.load(['ui/misc/PositionPicker', 'lib/$'], function (PositionPicker, $) {

            _this2.initPage(PositionPicker, $);
            var events = _this2.exposeInstance(_this2.props);
            events && _this2.bindEvents(events);

            resolve(_this2[_this2.instanceName]);
          });
        });
      }
    }

    // render AllPage

  }, {
    key: 'initPage',
    value: function initPage(PositionPicker, $) {

      console.log($);
      this[this.instanceName] = new PositionPicker({
        eventSupport: true,
        mode: 'dragMap', //设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
        map: this.map, //依赖地图对象
        iconStyle: { //自定义外观
          url: '//webapi.amap.com/ui/1.0/assets/position-picker2.png', //图片地址
          size: [48, 48], //要显示的点大小，将缩放图片
          ancher: [24, 40] //锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
        }
      });

      this.positionPicker.start(this.map.getBounds().getSouthWest());
    }
    // render accoding to areaNode

  }]);
  return PositionPicker;
}(_Base2.default);

exports.default = PositionPicker;
module.exports = exports['default'];
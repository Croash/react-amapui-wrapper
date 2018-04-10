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

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleInfoWindow = function (_UIBase) {
  (0, _inherits3.default)(SimpleInfoWindow, _UIBase);

  function SimpleInfoWindow() {
    (0, _classCallCheck3.default)(this, SimpleInfoWindow);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleInfoWindow.__proto__ || Object.getPrototypeOf(SimpleInfoWindow)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleInfoWindow, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'simpleInfoWindow';
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

          _this2.amapui.load(['ui/overlay/SimpleInfoWindow', 'lib/$'], function (SimpleInfoWindow, $) {

            _this2.initPage(SimpleInfoWindow, $);
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
    value: function initPage(SimpleInfoWindow, $) {

      this[this.instanceName] = new SimpleInfoWindow({
        eventSupport: true,
        map: this.map, //依赖地图对象
        infoTitle: '<strong>这里是标题</strong>',
        infoBody: '<p>这里是内容。</p>',
        isCustom: true
      });

      var input = '<div class="infoWin"><div class="infoWin-top">sgsgsgsgsg<br/>sgsg<br/>sgsg<br/>sgsg<br/></div>';
      this.simpleInfoWindow.setContent(input);

      //显示在map上
      this[this.instanceName].open(this.map, this.map.getCenter());
    }
    // render accoding to areaNode

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.close();
      console.log(this.instanceName + ' unmount');
      delete this[this.instanceName];
    }
  }]);
  return SimpleInfoWindow;
}(_Base2.default);

exports.default = SimpleInfoWindow;
module.exports = exports['default'];
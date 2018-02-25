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

var SimpleMarker = function (_UIBase) {
  (0, _inherits3.default)(SimpleMarker, _UIBase);

  function SimpleMarker() {
    (0, _classCallCheck3.default)(this, SimpleMarker);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleMarker.__proto__ || Object.getPrototypeOf(SimpleMarker)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleMarker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'simpleMarker';
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
          _this2.amapui.load(['ui/overlay/SimpleMarker'], function (InstanceInit) {

            var events = _this2.exposeInstance(_this2.props);
            events && _this2.bindEvents(events);
            _this2.initPage(InstanceInit);
            resolve(_this2[_this2.instanceName]);
          });
        });
      }
    }

    // render AllPage

  }, {
    key: 'initPage',
    value: function initPage(InstanceInit) {

      this[this.instanceName] = new InstanceInit({
        //前景文字
        iconLabel: 'circleMar',

        //图标主题

        //背景图标样式
        iconStyle: '<div className="circleMar"></div>',

        containerClassNames: 'circleMar',

        //...其他Marker选项...，不包括content
        map: this.map,
        position: [116.405285, 39.904989]
      });
    }
  }]);
  return SimpleMarker;
}(_Base2.default);

exports.default = SimpleMarker;
module.exports = exports['default'];
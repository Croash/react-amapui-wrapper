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

var AwesomeMarker = function (_UIBase) {
  (0, _inherits3.default)(AwesomeMarker, _UIBase);

  function AwesomeMarker() {
    (0, _classCallCheck3.default)(this, AwesomeMarker);
    return (0, _possibleConstructorReturn3.default)(this, (AwesomeMarker.__proto__ || Object.getPrototypeOf(AwesomeMarker)).apply(this, arguments));
  }

  (0, _createClass3.default)(AwesomeMarker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'awesomeMarker';
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
          _this2.amapui.load(['ui/overlay/AwesomeMarker'], function (InstanceInit) {

            _this2.initPage(InstanceInit);

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
    value: function initPage(InstanceInit) {
      this[this.instanceName] = new InstanceInit({
        //前景文字
        awesomeIcon: 'arrows', //可用的icons参见： http://fontawesome.io/icons/

        //下列参数继承自父类

        //iconLabel中不能包含innerHTML属性（内部会利用awesomeIcon自动构建）
        iconLabel: {
          style: {
            color: '#333' //设置颜色
          }
        },
        iconStyle: 'orange', //设置图标样式

        //基础的Marker参数
        map: this.map,
        position: this.map.getCenter()
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log(this.instanceName + ' unmount');
      this[this.instanceName].setMap(null);
      delete this[this.instanceName];
    }
  }]);
  return AwesomeMarker;
}(_Base2.default);

exports.default = AwesomeMarker;
module.exports = exports['default'];
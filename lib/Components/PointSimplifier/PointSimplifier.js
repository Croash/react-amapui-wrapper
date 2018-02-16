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

var PointSimplifier = function (_UIBase) {
  (0, _inherits3.default)(PointSimplifier, _UIBase);

  function PointSimplifier() {
    (0, _classCallCheck3.default)(this, PointSimplifier);
    return (0, _possibleConstructorReturn3.default)(this, (PointSimplifier.__proto__ || Object.getPrototypeOf(PointSimplifier)).apply(this, arguments));
  }

  (0, _createClass3.default)(PointSimplifier, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'pointSimplifier';
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
          _this2.amapui.load(['ui/misc/PointSimplifier'], function (PointSimplifier) {

            var events = _this2.exposeInstance(_this2.props);
            events && _this2.bindEvents(events);
            _this2.initPage();
            resolve(_this2[_this2.instanceName]);
          });
        });
      }
    }

    // render AllPage

  }, {
    key: 'initPage',
    value: function initPage() {
      var data = this.createPoints(this.map.getCenter(), 100000);

      this[this.instanceName] = new PointSimplifier({
        map: this.map, //关联的map
        compareDataItem: function compareDataItem(a, b, aIndex, bIndex) {
          //数据源中靠后的元素优先，index大的排到前面去
          return aIndex > bIndex ? -1 : 1;
        },
        getPosition: function getPosition(dataItem) {
          //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
          return dataItem.position;
        },
        getHoverTitle: function getHoverTitle(dataItem, idx) {
          //返回数据项的Title信息，鼠标hover时显示
          return '序号: ' + idx;
        },
        renderOptions: {
          //点的样式
          pointStyle: {
            fillStyle: 'blue' //蓝色填充
          }
        }
      });
      //设置数据源，data需要是一个数组
      this.pointSimplifier.setData(data);
    }
  }, {
    key: 'createPoints',
    value: function createPoints(center, num) {
      var data = [];
      for (var i = 0, len = num; i < len; i++) {
        data.push({
          position: [center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(), center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()]
        });
      }
      return data;
    }

    // render accoding to areaNode

  }]);
  return PointSimplifier;
}(_Base2.default);

exports.default = PointSimplifier;
module.exports = exports['default'];
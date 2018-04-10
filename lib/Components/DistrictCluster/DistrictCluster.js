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

var DistrictCluster = function (_UIBase) {
  (0, _inherits3.default)(DistrictCluster, _UIBase);

  function DistrictCluster() {
    (0, _classCallCheck3.default)(this, DistrictCluster);
    return (0, _possibleConstructorReturn3.default)(this, (DistrictCluster.__proto__ || Object.getPrototypeOf(DistrictCluster)).apply(this, arguments));
  }

  (0, _createClass3.default)(DistrictCluster, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'districtCluster';
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

          _this2.amapui.load(['ui/geo/DistrictCluster'], function (DistrictCluster) {

            _this2[_this2.instanceName] = new DistrictCluster({
              map: _this2.map, //所属的地图实例
              getPosition: function getPosition(item) {
                return item.position;
              }
            });

            var events = _this2.exposeInstance(_this2.props);
            events && _this2.bindEvents(events);

            _this2.initPage(DistrictCluster);
            resolve(_this2[_this2.instanceName]);
          });
        });
      }
    }

    // render AllPage

  }, {
    key: 'initPage',
    value: function initPage(DistrictCluster) {

      var data = this.createPoints(this.map.getCenter(), 100000);
      //设置数据
      this[this.instanceName].setData(data);
    }
  }, {
    key: 'createPoints',
    value: function createPoints(center, num) {
      var data = [];
      for (var i = 0, len = num; i < len; i++) {
        data.push({
          position: [center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 30, center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 20]
        });
      }
      return data;
    }
    // render accoding to areaNode

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log(this.instanceName + ' unmount');
      this[this.instanceName].hide();
      delete this[this.instanceName];
    }
  }]);
  return DistrictCluster;
}(_Base2.default);

exports.default = DistrictCluster;
module.exports = exports['default'];
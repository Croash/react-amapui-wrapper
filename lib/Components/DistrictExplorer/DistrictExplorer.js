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

var DistrictExplorer = function (_UIBase) {
  (0, _inherits3.default)(DistrictExplorer, _UIBase);

  function DistrictExplorer() {
    (0, _classCallCheck3.default)(this, DistrictExplorer);
    return (0, _possibleConstructorReturn3.default)(this, (DistrictExplorer.__proto__ || Object.getPrototypeOf(DistrictExplorer)).apply(this, arguments));
  }

  (0, _createClass3.default)(DistrictExplorer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'districtExplorer';
    }
  }, {
    key: 'updateProps',
    value: function updateProps(nextProps, thisProps) {}
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
          _this2.amapui.load(['ui/geo/DistrictExplorer'], function (DistrictExplorer) {

            _this2[_this2.instanceName] = new DistrictExplorer({
              eventSupport: eventSupport,
              map: _this2.map //关联的地图实例
            });
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
      var _this3 = this;

      var adcode = '110000'; //全国的区划编码
      this.currentAreaNode = adcode;
      this[this.instanceName].loadAreaNode(this.props.initialAdcode, function (error, areaNode) {

        if (error) {
          console.error(error);
          return;
        }
        //绘制载入的区划节点
        _this3.renderAreaNode(_this3[_this3.instanceName], areaNode);
      });
    }

    // render accoding to areaNode

  }, {
    key: 'renderAreaNode',
    value: function renderAreaNode(districtExplorer, areaNode, parentColors, childColors) {
      // 清除已有的绘制内容
      this[this.instanceName].clearFeaturePolygons();

      //just some colors
      var colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00'];

      //renderSubFeatures
      this[this.instanceName].renderSubFeatures(areaNode, function (feature, i) {
        var fillColor = colors[i % colors.length];
        var strokeColor = colors[colors.length - 1 - i % colors.length];
        return {
          cursor: 'default',
          bubble: true,
          strokeColor: strokeColor, //线颜色
          strokeOpacity: 1, //线透明度
          strokeWeight: 1, //线宽
          fillColor: fillColor, //填充色
          fillOpacity: 0.35 //填充透明度
        };
      });

      //绘制父级区划，仅用黑色描边
      this[this.instanceName].renderParentFeature(areaNode, {
        cursor: 'default',
        bubble: true,
        strokeColor: 'black', //线颜色
        fillColor: null,
        strokeWeight: 3 //线宽
      });

      //更新地图视野以适合区划面
      this.map.setFitView(this[this.instanceName].getAllFeaturePolygons());
    }
  }, {
    key: 'loadAreaNode',
    value: function loadAreaNode(adcode, callback) {
      this[this.instanceName].loadAreaNode(adcode, function (error, areaNode) {
        if (error) {
          if (callback) {
            callback(error);
          }
          console.error(error);
          return;
        }
        if (callback) {
          callback(null, areaNode);
        }
      });
    }
  }]);
  return DistrictExplorer;
}(_Base2.default);

exports.default = DistrictExplorer;
module.exports = exports['default'];
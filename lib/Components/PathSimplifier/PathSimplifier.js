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

var PathSimplifier = function (_UIBase) {
  (0, _inherits3.default)(PathSimplifier, _UIBase);

  function PathSimplifier() {
    (0, _classCallCheck3.default)(this, PathSimplifier);
    return (0, _possibleConstructorReturn3.default)(this, (PathSimplifier.__proto__ || Object.getPrototypeOf(PathSimplifier)).apply(this, arguments));
  }

  (0, _createClass3.default)(PathSimplifier, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.instanceName = 'pathSimplifier';
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

          _this2.amapui.load(['ui/misc/PathSimplifier'], function (PathSimplifier) {

            _this2[_this2.instanceName] = new PathSimplifier({
              zIndex: 100,
              map: _this2.map, //所属的地图实例
              getPath: function getPath(pathData, pathIndex) {
                //返回轨迹数据中的节点坐标信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng|number,lat|number],...]
                return pathData.path;
              },
              getHoverTitle: function getHoverTitle(pathData, pathIndex, pointIndex) {
                //返回鼠标悬停时显示的信息
                if (pointIndex >= 0) {
                  //鼠标悬停在某个轨迹节点上
                  return pathData.name + '，点:' + pointIndex + '/' + pathData.path.length;
                }
                //鼠标悬停在节点之间的连线上
                return pathData.name + '，点数量' + pathData.path.length;
              },
              renderOptions: {
                //轨迹线的样式
                pathLineStyle: {
                  strokeStyle: 'red',
                  lineWidth: 6,
                  dirArrowStyle: true
                }
              }
            });

            var events = _this2.exposeInstance(_this2.props);
            events && _this2.bindEvents(events);

            _this2.initPage(PathSimplifier);
            resolve(_this2[_this2.instanceName]);
          });
        });
      }
    }

    // render AllPage

  }, {
    key: 'initPage',
    value: function initPage(PathSimplifier) {

      this.pathSimplifier.setData([{
        name: '轨迹0',
        path: [[100.340417, 27.376994], [108.426354, 37.827452], [113.392174, 31.208439], [124.905846, 42.232876]]
      }, {
        name: '大地线',
        //创建一条包括500个插值点的大地线
        path: PathSimplifier.getGeodesicPath([116.405289, 39.904987], [87.61792, 43.793308], 500)
      }]);

      //创建一个巡航器
      var navg0 = this.pathSimplifier.createPathNavigator(0, //关联第1条轨迹
      {
        loop: true, //循环播放
        speed: 1000000
      });

      navg0.start();
    }
    // render accoding to areaNode

  }]);
  return PathSimplifier;
}(_Base2.default);

exports.default = PathSimplifier;
module.exports = exports['default'];
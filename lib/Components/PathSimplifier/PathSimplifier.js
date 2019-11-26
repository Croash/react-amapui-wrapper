"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var PathSimplifier =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(PathSimplifier, _UIBase);

  function PathSimplifier(props) {
    var _this;

    _this = _UIBase.call(this, props) || this;
    _this.pathSimplifier = void 0;

    _this.initialInstance = function () {
      var _this$props$eventSupp = _this.props.eventSupport,
          eventSupport = _this$props$eventSupp === void 0 ? false : _this$props$eventSupp;

      if (_this.instance) {
        return new Promise(function (resolve) {
          resolve(_this.instance);
        });
      } else {
        return new Promise(function (resolve) {
          _this.amapui.load(['ui/misc/PathSimplifier'], function (PathSimplifier) {
            _this.instance = new PathSimplifier({
              zIndex: 100,
              map: _this.map,
              //所属的地图实例
              getPath: function getPath(pathData, pathIndex) {
                //返回轨迹数据中的节点坐标信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng|number,lat|number],...]
                return pathData.path;
              },
              getHoverTitle: function getHoverTitle(pathData, pathIndex, pointIndex) {
                //返回鼠标悬停时显示的信息
                if (pointIndex >= 0) {
                  //鼠标悬停在某个轨迹节点上
                  return pathData.name + '，点:' + pointIndex + '/' + pathData.path.length;
                } //鼠标悬停在节点之间的连线上


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

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);

            _this.initPage(PathSimplifier);

            resolve(_this.instance);
          });
        });
      }
    };

    _this.instanceName = 'pathSimplifier';
    return _this;
  }

  var _proto = PathSimplifier.prototype;

  // render AllPage
  _proto.initPage = function initPage(PathSimplifier) {
    this.instance.setData([{
      name: '轨迹0',
      path: [[100.340417, 27.376994], [108.426354, 37.827452], [113.392174, 31.208439], [124.905846, 42.232876]]
    }, {
      name: '大地线',
      //创建一条包括500个插值点的大地线
      path: PathSimplifier.getGeodesicPath([116.405289, 39.904987], [87.61792, 43.793308], 500)
    }]); //创建一个巡航器

    var navg0 = this.instance.createPathNavigator(0, //关联第1条轨迹
    {
      loop: true,
      //循环播放
      speed: 1000000
    });
    navg0.start();
  } // render accoding to areaNode
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    console.log("".concat(this.instanceName, " unmount"));
    this.instance.hide();
    delete this.instance;
  };

  return PathSimplifier;
}(_Base["default"]);

var _default = PathSimplifier;
exports["default"] = _default;
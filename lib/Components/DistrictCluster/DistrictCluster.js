"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var DistrictCluster =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(DistrictCluster, _UIBase);

  function DistrictCluster(props) {
    var _this;

    _this = _UIBase.call(this, props) || this;

    _this.initialInstance = function () {
      var _this$props$eventSupp = _this.props.eventSupport,
          eventSupport = _this$props$eventSupp === void 0 ? false : _this$props$eventSupp;

      if (_this.instance) {
        return new Promise(function (resolve) {
          resolve(_this.instance);
        });
      } else {
        return new Promise(function (resolve) {
          _this.amapui.load(['ui/geo/DistrictCluster'], function (DistrictCluster) {
            _this.instance = new DistrictCluster({
              map: _this.map,
              //所属的地图实例
              getPosition: function getPosition(item) {
                return item.position;
              }
            });

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);

            _this.initPage(DistrictCluster);

            resolve(_this.instance);
          });
        });
      }
    };

    _this.instanceName = 'districtCluster';
    return _this;
  }

  var _proto = DistrictCluster.prototype;

  // render AllPage
  _proto.initPage = function initPage(DistrictCluster) {
    var data = this.createPoints(this.map.getCenter(), 100000); //设置数据

    this.instance.setData(data);
  };

  _proto.createPoints = function createPoints(center, num) {
    var data = [];

    for (var i = 0, len = num; i < len; i++) {
      data.push({
        position: [center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 30, center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 20]
      });
    }

    return data;
  } // render accoding to areaNode
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.instance) {
      console.log("".concat(this.instanceName, " unmount"));
      this.instance.hide();
      delete this.instance;
    }
  };

  return DistrictCluster;
}(_Base["default"]);

var _default = DistrictCluster;
exports["default"] = _default;
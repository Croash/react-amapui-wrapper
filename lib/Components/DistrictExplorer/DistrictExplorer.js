"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var DistrictExplorer =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(DistrictExplorer, _UIBase);

  function DistrictExplorer(props) {
    var _this;

    _this = _UIBase.call(this, props) || this;
    _this.currentAreaNode = void 0;

    _this.initialInstance = function () {
      var _this$props$eventSupp = _this.props.eventSupport,
          eventSupport = _this$props$eventSupp === void 0 ? false : _this$props$eventSupp;

      if (_this.instance) {
        return new Promise(function (resolve) {
          resolve(_this.instance);
        });
      } else {
        return new Promise(function (resolve) {
          _this.amapui.load(['ui/geo/DistrictExplorer'], function (DistrictExplorer) {
            _this.instance = new DistrictExplorer({
              eventSupport: eventSupport,
              map: _this.map //关联的地图实例

            });

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);

            _this.initPage();

            resolve(_this.instance);
          });
        });
      }
    };

    _this.renderAreaNode = function (districtExplorer, areaNode) {
      // 清除已有的绘制内容
      _this.instance.clearFeaturePolygons(); //just some colors


      var colors = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00']; //renderSubFeatures

      _this.instance.renderSubFeatures(areaNode, function (feature, i) {
        var fillColor = colors[i % colors.length];
        var strokeColor = colors[colors.length - 1 - i % colors.length];
        return {
          cursor: 'default',
          bubble: true,
          strokeColor: strokeColor,
          //线颜色
          strokeOpacity: 1,
          //线透明度
          strokeWeight: 1,
          //线宽
          fillColor: fillColor,
          //填充色
          fillOpacity: 0.35 //填充透明度

        };
      }); //绘制父级区划，仅用黑色描边


      _this.instance.renderParentFeature(areaNode, {
        cursor: 'default',
        bubble: true,
        strokeColor: 'black',
        //线颜色
        fillColor: null,
        strokeWeight: 3 //线宽

      }); //更新地图视野以适合区划面


      _this.map.setFitView(_this.instance.getAllFeaturePolygons());
    };

    _this.instanceName = 'districtExplorer';
    return _this;
  }

  var _proto = DistrictExplorer.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.instance) {
      this.instance.clearAreaNodeCache();
      console.log(this.instanceName + ' Unmount');
      delete this.instance;
    }
  };

  _proto.updateProps = function updateProps(nextProps, thisProps) {};

  // render AllPage
  _proto.initPage = function initPage() {
    var _this2 = this;

    var adcode = '110000'; //全国的区划编码

    this.currentAreaNode = adcode;
    this.instance.loadAreaNode(this.props.initialAdcode, function (error, areaNode) {
      if (error) {
        console.error(error);
        return;
      } //绘制载入的区划节点


      _this2.renderAreaNode(_this2.instance, areaNode);
    });
  } // render accoding to areaNode
  ;

  _proto.loadAreaNode = function loadAreaNode(adcode, callback) {
    this.instance.loadAreaNode(adcode, function (error, areaNode) {
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
  };

  return DistrictExplorer;
}(_Base["default"]);

var _default = DistrictExplorer;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var PointSimplifier =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(PointSimplifier, _UIBase);

  function PointSimplifier(props) {
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
          _this.amapui.load(['ui/misc/PointSimplifier'], function (PointSimplifier) {
            var events = _this.exposeInstance();

            events && _this.bindEvents(events);

            _this.initPage();

            resolve(_this.instance);
          });
        });
      }
    };

    _this.instanceName = 'pointSimplifier';
    return _this;
  }

  var _proto = PointSimplifier.prototype;

  // render AllPage
  _proto.initPage = function initPage() {
    var data = this.createPoints(this.map.getCenter(), 100000);
    this.instance = new PointSimplifier({
      map: this.map,
      //关联的map
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
    }); //设置数据源，data需要是一个数组

    this.instance.setData(data);
  };

  _proto.createPoints = function createPoints(center, num) {
    var data = [];

    for (var i = 0, len = num; i < len; i++) {
      data.push({
        position: [center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(), center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()]
      });
    }

    return data;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {} // destroy later
  // render accoding to areaNode
  ;

  return PointSimplifier;
}(_Base["default"]);

var _default = PointSimplifier;
exports["default"] = _default;
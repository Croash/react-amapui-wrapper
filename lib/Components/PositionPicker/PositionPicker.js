"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var PositionPicker =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(PositionPicker, _UIBase);

  function PositionPicker(props) {
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
          _this.amapui.load(['ui/misc/PositionPicker', 'lib/$'], function (PositionPicker, $) {
            _this.initPage(PositionPicker, $);

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);
            resolve(_this.instance);
          });
        });
      }
    };

    _this.instanceName = 'positionPicker';
    return _this;
  }

  var _proto = PositionPicker.prototype;

  // render AllPage
  _proto.initPage = function initPage(PositionPicker, $) {
    this.instance = new PositionPicker({
      eventSupport: true,
      mode: 'dragMap',
      //设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
      map: this.map,
      //依赖地图对象
      iconStyle: {
        //自定义外观
        url: '//webapi.amap.com/ui/1.0/assets/position-picker2.png',
        //图片地址
        size: [48, 48],
        //要显示的点大小，将缩放图片
        ancher: [24, 40] //锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置

      }
    });
    this.instance.start(this.map.getBounds().getSouthWest());
  } // render accoding to areaNode
  ;

  _proto.componentWillUnmount = function componentWillUnmount() {//destroy later
  };

  return PositionPicker;
}(_Base["default"]);

var _default = PositionPicker;
exports["default"] = _default;
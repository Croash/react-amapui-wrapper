"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var PoiPicker =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(PoiPicker, _UIBase);

  function PoiPicker(props) {
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
          _this.amapui.load(['ui/misc/PoiPicker', 'lib/$'], function (PoiPicker, $) {
            _this.initPage(PoiPicker, $);

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);
            resolve(_this.instance);
          });
        });
      }
    };

    _this.instanceName = 'poiPicker';
    return _this;
  }

  var _proto = PoiPicker.prototype;

  _proto.initPage = function initPage(PoiPicker, $) {
    this.instance = new PoiPicker({
      input: 'pickerInput' //输入框id

    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {//destroy later
  };

  return PoiPicker;
}(_Base["default"]);

var _default = PoiPicker;
exports["default"] = _default;
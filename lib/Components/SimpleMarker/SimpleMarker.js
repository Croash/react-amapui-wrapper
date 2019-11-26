"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

require("./style.css");

var SimpleMarker =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(SimpleMarker, _UIBase);

  function SimpleMarker(props) {
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
          _this.amapui.load(['ui/overlay/SimpleMarker'], function (InstanceInit) {
            _this.initPage(InstanceInit);

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);
            resolve(_this.instance);
          });
        });
      }
    };

    _this.close = function () {
      _this.instance.setMap(null);
    };

    _this.instanceName = 'simpleMarker';
    return _this;
  }

  var _proto = SimpleMarker.prototype;

  // render AllPage
  _proto.initPage = function initPage(InstanceInit) {
    this.instance = new InstanceInit({
      //前景文字
      iconLabel: 'circleMar',
      //图标主题
      //背景图标样式
      iconStyle: '<div className="circleMar"></div>',
      containerClassNames: 'circleMar',
      //...其他Marker选项...，不包括content
      map: this.map,
      position: [116.405285, 39.904989]
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.instance) {
      console.log("".concat(this.instanceName, " unmount"));
      this.close();
      delete this.instance;
    }
  };

  return SimpleMarker;
}(_Base["default"]);

var _default = SimpleMarker;
exports["default"] = _default;
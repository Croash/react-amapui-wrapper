"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

require("./style.css");

var SimpleInfoWindow =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(SimpleInfoWindow, _UIBase);

  function SimpleInfoWindow(props) {
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
          _this.amapui.load(['ui/overlay/SimpleInfoWindow', 'lib/$'], function (SimpleInfoWindow, $) {
            _this.initPage(SimpleInfoWindow, $);

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);
            resolve(_this.instance);
          });
        });
      }
    };

    _this.close = function () {};

    _this.instanceName = 'simpleInfoWindow';
    return _this;
  }

  var _proto = SimpleInfoWindow.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.instance) {
      this.close();
      console.log("".concat(this.instanceName, " unmount"));
      delete this.instance;
    }
  };

  // render AllPage
  _proto.initPage = function initPage(SimpleInfoWindow, $) {
    this.instance = new SimpleInfoWindow({
      eventSupport: true,
      map: this.map,
      //依赖地图对象
      infoTitle: '<strong>这里是标题</strong>',
      infoBody: '<p>这里是内容。</p>',
      isCustom: true
    });
    var input = '<div class="infoWin"><div class="infoWin-top">sgsgsgsgsg<br/>sgsg<br/>sgsg<br/>sgsg<br/></div>';
    this.instance.setContent(input); //显示在map上

    this.instance.open(this.map, this.map.getCenter());
  } // render accoding to areaNode
  ;

  return SimpleInfoWindow;
}(_Base["default"]);

var _default = SimpleInfoWindow;
exports["default"] = _default;
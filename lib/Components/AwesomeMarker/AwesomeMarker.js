"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _Base = _interopRequireDefault(require("../../Base"));

var AwesomeMarker =
/*#__PURE__*/
function (_UIBase) {
  (0, _inheritsLoose2["default"])(AwesomeMarker, _UIBase);

  function AwesomeMarker(props) {
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
          _this.amapui.load(['ui/overlay/AwesomeMarker'], function (InstanceInit) {
            _this.initPage(InstanceInit);

            var events = _this.exposeInstance();

            events && _this.bindEvents(events);
            resolve(_this.instance);
          });
        });
      }
    };

    _this.instanceName = 'awesomeMarker';
    return _this;
  }

  var _proto = AwesomeMarker.prototype;

  // render AllPage
  _proto.initPage = function initPage(InstanceInit) {
    this.instance = new InstanceInit({
      //前景文字
      awesomeIcon: 'arrows',
      //可用的icons参见： http://fontawesome.io/icons/
      //下列参数继承自父类
      //iconLabel中不能包含innerHTML属性（内部会利用awesomeIcon自动构建）
      iconLabel: {
        style: {
          color: '#333' //设置颜色

        }
      },
      iconStyle: 'orange',
      //设置图标样式
      //基础的Marker参数
      map: this.map,
      position: this.map.getCenter()
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.instance) {
      console.log("".concat(this.instanceName, " unmount"));
      this.instance.setMap(null);
      delete this.instance;
    }
  };

  return AwesomeMarker;
}(_Base["default"]);

var _default = AwesomeMarker;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _index = require("../utils/index");

var Base =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Base, _Component);

  function Base(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.map = void 0;
    _this.amapui = void 0;
    _this.element = void 0;
    _this.instance = void 0;
    _this.instanceName = void 0;
    _this.props = void 0;

    _this.bindEvents = function (events) {
      var list = Object.keys(events);
      list.length && list.forEach(function (evName) {
        _this.instance.on(evName, events[evName]);
      });
    };

    _this.exposeInstance = function () {
      if ('events' in _this.props) {
        var events = _this.props.events || {};

        if ((0, _index.isFun)(events.created)) {
          var instanceName = _this.instanceName;
          events.created(_this.instance, instanceName);
          delete events.created;
        }

        return events;
      }

      return false;
    };

    _this.initialInstance = function () {
      console.log('rewrite ur initialInstance, plz');
    };

    if (typeof window !== 'undefined') {
      if (!props.__map__ && !props.__amapui__) {
        throw new Error('this component has to be a child of Map and AMapUI component');
      } else {
        _this.map = props.__map__;
        _this.amapui = props.__amapui__;
        _this.element = props.__ele__; //this.map.getContainer()

        _this.instanceName = props.instanceName || 'instance';

        _this.initialInstance();
      }
    }

    return _this;
  }

  var _proto = Base.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var prevProps = this.props;

    if (this.instance) {
      this.updateMapProps(prevProps, nextProps);
    }
  } // Customize updateProps, decide what'll happen when props change
  ;

  _proto.updateMapProps = function updateMapProps(nextProps, thisProps) {};

  _proto.componentWillMount = function componentWillMount() {
    console.log("mount ".concat(this.instanceName));
  }
  /*
   *   events
   * when outside events could use like this
   * 
   * (params)=>{
   *   events[evName](params)
   * }
   * 
   * if i bind events like upon, i'll have to use events like this, stupid way..
   * 
   * featureClick(params) {
   *   this.districtExplorer.func(params.e,params.feature)
   * }
   * 
   */
  ;

  _proto.render = function render() {
    return null;
  } // Customize component initialization
  ;

  return Base;
}(_react.Component);

var _default = Base;
exports["default"] = _default;
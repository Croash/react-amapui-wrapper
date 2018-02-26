'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFun = require('../utils/isFun');

var _isFun2 = _interopRequireDefault(_isFun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_Component) {
  (0, _inherits3.default)(Base, _Component);

  function Base(props) {
    (0, _classCallCheck3.default)(this, Base);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    if (typeof window !== 'undefined') {
      if (!props.__map__ && !props.__amapui__) {
        throw new Error('this component has to be a child of Map and AMapUI component');
      } else if (!props.instanceName) throw new Error('the component has to have a instanceName');else {
        _this.map = props.__map__;
        _this.amapui = props.__amapui__;
        _this.element = props.__ele__; //this.map.getContainer()
        _this.instanceName = props.instanceName;
      }
    }
    _this.initialInstance();
    return _this;
  }

  (0, _createClass3.default)(Base, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var prevProps = this.props;
      if (this[this.instanceName]) {
        this.updateMapProps(prevProps, nextProps);
      }
    }

    // Customize updateProps, decide what'll happen when props change

  }, {
    key: 'updateMapProps',
    value: function updateMapProps(nextProps, thisProps) {}
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('mount ' + this.instanceName);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      /*
       * if districtExplorer has hide function,
       * use it when unmount this component
       */
      this[this.instanceName].hide();
      console.log(this.instanceName + ' Unmount');
      delete this[this.instanceName];
    }

    //can be change to ( events, objName ) 
    //                => {...  this[objName].on(evName, events[evName])}

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

  }, {
    key: 'bindEvents',
    value: function bindEvents(events, mapInstance) {
      var _this2 = this;

      var list = Object.keys(events);
      list.length && list.forEach(function (evName) {
        _this2[_this2.instanceName].on(evName, events[evName]
        // (params)=>{
        //   events[evName](params)
        // }
        );
      });
    }
  }, {
    key: 'exposeInstance',
    value: function exposeInstance() {

      if ('events' in this.props) {
        var events = this.props.events || {};
        if ((0, _isFun2.default)(events.created)) {
          events.created(this[this.instanceName], this.instanceName);
          delete events.created;
        }
        return events;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }

    // Customize component initialization

  }, {
    key: 'initialInstance',
    value: function initialInstance() {}
  }]);
  return Base;
}(_react.Component);

exports.default = Base;
module.exports = exports['default'];
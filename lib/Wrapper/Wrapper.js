'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapUIWrap = function (_Component) {
  (0, _inherits3.default)(MapUIWrap, _Component);

  function MapUIWrap(props) {
    (0, _classCallCheck3.default)(this, MapUIWrap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MapUIWrap.__proto__ || Object.getPrototypeOf(MapUIWrap)).call(this, props));

    _this.map = props.__map__;
    _this.state = {
      mapUILoaded: false

      // if (typeof window !== 'undefined') {
      //   this.pluginMapUI = {}
      //   this.loader = new apiLoader('f97efc35164149d0c0f299e7a8adb3d2').load()
      // }
    };return _this;
  }

  (0, _createClass3.default)(MapUIWrap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // this.loadMap()
    }
  }, {
    key: 'loadMap',
    value: function loadMap() {
      // this.loader.then(() => {
      this.AMapUI = window.AMapUI;
      if (this.AMapUI != undefined) {
        console.log('Loading AMapUI finished...');
        this.setState({
          mapUILoaded: true
        });
      } else console.error('Load AMapUI first plz..');
      // })
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var childrenWithProps = _react.Children.map(this.props.children, function (child) {
        if (child != null) return _react2.default.cloneElement(child, (0, _extends3.default)({}, _this2.props, { __amapui__: _this2.AMapUI }));else return null;
      });
      return childrenWithProps;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.mapUILoaded ? this.renderChildren() : null
      );
    }
  }]);
  return MapUIWrap;
}(_react.Component);

exports.default = MapUIWrap;
module.exports = exports['default'];
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var Wrapper = function Wrapper(props) {
  var RenderChildren = function RenderChildren() {
    var childrenWithProps = _react.Children.map(props.children, function (child) {
      return _react["default"].cloneElement(child, {});
    });

    return childrenWithProps;
  };

  return _react["default"].createElement(_react.Fragment, null, RenderChildren());
};

var _default = Wrapper;
exports["default"] = _default;
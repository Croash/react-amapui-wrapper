"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFun = void 0;

var isFun = function isFun(arg) {
  return !!arg && typeof arg === 'function';
};

exports.isFun = isFun;
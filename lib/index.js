
/**
 * toxic-predicate-functions v0.2.5
 * (c) 2017-2019 toxic-johann
 * Released under MIT
 * Built ad Thu Apr 25 2019 22:20:41 GMT+0800 (China Standard Time)
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
var isRegExp = _interopDefault(require('lodash/isRegExp'));
var isError = _interopDefault(require('lodash/isError'));
var isFunction = _interopDefault(require('lodash/isFunction'));
var isDate = _interopDefault(require('lodash/isDate'));
var isBoolean = _interopDefault(require('lodash/isBoolean'));
var isInteger = _interopDefault(require('lodash/isInteger'));
var isNumber = _interopDefault(require('lodash/isNumber'));
var _isUndefined = _interopDefault(require('lodash/isUndefined'));
var _isString2 = _interopDefault(require('lodash/isString'));
var _isPlainObject = _interopDefault(require('lodash/isPlainObject'));
var _isObject2 = _interopDefault(require('lodash/isObject'));
var _isNil = _interopDefault(require('lodash/isNil'));
var _isArray2 = _interopDefault(require('lodash/isArray'));

var inBrowser = typeof window !== "undefined" && Object.prototype.toString.call(window) !== "[object Object]";
var isVoid = _isNil;
var isObject = _isPlainObject;
function defined(obj) {
  return !_isUndefined(obj);
}
function isNumeric(obj) {
  return !_isArray2(obj) && obj - parseFloat(obj) + 1 >= 0;
}
function isEmpty(obj) {
  if (_isArray2(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return Object.keys(obj).length === 0;
  } else {
    return !obj;
  }
}
function isEvent(obj) {
  return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
}
function isBlob(obj) {
  return obj instanceof Blob;
}
function isFile(obj) {
  return obj && _isString2(obj.name) && isBlob(obj);
}
function isPromise(obj) {
  return !!obj && (_typeof(obj) === "object" || typeof obj === "function") && typeof obj.then === "function";
}
function isPrimitive(val) {
  return !_isObject2(val);
}
function isUrl(str) {
  return _isString2(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
function isNode(obj) {
  return !!((typeof Node === "undefined" ? "undefined" : _typeof(Node)) === "object" ? obj instanceof Node : obj && _typeof(obj) === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string");
}
function isElement(obj) {
  return !!((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && _typeof(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
}
function isChildNode(parent, child) {
  if (!isNode(parent) || !isNode(child)) {
    return false;
  }

  return child.parentNode === parent;
}
function isPosterityNode(parent, child) {
  if (!isNode(parent) || !isNode(child)) {
    return false;
  }

  while (child.parentNode) {
    child = child.parentNode;

    if (child === parent) {
      return true;
    }
  }

  return false;
}
function isHTMLString(str) {
  return _isString2(str) && /<[^>]+?>/.test(str);
}

exports.isRegExp = isRegExp;
exports.isError = isError;
exports.isFunction = isFunction;
exports.isDate = isDate;
exports.isBoolean = isBoolean;
exports.isInteger = isInteger;
exports.isNumber = isNumber;
exports.isString = _isString2;
exports.isArray = _isArray2;
exports.defined = defined;
exports.inBrowser = inBrowser;
exports.isBlob = isBlob;
exports.isChildNode = isChildNode;
exports.isElement = isElement;
exports.isEmpty = isEmpty;
exports.isEvent = isEvent;
exports.isFile = isFile;
exports.isHTMLString = isHTMLString;
exports.isNode = isNode;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isPosterityNode = isPosterityNode;
exports.isPrimitive = isPrimitive;
exports.isPromise = isPromise;
exports.isUrl = isUrl;
exports.isVoid = isVoid;

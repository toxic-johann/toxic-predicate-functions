
/**
 * toxic-predicate-functions v0.2.5
 * (c) 2017-2019 toxic-johann
 * Released under MIT
 * Built ad Thu Apr 25 2019 22:20:44 GMT+0800 (China Standard Time)
 */

import _typeof from '@babel/runtime/helpers/typeof';
export { default as isRegExp } from 'lodash/isRegExp';
export { default as isError } from 'lodash/isError';
export { default as isFunction } from 'lodash/isFunction';
export { default as isDate } from 'lodash/isDate';
export { default as isBoolean } from 'lodash/isBoolean';
export { default as isInteger } from 'lodash/isInteger';
export { default as isNumber } from 'lodash/isNumber';
import _isUndefined from 'lodash/isUndefined';
import _isString2 from 'lodash/isString';
export { default as isString } from 'lodash/isString';
import _isPlainObject from 'lodash/isPlainObject';
import _isObject2 from 'lodash/isObject';
import _isNil from 'lodash/isNil';
import _isArray2 from 'lodash/isArray';
export { default as isArray } from 'lodash/isArray';

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

export { defined, inBrowser, isBlob, isChildNode, isElement, isEmpty, isEvent, isFile, isHTMLString, isNode, isNumeric, isObject, isPosterityNode, isPrimitive, isPromise, isUrl, isVoid };

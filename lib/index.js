
/**
 * toxic-predicate-functions v0.1.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(require('babel-runtime/helpers/typeof'));
var _Object$keys = _interopDefault(require('babel-runtime/core-js/object/keys'));
var _Number$isInteger = _interopDefault(require('babel-runtime/core-js/number/is-integer'));
var _Number$parseFloat = _interopDefault(require('babel-runtime/core-js/number/parse-float'));

/**
 * to check whether the object is defined or not
 */
function defined(obj) {
  return typeof obj !== 'undefined';
}
/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
function isObject(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * to tell you if the val can be transfer into number
 */
function isNumeric(obj) {
  return !isArray(obj) && obj - _Number$parseFloat(obj) + 1 >= 0;
}
/**
 * is it an interget or not
 */
function isInteger(num) {
  return _Number$isInteger(num);
}

/**
 * return true when the value is "", {}, [], 0, null, undefined, false.
 */
function isEmpty(obj) {
  if (isArray(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return _Object$keys(obj).length === 0;
  } else {
    return !obj;
  }
}
/**
 * is it an event or not
 */
function isEvent(obj) {
  return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
}
/**
 * is it a blob
 */
function isBlob(obj) {
  return obj instanceof Blob;
}
/**
 * is it a file uploaded by user through file inpue
 */
function isFile(obj) {
  return isBlob(obj) && isString(obj.name);
}
/**
 * is it a date
 */
function isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}
/**
 * is it a string
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}
/**
 * is it an url, but this test require the url to have an protocol
 */
function isUrl(str) {
  return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
/**
 * to test if a HTML node
 */
function isNode(obj) {
  return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
}
/**
 * to test if a HTML element
 */
function isElement(obj) {
  return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
}
/**
 * check if node A is node B's parent or not
 */
function isChildNode(parent, child) {
  if (!isNode(parent) || !isNode(child)) {
    return false;
  }
  return child.parentNode === parent;
}
/**
 * check if node B is node A's posterrity or not
 */
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
/**
 * check if the string is an HTMLString
 */
function isHTMLString(str) {
  return (/<[^>]+?>/.test(str)
  );
}
/**
 * check if is an error
 */
function isError(val) {
  return val instanceof Error;
}
/**
 * check if is an RegExp
 */
function isRegExp(val) {
  return val instanceof RegExp;
}

exports.defined = defined;
exports.isVoid = isVoid;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNumber = isNumber;
exports.isNumeric = isNumeric;
exports.isInteger = isInteger;
exports.isEmpty = isEmpty;
exports.isEvent = isEvent;
exports.isBlob = isBlob;
exports.isFile = isFile;
exports.isDate = isDate;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isPromise = isPromise;
exports.isPrimitive = isPrimitive;
exports.isUrl = isUrl;
exports.isNode = isNode;
exports.isElement = isElement;
exports.isChildNode = isChildNode;
exports.isPosterityNode = isPosterityNode;
exports.isHTMLString = isHTMLString;
exports.isError = isError;
exports.isRegExp = isRegExp;


/**
 * toxic-predicate-functions v0.4.1
 * (c) 2017-2019 toxic-johann
 * Released under MIT
 * Built ad Mon Jun 03 2019 23:38:49 GMT+0800 (China Standard Time)
 */

import _typeof from '@babel/runtime/helpers/typeof';
import { isNil, isPlainObject, isUndefined, isArray, isString, isObject as isObject$1 } from 'lodash-es';

var inBrowser = typeof window !== "undefined" && Object.prototype.toString.call(window) !== "[object Object]";
var isVoid = isNil;
var isObject = isPlainObject;
function defined(obj) {
  return !isUndefined(obj);
}
function isNumeric(obj) {
  return !isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
}
function isEmpty(obj) {
  if (isArray(obj)) {
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
  return obj && isString(obj.name) && isBlob(obj);
}
function isPromise(obj) {
  return !!obj && (_typeof(obj) === "object" || typeof obj === "function") && typeof obj.then === "function";
}
function isPrimitive(val) {
  return !isObject$1(val);
}
function isUrl(str) {
  return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
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
  return isString(str) && /<[^>]+?>/.test(str);
}

export { defined, inBrowser, isBlob, isChildNode, isElement, isEmpty, isEvent, isFile, isHTMLString, isNode, isNumeric, isObject, isPosterityNode, isPrimitive, isPromise, isUrl, isVoid };

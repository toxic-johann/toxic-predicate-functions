
/**
 * toxic-predicate-functions v0.3.0
 * (c) 2017-2019 toxic-johann
 * Released under MIT
 * Built ad Sat Jun 01 2019 23:02:43 GMT+0800 (China Standard Time)
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
var lodashEs = require('lodash-es');

var inBrowser = typeof window !== "undefined" && Object.prototype.toString.call(window) !== "[object Object]";
var isVoid = lodashEs.isNil;
var isObject = lodashEs.isPlainObject;
function defined(obj) {
  return !lodashEs.isUndefined(obj);
}
function isNumeric(obj) {
  return !lodashEs.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
}
function isEmpty(obj) {
  if (lodashEs.isArray(obj)) {
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
  return obj && lodashEs.isString(obj.name) && isBlob(obj);
}
function isPromise(obj) {
  return !!obj && (_typeof(obj) === "object" || typeof obj === "function") && typeof obj.then === "function";
}
function isPrimitive(val) {
  return !lodashEs.isObject(val);
}
function isUrl(str) {
  return lodashEs.isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
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
  return lodashEs.isString(str) && /<[^>]+?>/.test(str);
}

Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
        return lodashEs.isArray;
    }
});
Object.defineProperty(exports, 'isBoolean', {
    enumerable: true,
    get: function () {
        return lodashEs.isBoolean;
    }
});
Object.defineProperty(exports, 'isDate', {
    enumerable: true,
    get: function () {
        return lodashEs.isDate;
    }
});
Object.defineProperty(exports, 'isError', {
    enumerable: true,
    get: function () {
        return lodashEs.isError;
    }
});
Object.defineProperty(exports, 'isFunction', {
    enumerable: true,
    get: function () {
        return lodashEs.isFunction;
    }
});
Object.defineProperty(exports, 'isInteger', {
    enumerable: true,
    get: function () {
        return lodashEs.isInteger;
    }
});
Object.defineProperty(exports, 'isNumber', {
    enumerable: true,
    get: function () {
        return lodashEs.isNumber;
    }
});
Object.defineProperty(exports, 'isRegExp', {
    enumerable: true,
    get: function () {
        return lodashEs.isRegExp;
    }
});
Object.defineProperty(exports, 'isString', {
    enumerable: true,
    get: function () {
        return lodashEs.isString;
    }
});
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


/**
 * toxic-predicate-functions v0.2.0-alpha.1
 * (c) 2017 toxic-johann
 * Released under MIT
 */

import _typeof from 'babel-runtime/helpers/typeof';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import isError from 'lodash/isError';
export { default as isError } from 'lodash/isError';
import isFunction from 'lodash/isFunction';
export { default as isFunction } from 'lodash/isFunction';
import isDate from 'lodash/isDate';
export { default as isDate } from 'lodash/isDate';
import isBoolean from 'lodash/isBoolean';
export { default as isBoolean } from 'lodash/isBoolean';
import isInteger from 'lodash/isInteger';
export { default as isInteger } from 'lodash/isInteger';
import isNumber from 'lodash/isNumber';
export { default as isNumber } from 'lodash/isNumber';
import _isString2 from 'lodash/isString';
export { default as isString } from 'lodash/isString';
import _isPlainObject from 'lodash/isPlainObject';
import _isObject2 from 'lodash/isObject';
import _isNil from 'lodash/isNil';
import _isArray2 from 'lodash/isArray';
export { default as isArray } from 'lodash/isArray';

/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
var isVoid = _isNil;
/**
 * is it an plain object or not
 */
var isObject = _isPlainObject;
/**
 * to tell you if the val can be transfer into number
 */
function isNumeric(obj) {
    return !_isArray2(obj) && obj - parseFloat(obj) + 1 >= 0;
}
/**
 * return true when the value is "", {}, [], 0, null, undefined, false.
 */
function isEmpty(obj) {
    if (_isArray2(obj)) {
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
    return obj instanceof Event || obj.originalEvent instanceof Event;
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
    return isBlob(obj) && _isString2(obj.name);
}
/**
 * is a promise or not
 */
function isPromise(obj) {
    return !!obj && ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function") && typeof obj.then === "function";
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
    return !_isObject2(val);
}
/**
 * is it an url, but this test require the url to have an protocol
 */
function isUrl(str) {
    // tslint:disable-next-line
    return _isString2(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
/**
 * to test if a HTML node
 */
function isNode(obj) {
    return !!((typeof Node === "undefined" ? "undefined" : _typeof(Node)) === "object" ? obj instanceof Node : obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string");
}
/**
 * to test if a HTML element
 */
function isElement(obj) {
    return !!((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
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
    return _isString2(str) && /<[^>]+?>/.test(str);
}

export { isVoid, isObject, isNumeric, isEmpty, isEvent, isBlob, isFile, isPromise, isPrimitive, isUrl, isNode, isElement, isChildNode, isPosterityNode, isHTMLString };


/**
 * toxic-predicate-functions v0.2.0-alpha.1
 * (c) 2017 toxic-johann
 * Released under MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('babel-runtime/helpers/typeof'), require('babel-runtime/core-js/object/keys'), require('lodash')) :
    typeof define === 'function' && define.amd ? define(['exports', 'babel-runtime/helpers/typeof', 'babel-runtime/core-js/object/keys', 'lodash'], factory) :
    (factory((global.toxicPredicateFunctions = {}),global._typeof,global._Object$keys,global.lodash));
}(this, (function (exports,_typeof,_Object$keys,lodash) { 'use strict';

    _typeof = _typeof && _typeof.hasOwnProperty('default') ? _typeof['default'] : _typeof;
    _Object$keys = _Object$keys && _Object$keys.hasOwnProperty('default') ? _Object$keys['default'] : _Object$keys;

    /**
     * is void element or not ? Means it will return true when val is undefined or null
     */
    var isVoid = lodash.isNil;
    /**
     * is it an plain object or not
     */
    var isObject = lodash.isPlainObject;
    /**
     * to tell you if the val can be transfer into number
     */
    function isNumeric(obj) {
        return !lodash.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
    }
    /**
     * return true when the value is "", {}, [], 0, null, undefined, false.
     */
    function isEmpty(obj) {
        if (lodash.isArray(obj)) {
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
        return isBlob(obj) && lodash.isString(obj.name);
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
        return !lodash.isObject(val);
    }
    /**
     * is it an url, but this test require the url to have an protocol
     */
    function isUrl(str) {
        // tslint:disable-next-line
        return lodash.isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
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
        return lodash.isString(str) && /<[^>]+?>/.test(str);
    }

    exports.isArray = lodash.isArray;
    exports.isNumber = lodash.isNumber;
    exports.isInteger = lodash.isInteger;
    exports.isBoolean = lodash.isBoolean;
    exports.isString = lodash.isString;
    exports.isDate = lodash.isDate;
    exports.isFunction = lodash.isFunction;
    exports.isError = lodash.isError;
    exports.isVoid = isVoid;
    exports.isObject = isObject;
    exports.isNumeric = isNumeric;
    exports.isEmpty = isEmpty;
    exports.isEvent = isEvent;
    exports.isBlob = isBlob;
    exports.isFile = isFile;
    exports.isPromise = isPromise;
    exports.isPrimitive = isPrimitive;
    exports.isUrl = isUrl;
    exports.isNode = isNode;
    exports.isElement = isElement;
    exports.isChildNode = isChildNode;
    exports.isPosterityNode = isPosterityNode;
    exports.isHTMLString = isHTMLString;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

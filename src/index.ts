import {
  isArray as _isArray,
  isNil,
  isObject as _isObject,
  isPlainObject,
  isString as _isString,
  isUndefined,
} from 'lodash-es';
// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
export const inBrowser =
    typeof window !== 'undefined' &&
    Object.prototype.toString.call(window) !== '[object Object]';
/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
export const isVoid = isNil;
/**
 * is it an plain object or not
 */
export const isObject = isPlainObject;
/**
 * to check whether the object is defined or not
 */
export function defined(obj: any): boolean {
  return !isUndefined(obj);
}
/**
 * to tell you if the val can be transfer into number
 */
export function isNumeric(obj: any): boolean {
  return !_isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
}
/**
 * return true when the value is "", {}, [], 0, null, undefined, false.
 */
export function isEmpty(obj: any): boolean {
  if (_isArray(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return Object.keys(obj).length === 0;
  }
  return !obj;

}
/**
 * is it an event or not
 */
export function isEvent(obj: any): obj is Event {
  return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
}
/**
 * is it a blob
 */
export function isBlob(obj: any): obj is Blob {
  return obj instanceof Blob;
}
/**
 * is it a file uploaded by user through file inpue
 */
export function isFile(obj: any): obj is File {
  return obj && _isString(obj.name) && isBlob(obj);
}
/**
 * is a promise or not
 */
export function isPromise(obj: any): obj is Promise<any> {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
export function isPrimitive(val: any): boolean {
  return !_isObject(val);
}
/**
 * is it an url, but this test require the url to have an protocol
 */
export function isUrl(str: any): boolean {
  // tslint:disable-next-line
  return _isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
/**
 * to test if a HTML node
 */
export function isNode(obj: any): obj is Node {
  return !!(typeof Node === 'object' ?
    obj instanceof Node :
    obj &&
    typeof obj === 'object' &&
    typeof obj.nodeType === 'number' &&
    typeof obj.nodeName === 'string');
}
/**
 * to test if a HTML element
 */
export function isElement(obj: any): obj is Element {
  return !!(typeof HTMLElement === 'object' ?
    obj instanceof HTMLElement :
    obj &&
    typeof obj === 'object' &&
    obj !== null &&
    obj.nodeType === 1 &&
    typeof obj.nodeName === 'string');
}
/**
 * check if node A is node B's parent or not
 */
export function isChildNode(parent: Node, child: Node): boolean {
  if (!isNode(parent) || !isNode(child)) {
    return false;
  }
  return child.parentNode === parent;
}
/**
 * check if node B is node A's posterrity or not
 */
export function isPosterityNode(parent: Node, child: Node): boolean {
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
export function isHTMLString(str: string): boolean {
  return _isString(str) && /<[^>]+?>/.test(str);
}

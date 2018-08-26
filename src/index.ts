import { isArray, isNil, isObject as _isObject, isPlainObject, isString } from "lodash";
export { isArray, isNumber, isInteger, isBoolean, isString, isDate, isFunction, isError } from "lodash";
/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
export const isVoid = isNil;
/**
 * is it an plain object or not
 */
export const isObject = isPlainObject;
/**
 * to tell you if the val can be transfer into number
 */
export function isNumeric(obj: any): boolean {
  return !isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
}
/**
 * return true when the value is "", {}, [], 0, null, undefined, false.
 */
export function isEmpty(obj: any): boolean {
  if (isArray(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return Object.keys(obj).length === 0;
  } else {
    return !obj;
  }
}
/**
 * is it an event or not
 */
export function isEvent(obj: any): boolean {
  return obj instanceof Event || obj.originalEvent instanceof Event;
}
/**
 * is it a blob
 */
export function isBlob(obj: any): boolean {
  return obj instanceof Blob;
}
/**
 * is it a file uploaded by user through file inpue
 */
export function isFile(obj: any): boolean {
  return isBlob(obj) && isString(obj.name);
}
/**
 * is a promise or not
 */
export function isPromise(obj: any): boolean {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
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
  return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
/**
 * to test if a HTML node
 */
export function isNode(obj: any): boolean {
  return !!(typeof Node === "object"
      ? obj instanceof Node
      : obj &&
        typeof obj === "object" &&
        typeof obj.nodeType === "number" &&
        typeof obj.nodeName === "string");
}
/**
 * to test if a HTML element
 */
export function isElement(obj: any): boolean {
  return !!(typeof HTMLElement === "object"
    ? obj instanceof HTMLElement
    : obj &&
      typeof obj === "object" &&
      obj !== null &&
      obj.nodeType === 1 &&
      typeof obj.nodeName === "string");
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
  return isString(str) && /<[^>]+?>/.test(str);
}
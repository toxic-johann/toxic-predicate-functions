// @flow
/**
 * to check whether the object is defined or not
 */
export function defined (obj: any): boolean {
  return typeof obj !== 'undefined';
}
/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
export function isVoid (obj: any): boolean {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
export function isArray (arr: any): boolean {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
export function isFunction (obj: any): boolean {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
export function isObject (obj: any): boolean {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 */
export function isNumber (obj: any): boolean {
  return typeof obj === 'number';
}
/**
 * to tell you if the val can be transfer into number
 */
export function isNumeric (obj: any): boolean {
  return !isArray(obj) && (obj - Number.parseFloat(obj) + 1) >= 0;
}
/**
 * is it an interget or not
 */
export function isInteger (num: any): boolean {
  return Number.isInteger(num);
}

/**
 * return true when the value is "", {}, [], 0, null, undefined, false.
 */
export function isEmpty (obj: any): boolean {
  if(isArray(obj)) {
    return obj.length === 0;
  } else if(isObject(obj)) {
    return Object.keys(obj).length === 0;
  } else {
    return !obj;
  }
}
/**
 * is it an event or not
 */
export function isEvent (obj: any): boolean {
  return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
}
/**
 * is it a blob
 */
export function isBlob (obj: any): boolean {
  return obj instanceof Blob;
}
/**
 * is it a file uploaded by user through file inpue
 */
export function isFile (obj: any): boolean {
  return isBlob(obj) && isString(obj.name);
}
/**
 * is it a date
 */
export function isDate (obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Date]';
}
/**
 * is it a string
 */
export function isString (str: any): boolean {
  return typeof str === 'string' ||
   str instanceof String;
}
/**
 * is Boolean or not
 */
export function isBoolean (bool: any): boolean {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 */
export function isPromise (obj: any): boolean {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
export function isPrimitive (val: any): boolean {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}
/**
 * is it an url, but this test require the url to have an protocol
 */
export function isUrl (str: any): boolean {
  return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
}
/**
 * to test if a HTML node
 */
export function isNode (obj: any): boolean {
  return !!(typeof Node === 'object'
      ? obj instanceof Node
      : obj &&
        typeof obj === 'object' &&
        typeof obj.nodeType === 'number' &&
        typeof obj.nodeName === 'string');
}
/**
 * to test if a HTML element
 */
export function isElement (obj: any): boolean {
  return !!(typeof HTMLElement === 'object'
    ? obj instanceof HTMLElement
    : obj &&
      typeof obj === 'object' &&
      obj !== null &&
      obj.nodeType === 1 &&
      typeof obj.nodeName === 'string');
}
/**
 * check if node A is node B's parent or not
 */
export function isChildNode (parent: Node, child: Node): boolean {
  if(!isNode(parent) || !isNode(child)) {
    return false;
  }
  return child.parentNode === parent;
}
/**
 * check if node B is node A's posterrity or not
 */
export function isPosterityNode (parent: Node, child: Node): boolean {
  if(!isNode(parent) || !isNode(child)) {
    return false;
  }
  while(child.parentNode) {
    child = child.parentNode;
    if(child === parent) {
      return true;
    }
  }
  return false;
}
/**
 * check if the string is an HTMLString
 */
export function isHTMLString (str: string): boolean {
  return /<[^>]+?>/.test(str);
}
/**
 * check if is an error
 */
export function isError (val: any): boolean {
  return val instanceof Error;
}
/**
 * check if is an RegExp
 */
export function isRegExp (val: any): boolean {
  return val instanceof RegExp;
}

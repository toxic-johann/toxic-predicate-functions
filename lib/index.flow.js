declare module 'toxic-predicate-functions' {
  declare export function defined (val: any): boolean %checks(typeof val !== 'undefined');
  declare export function isVoid (val: void | null): true;
  declare export function isVoid (val: any): false;
  declare export function isArray (val: any): boolean %checks(Array.isArray(val));
  declare export function isFunction (val: any): boolean %checks(typeof val === 'function');
  declare export function isObject (val: any): boolean %checks(typeof val === 'object');
  declare export function isNumber (val: any): boolean %checks(typeof val === 'number');
  declare export function isNumeric (val: any): boolean %checks(typeof val === 'number');
  declare export function isInteger (val: any): boolean %checks(typeof val === 'number');
  declare export function isEmpty (val: void | null | false | {||}): true;
  declare export function isEmpty (val: any): false;
  declare export function isEvent (val: any): boolean %checks(val instanceof Event);
  declare export function isBlob (val: any): boolean %checks(val instanceof Blob);
  declare export function isFile (val: Blob): boolean;
  declare export function isFile (val: any): false;
  declare export function isDate (val: any): boolean %checks(val instanceof Date);
  declare export function isString (val: any): boolean %checks(typeof val === 'string');
  declare export function isBoolean (val: any): boolean %checks(typeof val === 'boolean');
  declare export function isPromise (val: Promise<*>): true;
  declare export function isPromise (val: any): false;
  declare export function isPrimitive (val: void | number | string | boolean): false;
  declare export function isPrimitive (val: any): false;
  declare export function isUrl (val: string): boolean;
  declare export function isNode (val: any): boolean %checks(val instanceof Node);
  declare export function isElement (val: any): boolean %checks(val instanceof HTMLElement);
  declare export function isChildNode (parent: Node, child: Node): boolean;
  declare export function isPosterityNode (parent: Node, child: Node): boolean;
  declare export function isHTMLString (val: string): boolean;
  declare export function isError (val: any): boolean %checks(val instanceof Error);
  declare export function isRegExp (val: any): boolean %checks(val instanceof RegExp);
}
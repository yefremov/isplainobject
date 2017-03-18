
/**
 * Expose `isPlainObject`.
 */

module.exports = isPlainObject;

/**
 * Test whether `value` is a plain object.
 *
 * @param {*} value
 * @returns {boolean}
 */

function isPlainObject(value) {
  return Object.getPrototypeOf(value) === null || Object === value.constructor;
}


/**
 * Expose `isObject`.
 */

module.exports = isObject;

/**
 * Test whether `V` is a plain object.
 *
 * @param {*} V
 * @returns {boolean}
 */

function isObject(V) {
  return Object === V.constructor;
}

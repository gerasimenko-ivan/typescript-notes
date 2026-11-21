export {};
/*
 * Typeof Null and Undefined
 *
 * The typeof operator returns "undefined" for undefined.
 * For null, it returns "object" as a historical JavaScript quirk.
 * null is not actually an object.
 */

const valueUndefined: undefined = undefined;
const valueNull: null = null;

// typeof
console.log(typeof valueUndefined); // Output: undefined
console.log(typeof valueNull);      // Output: object
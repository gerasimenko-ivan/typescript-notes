export {};
/*
 * Null and Undefined in Comparison
 *
 * null and undefined can be compared using loose or strict equality.
 * Here are examples of both comparisons.
 */

const valueUndefined: undefined = undefined;
const valueNull: null = null;

// Equality comparison
console.log(valueUndefined == valueNull);  // Output: true
console.log(valueUndefined === valueNull); // Output: false

/*
 * Strict equality (===) is safer when comparing values
 * that may be null or undefined because it does not
 * treat them as interchangeable.
 */
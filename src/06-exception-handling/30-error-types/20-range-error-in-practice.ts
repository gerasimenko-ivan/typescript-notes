export {};
/*
 * RangeError (in Practice)
 *
 * TypeScript automatically throws a RangeError
 * when an array is created with an invalid length.
 */

try {
    const items = new Array(-1);
    console.log(items);
} catch (error) {
    if (error instanceof RangeError) {
        console.error('Invalid array length:', error.message);
    }
}

/*
Output:
Invalid array length: Invalid array length
 */
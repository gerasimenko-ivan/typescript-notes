export {};
/*
 * RangeError
 *
 * A RangeError is thrown when a value is outside
 * the permitted range.
 */

function setPageSize(size: number): void {
    if (size < 1 || size > 100) {
        throw new RangeError('Page size must be between 1 and 100');
    }
    console.log(`Page size: ${size}`);
}

try {
    setPageSize(50); // Valid size
} catch (error) {
    console.error(error);
}

try {
    setPageSize(200); // Invalid size
} catch (error) {
    console.error(error);
    /*
     * Output:
     *   RangeError: Page size must be between 1 and 100
     *   and stack trace
     */
}
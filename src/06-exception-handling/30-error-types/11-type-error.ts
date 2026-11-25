export {};
/*
 * TypeError
 *
 * A TypeError is thrown when an operation receives
 * a value of an inappropriate type.
 */

function validateName(name: unknown): void {
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
    }
    console.log(`${name} name is valid`);
}

try {
    validateName('Tom'); // Name is valid
} catch (error) {
    console.error(error);
}

try {
    validateName(123);
} catch (error) {
    /*
     * Output:
     *   TypeError: Name must be a string
     *   and stack trace
     */
    console.error(error);
}
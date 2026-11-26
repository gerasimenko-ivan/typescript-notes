export {};
/*
 * TypeError (in Practice)
 *
 * JavaScript automatically throws a TypeError
 * when attempting to access a property or method
 * of a null or undefined value.
 */

try {
    const value: string | null = null;

    /*
     * ! suppresses TypeScript's nullability check
     * but does not change the runtime value
     */
    value!.toString(); // operation throws a TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.error('Invalid operation:', error.message);
    } else {
        /*
         * Rethrow unexpected errors.
         *
         * This else-block is not strictly necessary for this
         * particular example, but it demonstrates an important
         * practice: do not silently ignore unexpected errors.
         */
        throw error;
    }
}

/*
Output:
Invalid operation: Cannot read properties of null (reading 'toString')
 */
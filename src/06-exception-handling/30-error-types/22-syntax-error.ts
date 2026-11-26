export {};
/*
 * SyntaxError (in Practice)
 *
 * JavaScript automatically throws certain built-in
 * errors when an operation cannot be completed.
 *
 * A SyntaxError is thrown when parsing invalid JSON, for example
 */

try {
    JSON.parse('{ "name": "Tom" ');
} catch (error) {
    // narrowing error type:
    if (error instanceof SyntaxError) {
        console.error('Invalid JSON:', error.message);
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
Invalid JSON: Expected ',' or '}' after property value in JSON at position 16 (line 1 column 17)
 */
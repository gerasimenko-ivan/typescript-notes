export {};
/*
 * Built-in Error Types
 *
 * JavaScript provides several built-in error classes.
 * They all inherit from the base Error class.
 *
 * Use a specific error type when it describes
 * the reason for the failure more precisely, e.g.:
 *  - TypeError
 *  - RangeError
 *  - SyntaxError
 *  - ReferenceError
 *  - URIError
 *  - AggregateError
 *  - EvalError
 *  - and others
 */

/*
 * Generic error
 *
 * The error that has already been shown in previous examples:
 */
function loadData(): void {
    throw new Error('Unable to load data');
}

try {
    loadData();
} catch (error) {
    /*
     * Output:
     *   Error: Unable to load data
     *   and stack trace
     */
    console.error(error);
}
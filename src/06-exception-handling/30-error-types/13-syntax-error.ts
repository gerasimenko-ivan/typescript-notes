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
    if (error instanceof SyntaxError) {
        console.error('Invalid JSON:', error.message);
    }
}
/*
Output:
Invalid JSON: Expected ',' or '}' after property value in JSON at position 16 (line 1 column 17)
 */
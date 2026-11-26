export {};
/*
 * Narrowing Error Types with instanceof
 *
 * (this concept needs to be introduced before different error types)
 *
 * The instanceof operator checks whether an object
 * is an instance of a particular class.
 *
 * It can be used to distinguish different error types.
 */

function processUserInput(input: unknown): void {
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }

    if (input.length < 3) {
        throw new RangeError('Input must contain at least 3 characters');
    }

    console.log(`Processing input: ${input}`);
}

function handleUserInput(input: unknown): void {
    try {
        processUserInput(input);
    } catch (error) {
        // narrowing error type:
        if (error instanceof TypeError) {
            console.error('Invalid input type:', error.message);
        } else if (error instanceof RangeError) {
            console.error('Invalid input length:', error.message);
        } else if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
    }
}

handleUserInput('Tim'); // Successful execution

/*
 * TypeError
 * Output: Invalid input type: Expected a string
 */
handleUserInput(123);

/*
 * RangeError
 * Output: Invalid input length: Input must contain at least 3 characters
 */
handleUserInput('AB');
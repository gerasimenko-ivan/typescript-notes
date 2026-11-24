export {};
/*
 * Catch vs Finally
 *
 * finally does not replace catch
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }

    console.log(line);
}

/*
 * catch handles the error
 * finally executes regardless
 * Normal execution continues after the structure.
 */
try {
    printLine('');
} catch (error) {
    console.error(error);
} finally {
    console.log('Cleanup of try-catch-finally');
}

console.log('Normal execution continues after the correct try-catch structure.');

/*
 * finally executes regardless
 * The error propagates because there is no catch
 * Normal execution terminates if the error remains uncaught
 */
try {
    printLine('');
} finally {
    console.log('Cleanup of try-finally');
}

// Code below is not executed:
console.log('This code is not executed because the error remains uncaught.');
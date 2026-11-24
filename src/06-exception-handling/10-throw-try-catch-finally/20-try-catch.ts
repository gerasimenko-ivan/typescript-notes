export {};
/*
 * Try Catch
 *
 * 'try' defines a block of code that may throw an error.
 * 'catch' allows to handle the thrown error.
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }

    console.log(line);
}

try {
    printLine(''); // throws an error, terminating execution of the try-block
    console.log('This code in try-block is not executed.');
} catch (e) {
    console.log('Catch block execution');
    console.error(e);
}

/*
 * Although error was thrown it was handled by catch
 * so the code below continues execution:
 */
console.log('This code is executed.');
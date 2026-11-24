export {};
/*
 * Finally
 *
 * 'finally' block executes after try (and catch, if present),
 * regardless of whether an error occurred.
 *
 * It is useful for cleanup operations, such as:
 *  - closing database connections
 *  - releasing resources
 *  - clearing temporary state
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }

    console.log(line);
}

function tryPrintLine(line: string): void {
    try {
        printLine(line);
    } finally {
        console.log(`Finally is always called. Line: '${line}'`);
    }
}

tryPrintLine('Hello, world!');
tryPrintLine('');

/*
 * There is no catch-block, so the code below
 * is not executed after error in printLine()
 */
console.log('This code is not executed.');
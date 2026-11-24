export {};
/*
 * Throw
 *
 * 'throw' is used to throw an error.
 *
 * When an error is thrown, the current execution stops
 * and the error propagates up the call stack.
 *
 * If the error is not caught, normal program execution
 * is terminated.
 */

function printLine(line: string): void {
    if (line.length === 0) {
        throw new Error('Line is empty');
    }

    console.log(line);
}

printLine('Hello World'); // output: Hello World
printLine(''); // output: Error: Line is empty, and error trace

// Execution has stopped, so the code below is not executed:
console.log('This code is not executed');
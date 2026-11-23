export {};
/*
 * Function
 *
 * A function is a reusable piece of code which:
 *  - can receive parameters
 *  - can return a value
 *
 * A function can be called to execute its code.
 */

// no parameters, no return value
function helloWorld(): void {
    console.log('Hello World');
}
// call of the function
helloWorld(); // Output: Hello World


// one parameter, no return value
function helloAnything(anything: string): void {
    console.log(`Hello ${anything}`);
}
// call the function with an argument
helloAnything('Moon'); // Output: Hello Moon


// two parameters, and return value
function sum(a: number, b: number): number {
    return a + b;
}

// call the function with two arguments
let sum2And4 = sum(2, 4);

console.log(sum2And4); // Output: 6
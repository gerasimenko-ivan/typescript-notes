export {};
/*
 * String
 *
 * The string data type is used to represent text.
 *
 * There are three string literal delimiters in TypeScript.
 */

// Single quotes (' ')
const text1: string = 'Hello World';

console.log(text1);

// Double quotes (" ")
const text2: string = "It is a string";

console.log(text2);

// Backticks (` `) — template literals
const textMultiline: string = `Template literals allow multiline text:
New line starts here
Template literals also allow string interpolation: '${text1}'`;

console.log(textMultiline);
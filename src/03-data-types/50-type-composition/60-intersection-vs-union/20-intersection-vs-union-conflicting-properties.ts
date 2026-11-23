export {};
/*
 * Intersection VS Union - Conflicting Properties
 *
 * If combined types have a property with the same name but different type
 *   - Union allows the property to have either participating type
 *   - Intersection requires the property to satisfy both types
 *     If the types are incompatible, the property becomes never
 */

type Person = {
    id: number;
};

type Employee = {
    id: string;
};

type Union = Person | Employee;

const union1: Union = {
    id: 1,
};

const union2: Union = {
    id: 'one',
};

console.log(union1);
console.log(union2);

type Intersection = Person & Employee;

/*
 * Error: type number is not assignable to type never
 */
// const intersection: Intersection = {
//     id: 10, ❌ not allowed
// }
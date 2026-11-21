/*
 * Null and Undefined
 *
 * Key difference:
 *  - null - explicit absence of a value
 *  - undefined - missing or unassigned value
 */

interface Person {
    id: number;
    name: string;
}

/*
 * Null usage
 *
 * A function can return null to explicitly indicate
 * that a requested person was not found.
 */
function getPerson(id: number | undefined): Person | null {
    if (id === 1) {
        return { id: 1, name: 'Alice' };
    }
    if (id === 2) {
        return { id: 2, name: 'Ben' };
    }
    // Person was not found:
    return null;
}

console.log(getPerson(1));   // Output: { id: 1, name: 'Alice' }
console.log(getPerson(999)); // Output: null

/*
 * Undefined usage
 *
 * The person ID could come from an external system
 * and might be missing.
 */
const externalId: number | undefined = undefined;

console.log(getPerson(externalId)); // Output: null
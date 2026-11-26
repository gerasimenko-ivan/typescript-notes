export {};
/*
 * RangeError (in Practice)
 *
 * JavaScript automatically throws a RangeError
 * when an array is created with an invalid length.
 */

function createArray(length: number): unknown[] | null {
    try {
        // operation that may throw a RangeError
        const array = new Array(length);

        console.log(array);

        return array;
    } catch (error) {
        if (error instanceof RangeError) {
            console.error(`Invalid array length=${length}:`, error.message);
        } else {
            /*
             * Rethrow unexpected errors.
             *
             * This else-block is not strictly necessary for this
             * particular example, but it demonstrates an important
             * practice: do not silently ignore unexpected errors.
             */
            throw error;
        }
    }
    // Return null when array creation fails
    return null;
}

createArray(-1);
createArray(1.5);
createArray(10);

/*
Output:
Invalid array length=-1: Invalid array length
Invalid array length=1.5: Invalid array length
[ <10 empty items> ]
 */
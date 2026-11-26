export {};
/*
 * Basic Custom Error
 *
 * Developers can create custom error classes
 * by extending the built-in Error class.
 */

// Custom error - UserNotFoundError
class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message);

        /*
         * Human-readable kind of error.
         * Overrides Error.prototype.name (which defaults to 'Error')
         */
        this.name = 'UserNotFoundError';
    }
}

function fetchUser(id: number): string {
    if (id !== 12) {
        // throwing custom error, and providing error message through parameter
        throw new UserNotFoundError(`User id=${id} was not found`);
    }

    return 'Tom';
}

try {
    const user = fetchUser(13);
    console.log(user);
} catch (error) {
    // narrowing error type:
    if (error instanceof UserNotFoundError) {
        console.error(error);
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

/*
Output (message + stack trace):
UserNotFoundError: User id=13 was not found
    at fetchUser (...
 */
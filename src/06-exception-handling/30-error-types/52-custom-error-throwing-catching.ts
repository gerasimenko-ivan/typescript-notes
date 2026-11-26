export {};
/*
 * Throwing and Catching Custom Errors
 *
 * Custom error types can be identified using instanceof.
 * Different errors can be handled differently.
 */

// Classes are simplified here to focus on instanceof:
class UserNotFoundError extends Error {
    constructor(userId: number) {
        super(`User id=${userId} was not found`);
        this.name = 'UserNotFoundError';
    }
}

// Classes are simplified here to focus on instanceof:
class InvalidUserIdError extends Error {
    constructor(userId: number) {
        super(`Invalid user id=${userId}`);
        this.name = 'InvalidUserIdError';
    }
}

function fetchUser(id: number): string {
    /*
     * Using InvalidUserIdError
     * for negative values, floating point
     * user id should be positive integer
     */
    if (!Number.isInteger(id) || id <= 0) {
        throw new InvalidUserIdError(id);
    }

    /*
     * Using UserNotFoundError
     * for users which were not found (but id is valid)
     */
    if (id !== 12) {
        throw new UserNotFoundError(id);
    }

    return 'Tom';
}

function displayUser(id: number): void {
    try {
        const user = fetchUser(id);
        console.log(`Welcome, ${user}!`);
    } catch (error) {
        if (error instanceof InvalidUserIdError) {
            console.error('Please provide a valid user ID:', error.message);
        } else if (error instanceof UserNotFoundError) {
            console.error('User does not exist:', error.message);
        } else {
            throw error;
        }
    }
}

displayUser(12);  // Successful execution
displayUser(-1);  // InvalidUserIdError
displayUser(1.2); // InvalidUserIdError
displayUser(13);  // UserNotFoundError

/*
Output:
Welcome, Tom!
Please provide a valid user ID: Invalid user id=-1
Please provide a valid user ID: Invalid user id=1.2
User does not exist: User id=13 was not found
 */
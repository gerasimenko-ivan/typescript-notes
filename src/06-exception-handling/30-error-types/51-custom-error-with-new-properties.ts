export {};
/*
 * Custom Error with Additional Properties
 *
 * Custom errors can contain additional properties
 * that provide more information about the failure.
 */

class UserNotFoundError extends Error {
    /*
     * 1st new property
     * A stable error code for programmatic handling:
     */
    readonly code = 'USER_NOT_FOUND';
    /*
     * 2nd new property
     * User ID, it could be helpful for error handling:
     */
    public userId: number;

    /*
     * Note: unlike the previous example, this error builds its own
     * message from the userId. Callers can't pass a custom message.
     */
    constructor(userId: number) {
        super(`User id=${userId} was not found`);

        this.name = 'UserNotFoundError';
        this.userId = userId;
    }
}

function fetchUser(id: number): string {
    if (id !== 12) {
        throw new UserNotFoundError(id);
    }

    return 'Tom';
}

try {
    const user = fetchUser(13);
    console.log(user);
} catch (error) {
    if (error instanceof UserNotFoundError) {
        // custom properties allow developer to easily access error details:
        console.error('Error code:', error.code);
        console.error('User ID:', error.userId);
        console.error('Error message:', error.message);
    } else {
        throw error;
    }
}

/*
Output:
Error code: USER_NOT_FOUND
User ID: 13
Error message: User id=13 was not found
 */
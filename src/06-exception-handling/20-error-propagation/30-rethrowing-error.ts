export {};
/*
 * Rethrowing an Error
 *
 * A function can catch an error, perform some action,
 * and rethrow it so that a higher-level function
 * can handle it.
 */

interface User {
    id: number;
    name: string;
}

// Low-level function: retrieving a user from a database
function fetchUser(id: number): string {
    console.log(`Fetching user id=${id}...`);

    if (id === 12) {
        return 'Tom';
    }

    // Simulate a database error
    throw new Error(`Failed to retrieve user id=${id}: database connection failed`);
}

/*
 * Mid-level function: loading the user profile
 *
 * The mid-level function catches the error to log
 * additional context, then rethrows it.
 *
 * The finally-block ensures that the database connection
 * is closed regardless of whether the operation succeeds
 * or fails.
 */
function loadUserProfile(id: number): User {
    console.log(`Loading user id=${id} profile...`);

    try {
        console.log('Open database connection.');

        return {
            name: fetchUser(id),
            id,
        };
    } catch (error) {
        console.error(`Failed to load user id=${id} profile.`);
        throw error;
    } finally {
        console.log('Close database connection.');
    }
}

/*
 * High-level function: handling the user interface operation
 * provides additional error handling and error comment
 */
function displayUserProfile(id: number): void {
    try {
        const user = loadUserProfile(id);
        console.log(`Welcome, ${user.name}!`);
    } catch (error) {
        console.error(`Unable to display user id=${id} profile:`, error);
    }
}

displayUserProfile(12); // Successful execution

console.log();

displayUserProfile(13); // Gracefully handling error

console.log('Program continues execution.');

/* Output:

Loading user id=12 profile...
Open database connection.
Fetching user id=12...
Close database connection.
Welcome, Tom!

Loading user id=13 profile...
Open database connection.
Fetching user id=13...
Failed to load user id=13 profile.
Close database connection.
Unable to display user id=13 profile: Error: Failed to retrieve user id=13: database connection failed
...
Program continues execution.
 */
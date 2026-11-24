export {};
/*
 * Catching Errors at a Higher Level
 *
 * Lower-level functions do not need to catch errors
 * if they cannot handle them meaningfully.
 *
 * The error propagates up the call stack until
 * a higher-level function catches it.
 */

interface User {
    id: number;
    name: string;
}

// Low-level function: retrieving a user from a database (no error handling)
function fetchUser(id: number): string {
    console.log(`Fetching user id=${id}...`);

    if (id === 12) {
        return 'Tom';
    }

    // Simulate a database error
    throw new Error(`Failed to retrieve user id=${id}: database connection failed`);
}

// Mid-level function: preparing the user profile (no error handling)
function loadUserProfile(id: number): User {
    console.log(`Loading user id=${id} profile...`);

    return {
        name: fetchUser(id),
        id,
    };
}

/*
 * High-level function: handling the user interface operation
 * including errors
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

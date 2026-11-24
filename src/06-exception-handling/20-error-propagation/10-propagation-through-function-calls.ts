export {};
/*
 * Error Propagation
 *
 * When an error is thrown, it propagates up the call stack
 * until it is caught or remains uncaught.
 *
 * Intermediate functions do not need to catch and rethrow
 * errors unless they have a reason to handle them.
 */

interface User {
    name: string;
    id: number;
}

// Low-level function: retrieving data from DB (Database)
function fetchUser(id: number): string {
    console.log(`Fetching user ${id}...`);
    throw new Error('Database connection failed');
}

// Mid-level function: arranging data to return as User interface
function loadUserProfile(id: number): User {
    return {
        name: fetchUser(id),
        id,
    };
}

// High-level operations:
const userId = 13;

try {
    const user: User = loadUserProfile(userId);
    console.log(user);
} catch (error) {
    console.error('Unable to display user profile:', error);
}

console.log('Program continues execution.');

/*
Output demonstrates error propagation:

The stack trace starts at the location where the error
was created (fetchUser) and includes the calling functions
through which the error propagated.

the lowest level: at fetchUser, file 10-propagation-through-function-calls.ts:20:11
  20:11 - line 20, column 11 'new Error('Database...'
the highest level: file 10-propagation-through-function-calls.ts:35:24

Output:
Fetching user 13...
Unable to display user profile: Error: Database connection failed
    at fetchUser (file:/.../10-propagation-through-function-calls.ts:20:11)
    at loadUserProfile (file:/.../10-propagation-through-function-calls.ts:26:15)
    at file:/.../10-propagation-through-function-calls.ts:35:24
    ...
Program continues execution.
 */
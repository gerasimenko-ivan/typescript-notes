export {};
/*
 * Rethrowing an Error
 *
 * An error can be caught to add context or perform some action,
 * then rethrown so a higher-level caller can handle it.
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
    try {
        return {
            name: fetchUser(id),
            id: id,
        };
    } catch (error) {
        console.error('Failed to load user profile', error);
        throw error;
    }
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
export {};
/*
 * Intersection (&) requires a value to satisfy all participating types.
 *
 * Union (|) requires a value to satisfy at least one of the
 * participating types. A value can satisfy several union types
 * simultaneously.
 */

type Person = {
    name: string;
};

type Employee = {
    employeeId: number;
};

// intersection (AND)
type EmployeePerson = Person & Employee;

const employeePerson1: EmployeePerson = {
    name: 'Alex',
    employeeId: 1,
}

console.log(employeePerson1);

/*
 * The assignment below is invalid because an EmployeePerson
 * must satisfy both Person and Employee.
 */
// const employeePerson2: EmployeePerson = {
//     name: 'Alex',
// }

// union (OR)
type EmployeeOrPerson = Person | Employee;

const employeeOrPerson1: EmployeeOrPerson = {
    name: 'Bob',
}

const employeeOrPerson2: EmployeeOrPerson = {
    employeeId: 3,
}

const employeeOrPerson3: EmployeeOrPerson = {
    name: 'Lin',
    employeeId: 4,
}

console.log(employeeOrPerson1);
console.log(employeeOrPerson2);
console.log(employeeOrPerson3);
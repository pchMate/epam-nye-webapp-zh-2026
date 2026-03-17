export const employees = [
    { id: 1, name: "Anikó", role: "Developer", salary: 900000 },
    { id: 2, name: "Gergő", role: "Designer", salary: 750000 },
    { id: 3, name: "Zoltán", role: "Developer", salary: 1100000 },
    { id: 4, name: "Eszter", role: "Manager", salary: 1200000 },
    { id: 5, name: "Dávid", role: "Developer", salary: 850000 }
];

/**
 * Task 1: Find The High Rollers
 * Return an array of names of employees who earn more than the given limit.
 */
export function getHighEarners(staff, limit) {
    const filterSalary = staff.filter(emp => emp.salary >= limit)
    return filterSalary.map(emp => emp.name);
}

/**
 * Task 2: Status Update
 * The company is having a 'Developer' bonus day.
 * Increase the salary of all "Developer" roles by 10%.
 * Return the updated array.
 */
export function applyDevBonus(staff) {
    const newBonues = structuredClone(staff);
    for (let index = 0; index < newBonues.length; index++) {
        const element = newBonues[index];
        if (element.role == "Developer")
            element.salary = Math.floor(element.salary * 1.10);
        
    }
    return newBonues;
}

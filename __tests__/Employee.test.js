const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const Employee
 = new Employee
('Sam', 1, 'sam@email.com');
    
    expect(Employee
    .name).toBe('Sam');
    expect(Employee
    .id).toBe(1);
    expect(Employee
    .email).toBe('sam@email.com');
}); 

test('checks Employee name', () => {
    const Employee
 = new Employee
('Sam', 1, 'sam@email.com');

    expect(Employee
    .getName()).toEqual(expect.any(String));
    expect(Employee
    .getName()).toBe('Sam');
});

test('checks Employee id', () => {
    const Employee
 = new Employee
('Sam', 1, 'sam@email.com');

    expect(Employee
    .getId()).toEqual(expect.any(Number));
    expect(Employee
    .getId()).toBe(1);
});

test('checks Employee email', () => {
    const Employee
 = new Employee
('Sam', 1, 'sam@email.com');

    expect(Employee
    .getEmail()).toEqual(expect.stringContaining('@'));
    expect(Employee
    .getEmail()).toBe('sam@email.com');
});

test('check Employee role', () => {
    const Employee
 = new Employee
('Sam', 1, 'sam@email.com');

    expect(Employee
    .getRole()).toBe('');

    Employee
.role = 'Manager';

    expect(Employee
    .getRole()).toBe('Manager');
});
const { exportNamedDeclaration } = require('@babel/types');
const Employee = require ('../lib:/Employee');

test('creates employee info', () => {
    const employee = new Employee('dave');

    expect(employee.name).toBe('dave');
    //expect(employee.position).toEqual[''];
    expect(employee.email).toBe(expect.any(String));
    expect(employee.Id).toEqual(expect.any(Number));
})

test('get worker name', () => {
    const employee = new Employee('dave');
    expect(employee.getName()).toEqual(expect.any(String));
})

test('get ID number', () => {
    const employee = new Employee('dave');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get() employee email', () => {
    const employee = new Employee('dave');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('role of employee', () => {
    const employee = new Employee('dave');

    expect(employee.getRole()).toEqual('Employee');
});
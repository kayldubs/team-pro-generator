const Intern = require('../lib:/Manager');

test('create manager object', () => {
    const manager = new Manager('dave');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('employee role', () => {
    const manager = new Manager('dave');

    expect(manager.getRole()).toEqual('Manager'); 
});
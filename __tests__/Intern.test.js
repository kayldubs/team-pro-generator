const Intern = require('../lib:/Intern');

test('create intern object', () => {
    const intern = new Intern('dave');

    expect(intern.school).toEqual(expect.any(String));
});

test('get school', () => {
    const intern = new Intern('dave');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('employee role', () => {
    const intern = new Intern('dave');

    expect(intern.getRole()).toEqual('Intern'); 
});
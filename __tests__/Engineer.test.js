const Engineer = require('../lib:/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('dave');

    expect(engineer.github).toEqual(expect.any(String));
});
test('github value', () => {
    const engineer = new Engineer('dave');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test('employee role', () => {
    const engineer = new Engineer('dave');

    expect(engineer.getRole()).toEqual('Engineer'); 
});
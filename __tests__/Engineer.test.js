const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Cassie', 30, 'cassie.s.simpson@gmail.com', 'cassie-s');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Cassie', 20, 'cassie.s.simpson@gmail', 'cassie-s');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Cassie', 10, 'cassie.s.simpson@gmail', 'cassie-s');

    expect(engineer.getRole()).toEqual("Engineer");
});

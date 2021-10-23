const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('Cassie', 30, 'cassie.s.simpson@gmail.com', 'Bethel University');

    expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets school value', () => {
    const intern = new Intern('Cassie', 30, 'cassie.s.simpson@gmail.com', 'Bethel University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const intern = new Intern('Cassie', 10, 'cassie.s.simpson@gmail', 'cassie-s');

    expect(intern.getRole()).toEqual("Intern");
});

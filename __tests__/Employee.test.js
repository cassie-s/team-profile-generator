const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Cassie', 20, 'cassie.s.simpson@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('Cassie', 20, 'cassie.s.simpson@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Cassie', 20, 'cassie.s.simpson@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Cassie', 20, 'cassie.s.simpson@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Cassie', 20, 'cassie.s.simpson@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
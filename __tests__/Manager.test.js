const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Cassie', 90, 'cassie.s.simpson@gmail', 100);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//gets office number from getOfficeNumber()
test('gets office number', () => {
    const testValue = 100;
    const manager = new Manager('Cassie', 90, 'cassie.s.simpson@gmail.com', 100);

    expect(manager.getOfficeNumber()).toBe(testValue);
})

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Cassie', 90, 'cassie.s.simpson@gmail.com', 100);

    expect(manager.getRole()).toEqual("Manager");
}); 

const manager = require("../lib/manager");
const standard_employee = require("../lib/standard_employee");

test("Set office number through constructor", () => {
  const testValue = 100;
  const Emp = new manager("Foo", 1, "j.smith@test.com.au", testValue);
  expect(Emp.officeNumber).toBe(testValue);
});

test("getRole() should return \"manager\"", () => {
  const testValue = "manager";
  const Emp = new manager("Foo", 1, "j.smith@test.com.au", 100);
  expect(Emp.getRole()).toBe(testValue);
});

test("Accessing office number through function getOffice()", () => {
  const testValue = 100;
  const Emp = new manager("Foo", 1, "j.smith@test.com.au", testValue);
  expect(Emp.getOfficeNumber()).toBe(testValue);
});
test("Accessing floor level through function getFloor()", () => {
    const testValue = 100;
    const Emp = new manager("Foo", 1, "j.smith@test.com.au", testValue);
    expect(Emp.getFloor()).toBe(testValue);
});

test("Accessing department through function getDepartment()", ()=>{

    const testValue = 100;
    const Emp = new manager("Foo", 1, "j.smith@test.com.au", testValue);
    expect(Emp.getDepartment()).toBe(testValue);

});
  
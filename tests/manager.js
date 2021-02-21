const manager = require("../lib/manager");
const standard_employee = require("../lib/standard_employee");

test("Set office number through constructor", () => {
  const value = 100;
  const Emp = new manager("Foo", 1, "j.smith@test.com.au", value);
  expect(Emp.officeNumber).toBe(value);
});

test("getRole() should return \"manager\"", () => {
  const value = "manager";
  const Emp = new manager("Foo", 1, "j.smith@test.com.au", 100);
  expect(Emp.getRole()).toBe(value);
});

test("Accessing  through function getOffice()", () => {
  const value = 100;
  const Emp = new manager("Foo", 1, "j.smith@test.com.au", value);
  expect(Emp.getOffice()).toBe(value);
});
test("Accessing floor level through function getFloor()", () => {
    const value = 100;
    const Emp = new manager("Foo", 1, "j.smith@test.com.au", testValue);
    expect(Emp.getFloor()).toBe(value);
});

test("Accessing department through function getDepartment()", ()=>{

    const value = "department";
    const Emp = new manager("Foo", 1, "j.smith@test.com.au", value);
    expect(Emp.getDepartment()).toBe(value);

});
  
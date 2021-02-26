const manager = require("../lib/manager");
const standard_employee = require("../lib/standard_employee");

test("Can set Department via constructor argument", () => {
  const value = "department";
  const Emp = new manager("Foo", 1, "test@test.com", value);
  expect(Emp.department).toEqual(value);
});

test("getRole() should return \"manager\"", () => {
  const value = "manager";
  const Emp = new manager("Foo", 1, "j.smith@test.com.au",value);
  expect(Emp.getRole()).toEqual(value);
});



test("Accessing department through function getDepartment()", ()=>{

    const value = "department";
    const Emp = new manager("Foo", 1, "j.smith@test.com.au", value);
    expect(Emp.getDepartment()).toEqual(value);

});
  
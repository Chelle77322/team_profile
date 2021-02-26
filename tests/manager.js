const manager = require("../lib/manager");
const standard_employee = require("../lib/standard_employee");

test("Can set Department via constructor argument", () => {
  const value = "Web Design and Development";
  const e = new Manager("Foo", 1, "test@test.com", value);
  expect(e.officeNumber).toBe(value);
});

test("getRole() should return \"manager\"", () => {
  const value = "manager";
  const Emp = new manager("Foo", 1, "j.smith@test.com.au","Web Design and Development");
  expect(Emp.getRole()).toBe(value);
});



test("Accessing department through function getDepartment()", ()=>{

    const value = "Web Design and Development";
    const Emp = new manager("Foo", 1, "j.smith@test.com.au", value);
    expect(Emp.getDepartment()).toBe(value);

});
  
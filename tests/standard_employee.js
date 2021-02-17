const standard_employee = require("../lib/standard_employee");

test("Start new standard_employee check", () => {
  const Emp = new standard_employee();
  expect(typeof(Emp)).toBe("object");
});

test("Setting name id via constructor", () => {
  const name = "Joanne Smith";
  const Emp = new standard_employee(name);
  expect(Emp.name).toBe(name);
});

test("Setting id value via constructor", () => {
  const testValue = 100;
  const Emp = new standad_employee("Foo", testValue);
  expect(Emp.id).toBe(testValue);
});

test("Setting email via constructor", () => {
  const testValue = "j.smith@test.com.au";
  const Emp = new Employee("Foo", 1, testValue);
  expect(Emp.email).toBe(testValue);
});

test("Accessing name through function getName()", () => {
  const testValue = "Joanne Smith";
  const Emp = new standad_employee(testValue);
  expect(Emp.getName()).toBe(testValue);
});

test("Accessing id through function getId()", () => {
  const testValue = 100;
  const Emp = new standard_employee("Foo", testValue);
  expect(Emp.getId()).toBe(testValue);
});

test("Accessing email through function getEmail()", () => {
  const testValue = "j.smith@test.com.au";
  const Emp = new standard_employee("Foo", 1, testValue);
  expect(Emp.getEmail()).toBe(testValue);
});

test("getRole() should return \"standard_employee\"", () => {
  const testValue = "standard_employee";
  const Emp = new standard_employee("Joanne Smith", 1, "j.smith@test.com.au");
  expect(Emp.getRole()).toBe(testValue);
});
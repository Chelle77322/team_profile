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
  const value = 100;
  const Emp = new standad_employee("Foo", value);
  expect(Emp.id).toBe(value);
});

test("Setting email via constructor", () => {
  const value = "j.smith@test.com.au";
  const Emp = new Employee("Foo", 1, value);
  expect(Emp.email).toBe(value);
});

test("Accessing name through function getName()", () => {
  const value = "Joanne Smith";
  const Emp = new standad_employee(value);
  expect(Emp.getName()).toBe(value);
});

test("Accessing id through function getId()", () => {
  const value = 100;
  const Emp = new standard_employee("Foo", value);
  expect(Emp.getId()).toBe(value);
});

test("Accessing email through function getEmail()", () => {
  const value = "j.smith@test.com.au";
  const Emp = new standard_employee("Foo", 1, value);
  expect(Emp.getEmail()).toBe(value);
});

test("getRole() should return \"standard_employee\"", () => {
  const value = "standard_employee";
  const Emp = new standard_employee("Joanne Smith", 1, "j.smith@test.com.au");
  expect(Emp.getRole()).toBe(value);
});
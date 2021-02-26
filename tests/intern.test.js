const intern = require("../lib/intern");
const standard_employee = require ("../lib/standard_employee");

test("Set University or TAFE through constructor", () => {
  const value = "uni";
  const Emp = new intern("Foo", 1, "j.smith@test.sa.edu.au", value);
  expect(Emp.uni).toEqual(value);
});

test("getRole() should return \"intern\"", () => {
  const value = "intern";
  const Emp = new intern("Foo", 1, "j.smith@test.sa.edu.au",value);
  expect(Emp.getRole()).toEqual(value);
});

test("Accessing school throughh the function getSchool()", () => {
  const value = "uni";
  const Emp = new intern("Foo", 1, "test@test.com", value);
  expect(Emp.getUniversity()).toEqual(value);
});
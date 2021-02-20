const standard_employee = require("../lib/standard_employee");
const engineer = require("../lib/engineer");

test("set Git Hub user value through constructor", () => {
  const testValue = "GitHub";
  const Emp = new engineer("Foo", 1, "test@github.io", testValue);
  expect(Emp.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
  const testValue = "engineer";
  const Emp = new engineer("Foo", 1, "test@github.io", GitHub);
  expect(Emp.getRole()).toBe(testValue);
});

test("Accessing github user name through function getGithub()", () => {
  const testValue = "GitHub";
  const Emp = new Engineer("Foo", 1, "test@github.io", testValue);
  expect(Emp.getGithub()).toBe(testValue);
});
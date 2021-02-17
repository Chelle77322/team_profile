const Engineer = require("../lib/web_developer");
const standard_employee = require("../lib/standard_employee");
const web_developer = require("../lib/web_developer");

test("set Git Hub user value through constructor", () => {
  const testValue = "GitHub";
  const Emp = new web_developer("Foo", 1, "test@github.io", testValue);
  expect(Emp.github).toBe(testValue);
});

test("getRole() should return \"web_developer\"", () => {
  const testValue = "web_developer";
  const Emp = new web_developer("Foo", 1, "test@github.io", GitHub);
  expect(Emp.getRole()).toBe(testValue);
});

test("Accessing github user name through function getGithub()", () => {
  const testValue = "GitHub;
  const Emp = new Engineer("Foo", 1, "test@github.io", testValue);
  expect(Emp.getGithub()).toBe(testValue);
});
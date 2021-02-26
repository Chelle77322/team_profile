const standard_employee = require("../lib/standard_employee");
const web_developer = require("../lib/web_developer");

test("set Git Hub user value through constructor", () => {
  const value = "git";
  const Emp = new web_developer("Foo", 1, "test@github.io", value);
  expect(Emp.git).toEqual(value);
});

test("getRole() should return \"web_developer\"", () => {
  const value = "web_developer";
  const Emp = new web_developer("Foo", 1, "test@github.io", value);
  expect(Emp.getRole()).toEqual(value);
});

test("Accessing github user name through function getGithub()", () => {
  const value = "git";
  const Emp = new web_developer("Foo", 1, "test@github.io", value);
  expect(Emp.getGit()).toEqual(value);
});
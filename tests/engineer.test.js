
const engineer = require("../lib/engineer");

test("set Git Hub user value through constructor", () => {
  const value = " gitHubUser";
  const Emp = new engineer("Foo", 1, "test@github.io", value);
  expect(Emp.github).toEqual(value);
});

test("getRole() should return \"engineer\"", () => {
  const value = "engineer";
  const Emp = new engineer("Foo", 1, "test@github.io", "gitHubUser");
  expect(Emp.getRole()).toBe(value);
});

test("Accessing github user name through function getGithub()", () => {
  const value = "gitHubUser";
  const Emp = new engineer("Foo", 1, "test@github.io", value);
  expect(Emp.getGitHub()).toBe(value);
});
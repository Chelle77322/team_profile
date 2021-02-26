const work_experience = require("../lib/work_experience");
const standard_employee = require("../lib/standard_employee");

test("Set high school through constructor", () => {
  const value = "school ";
  const Emp = new work_experience("Foo", 1, "j.smith@test.sa.edu.au", value);
  expect(Emp.school).toEqual(value);
});

test("getRole() should return \"work_experience\"", () => {
  const value = "work_experience";
  const Emp = new work_experience("Foo", 1, "test@test.com.au", value);
  expect(Emp.getRole()).toEqual(value);
});

test("Accessing school through the function getSchool()", () => {
  const value = "school";
  const Emp = new work_experience("Foo", 1, "test@test.com.au", value);
  expect(Emp.getSchool()).toEqual(value);
});
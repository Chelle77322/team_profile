const intern = require("../lib/work_experience");

test("Set University or TAFE through constructor", () => {
  const testValue = "University of Adelaide";
  const Emp = new intern("Foo", 1, "j.smith@test.sa.edu.au", testValue);
  expect(Emp.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
  const testValue = "intern";
  const Emp = new intern("Foo", 1, "j.smith@test.sa.edu.au", "UCLA");
  expect(Emp.getRole()).toBe(testValue);
});

test("Accessing school throughh the function getSchool()", () => {
  const testValue = "University of Adelaide";
  const Emp = new work_experience("Foo", 1, "test@test.com", testValue);
  expect(Emp.getSchool()).toBe(testValue);
});
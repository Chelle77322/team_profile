const line_manager = require("../lib/line_manager");
const standard_employee = require("../lib/standard_employee");

test("Set office number through constructor", () => {
  const testValue = 100;
  const e = new line_manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"line_manager\"", () => {
  const testValue = "line_manager";
  const e = new line_manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Accessing office number through function getOffice()", () => {
  const testValue = 100;
  const e = new line_manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
test("Accessing floor level through function getFloor()", () => {
    const testValue = 100;
    const e = new line_manager("Foo", 1, "test@test.com", testValue);
    expect(e.getFloor()).toBe(testValue);
  });
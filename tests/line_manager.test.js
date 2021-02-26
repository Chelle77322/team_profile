const line_manager = require("../lib/line_manager");



describe("floorLevel", () => {
  const value = parseInt('00');
  const Emp = new line_manager("Foo", 1,  value );
  expect(Emp.floorLevel).toEqual(value);
});

test("getRole() should return \"line_manager\"", () => {
  const value = "line_manager";
  const Emp = new line_manager("Foo", 1, "test@test.com",value);
  expect(Emp.getRole()).toEqual(value);
});

test("Accessing office number through function getOffice()", () => {
  const value = parseInt('000000000');
  const Emp = new line_manager("Foo", 1, "test@test.com", value);
  expect(Emp.getOfficeNumber()).toEqual(value);
});
test("Accessing floor level through function getFloor()", () => {
    const value = parseInt(10);
    const Emp = new line_manager("Foo", 1, "test@test.com", value);
    expect(Emp.getfloorLevel()).toEqual(value);
  });
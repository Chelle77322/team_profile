const standard_employee = require("../lib/standard_employee");

test("Start new standard_employee check", () => {
  const Emp = new standard_employee();
  expect(typeof(Emp)).toBe("object");
});

test("Setting name id via constructor", () => {
  const name = "Joanne Smith";
  const Emp = new standard_employee(name);
  expect(Emp.name).toEqual(name);
});

test("Setting id value via constructor", () => {
  const value = 100;
  const Emp = new standard_employee("Foo", value);
  expect(Emp.id).toEqual(value);
});

test("Setting email via constructor", () => {
  const value = "j.smith@test.com.au";
  const Emp = new standard_employee("Foo", 1, value);
  expect(Emp.email).toEqual(value);
});

test("Setting classification via constructor", () => {
  const value = "ASO 00";
  const Emp = new standard_employee("Foo", 1,value);
  expect(Emp.classification).toEqual(value);
});

test("Setting Office Phone Number via constructor", () => {
  const value = parseInt('00000000');
  const Emp = new standard_employee("Foo", 1,value);
  expect(Emp.officeNumber).toEqual(value);
});

test("Accessing name through function getName()", () => {
  const value = "Joanne Smith";
  const Emp = new standard_employee(value);
  expect(Emp.getName()).toEqual(value);
});

test("Accessing id through function getId()", () => {
  const value = 100;
  const Emp = new standard_employee("Foo", value);
  expect(Emp.getId()).toEqual(value);
});

test("Accessing email through function getEmail()", () => {
  const value = "j.smith@test.com.au";
  const Emp = new standard_employee("Foo", 1, value);
  expect(Emp.getEmail()).toEqual(value);
});


test("Accessing Classification", () => {
  const value = "ASO 00 ";
  const Emp = new standard_employee("Joanne Smith", 1,value);
  expect(Emp.getClassification()).toEqual(value);
});

test("Accessing Office Number", () => {
  const value = parseInt('00000000');
  const Emp = new standard_employee("Joanne Smith", 1, value);
  expect(Emp.getOfficeNumber()).toEqual(value);
});

test("getRole() should return \"standard_employee\"", () => {
  const value = "standard_employee";
  const Emp = new standard_employee("Joanne Smith", 1,"j.smith@test.test.com.au", value);
  expect(Emp.getRole()).toEqual(value);
});
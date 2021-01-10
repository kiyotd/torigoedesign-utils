import { getType } from "../../src";

test("getType 123 valid", () => {
  expect(getType(123)).toBe("Number");
});

test('getType "sample" valid', () => {
  expect(getType("sample")).toBe("String");
});

test("getType true valid", () => {
  expect(getType(true)).toBe("Boolean");
});

test("getType [] valid", () => {
  expect(getType([])).toBe("Array");
});

test("getType {} valid", () => {
  expect(getType({})).toBe("Object");
});

test("getType NaN valid", () => {
  expect(getType(NaN)).toBe("NaN");
});

test("getType Infinity valid", () => {
  expect(getType(Infinity)).toBe("Infinity");
  expect(getType(-Infinity)).toBe("Infinity");
});

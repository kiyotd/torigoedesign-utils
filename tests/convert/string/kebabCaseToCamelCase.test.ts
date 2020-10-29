import { kebabCaseToCamelCase } from "../../../src";

test("test 1", () => {
  expect(kebabCaseToCamelCase("set-user-name")).toBe("setUserName");
});

test("test 2", () => {
  expect(kebabCaseToCamelCase("user")).toBe("user");
});

test("test 3", () => {
  expect(kebabCaseToCamelCase("-user")).toBe("User");
});

test("test 4", () => {
  expect(kebabCaseToCamelCase(" set-user-name ")).toBe(" setUserName ");
});

test("test 5", () => {
  expect(kebabCaseToCamelCase("--name")).toBe("-Name");
});

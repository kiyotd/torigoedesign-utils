import { isEmail } from "../../src"

test("email example@example.com valid", () => {
  expect(isEmail("example@example.com")).toBe(true)
})

test("Empty string not valid", () => {
  expect(isEmail("")).toBe(false)
})

test("No double @ in an email", () => {
  expect(isEmail("exa@mple@example.com")).toBe(false)
})

test("not trimed email to be false", () => {
  expect(isEmail(" example@example.com ")).toBe(false)
})

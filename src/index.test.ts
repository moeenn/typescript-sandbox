import { main } from "."

test("entity position", async () => {
  const expected = "(30, 10)"
  const got = await main()
  expect(got).toBe(expected)
})

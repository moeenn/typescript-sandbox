import { describe, it, expect } from "vitest"
import { main } from "."

describe("hello message", () => {
  it("returns hello message", () => {
    const expected = "Hello world"
    const got = main()
    
    expect(got).toBe(expected)
  })
})

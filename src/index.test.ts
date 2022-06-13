import { main } from "."
import { describe, it, expect } from "vitest"

describe("hello message", () => {
  it("returns hello message", () => {
    const expected = "Hello world"
    const got = main()
    
    expect(got).toBe(expected)
  })
})

import { main } from "./index"

describe("hello message", () => {
  it("returns hello message", () => {
    const expected = "Hello world"
    const got = main()
    
    expect(got).toBe(expected)
  })
})

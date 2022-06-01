import { main } from "./index"

describe("hello message", () => {
  it("prints out hello message", () => {
    expect(main()).toBe("Hello world")
  })
})

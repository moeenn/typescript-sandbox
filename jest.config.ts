import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/build/"],
}

export default config
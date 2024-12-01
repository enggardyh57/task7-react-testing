import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // Menentukan preset ts-jest
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Menyaring file .tsx dan .ts untuk menggunakan ts-jest
  },
};

export default config;

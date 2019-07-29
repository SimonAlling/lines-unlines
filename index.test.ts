import { check } from "jest-function";
import { lines, unlines } from "./index"; // to import TypeScript source

it("implements Haskell's lines", () => {
  check(lines).against([
    // Taken straight from the Data.String documentation:
    { in: "", out: [] },
    { in: "\n", out: [""] },
    { in: "one", out: ["one"] },
    { in: "one\n", out: ["one"] },
    { in: "one\n\n", out: ["one", ""] },
    { in: "one\ntwo", out: ["one", "two"] },
    { in: "one\ntwo\n", out: ["one", "two"] },
    // Not from the documentation:
    { in: "\n\n", out: ["", ""] },
    { in: "\none\n", out: ["", "one"] },
  ]);
});

it("implements Haskell's unlines", () => {
  check(unlines).against([
    { in: [], out: "" },
    { in: [""], out: "\n" },
    { in: ["one"], out: "one\n" },
    { in: ["one", ""], out: "one\n\n" },
    { in: ["one", "two"], out: "one\ntwo\n" },
    { in: ["", ""], out: "\n\n" },
    { in: ["", "one"], out: "\none\n" },
    { in: ["", "one", ""], out: "\none\n\n" },
  ]);
});

import assert from "assert";
import { task } from "../build/debug.js";
assert.strictEqual(task(1, 2, 3), true);
assert.strictEqual(task(1, 2, 5), false);
console.log("ok");

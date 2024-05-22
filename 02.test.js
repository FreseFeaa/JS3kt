const test = require("node:test");
const assert = require("node:assert");

const { changeElem } = require("./02.js");

test("Умнажение массива на число", () => {
    assert.deepStrictEqual(changeElem([ 1, 2, 3, 4], 3), [ 3, 6, 9, 12 ])
    assert.deepStrictEqual(changeElem([ 1, 2, 3, 4], 0), [ 0, 0, 0, 0 ])
    assert.deepStrictEqual(changeElem([ 1, 2, 3, 4], 1), [ 1, 2, 3, 4 ])
    assert.deepStrictEqual(changeElem([ 1, 2, 3, 4], -1), [ -1, -2, -3, -4 ])
  });

  
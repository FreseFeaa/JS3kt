const test = require("node:test");
const assert = require("node:assert");

const { checkElem } = require("./01.js");

test("Деление на 7 без остатка", () => {
    assert.strictEqual(checkElem(11), false);
    assert.strictEqual(checkElem(14), true);
    assert.strictEqual(checkElem(-7), false);
    assert.strictEqual(checkElem(0), false);
    assert.strictEqual(checkElem(3), false);
  });

  
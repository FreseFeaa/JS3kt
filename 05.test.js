const test = require("node:test");
const assert = require("node:assert");

const { checkElem } = require("./05.js");

test("Проверка callbackoм на 3", () => {
    assert.deepStrictEqual(checkElem([1, 2, 3, 4], (elem) => elem === 3), true)
    assert.deepStrictEqual(checkElem([1, 2, 2, 4], (elem) => elem === 3), false)
    assert.deepStrictEqual(checkElem([1, 'a', 3, 4], (elem) => elem === 'a'), true)
    assert.deepStrictEqual(checkElem([-1, 3, 3, 3], (elem) => elem === -1), true)
  });

  
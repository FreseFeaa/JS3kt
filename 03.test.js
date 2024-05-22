const test = require("node:test");
const assert = require("node:assert");

const { sumElems } = require("./03.js");

test("Смотреть на массив, узнавать числа, искать сумма", () => {
    assert.deepStrictEqual(sumElems(['10', 'Строка', '5g', '15', '05']), 30)
    assert.deepStrictEqual(sumElems(['20', 'Ку', '5', '10', '0005']), 40)
    assert.deepStrictEqual(sumElems(['Я', 'Люблю', 'Котят', '!!!', '1']), 1)
    assert.deepStrictEqual(sumElems(['1а', '2б', '3в', '4г', '5д']), 0)
    assert.deepStrictEqual(sumElems(['-7', '+7', '44к', 'ммм5555', 'й']), 0)
  });

  
function checkElem(array, callback) {
    return array.some(callback);
}

let array = [1, 2, 3, 4];
let result = checkElem(array, (elem) => elem === 3);
console.log(result);

module.exports = { checkElem };
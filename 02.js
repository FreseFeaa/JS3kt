
let array = [1, 2, 3, 4];
function changeElem(array, n) {
    let newArray = array.map(item => item * n);
    return newArray;

}
let result = changeElem(array, 3);
console.log(result);


module.exports = { changeElem };
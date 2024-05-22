
function sumElems(array) {
    let sum = 0;
    array.forEach(item => {
        let num = Number(item);
        if (!Number.isNaN(num)) {
            sum += num;
        }
    });
    return sum;
}

let array = ['10', 'Строка', '5g', '15', '05'];
let result = sumElems(array);
console.log(result);

module.exports = { sumElems };
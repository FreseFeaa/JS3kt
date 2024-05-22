const prompt = require('prompt-sync')()
const numb = +prompt ('Введите число для проверки делимости на 7:') 
function checkElem(num) {
    if (num<7){
        return false;
    }else{
        if (num % 7 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
}
console.log(checkElem(numb))

module.exports = { checkElem };
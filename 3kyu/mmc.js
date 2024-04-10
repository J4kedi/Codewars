
var assert = require('assert');

//
// Função mmc
//
var mmc = function(num1, num2) {
    var resto, a, b;

    a = num1;
    b = num2;

    do {
        resto = a % b;

        a = b;
        b = resto;

    } while (resto != 0);

    return (num1 * num2) / a;
}


console.log(mmc(12, 20))

//
// Testes
//
try {

    // 2 * 2 * 3 * 5 = 60
    console.log(assert.equal(60, mmc(12, 20)))

} catch(e) {
    console.log(e);
}
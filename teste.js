function lastDigit(as) {
    const tam = as.length

    if ((as[0] == false && as[1] == false && tam == 2) || tam === 0) {
        return 1
    }

    var listaDeNumeros = Array.from({tam})

    for(let i = tam - 1; i >= 0; i--) {
        let splitado = as[i].toString().charAt(as[i].toString().length - 1);

        listaDeNumeros.push(BigInt(splitado))
    }

    const finalValue = listaDeNumeros.reduce((ac, at) => at ** ac);

    return finalValue.toString().charAt(finalValue.toString().length - 1);
}


console.log(lastDigit([]))                            // 1
console.log(lastDigit([0, 0]))                        // 1
console.log(lastDigit([0, 0, 0]))                     // 0
console.log(lastDigit([1, 2]))                        // 1
console.log(lastDigit([3, 4, 5]))                     // 1
console.log(lastDigit([3, 4, 2]))                     // 1
console.log(lastDigit([4, 3, 6]))                     // 4
console.log(lastDigit([2, 2, 2, 0]))                  // 4
console.log(lastDigit([123232, 694022, 140249]))      // 6
console.log(lastDigit([1, 0, 0, 1, 2, 1, 0]))         // 1
console.log(lastDigit([1]))         // 1
console.log(lastDigit([164434,125254,7548,644931,335800,932614,240982,765997,225551]))         // 6

console.log(lastDigit([7, 6, 21])) // 1
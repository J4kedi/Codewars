function lastDigit(numbers) {
    const tam = numbers.length

    if (tam === 0) {
        return 1
    }

    if (tam === 1) {
        return numbers[0]
    }

    numbers.reverse()

    var expoente = numbers[0].toString().slice(-1)
    var base = numbers[1].toString().slice(-1)
    expoente = base ** isSix(expoente)

    for (let i = 2; i < tam; i++) {
        
        expoente = numbers[i].toString().slice(-1) ** isSix(expoente)
    }

    return expoente.toString().slice(-1);
}

function isSix(expo) {
    if(expo.toString().slice(-1) == 6) {
        return 8
    } else {
        return expo.toString().slice(-1)
    }
}

console.log(lastDigit([2, 2, 2, 0]))                  // 4

console.log(lastDigit([7, 6, 21]))                    // 1
console.log(lastDigit([123232, 694022, 140249]))      // 6
console.log(lastDigit([]))                            // 1
console.log(lastDigit([0, 0]))                        // 1
console.log(lastDigit([0, 0, 0]))                     // 0
console.log(lastDigit([1, 2]))                        // 1
console.log(lastDigit([3, 4, 5]))                     // 1
console.log(lastDigit([3, 4, 2]))                     // 1
console.log(lastDigit([4, 3, 6]))                     // 4
console.log(lastDigit([1, 0, 0, 1, 2, 1, 0]))         // 1
console.log(lastDigit([1]))                           // 1
console.log(lastDigit([164434, 125254, 7548, 644931, 335800, 932614, 240982, 765997, 225551]))         // 6
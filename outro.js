
// Calcula o resultado de (7^(6^21))

let result = (BigInt(6) ** BigInt(21))
let resultado = BigInt(7) ** BigInt(result.toString().slice(-2));

console.log(BigInt(result.toString().slice(-2)))

// Obtém apenas o último dígito
let ultimoDigito = resultado.toString().slice(-1);

console.log(ultimoDigito.toString());

let expo = 6 ** 21

let coisa = expo.toString().slice(-2)

let reasdas = 7 ** coisa

console.log(reasdas % 10)

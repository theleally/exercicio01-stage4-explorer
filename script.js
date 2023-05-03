// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

// Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

const sum = (number1, number2) => {
  let result = number1 + number2;
  return `A soma é: ${result}`;
}

const sub = (number1, number2) => {
  let result = number1 - number2;
  return `A subtração é: ${result}`;
}

const multi = (number1, number2) => {
  let result = number1 * number2;
  return `A multiplicação é: ${result}`;
}

const div = (number1, number2) => {
  let result = number1 / number2;
  return `A divisão é: ${result}`;
}

const divRest = (number1, number2) => {
  let result = number1 % number2;
  return `O resto da divisão é: ${result}`;
}

const parOdd = (number1, number2) => {
  let result = number1 + number2;
  if (result % 2 === 0) {
    return `A soma dos dois números é par`;
  } else {
    return `A soma dos dois números é ímpar`;
  }
}

const equalOrDiferent = (number1, number2) => {
  if (number1 === number2) {
    return `Os dois números são iguais`;
  } else {
    return `Os dois números são diferentes`;
  }
}

alert(sum(numberOne, numberTwo));
alert(sub(numberOne, numberTwo));
alert(multi(numberOne, numberTwo));
alert(div(numberOne, numberTwo));
alert(divRest(numberOne, numberTwo));
alert(parOdd(numberOne, numberTwo));
alert(equalOrDiferent(numberOne, numberTwo));

// console.log(sum(numberOne, numberTwo));
// console.log(sub(numberOne, numberTwo));
// console.log(multi(numberOne, numberTwo));
// console.log(div(numberOne, numberTwo));
// console.log(divRest(numberOne, numberTwo));
// console.log(parOdd(numberOne, numberTwo));
// console.log(equalOrDiferent(numberOne, numberTwo));

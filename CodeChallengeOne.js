const numPrompt = prompt("Por favor ingrese una serie de números que se encuentren en el rango del 1 hasta el 100:");
const numbersArr = numPrompt.split(" ");
const numbersInt = [];

for (let i = 0; i < numbersArr.length; i++) {
  const number = parseInt(parseFloat(numbersArr[i].trim()));
  if (!isNaN(number)) {
    numbersInt.push(number);
  }
}

let arr = numbersInt
let numberS = 6

let newList = deleteNumber(arr, numberS);

function deleteNumber(arr, num) {
  let newList = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!String(element).includes(String(num))) {
      newList.push(element);
    } else {
      for (let j = 0; j < String(element).length; j++) {
        let digit = Number(String(element)[j]);
        if (digit !== num) {
          newList.push(digit);
        }
      }
    }
  }
  return newList.reverse();
}

console.log(numbersInt, " > ", newList)

function main() {
  // Practice Creating Variables

  // const numberOfCupsOfCoffee = 1
  // const fullName = 'Karl Frick'
  // console.log(
  //   `${fullName} drinks about ${numberOfCupsOfCoffee} cup[s] of coffee per day`
  // )
  // const aboutMe = {
  //   fullName: 'Karl Frick',
  //   luckyNumber: 5,
  //   favoriteMovies: ['Tenet', 'King Kong', 'Mortal Kombat'],
  // }
  // Practice Getting Input From the User

  // let userName = prompt('What is your name')
  // console.log(`Welcome to JavaScript, ${userName}`)

  // Converting String Input Into Numbers

  // const firstOperand = parseFloat(window.prompt('Input a number'))
  // const secondOperand = parseFloat(window.prompt('Input another number'))

  // Doing Math

  // const sum = firstOperand + secondOperand
  // const difference = secondOperand - firstOperand
  // const product = firstOperand * secondOperand
  // const quotient = secondOperand / firstOperand
  // const remainder = firstOperand % secondOperand

  // console.log(`${firstOperand} + ${secondOperand} = ${sum}`)
  // console.log(`${secondOperand} - ${firstOperand} = ${difference}`)
  // console.log(`${firstOperand} * ${secondOperand} = ${product}`)
  // console.log(`${secondOperand} / ${firstOperand} = ${quotient}`)
  // console.log(`${firstOperand} % ${secondOperand} = ${remainder}`)

  // Using numbersays
  const numbers = [
    34239,
    31679,
    23981,
    36377,
    47385,
    47704,
    15314,
    44937,
    27521,
    39219,
    42236,
    38056,
    43773,
    40318,
    28259,
    41991,
    27948,
    40649,
    40315,
    19403,
    22580,
    30818,
    31693,
    21938,
    10205,
    40271,
    44739,
    45459,
    47399,
    17591,
    21254,
    35183,
    21753,
    39525,
    45962,
    12329,
    30639,
    37237,
    22974,
    24141,
    19263,
    34189,
    46486,
    21306,
    44709,
    18659,
    17423,
    42895,
    11962,
    10259,
    12497,
    49822,
    24108,
    10619,
    26003,
    27157,
    47337,
    48557,
    23809,
    18900,
    46638,
    34767,
    17262,
    20873,
    31532,
    47880,
    36463,
    35953,
    42428,
    12433,
    49436,
    25710,
    10575,
    48776,
    33086,
    28888,
    11673,
    16053,
    49199,
    13325,
    35255,
    18632,
    37347,
    49312,
    35960,
    29102,
    47774,
    16104,
    46150,
    12768,
    28693,
    46891,
    11843,
    33186,
    17325,
    15301,
    45592,
    21260,
    26384,
    21360,
  ]
  // find the smallest number
  let smallest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
  }
  // console.log(smallest)
  // console.log(Math.min(...numbers))

  // find the largest number in numbers
  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
  }
  // console.log(largest)
  // console.log(Math.max(...numbers))

  // add up the entire array of numbers
  let arraySum = 0
  for (let i = 0; i < numbers.length; i++) {
    arraySum += numbers[i]
  }
  // console.log(arraySum)

  // find the average of the array numbers
  // let arraySum = 0
  // for (let i = 0; i < numbers.length; i++) {
  //   arraySum += numbers[i]
  // }
  average = arraySum / numbers.length
  // console.log(average)

  // Create an object called stats with the following properties
  const stats = {
    smallest: smallest,
    largest: largest,
    sum: arraySum,
    average: average,
  }
  console.log(stats)
}

document.addEventListener('DOMContentLoaded', main)

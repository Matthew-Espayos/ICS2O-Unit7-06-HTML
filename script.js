// Creating Variables.
const age = 15
let guess = 0
// Asking the user to guess my age.
do {
  guess = prompt('Guess my age')
  if (guess < age) {
    alert('You guesses too low, try again.')
  } else if (guess > age) {
    alert('You guessed too high, try again.')
  } else if (guess === age) {
    alert('You got it right!')
  } 
} while (guess !== age)

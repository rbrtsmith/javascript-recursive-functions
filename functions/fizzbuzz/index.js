function fizzBuzz(num) {
  let str = ''

  if (!Number.isInteger(num)) {
    return 'input must be a whole number'
  }

  if (!num) {
    return `${num}\n`
  }

  if (!(num % 3)) {
    str += 'fizz'
  }

  if (!(num % 5)) {
    str += 'buzz'
  }

  return fizzBuzz(num -1) + (str ? str : num)
}

export default fizzBuzz

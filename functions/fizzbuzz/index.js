function fizzBuzz(num) {
  if (!Number.isInteger(num)) {
    return 'input must be a whole number'
  }
  if (!num) {
    return `${num}\n`
  }

  let str = ''

  if (!(num % 3)) {
    str += 'fizz'
  }

  if (!(num % 5)) {
    str += 'buzz'
  }

  str = str ? ` - ${str}` : str

  return fizzBuzz(num -1) + `${num}${str}\n`
}

export default fizzBuzz

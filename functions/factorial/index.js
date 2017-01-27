function factorial(num) {
  if (num < 0 || typeof num !== 'number') {
    return 'You must enter a positive number'
  }

  return num < 1
    ? 1
    : num * factorial(num - 1)
}

export default factorial

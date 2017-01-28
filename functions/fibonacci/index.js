function fibonacci(num) {
  if (typeof num !== 'number' || num < 1) {
    return 'You must enter a positive number'
  }

  return num <= 2
    ? 1
    : fibonacci(num - 1) + fibonacci(num - 2)
}

export default fibonacci
